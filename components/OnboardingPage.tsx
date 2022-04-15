import { Alert, Box, Button } from "@chakra-ui/react"
import { walletLink } from "@meta/lib"
import { useState } from "react"

export const OnboardingPage = () => {
    async function linkControlFlow() {
        try {
            await walletLink()
        } catch (e: unknown) {
            if (e instanceof Error) {
                switch (e.message) {
                    case "Link Window Closed":
                        console.log("early close")
                        setLinkState(() => ({ state: "warning", msg: "CLOSE" }))
                    case "Can't Open Window":
                        console.log("Please give permission for pop-up window")
                        setLinkState(() => ({ state: "error", msg: "POPUP" }))
                    default:
                        console.log(e.message)
                }
            } else throw new Error(`${e}`) // handeling not Error type errors, monsters
        }
    }
    type LINK_STATE_TYPES = "uninitialized" | "warning" | "error" | "success"
    interface LINK_STATE {
        state: LINK_STATE_TYPES
        msg: string
    }
    const [linkState, setLinkState] = useState<LINK_STATE>({
        state: "uninitialized",
        msg: "no action detected",
    })

    return (
        <Box>
            <Button onClick={async () => await linkControlFlow()}>
                Start Exploring
            </Button>
            {linkState.state !== "uninitialized" ? (
                <Alert status={linkState.state}>{linkState.msg}</Alert>
            ) : null}
        </Box>
    )
}
