// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract OGToken is ERC20("OGToken", "OGT") {
    // The address of the contract owner
    address public owner;
    /**
     * @dev Constructor that sets the initial owner to the contract deployer
     * and mints an initial supply of tokens to the owner's address.
     */
    constructor() {
        owner = msg.sender; // Set the deployer as the owner
        _mint(msg.sender, 100000e18); // Mint an initial supply of 100,000 tokens (with 18 decimals) to the owner
    }

    /**
     * @dev Function to mint new tokens. Only the owner can call this function.
     * @param _amount The amount of tokens to mint, specified without considering decimals (e.g., 1000 for 1,000 tokens).
     */
    function mint(uint _amount) external {
        //require(msg.sender == owner, "you are not owner"); // Ensure that only the owner can mint new tokens
        _mint(msg.sender, _amount * 1e18); // Mint the specified amount of tokens (with 18 decimals) to the owner's address
    }
}
