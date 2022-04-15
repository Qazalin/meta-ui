import { Box, Button } from "@chakra-ui/react";
import {linkControlFlow} from "@meta/lib";

export const OnboardingPage = () => {
  return (
    <Box>
        <Button onClick={async() => await linkControlFlow()}>Start Exploring</Button>
    </Box>
  );
};
