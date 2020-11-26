import React from "react";
import Head from "next/head";
import Home from "../components/home.jsx";

function pricing() {
  return (
    <Home>
      <Head>
        <title>Pricing</title>
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
      <h1>Pricing of Short Shortnner</h1>
      <h2>Free forever</h2>
      <h4>Seriously?</h4>
      <p>
        Yes, Short Shortnner is the first world-class URL Shortener which
        provides premium URL Shortening for free.
      </p>
      <p>So, what are you waiting for? Get started for free!</p>
      <h3>
        {" "}
        <a href="https://short-shortnner.vercel.app/">Back to Site</a>
      </h3>
    </Home>
  );
}

export default pricing;
