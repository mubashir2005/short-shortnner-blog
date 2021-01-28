import React from 'react'
import Home from "../components/home";
import Head from "next/head";

function Privacy() {
    return (
        <Home>
            <Head>
                <title>Privacy Policy</title>
            </Head>
            <h1>Privacy Policy of Short Shortnner</h1>
            <iframe src="https://docs.google.com/document/d/e/2PACX-1vSqr7lg3IoicvB2mzT9xkNHvXeC3PH16NK3IG4Rd8qEPtaRErSPUY7OQDS7UtudUTASW9g6ZCOZ-NaI/pub?embedded=true" width='600' height={'500'}></iframe>

        </Home>
    )
}

export default Privacy;
