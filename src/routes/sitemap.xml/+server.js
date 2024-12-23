import client from "$lib/sanityClient.js";
import groq from "groq";

const website = "https://academy.timechainlabs.io/";
const pages = [
  { route: "/", priority: 1.0 },
  { route: "/blogs", priority: 0.8 },
  { route: "/registration", priority: 0.8 },
  { route: "/registerdone", priority: 0.4 },
  { route: "/privacy-policy", priority: 0.6 },
  { route: "/terms-and-condition", priority: 0.6 },
];

export async function GET() {
  let posts = [];

  try {
    posts =
      await client.fetch(groq`*[_type == "blogs"]  | order(_createdAt asc) {
		slug,
		doc_type,
		_updatedAt
	}`);
  } catch (error) {
    console.error("Error fetching posts:", error);
  }

  let solutions = [];

  try {
    solutions = await client.fetch(groq`*[_type == "sector"] {
		sector_name,
		_updatedAt
	}`);
  } catch (error) {
    console.error("Error fetching sector solutions:", error);
  }

  let case_studies = [];

  try {
    case_studies =
      await client.fetch(groq`*[_type == "case_studies"]  | order(_createdAt asc) {
		slug,
		_updatedAt
	}`);
  } catch (error) {
    console.error("Error fetching case_studies:", error);
  }

  const body = generateSitemap(posts, solutions, case_studies, pages, website);
  const response = new Response(body, {
    headers: {
      "Cache-Control": "max-age=0, s-maxage=3600",
      "Content-Type": "application/xml",
    },
  });
  return response;
}

const generateSitemap = (
  posts,
  solutions,
  case_studies,
  pages,
  website
) => `<?xml version="1.0" encoding="UTF-8" ?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9 http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
    ${pages
      .map(
        ({ route, priority }) => `
    <url>
        <loc>${website}${route}</loc>
        <changefreq>weekly</changefreq>
        <priority>${priority}</priority>
    </url>
    `
      )
      .join("")}
    ${posts
      .map(
        ({ slug, _updatedAt, doc_type }) => `
    <url>
        <loc>${website}/${doc_type}/${slug.current}</loc>
        <lastmod>${_updatedAt}</lastmod>
        <priority>0.7</priority>
    </url>
    `
      )
      .join("")}
    ${solutions
      .map(
        ({ sector_name, _updatedAt }) => `
    <url>
        <loc>${website}/solutions/${sector_name}</loc>
        <lastmod>${_updatedAt}</lastmod>
        <priority>0.7</priority>
    </url>
    `
      )
      .join("")}
    ${case_studies
      .map(
        ({ slug, _updatedAt }) => `
    <url>
        <loc>${website}/case-study/${slug.current}</loc>
        <lastmod>${_updatedAt}</lastmod>
        <priority>0.7</priority>
    </url>
    `
      )
      .join("")}
</urlset>`;
