// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;
contract ProductManagerLib {
    uint256 private _productIds;

    struct Product {
        uint256 id;
        string name;
        string description;
        string imageIPFSHash;
        uint256 price;
        address seller;
        bool onSale;
        string[] categories;
    }

    mapping(uint256 => Product) public products;
    mapping(address => string[]) public sellerCategories;

    function addProduct(
        address _seller,
        string memory _name,
        string memory _description,
        string memory _imageIPFSHash,
        uint256 _price,
        string[] memory _categories
    ) external {
        uint256 newProductId = _productIds;
        Product memory product = Product(
            newProductId,
            _name,
            _description,
            _imageIPFSHash,
            _price,
            _seller,
            true,
            _categories
        );
        products[newProductId] = product;

        // Update seller's categories
        for (uint256 i = 0; i < _categories.length; i++) {
            sellerCategories[_seller].push(_categories[i]);
        }

        _productIds += 1; // Manually increment the product ID
    }

    function getProductDetails(uint256 _productId) external view returns (Product memory) {
        return products[_productId];
    }

    function getSellerCategories(address _seller) external view returns (string[] memory) {
        return sellerCategories[_seller];
    }
}
