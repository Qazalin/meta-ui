import { AppLayout } from "@meta/layout";
import { Box } from "@chakra-ui/react";
import { OnboardingPage } from "@meta/components";
import { ReactElement } from "react";

const App = () => {
  return (
    <Box w="100%" h="100%" overflow="hidden">
      <Box marginLeft="250px"></Box>
    </Box>
  );
};
export default App;

App.getLayout = function getLayout(app: ReactElement) {
  return <AppLayout>{app}</AppLayout>;
};
