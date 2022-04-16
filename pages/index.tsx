import { Box, Text } from "@chakra-ui/react";
import { ReactElement } from "react";
import { LandingLayout } from "@meta/layout";
import { Hero } from "@meta/components/Hero";

const Landing = () => {
  return (
    <Box w="100%" h="100%" overflow="hidden">
      <Hero />
    </Box>
  );
};

export default Landing;

Landing.getLayout = function getLayout(content: ReactElement) {
  return <LandingLayout>{content}</LandingLayout>;
};
