import { Avatar, Text, Box, Flex, Circle } from "@chakra-ui/react";

export const NetworkParticipant = () => {
  return (
    <Flex my="30px" w="100%" h="100%">
      <Avatar
        src="https://static.nftgo.io/asset/metadata/b3b3245cfb2dcab712c67b2c8b3bc08a.png"
        mr="20px"
      />
      <Text mt="10px" variant="h2">
        shawn.eth
      </Text>
      <Circle bg="secondary" size="15px" mt="17px" ml="35px" fontSize="0.6rem">
        1
      </Circle>
    </Flex>
  );
};
