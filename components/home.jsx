import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";

const name = "Short Shortnner";
export const siteTitle = "Blog Home";

export default function Home({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            {/**
            * 
            <img
              src="/images/brand.png"
              className={`${styles.headerHomeImage} ${utilStyles.borderCircle}`}
              alt={name}
            />
            */}
            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            <Link href="main/">
              <a>
                {/**
               * 
                <img
                  src="/images/brand.png"
                  className={`${styles.headerImage} ${utilStyles.borderCircle}`}
                  alt={name}
                  height="400px"
                  width="500px"
                />
               */}
              </a>
            </Link>
            <h2 className={utilStyles.headingLg}>
              <Link href="main/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← See our other blogs</a>
          </Link>
          <p>
            We know that this blog isn't as good looking as it should be <br />{" "}
            we will fix it soon!
          </p>
        </div>
      )}
    </div>
  );
}
