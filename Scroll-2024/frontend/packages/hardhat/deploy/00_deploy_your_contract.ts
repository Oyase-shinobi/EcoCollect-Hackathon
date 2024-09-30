import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";
import { Contract } from "ethers";

const deployContracts: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployer } = await hre.getNamedAccounts();
  const { deploy } = hre.deployments;

  // Addresses for the admin and receiver
  const admin = "0x186a761645f2A264ad0A655Fb632Ca99150803A9";
  const receiver = "0x40feacdeee6f017fA2Bc1a8FB38b393Cf9022d71";

  // Deploy OGToken contract
  const ogTokenDeployment = await deploy("OGToken", {
    from: deployer,
    args: [], // Add any constructor arguments if needed for OGToken
    log: true,
    autoMine: true,
  });

  // Check that OGToken is deployed and capture the address
  const ogTokenAddress = ogTokenDeployment.address;
  if (!ogTokenAddress) {
    throw new Error("OGToken deployment failed, address is undefined.");
  }

  console.log("✅ OGToken deployed at:", ogTokenAddress);

  // Deploy TrustBazaar contract with the constructor arguments
  await deploy("TrustBazaar", {
    from: deployer,
    args: [admin, receiver, ogTokenAddress], // Pass in the admin, receiver, and OGToken address
    log: true,
    autoMine: true,
  });

  const trustBazaar = await hre.ethers.getContract<Contract>("TrustBazaar", deployer);
  console.log("✅ TrustBazaar deployed at:", trustBazaar.address);
};

export default deployContracts;

deployContracts.tags = ["OGToken", "TrustBazaar"];
