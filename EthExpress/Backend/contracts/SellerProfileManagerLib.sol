// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;
contract SellerProfileManager {
    uint256 private _profileIds;

    struct SellerProfile {
        uint256 id;
        address seller;
        string businessName;
        string description;
        string websiteURL;
        string[] categories;
    }

    mapping(uint256 => SellerProfile) public sellerProfiles;
    mapping(address => uint256) public sellerProfileIds;

    function createProfile(
        string memory _businessName,
        string memory _description,
        string memory _websiteURL,
        string[] memory _categories
    ) external {
        uint256 newProfileId = _profileIds;
        SellerProfile memory profile = SellerProfile(
            newProfileId,
            msg.sender,
            _businessName,
            _description,
            _websiteURL,
            _categories
        );
        sellerProfiles[newProfileId] = profile;
        sellerProfileIds[msg.sender] = newProfileId;
        
        _profileIds += 1; // Manually increment the counter
    }

    function getSellerProfile(address _seller) external view returns (SellerProfile memory) {
        uint256 profileId = sellerProfileIds[_seller];
        return sellerProfiles[profileId];
    }
}
