import { ImmutableXClient, Link } from "@imtbl/imx-sdk";

const NETWORK = process.env.NETWORK;

export async function walletLink() {
    let linkAddress: string
    let apiAddress: string

    switch (NETWORK) {
        case "TEST":
            // Ropsten Testnet
            linkAddress = 'https://link.ropsten.x.immutable.com';
            apiAddress = 'https://api.ropsten.x.immutable.com/v1';
        case "MAIN":
            linkAddress = "https://link.x.immutable.com";
            apiAddress = "https://api.x.immutable.com/v1";
    }
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
