import React from "react";
import Head from "next/head";
import Home from "../components/home";
import Link from "next/link";

function main() {
    return (
        <Home>
            <Head>
                <title> Short Shortnner Blog </title>{" "}
            </Head>{" "}
            <img src={'https://shortnner.tech/9EmJ7KUB8'}/>
            <h3> Welcome to the place on web where you can find our blogs </h3>{" "}
            <h4> A product of Hasan </h4> <h1> Our Blogs </h1>{" "}
            <h3>
                <Link href="short-shortnner/"> Introducing Short Shortnner </Link>{" "}
            </h3>
               <h3>
                <Link href="why/">Why Us? </Link>{" "}
            </h3>
            <h3>
                <Link href="pricing/"> Short Shortnner Pricing </Link>{" "}
            </h3>
            <h3>
                <Link href="contact-us/"> Contact Us </Link>{" "}
            </h3>{" "}
            <h3>
                <Link href="feedback/"> Give Us Feedback </Link>{" "}
            </h3>{" "}
            <h3>
                <Link href="newsletter/"> Subscribe to our newsletter </Link>{" "}
            </h3>{" "}
            <h3>
                <Link href="pro/">Shortnner Business Pro</Link>{" "}
            </h3>
            <h3>
                <Link href="privacy/">Our Privacy Policy</Link>{" "}
            </h3>
            <h3>
                <Link href="terms/">Our Terms & Conditions</Link>{" "}
            </h3>
        </Home>
    );
}


export default main;
