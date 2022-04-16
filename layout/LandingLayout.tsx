import { Box } from "@chakra-ui/react";
import React from "react";
import { LayoutProps } from "./types";
import { Navbar } from "@meta/components";
import { SharedLayout } from "./SharedLayout";

export const LandingLayout: React.FC<LayoutProps> = ({ children }) => {
  return <SharedLayout>{children}</SharedLayout>;
};
