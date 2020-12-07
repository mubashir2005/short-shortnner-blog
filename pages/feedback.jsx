import React from "react";
import Head from "next/head";
import Home from "../components/home";

function feedback() {
  return (
    <Home>
      <Head>
        <title>Feedback</title>
       
      </Head>
      <h1>Let us know how we are doing.</h1>

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSehDuRLfk3-iZfFVlklfsj9u-nq4ihQbAR5_g4YQsNvnxSQTA/viewform?embedded=true" width="640" height="1355" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
 
      <h3>
        {" "}
        <a href="https://short-nner.vercel.app/">Back to Site</a>
      </h3>
    </Home>
  );
}

export default feedback;
