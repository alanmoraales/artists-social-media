import Head from "next/head";
import type { NextPage } from "next";
import { Heading } from "@chakra-ui/react";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Artist Social Media</title>
        <meta name="description" content="A social media for artists" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading>Artists Social Media</Heading>
    </div>
  );
};

export default Home;
