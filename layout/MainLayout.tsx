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
        <Box w="100vw" h="100vh" overflow='hidden'>
            <Box w="100%" h="100px">
                <Navbar />
            </Box>
            <Box w="100%" h="calc(100vh - 100px)" borderRadius={"24px"} ml={Sidebarwidth} bg='bg0'>
                {children}
            </Box>
            <Box
                bg='red'
                position="absolute"
                top="0"
                width={Sidebarwidth}
                left="0"
                h='100%' 
            >
                <Sidebar />
            </Box>
        </Box>
    )
}
