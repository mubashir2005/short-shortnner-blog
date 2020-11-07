import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          {" "}
          Hello, I'm Mohammed Mubashir Hasan, a Full-Stack Web &React developer.
        </p>
        <p>
          I am the founder and creator of{" "}
          <a href="https://nextjs.org/learn">Short Shortnner</a>.)
        </p>
      </section>
    </Layout>
  );
}
