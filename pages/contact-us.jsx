import React from "react";
import Head from "next/head";
import Home from "../components/home";

function contactUs() {
  return (
    <Home>
      <Head>
        <title>Contact Us</title>
       
      </Head>
      <h1>Contact Us </h1>

<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdLcNZQHmdd2BEVNQvdWQI2dZTmZMXqk0t2kjUUWJ-FJIlIVg/viewform?embedded=true" width="640" height="1172" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
      <h4> Urgent?</h4>
      <p>
        Just shoot email to{" "}
        <a href="mailto:mubashirhasan716@gmail.com">founder</a>
      </p>
      <h3>
        {" "}
        <a href="https://short-nner.vercel.app/">Back to Site</a>
      </h3>
    </Home>
  );
}

export default contactUs;
