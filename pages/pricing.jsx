import React from "react";
import Head from "next/head";
import Home from "../components/home.jsx";

function pricing() {
  return (
    <Home>
      <Head>
        <title>Pricing</title>
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
        <a href="https://shortnner.tech/">Back to Site</a>
      </h3>
      <br/>
      <br/>
      <br/>
      <br/>
      <h4>We're planning to make a Shortnner Pro which will be a paid solution to trcaking URLs or tracking by URLs.</h4>
      <p>Our free version will always remain free without limits.</p>  
    </Home>
  );
}

export default pricing;
