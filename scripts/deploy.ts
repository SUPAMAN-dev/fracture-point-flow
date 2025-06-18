import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying with:", deployer.address);

  const xpToken = await ethers.deployContract("ProofOfPlay");
  await xpToken.waitForDeployment();

  console.log("ProofOfPlay deployed to:", await xpToken.getAddress());
}

main().catch((e) => { console.error(e); process.exit(1); });
