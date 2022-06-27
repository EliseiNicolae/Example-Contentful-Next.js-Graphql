import client from "../apollo-client";
import { getSlugsQuery } from "../graphql/queries";

export const getSlugs = async () => {
  const { data } = await client.query({
    query: getSlugsQuery,
  });
  const slugs = data.blogPostCollection.items;
  return {
    slugs,
  };
};
