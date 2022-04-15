// Handles the errors that can happen during the link process
import { walletLink } from "./walletLink"

export async function linkControlFlow() {
    try {
        await walletLink()
    } catch (e: unknown) {
        if (e instanceof Error) {
            switch (e.message) {
                case "Link Window Closed":
                    console.log("early close")
                case "Can't Open Window":
                    console.log("Please give permission for pop-up window")
                case "No wallet detected":
                    console.log("Get a wallet")
            }
        } else throw new Error(`${e}`) // handeling not Error type errors, monsters
    }
}
