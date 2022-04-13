import { Avatar, Text, Flex, Circle, LinkBox } from "@chakra-ui/react"
import { useAdaptivityContext } from "@meta/hooks"
import Link from "next/link"

export const NetworkParticipant = () => {
    const isSmallScreen = useAdaptivityContext()
    return (
        <Link passHref href='https://google.com'>

            <LinkBox display='flex' my="30px" cursor="pointer" w="100%" h="100%" sx={{
                "_hover": {
                    bg: "bg1"
                }
            }} borderRadius="24px">
            <Avatar
                src="https://static.nftgo.io/asset/metadata/b3b3245cfb2dcab712c67b2c8b3bc08a.png"
                mr="20px"
                size='md'
            />
            {isSmallScreen ? null : 
            <>
                <Text mt="10px" variant="h2">
                    shawn.eth
                </Text>
                <Circle
                    bg="secondary"
                    size="15px"
                    mt="17px"
                    ml="35px"
                    fontSize="0.6rem"
                >
                    1
                </Circle>
            </>
        }
    </LinkBox>
        </Link>
    )
}
