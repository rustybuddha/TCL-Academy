import imageUrlBuilder from "@sanity/image-url";

import client from "./sanityClient";

const builder = imageUrlBuilder(client);

export function urlFor(source) {
  if (source?.asset) {
    return builder.image(source).url();
  }
  return "";
}