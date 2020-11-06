import React from "react";
import Head from "next/head";
import Home from "../components/home";

function ShortShortner() {
  return (
    <Home>
      <Head>
        <title>Short Shortnner</title>
      </Head>
      <h1>Introducing Short Shortnner</h1>
      <p>
        Short Shortnner is a free URL shortener that provides everything you
        look for in URL shorteners like bitly while not charging you anything
        for it. Everyone has the right to get links for free whether it be short
        or long. So why pay for it?
      </p>
      <p>
        At Short Shortnner we provide you free world-class URL shortening. We
        believe that everyone should get URL shortening for free.
      </p>
      <h2>So, what are you waiting for? Get started for free!</h2>
      <h3>
        {" "}
        <a href="https://short-shortnner.vercel.app/">Back to Site</a>
      </h3>
    </Home>
  );
}

export default ShortShortner;
