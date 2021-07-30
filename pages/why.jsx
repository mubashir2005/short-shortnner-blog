import React from "react";
import Home from "../components/home";
import Layout from "../components/layout";
import Head from "next/head";

export default function componentName() {
  return (
    <Home>
      <Head>
        <title>Why Short Shortnner?</title>

      </Head>
      <h1>Explained in few lines</h1>
      <h3>The privatest URL Shortener ever built. We don't store any information about you.</h3>
      <h4>Shortened URLs without limits. 1000 clicks or a million clicks we don't put limits </h4>
      <p>Compared to us, services like Bitly and Rebrandly have limited URL Shortening.
      Ten clicks or 100 clicks after that they'll ask you to upgrade to pro
      <br/> And they only allow to shorten limited URLs but we don't have any such limits.</p>
    </Home>
  );
}
