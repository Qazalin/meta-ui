import { Box, Text } from "@chakra-ui/react"
import { Sidebar } from "@meta/components"
import type { NextPage } from "next"
import { useAdaptivityContext } from "@meta/hooks"

const Home: NextPage = () => {
    const isSmallScreen = useAdaptivityContext()
    return (
        <Box w="100%" h="100%" overflow="hidden">
            <Box marginLeft="250px">
                <Box>meta</Box>
            </Box>
            <Box
                position="absolute"
                top="0"
                width={isSmallScreen ? "100px" : "300px"}
                left="0"
            >
                <Sidebar />
            </Box>
        </Box>
    )
}

export default Home
