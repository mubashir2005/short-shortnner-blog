import React from "react";
import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Image from "next/image";
import Brand from "./brand.gif";

const name = "Short Shortnner";
export const siteTitle = "Blog Home";

export default function Home({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="./logo.svg" />
        <meta name="description" content="Blog of Short Shortnner" />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="./logo.svg" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <Image src={Brand} alt={name} height={"300px"} width={"400px"} />

            <h1 className={utilStyles.heading2Xl}>{name}</h1>
          </>
        ) : (
          <>
            {/* <a>
               <Image
              src={logo}
              alt={name}
              width='300px'
              height='400px'
            />
              </a>
               */}

            <h2 className={utilStyles.headingLg}>
              <a className={utilStyles.colorInherit} href={"#"}>
                <img src={Brand} height={"300px"} width={"400px"} />
              </a>
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
