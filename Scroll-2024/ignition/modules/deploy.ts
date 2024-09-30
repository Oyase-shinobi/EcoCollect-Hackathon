import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const LockModule = buildModule("LockModule", (m) => {

  const token = m.contract("OGToken");

  const admin = "0x186a761645f2A264ad0A655Fb632Ca99150803A9";
  const reciever = "0x40feacdeee6f017fA2Bc1a8FB38b393Cf9022d71"

  const tBazaar = m.contract("TrustBazaar", [admin, reciever, token]);

  return { token, tBazaar };
});

export default LockModule;
