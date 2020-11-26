import React from "react";
import Home from "../components/home";
import Layout from "../components/layout";
import Head from "next/head";

export default function componentName() {
  return (
    <Home>
      <Head>
        <title>Donations Page coming soon</title>

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
      <h3>We're not accepting donations right now.</h3>
      <h4>But will accept soon.</h4>
      <p>Thank you for visiting our donations page.</p>
    </Home>
  );
}
