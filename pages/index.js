import React from "react";
import Head from "next/head";
import Home from "../components/home";
import Link from "next/link";

function main() {
  return (
    <Home>
      <Head>
        <title>Short Shortnner Blog</title>

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-E8TDR0NNZV"
        ></script>
        <script>
          window.dataLayer = window.dataLayer || []; function gtag()
          {dataLayer.push(arguments)}
          gtag('js', new Date()); gtag('config', 'G-E8TDR0NNZV');
        </script>
      </Head>
      <h3>Welcome to the place on web where you can find our blogs</h3>
      <h4>We are Short Shortnner</h4>
      <h1>Our Blogs</h1>
      <h3>
        {" "}
        <Link href="short-shortnner/">Introducing Short Shortnner</Link>
      </h3>

      <h3>
        {" "}
        <Link href="pricing/">Short Shortnner Pricing</Link>
      </h3>

      <h3>
        {" "}
        <Link href="contact-us/">Contact Us</Link>
      </h3>
      <h3>
        {" "}
        <Link href="newsletter/">Subscribe to our newsletter</Link>
      </h3>
      <h3>
        {" "}
        <Link href="donation/">Working on our donation page</Link>
      </h3>
      <h3>
        {" "}
        <Link href="account/">What about my account?</Link>
      </h3>
    </Home>
  );
}

export default main;
