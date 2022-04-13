import { Box, Button, Text } from "@chakra-ui/react"
import { DependantProps } from "@meta/utils"
import { IoMdArrowDropdown } from "react-icons/io"
import { NetworkParticipant } from "./NetworkParticipant"

export const Network = () => {
    return (
        <Box mx={["5px", "10px", "20px"]
}>
            <Text
                mb="10px"
                color="gray.500"
                fontWeight="bold"
                textTransform="uppercase"
                fontSize={["0.5rem", "0.6rem", "0.9rem"]}

            >
                My network
            </Text>
            <Box bg="bg0" py="4px" pl={["5px", "10px", "15px"]} borderRadius={"20px"}>
                <NetworkParticipant />
                <NetworkParticipant />
                <NetworkParticipant />
            </Box>
        </Box>
    )
}
