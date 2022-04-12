import { Box, Button, Text } from "@chakra-ui/react";
import { IoMdArrowDropdown } from "react-icons/io";
import { NetworkParticipant } from "./NetworkParticipant";

export const Network = () => {
  return (
    <Box mx="20px">
      <Text
        mb="10px"
        color="gray.500"
        fontWeight="bold"
        textTransform="uppercase"
        fontSize="0.9rem"
      >
        My network
      </Text>
      <Box bg="bg0" py="4px" pl="15px" borderRadius={"20px"}>
        <NetworkParticipant />
        <NetworkParticipant />
        <NetworkParticipant />
        <NetworkParticipant />
        <Button
          leftIcon={<IoMdArrowDropdown />}
          bg="primary"
          mb="10px"
          ml="10%"
        >
          All messages
        </Button>
      </Box>
    </Box>
  );
};
