import { Box } from "@chakra-ui/react";
import React from "react";
import { LayoutProps } from "./types";
import { Navbar } from "@meta/components";

export const SharedLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box w="100vw" h="100vh">
      <Box w="100%" h="100px">
        <Navbar />
      </Box>
      <Box h="100%" w="100%">
        {children}
      </Box>
    </Box>
  );
};
