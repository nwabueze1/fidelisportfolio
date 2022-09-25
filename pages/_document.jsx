/* eslint-disable @next/next/no-script-in-document */
/* eslint-disable @next/next/no-css-tags */
import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
import React from "react";

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charset="UTF-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta content="Fidelis Okeke Portfolio" name="description" />
        <meta name="version" content="1.1.0" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />

        <link href="assets/libs/tiny-slider/tiny-slider.css" rel="stylesheet" />
        <link
          href="assets/libs/@iconscout/unicons/css/line.css"
          type="text/css"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="assets/css/icons.min.css" />
        <link rel="stylesheet" href="assets/css/tailwind.min.css" />
      </Head>
      <body>
        <Main></Main>
        <NextScript></NextScript>
      </body>
    </Html>
  );
}
