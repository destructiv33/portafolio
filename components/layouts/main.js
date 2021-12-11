import Head from "next/head";
import NavBar from "../navbar";
import { Box, Container } from "@chakra-ui/react";
import VoxelComputer from "../voxel-computer";

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>destructive - Portafolio</title>
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="description" content="Mi portafolio" />
        <meta name="author" content="Daniel Ramirez" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@destructiv33" />
        <meta name="twitter:creator" content="@destructiv33" />
        <meta property="og:site_name" content="destructive's Homepage" />
        <meta property="og:type" content="website" />
      </Head>
      <NavBar path={router.asPath} />
      <Container maxW="container.md" pt={14}>
        <VoxelComputer />

        {children}
      </Container>
    </Box>
  );
};

export default Main;
