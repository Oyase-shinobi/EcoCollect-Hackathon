// // SPDX-License-Identifier: MIT
// pragma solidity ^0.8.26;

// import "./TrustBazaar.sol";

// contract MultisigFactory{
//     TrustBazaar[] trustBazaarClones;

//     function createMultiMakert(
//         address _admin,
//         address _receiver, 
//         address _tokenAddress
//         ) external returns (TrustBazaar newMakert_, uint256 length_) {

//         newMakert_ = new TrustBazaar(_admin, _receiver, _tokenAddress);

//         trustBazaarClones.push(newMakert_);

//         length_ = trustBazaarClones.length;
//     }

//     function getMultiMakerts() external view returns(TrustBazaar[] memory) {
//         return trustBazaarClones;
//     }
// }