import * as React from "react";
import Head from "next/head";

export default function HeaderMetadata(): React.JSX.Element {
  return (
    <Head>
      {/* <title>Rizal Fauzi&apos;s Portfolio Website</title> */}
      <title>Rizal Fauzi | Portfolio Website</title>

      <meta
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <meta
        name="subject"
        content="Rizal Fauzi, Full Stack Developer and Web Developer"
      />
      <meta
        name="description"
        content="Hello Everyone👋 I'am Rizal Fauzi. A Web Developer and Full Stack Developer from Indonesia. This is my personal portfolio website that created using Next.js and Chakra UI"
      />
      <meta
        name="author"
        content="Rizal Fauzi"
      />

      <link
        rel="icon"
        href="/favicon.ico"
      />
    </Head>
  );
}
