// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract UserManager {
    uint256 private sellerIdCounter;
    uint256 private buyerIdCounter;
    uint256 private arbitratorIdCounter;

    enum Roles {
        Arbitrator,
        Seller,
        Buyer
    }

    mapping(address => uint256) private sellers;
    mapping(address => uint256) private buyers;
    mapping(address => uint256) private arbitrators;
    mapping(address => int256) public reputation;

    function addBuyerOrSeller(address _user, Roles _role) external {
        require(
            sellers[_user] == 0 && buyers[_user] == 0 && arbitrators[_user] == 0,
            "User already has a role"
        );

        if (_role == Roles.Buyer) {
            buyers[_user] = buyerIdCounter;
            buyerIdCounter++;
            reputation[_user] = 0;
        } else if (_role == Roles.Seller) {
            sellers[_user] = sellerIdCounter;
            sellerIdCounter++;
            reputation[_user] = 0;
        }
    }

    function addArbitrator(address _arbitrator) external {
        require(
            sellers[_arbitrator] == 0 && buyers[_arbitrator] == 0 && arbitrators[_arbitrator] == 0,
            "This address already has a role"
        );

        arbitrators[_arbitrator] = arbitratorIdCounter;
        arbitratorIdCounter++;
        reputation[_arbitrator] = 0;
    }

    function updateReputation(address _user, bool _positive) external {
        if (_positive) {
            reputation[_user]++;
        } else {
            reputation[_user]--;
        }
    }

    function getUserRole(address _user) external view returns (Roles) {
        if (sellers[_user] != 0) {
            return Roles.Seller;
        } else if (buyers[_user] != 0) {
            return Roles.Buyer;
        } else if (arbitrators[_user] != 0) {
            return Roles.Arbitrator;
        } else {
            return Roles.Buyer; // Default to buyer
        }
    }
}
