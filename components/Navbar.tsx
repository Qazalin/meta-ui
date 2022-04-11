import { Flex } from "@chakra-ui/react";
import { DarkModeSwitch } from "./DarkModeSwitch";

export const Navbar = () => {
  return (
    <Flex w="100%" h="100%" bg="bg1">
      <DarkModeSwitch />
    </Flex>
  );
};
