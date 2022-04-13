import type { AppProps } from "next/app";
import "@fontsource/lato";
import "@fontsource/raleway";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "@meta/ui";
import { MainLayout } from "@meta/layout/MainLayout";
import AdaptivityProvider from "@meta/providers/AdaptivityProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
        <AdaptivityProvider>
            <MainLayout>
                <Component {...pageProps} />
            </MainLayout>
        </AdaptivityProvider>
    </ChakraProvider>
  );
}

export default MyApp;
