import { ImmutableXClient, Link } from "@imtbl/imx-sdk";
import {NETWORK} from "./CONSTANTS"


export async function walletLink() {
    const linkAddress = NETWORK === "TEST"
        ? "https://link.ropsten.x.immutable.com"
        : "https://link.x.immutable.com"
    const apiAddress = NETWORK === "TEST"
        ? "https://api.ropsten.x.immutable.com/v1"
        :  "https://api.x.immutable.com/v1"
            // Link SDK
        const link = new Link(linkAddress);

        // IMX Client
        const client = await ImmutableXClient.build({publicApiUrl: apiAddress});
    if (typeof window !== 'undefined') {
        const {address, starkPublicKey} = await link.setup({});
        localStorage.setItem("WALLET_ADDRESS", address);
        localStorage.setItem("STARK_PUBLIC_KEY", starkPublicKey);
    }
            // @ts-ignore
            const balances = await client.getBalances({user: address});
}
