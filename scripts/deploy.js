// const { ethers } = require("hardhat");

// async function main() {
//   // Deploy SimpleStorage
//   const Storage = await ethers.getContractFactory("SimpleStorage");
//   const simpleStorage = await Storage.deploy();
//   await simpleStorage.waitForDeployment();
//   console.log("SimpleStorage deployed to:", await simpleStorage.getAddress());

//   // Deploy SecureStorage
//   const SecureStorage = await ethers.getContractFactory("SecureStorage");
//   const secureStorage = await SecureStorage.deploy();
//   await secureStorage.waitForDeployment();
//   console.log("SecureStorage deployed to:", await secureStorage.getAddress());
// }

// main().catch((err) => {
//   console.error(err);
//   process.exit(1);
// });
const { ethers } = require("hardhat");

async function main() {
  const LabToken = await ethers.getContractFactory("LabToken");
  const labToken = await LabToken.deploy();
  await labToken.waitForDeployment();

  const tokenAddress = await labToken.getAddress();
  console.log("LabToken deployed to:", tokenAddress);

  const [deployer] = await ethers.getSigners();
  console.log("Deployer address:", deployer.address);

  const balance = await labToken.balanceOf(deployer.address);
  console.log("Deployer balance:", ethers.formatEther(balance), "LTK");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
