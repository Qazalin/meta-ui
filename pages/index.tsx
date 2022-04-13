import { Box, Text } from "@chakra-ui/react";
import { Sidebar } from "@meta/components";
import { useWindowDimensions } from "@meta/hooks";
import type { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Box w="100%" h="100%" overflow="hidden">
      <Box marginLeft="250px">
        <Box>meta</Box>
      </Box>
      <Box position="absolute" top="0" width="300px" left="0">
        <Sidebar />
      </Box>
    </Box>
  );
};

export default Home;
