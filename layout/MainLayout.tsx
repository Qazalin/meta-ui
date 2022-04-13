import { Box } from "@chakra-ui/react"
import React from "react"
import { Navbar, Sidebar } from "@meta/components"
import { useAdaptivityContext } from "@meta/hooks"

type Props = {
    children?: React.ReactNode
}

export const MainLayout: React.FC<Props> = ({ children }) => {
    const isSmallScreen = useAdaptivityContext()
    const Sidebarwidth = isSmallScreen ? "100px" : "300px"
    return (
        <Box w="100vw" h="100vh">
            <Box
                position="absolute"
                top="0"
                w={"300px"}
                right={0}
                ml={Sidebarwidth}
                mr={`calc(${Sidebarwidth} / 1.5)`}
                h="100px"
            >
                <Navbar />
            </Box>
            <Box w="100%" h="calc(100vh - 100px)">
                {children}
            </Box>
            <Box position="absolute" top="0" width={Sidebarwidth} left="0">
                <Sidebar />
            </Box>
        </Box>
    )
}
