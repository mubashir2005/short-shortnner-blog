import React from 'react'
import Head from "next/head";
import Home from "../components/home";

function Terms() {
    return (
        <Home>
            <Head>
               <title>Terms of Use</title>
            </Head>
            <h1>Terms and Conditions</h1>
            <iframe src="https://docs.google.com/document/d/e/2PACX-1vQpIub1NJ8pFCg4QAmWEMT0wHRZWfZSe8HwNh_ef4iz5W9SF2n0EOYbzG5ZJ1LXQ5bYtPEKgzG4WC1v/pub?embedded=true" width={'600'} height={'500'}></iframe>
        </Home>
    )
}

export default Terms;
