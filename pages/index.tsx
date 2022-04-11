import { Box, Text } from "@chakra-ui/react";
import { Sidebar } from "@meta/components";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <Box w="100%" h="100%" overflow="hidden">
      <Box marginLeft="250px">
        <Box>meta</Box>
      </Box>
      <Box position="absolute" top="0" width="250px" left="0">
        <Sidebar />
      </Box>
    </Box>
  );
};

export default Home;
