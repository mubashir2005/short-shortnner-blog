import React from "react";
import Home from "../components/home";

function newsletter() {
  return (
    <Home>
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
