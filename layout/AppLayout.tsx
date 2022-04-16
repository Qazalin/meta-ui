import { Box } from "@chakra-ui/react";
import React from "react";
import { Navbar, Sidebar } from "@meta/components";
import { useAdaptivityContext } from "@meta/hooks";
import { LayoutProps } from "./types";
import { SharedLayout } from "./SharedLayout";

export const AppLayout: React.FC<LayoutProps> = ({ children }) => {
  const isSmallScreen = useAdaptivityContext();
  const Sidebarwidth = isSmallScreen ? "100px" : "300px";
  return (
    <SharedLayout>
      <Box
        w="100%"
        h="calc(100vh - 100px)"
        borderRadius={"24px"}
        ml={Sidebarwidth}
        bg="bg0"
      >
        {children}
      </Box>
      <Box
        bg="red"
        position="absolute"
        top="0"
        width={Sidebarwidth}
        left="0"
        h="100%"
      >
        <Sidebar />
      </Box>
    </SharedLayout>
  );
};
