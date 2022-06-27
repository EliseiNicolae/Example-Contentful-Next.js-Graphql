import client from "../apollo-client";
import { getPostQuery } from "../graphql/queries";

export const getPost = async (slug: string) => {
  const { data } = await client.query({
    query: getPostQuery,
    variables: { slug: slug },
  });
  return {
    data: data.blogPostCollection.items[0],
  };
};
