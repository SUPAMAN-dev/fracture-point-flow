import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.24",
  networks: {
    flowTestnet: {
      url: "https://testnet.evm.nodes.onflow.org",
      accounts: [process.env.PRIVATE_KEY as string],
      gas: 5_000_000
    }
  }
};

export default config;
