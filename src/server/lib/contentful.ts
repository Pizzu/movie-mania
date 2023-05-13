import { createClient } from "contentful";
import { env } from "~/env.mjs";

export const client = createClient({
  space: env.CONTENTFUL_SPACE_ID,
  accessToken: env.CONTENTFUL_ACCESS_TOKEN,
});
