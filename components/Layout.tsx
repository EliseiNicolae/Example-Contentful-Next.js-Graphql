import Head from "next/head";

const Layout = ({ seo, children }: any) => {
  return (
    <div>
      <Head>
        <title>{seo?.title} | code-bugs.com</title>
        <meta property="title" content={seo?.title} />
        <meta name="description" content={seo?.description} />
        <meta property="og:title" content={seo?.title} />
        <meta name="og:description" content={seo?.ogDescription} />
        <meta name="keywords" content={seo?.keywords.join(", ")} />
        <link rel="icon" href="../public/images/favicon.ico" />
      </Head>
      {children}
    </div>
  );
};

export default Layout;
