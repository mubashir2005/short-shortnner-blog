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

      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSfX-q-BsBnW8nQQLrI-uVxVBrOU1DJf5A0601j4mygX5qJDiw/viewform?embedded=true"
        width="640"
        height="1204"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
      <h4>If Urgent</h4>
      <p>
        Just shoot email to{" "}
        <a href="mailto:mohammedmubashirhasan@gmail.com">founder</a>
      </p>
      <h3>
        {" "}
        <a href="https://short-shortnner.vercel.app/">Back to Site</a>
      </h3>
    </Home>
  );
}

export default contactUs;
