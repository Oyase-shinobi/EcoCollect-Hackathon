// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract WithdrawalManager {
    IERC20 public token;
    address payable public receiver;
    mapping(address => uint256) public sellerEarnings;
    uint256 public withdrawalFee = 1; // 1% withdrawal fee

    constructor(address _token, address payable _receiver) {
        token = IERC20(_token);
        receiver = _receiver;
    }

    function recordEarnings(address _seller, uint256 _amount) external {
        sellerEarnings[_seller] += _amount;
    }

    function withdraw() external {
        uint256 earnings = sellerEarnings[msg.sender];
        require(earnings > 0, "No earnings to withdraw");

        uint256 fee = (earnings * withdrawalFee) / 100;
        uint256 amountToTransfer = earnings - fee;

        require(token.transfer(msg.sender, amountToTransfer), "Withdrawal failed");
        require(token.transfer(receiver, fee), "Fee transfer failed");

        sellerEarnings[msg.sender] = 0;
    }
}