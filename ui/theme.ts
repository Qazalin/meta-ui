import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { COLORS } from "./colors";
import { mode } from "@chakra-ui/theme-tools";
const colors = COLORS.colors;
export const theme = extendTheme({
  colors,
  styles: {
    global: (props: any) => ({
      body: {
        fontFamily: "body",
        color: mode("gray.800", "whiteAlpha.900")(props),
        bg: mode("white", "gray.800")(props),
        lineHeight: "base",
      },
    }),
  },
});
