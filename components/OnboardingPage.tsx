import { Box, Button } from "@chakra-ui/react";
import {walletLink} from "@meta/lib";

export const OnboardingPage = () => {
  return (
    <Box>
        <Button onClick={async() => await walletLink()}>Start Exploring</Button>
    </Box>
  );
};
