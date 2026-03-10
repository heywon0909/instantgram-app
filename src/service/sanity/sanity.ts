import { createImageUrlBuilder, SanityImageSource } from "@sanity/image-url";
import { createClient } from "next-sanity";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
  useCdn: false,
  perspective: "published",
  token: process.env.SANITY_READ_TOKEN,
});

const builder = createImageUrlBuilder(client);
// Export a function that can be used to get image URLs
export function urlFor(source: SanityImageSource) {
  return builder.image(source).width(800).url();
}

// https://myProjectId.api.sanity.io/v2021-06-07/assets/images/myDataset
export const assetsURL = `https://${process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}.api.sanity.io/v2026-03-08/assets/images/${process.env.NEXT_PUBLIC_SANITY_DATASET}`;
