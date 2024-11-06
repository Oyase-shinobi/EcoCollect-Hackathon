// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import "./EthExpress.sol";

contract MultisigFactory{
    EthExpress[] ethExpressClones;

    function createMultiMakert(
        address _admin,
        address _receiver, 
        address _tokenAddress
        ) external returns (EthExpress newMakert_, uint256 length_) {

        newMakert_ = new EthExpress(_admin, _receiver, _tokenAddress);

        ethExpressClones.push(newMakert_);

        length_ = ethExpressClones.length;
    }

    function getMultiMakerts() external view returns(EthExpress[] memory) {
        return ethExpressClones;
    }
}