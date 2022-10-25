import { createClient } from "next-sanity";
import createImageUrlBuilder from "@sanity/image-url";
export const config = {
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  token: process.env.SANITY_API_TOKEN,
  apiVersion: "2022-10-22",
  useCdn: false,
};
export const sanityClient = createClient(config);
export const urlFor = (source) => createImageUrlBuilder(config).image(source);
