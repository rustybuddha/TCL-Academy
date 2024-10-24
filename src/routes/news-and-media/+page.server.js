import client from "$lib/sanityClient.js";
import { calculateMinsRead } from "$lib/utils.js";

export async function load({ params }) {
  const medias = await client.fetch(`*[_type == "medias"]`);
  let news = await client.fetch(`*[_type == "blogs" && doc_type == "news"]`);
  let featuredNews = await client.fetch(
    `*[_type == "blogs" && doc_type == "news" && featured == true]`
  );
  let featuredArticle = await client.fetch(
    `*[_type == "blogs" && doc_type == "article" && featured == true]`
  );

  news = await Promise.all(
    news.map((post) => {
      post.minsRead = calculateMinsRead(post?.content);
      return post;
    })
  );

  if (news) {
    return {
      medias,
      featuredArticle: featuredArticle[0],
      featuredNews: featuredNews[0],
      news,
    };
  }
  return {
    status: 500,
    body: new Error("Internal Server Error"),
  };
}
