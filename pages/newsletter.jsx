import React from "react";
import Home from "../components/home";
import Head from "next/head";

function newsletter() {
  return (
    <Home>
      <Head>
        <title>Newsletter</title>
      </Head>

      <h3>Sign up for our Newsletter</h3>
<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdY3S-JHV4HKRTqq0-A-jiOrC5n0cSHrMBU_ZaCXnvFK1uJOw/viewform?embedded=true" width="640" height="975" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    </Home>
  );
}

export default newsletter;
