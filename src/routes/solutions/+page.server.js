import sectors from "$lib/assets/sectors.json";
import client from "$lib/sanityClient.js";
import groq from "groq";

export async function load() {
  const sectorsResult = await client.fetch(groq`
    *[_type == "sector"] {
      sector_name,
      description
    }`);

  const uniqueSectorNames = new Set();

  const { organization, industry } = sectorsResult.reduce(
    (acc, sector) => {
      if (!uniqueSectorNames.has(sector.sector_name)) {
        uniqueSectorNames.add(sector.sector_name);

        if (sectors.organization[sector.sector_name]) {
          acc.organization.push({
            ...sectors.organization[sector.sector_name],
            ...sector,
          });
        } else if (sectors.industry[sector.sector_name]) {
          acc.industry.push({
            ...sectors.industry[sector.sector_name],
            ...sector,
          });
        }
      }
      return acc;
    },
    { organization: [], industry: [] }
  );

  return {
    organization,
    industry,
  };
}
