import { Box, Center, Heading, Text, useColorMode } from "@chakra-ui/react";

export const Hero = () => {
  const { colorMode } = useColorMode();
  return (
    <Center>
      <Text
        bgGradient={
          colorMode === "dark"
            ? "linear(to-b, #35FBFD, #51517C)"
            : "linear(to-b, #1A2980, #26D0CE)"
        }
        variant="heading"
        bgClip="text"
      >
        a network of owners
      </Text>
    </Center>
  );
};
