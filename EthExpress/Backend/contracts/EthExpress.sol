// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "./ProductManagerLib.sol";
import "./EscrowManagerLib.sol";
import "./RatingManagerLib.sol";
import "./UserManagerLib.sol";
import "./SellerProfileManagerLib.sol";
import "./WithdrawalManagerLib.sol";

contract EthExpress{
    using ProductManagerLib for ProductManagerLib.ProductManager;
    using EscrowManagerLib for EscrowManagerLib.EscrowManager;
    using RatingManagerLib for RatingManagerLib.RatingManager;
    using UserManagerLib for UserManagerLib.UserManager;
    using SellerProfileManagerLib for SellerProfileManagerLib.SellerProfileManager;
    using WithdrawalManagerLib for WithdrawalManagerLib.WithdrawalManager;

    IERC20 public token;
    address payable public receiver;

    constructor(
        address _token,
        address payable _receiver
    ) {
        token = IERC20(_token);
        receiver = _receiver;
    }

    // Buyer functions
    function buyProduct(uint256 _productId, uint256 _claimTime, uint256 _expiryTime)
        external
        returns (uint256)
    {
        return EscrowManagerLib.EscrowManager.buyProduct(
            msg.sender,
            _productId,
            _claimTime,
            _expiryTime
        );
    }

    function rateProduct(uint256 _escrowId, uint8 _rating, string memory _review)
        external
    {
        RatingManagerLib.RatingManager.addRating(_escrowId, msg.sender, _rating, _review);
    }

    // Seller functions
    function addProduct(
        string memory _name,
        string memory _description,
        string memory _imageIPFSHash,
        uint256 _price,
        string[] memory _categories
    ) external {
        ProductManagerLib.ProductManager.addProduct(
            msg.sender,
            _name,
            _description,
            _imageIPFSHash,
            _price,
            _categories
        );
        WithdrawalManagerLib.WithdrawalManager.recordEarnings(msg.sender, _price);
    }

    function claimPayment(uint256 _escrowId) external {
        EscrowManagerLib.EscrowManager.claimPayment(_escrowId, msg.sender);
    }

    function createSellerProfile(
        string memory _businessName,
        string memory _description,
        string memory _websiteURL,
        string[] memory _categories
    ) external {
        SellerProfileManagerLib.SellerProfileManager.createProfile(
            msg.sender,
            _businessName,
            _description,
            _websiteURL,
            _categories
        );
    }

    function withdrawEarnings() external {
        WithdrawalManagerLib.WithdrawalManager.withdraw();
    }

    // Arbitrator functions
    function voteOnDispute(uint256 _escrowId, bool _voteForBuyer) external {
        EscrowManagerLib.EscrowManager.voteOnDispute(_escrowId, msg.sender, _voteForBuyer);
    }

    // Admin functions
    function addBuyerOrSeller(address _user, UserManagerLib.Roles _role) external {
        UserManagerLib.UserManager.addBuyerOrSeller(_user, _role);
    }

    function addArbitrator(address _arbitrator) external {
        UserManagerLib.UserManager.addArbitrator(_arbitrator);
    }
}