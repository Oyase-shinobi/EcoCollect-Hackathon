import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const LockModule = buildModule("LockModule", (m) => {

  const token = m.contract("OGToken");
  const tBazaar = m.contract("TrustBazaar");

  return { token, tBazaar };
});

export default LockModule;
