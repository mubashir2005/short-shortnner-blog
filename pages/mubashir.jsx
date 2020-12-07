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
          <a href="https://short-shortnner.vercel.app/">Short Shortnner</a>
        </p>
        <h4>
          Go to{" "}
          <a href="https://short-shortnner-blog.vercel.app/">
            short shortnner blog
          </a>
        </h4>
      </section>
    </Layout>
  );
}
