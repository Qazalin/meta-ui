import { extendTheme, ThemeConfig } from "@chakra-ui/react";
import { COLORS } from "./colors";
import { mode } from "@chakra-ui/theme-tools";
import { ThemeColors } from "./themeColors";
const colors = COLORS.colors;
const semanticTokens = ThemeColors.semanticTokens;
export const theme = extendTheme({
  colors,
  semanticTokens,
  styles: {
    global: (props: any) => ({
      body: {
        fontFamily: "body",
        // animation for change color mode
        transition: "background 2s",

        // ( light - dark )
        color: mode("gray.800", "whiteAlpha.900")(props),
        // bg: mode("gray.100", "gray.800")(props),
        bg: "bg0",
        lineHeight: "base",
      },
    }),
  },
});
