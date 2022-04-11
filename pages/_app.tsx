import type { AppProps } from "next/app";
import "@fontsource/lato";
import "@fontsource/raleway";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@meta/ui";
import { MainLayout } from "@meta/layout/MainLayout";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ChakraProvider>
  );
}

export default MyApp;
