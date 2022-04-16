import { Box, Text } from "@chakra-ui/react";
import { ReactElement } from "react";
import { LandingLayout } from "@meta/layout";

const Landing = () => {
  return (
    <Box w="100%" h="100%" overflow="hidden">
      Landing page
    </Box>
  );
};

export default Landing;

Landing.getLayout = function getLayout(content: ReactElement) {
  return <LandingLayout>{content}</LandingLayout>;
};
