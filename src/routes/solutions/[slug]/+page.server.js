import sectors from "$lib/assets/sectors.json";
import client from "$lib/sanityClient.js";

export async function load({ params }) {
  const slug = params.slug;

  try {
    const sectorResult = await client.fetch(
      `*[_type == "sector" && sector_name == $slug][0]`,
      {
        slug: slug,
      }
    );

    return {
      icon: sectors?.organization[slug]?.icon ?? sectors?.industry[slug]?.icon,
      theme: sectors?.organization[slug]?.theme ?? sectors?.industry[slug]?.theme,
      sector: sectorResult,
    };
  } catch (error) {
    console.error(error);
    return {
      status: 404,
      error: "Page not found",
    };
  }
}
