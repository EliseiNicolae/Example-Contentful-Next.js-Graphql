import { NextPage } from "next";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { getSlugs } from "@/services/getSlugs";
import { getPost } from "@/services/getPost";
import Layout from "@/components/Layout";

const Route: NextPage = ({ data }: any) => {
  return (
    <Layout seo={data?.seo}>
      <h1>{data?.title}</h1>
      {documentToReactComponents(data?.body.json)}
    </Layout>
  );
};

export async function getStaticProps({ params }: any) {
  const { data } = (await getPost(params.route)) || null;
  return {
    props: {
      data,
    },
  };
}

export async function getStaticPaths() {
  const { slugs } = await getSlugs();
  const paths = slugs.map((item: { slug: string }) => {
    return {
      params: {
        route: item.slug,
      },
    };
  });

  return {
    paths,
    fallback: false,
  };
}

export default Route;
