import { ImmutableXClient, Link } from "@imtbl/imx-sdk";

export async function WalletLink() {
  const linkAddress = "https://link.x.immutable.com";
  const apiAddress = "https://api.x.immutable.com/v1";

  // Ropsten Testnet
  //const linkAddress = 'https://link.ropsten.x.immutable.com';
  //const apiAddress = 'https://api.ropsten.x.immutable.com/v1';
  // Link SDK
  const link = new Link(linkAddress);

  // IMX Client
  const client = await ImmutableXClient.build({ publicApiUrl: apiAddress });
  const { address, starkPublicKey } = await link.setup({});
  localStorage.setItem("WALLET_ADDRESS", address);
  localStorage.setItem("STARK_PUBLIC_KEY", starkPublicKey);
  // @ts-ignore
  const balances = await client.getBalances({ user: address });
}
