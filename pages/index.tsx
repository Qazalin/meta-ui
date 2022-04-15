import { Box } from "@chakra-ui/react";
import type { NextPage } from "next";
import { OnboardingPage } from "@meta/components";
import {walletLink} from "@meta/lib";

const Home: NextPage = () => {
  return (
    <Box w="100%" h="100%" overflow="hidden">
      <Box marginLeft="250px">
        <OnboardingPage />
      </Box>
    </Box>
  );
};

export default Home;
