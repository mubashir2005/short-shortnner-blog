import React from "react";
import Home from "../components/home";
import Head from "next/head";

function newsletter() {
  return (
    <Home>
      <Head>
        <title>Newsletter</title>
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

      <h3>Sign up for our Newsletter</h3>
      <iframe
        src="https://docs.google.com/forms/d/e/1FAIpQLSdDInWI-9rsqe119VVQkzQTJF7LkW6knLz26VjnczAFL4jPbQ/viewform?embedded=true"
        width="640"
        height="975"
        frameborder="0"
        marginheight="0"
        marginwidth="0"
      >
        Loading…
      </iframe>
    </Home>
  );
}

export default newsletter;
