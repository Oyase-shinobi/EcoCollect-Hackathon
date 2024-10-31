import {
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre, { ethers } from "hardhat";

describe("EcoCollect", function () {
  async function deployToken() {
    const [owner] = await hre.ethers.getSigners();

    const name = "EcoToken";
    const symbol = "ETK";
    const initialSupply = ethers.parseEther("1000");

    const Token = await hre.ethers.getContractFactory("EcoToken");
    const token = await Token.deploy(name, symbol, initialSupply);

    return { token };
  }

  async function deployContract() {
    const [owner] = await hre.ethers.getSigners();

    const { token } = await loadFixture(deployToken);

    const Contract = await hre.ethers.getContractFactory("EcoCollect");
    const recycle = await Contract.deploy(token);

    return { recycle, token };
  }

  describe("Company Registration and Management", function () {
    describe("registerCompany", function () {
      it("Should register a new company successfully", async () => {
        const { recycle } = await loadFixture(deployContract);
        const name = "CompanyA";
        const minWeightRequirement = 1;
        const maxPricePerKg = 10;
        const active = true;

        await expect(recycle.registerCompany(name, minWeightRequirement, maxPricePerKg, active))
          .to.emit(recycle, "CompanyRegistered")
          .withArgs(anyValue, name, minWeightRequirement, maxPricePerKg, active);
      });

      it("Should prevent double registration", async () => {
        const { recycle } = await loadFixture(deployContract);
        const name = "CompanyA";
        const minWeightRequirement = 1;
        const maxPricePerKg = 10;
        const active = true;

        await recycle.registerCompany(name, minWeightRequirement, maxPricePerKg, active);

        await expect(recycle.registerCompany(name, minWeightRequirement, maxPricePerKg, active))
          .to.be.revertedWith("EcoCollect: Sorry you can't register twice edit your info if you wish to");
      });

      it("Should require non-empty name", async () => {
        const { recycle } = await loadFixture(deployContract);
        const name = "";
        const minWeightRequirement = 1;
        const maxPricePerKg = 10;
        const active = true;

        await expect(recycle.registerCompany(name, minWeightRequirement, maxPricePerKg, active))
          .to.be.revertedWith("EcoCollect: Please enter a company name");
      });

      it("Should require positive maxPricePerKg", async () => {
        const { recycle } = await loadFixture(deployContract);
        const name = "CompanyA";
        const minWeightRequirement = 1;
        const maxPricePerKg = 0;
        const active = true;

        await expect(recycle.registerCompany(name, minWeightRequirement, maxPricePerKg, active))
          .to.be.revertedWith("EcoCollect: set price must be greater than zero");
      });
    });

    describe("editCompany", function () {
      it("Should edit company details successfully", async () => {
        const { recycle } = await loadFixture(deployContract);
        const name = "CompanyA";
        const minWeightRequirement = 1;
        const maxPricePerKg = 10;
        const active = true;

        await recycle.registerCompany(name, minWeightRequirement, maxPricePerKg, active);

        const newName = "CompanyB";
        const newMinWeight = 2;
        const newMaxPrice = 20;
        const newActive = false;

        await expect(recycle.editCompany(newName, newMinWeight, newMaxPrice, newActive))
          .to.emit(recycle, "CompanyEdited")
          .withArgs(anyValue, newName, newMinWeight, newMaxPrice, newActive);
      });
    });
  });

  describe("Picker Registration and Management", function () {
    describe("registerPicker", function () {
      it("Should register a new picker successfully", async () => {
        const { recycle } = await loadFixture(deployContract);
        const name = "John";
        const email = "john@example.com";

        await expect(recycle.registerPicker(name, email))
          .to.emit(recycle, "PickerRegistered")
          .withArgs(anyValue, name, email);
      });

      it("Should prevent double registration", async () => {
        const { recycle } = await loadFixture(deployContract);
        const name = "John";
        const email = "john@example.com";

        await recycle.registerPicker(name, email);

        await expect(recycle.registerPicker(name, email))
          .to.be.revertedWith("EcoCollect: Picker already registered");
      });
    });

    describe("editPicker", function () {
      it("Should edit picker details successfully", async () => {
        const { recycle } = await loadFixture(deployContract);
        const name = "John";
        const email = "john@example.com";

        await recycle.registerPicker(name, email);

        const newName = "Johnny";
        const newEmail = "johnny@example.com";

        await expect(recycle.editPicker(newName, newEmail))
          .to.emit(recycle, "PickerEdited")
          .withArgs(anyValue, newName, newEmail);
      });
    });
  });

  describe("Plastic Transactions", function () {
    describe("depositPlastic", function () {
      it("Should deposit plastic successfully", async () => {
        const { recycle } = await loadFixture(deployContract);
        const [owner, company, picker] = await ethers.getSigners();

        // Register company
        await recycle.connect(company).registerCompany("CompanyA", 1, 10, true);

        // Register picker
        await recycle.connect(picker).registerPicker("John", "john@example.com");

        // Deposit plastic
        const weight = 5;
        await expect(recycle.connect(picker).depositPlastic(company.address, weight))
          .to.emit(recycle, "PlasticDeposited")
          .withArgs(picker.address, company.address, weight);
      });

      it("Should fail if company is inactive", async () => {
        const { recycle } = await loadFixture(deployContract);
        const [owner, company, picker] = await ethers.getSigners();

        // Register company as inactive
        await recycle.connect(company).registerCompany("CompanyA", 1, 10, false);

        // Register picker
        await recycle.connect(picker).registerPicker("John", "john@example.com");

        // Try to deposit plastic
        await expect(recycle.connect(picker).depositPlastic(company.address, 5))
          .to.be.revertedWith("EcoCollect: This company is no longer active");
      });
    });

    describe("validatePlastic", function () {
      it("Should validate plastic deposit successfully", async () => {
        const { recycle } = await loadFixture(deployContract);
        const [owner, company, picker] = await ethers.getSigners();

        // Setup
        await recycle.connect(company).registerCompany("CompanyA", 1, 10, true);
        await recycle.connect(picker).registerPicker("John", "john@example.com");
        
        // Deposit plastic
        await recycle.connect(picker).depositPlastic(company.address, 5);

        // Validate transaction
        await expect(recycle.connect(company).validatePlastic(0))
          .to.emit(recycle, "PlasticValidated")
          .withArgs(company.address, 0);
      });
    });

    describe("payPicker", function () {
      it("Should pay picker successfully", async () => {
        const { recycle, token } = await loadFixture(deployContract);
        const [owner, company, picker] = await ethers.getSigners();

        // Setup
        await recycle.connect(company).registerCompany("CompanyA", 1, 10, true);
        await recycle.connect(picker).registerPicker("John", "john@example.com");
        
        // Transfer some tokens to company
        await token.transfer(company.address, ethers.parseEther("100"));
        
        // Approve tokens for recycle contract
        await token.connect(company).approve(recycle.address, ethers.parseEther("100"));

        // Deposit and validate plastic
        await recycle.connect(picker).depositPlastic(company.address, 5);
        await recycle.connect(company).validatePlastic(0);

        // Pay picker
        await expect(recycle.connect(company).payPicker(0))
          .to.emit(recycle, "PickerPaid")
          .withArgs(company.address, picker.address, anyValue);
      });
    });
  });

  describe("View Functions", function () {
    it("Should get all company addresses", async () => {
      const { recycle } = await loadFixture(deployContract);
      const [owner, company1, company2] = await ethers.getSigners();

      await recycle.connect(company1).registerCompany("Company1", 1, 10, true);
      await recycle.connect(company2).registerCompany("Company2", 1, 10, true);

      const addresses = await recycle.getAllCompanyAddresses();
      expect(addresses.length).to.equal(2);
      expect(addresses).to.include(company1.address);
      expect(addresses).to.include(company2.address);
    });

    it("Should get all picker addresses", async () => {
      const { recycle } = await loadFixture(deployContract);
      const [owner, picker1, picker2] = await ethers.getSigners();

      await recycle.connect(picker1).registerPicker("Picker1", "picker1@example.com");
      await recycle.connect(picker2).registerPicker("Picker2", "picker2@example.com");

      const addresses = await recycle.getAllPickerAddresses();
      expect(addresses.length).to.equal(2);
      expect(addresses).to.include(picker1.address);
      expect(addresses).to.include(picker2.address);
    });
  });
});