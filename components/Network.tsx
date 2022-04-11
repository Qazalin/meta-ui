import { Box, Button } from "@chakra-ui/react";
import { IoMdArrowDropdown } from "react-icons/io";
import { NetworkParticipant } from "./NetworkParticipant";

export const Network = () => {
  return (
    <Box mx="20px" bg="bg0" py="4px" pl="15px" borderRadius={"20px"}>
      <NetworkParticipant />
      <NetworkParticipant />
      <NetworkParticipant />
      <NetworkParticipant />
      <Button leftIcon={<IoMdArrowDropdown />} bg="primary" mb="10px">
        All messages
      </Button>
    </Box>
  );
};
