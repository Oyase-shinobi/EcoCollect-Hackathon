import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ContractsModule = buildModule("EcoCollectModule", (m) => {

  const name = "EcoToken";
  const symbol = "ETK";
  const initialSupply = 1000000;

  const token = m.contract("EcoToken", [name, symbol, initialSupply]);

  const contractAddr = m.contract("EcoCollect", [token]);



  return { token, contractAddr };
});

export default ContractsModule;
