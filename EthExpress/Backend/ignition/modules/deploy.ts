import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const ContractModule = buildModule("ContractModule", (m) => {

  const token = m.contract("Express");

  const admin = "0x186a761645f2A264ad0A655Fb632Ca99150803A9";
  const reciever = "0x40feacdeee6f017fA2Bc1a8FB38b393Cf9022d71"

  const ethex = m.contract("EthExpress", [admin, reciever, token]);

  return { token, ethex};
});

export default ContractModule;
