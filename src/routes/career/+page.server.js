import client from "$lib/sanityClient.js";

export async function load() {
  const openings = await client.fetch(`*[_type == "openings"]`);

  return {
    openings,
  };
}
