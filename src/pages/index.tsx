import Head from "next/head";
import Link from "next/link";
import type { NextPage } from "next";
import { Heading, Button, Grid } from "@chakra-ui/react";
import { If, Then, Else } from "react-if";
import useUserContext from "context/user";
import routes from "@constants/routes";

const Home: NextPage = () => {
  const { isLoggedIn, logoutUser, user } = useUserContext();

  return (
    <>
      <Head>
        <title>Artist Social Media</title>
        <meta name="description" content="A social media for artists" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Grid gap={8} padding={8} width="fit-content">
        <Heading>Artists Social Media</Heading>
        <If condition={isLoggedIn}>
          <Then>
            <Grid gap={4} width="fit-content">
              <Heading size="md">Hi there @{user?.username}!</Heading>
              <Button onClick={logoutUser} id="logout-button">
                Logout
              </Button>
            </Grid>
          </Then>
          <Else>
            <Link href={routes.login} passHref>
              <Button test-data="go-to-login-button" as="a">
                Login
              </Button>
            </Link>
          </Else>
        </If>
      </Grid>
    </>
  );
};

export default Home;
