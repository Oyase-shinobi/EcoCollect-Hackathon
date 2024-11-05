import {
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre from "hardhat";

describe("Lock", function () {
  async function deployToken() {
    const [owner, otherAccount] = await hre.ethers.getSigners();

    const Token = await hre.ethers.getContractFactory("OGToken");
    const token = await Token.deploy();

    return {token};
  }

  async function deployContract() {
    const [owner, acc1, acc2, acc3, reciever] = await hre.ethers.getSigners();
    const {token} = await loadFixture(deployToken);

    const Contract = await hre.ethers.getContractFactory("TrustBazaar");
    const contract = await Contract.deploy(
      owner,
      reciever,
      token
    );

    return {owner, acc1, acc2, acc3, reciever, token};
  }

  describe("Deployment", function () {
     
  });

  describe("Withdrawals", function () {
       
  });
});
