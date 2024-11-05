// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Express is ERC20("Express", "EXP") {
    address public owner;

    constructor() {
        owner = msg.sender;
        _mint(msg.sender, 100000e18);
    }

    function mint(uint _amount) external {
        require(msg.sender == owner, "You are not the owner"); 
        _mint(msg.sender, _amount * 1e18);
    }

    function burn(uint _amount) external {
        _burn(msg.sender, _amount * 1e18);
    }
}
