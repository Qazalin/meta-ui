import { Box } from "@chakra-ui/react";
import React from "react";
import { Navbar } from "@meta/components";

type Props = {
  children?: React.ReactNode;
};

export const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <Box w="100vw" h="100vh">
      <Box w="100%" h="100px">
        <Navbar />
      </Box>
      <Box w="100%" h="calc(100vh - 100px)">
        {children}
      </Box>
    </Box>
  );
};
