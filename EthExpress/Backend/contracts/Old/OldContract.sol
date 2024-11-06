// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

contract EthExpress is ReentrancyGuard {
    using SafeERC20 for IERC20;

    // State variables
    IERC20 public token;
    address private admin;
    address payable private receiver;
    uint256 public nextEscrowId;
    uint256 public sellersCount;
    uint256 public buyersCount;
    uint256 public arbitratorsCount;
    uint256 public minVotesRequired = 3; 

    // Enums
    enum Authorization {
        Pending,
        Claim,
        Cancel,
        Disputed
    }
    enum Roles {
        Arbitrator,
        Seller,
        Buyer
    }
    enum Listings {
        List,
        UnList
    }

    // Structs
    struct Product {
        bytes32 id;
        string itemName;
        uint256 price;
        address seller;
        bool onSale;
    }

    struct EscrowDetails {
        bytes32 escrowId;
        bytes32 productId;
        string productName;
        uint256 productPrice;
        address productSeller;
        address productBuyer;
        address[] productArbitrators;
        uint256 claimTime;
        uint256 expiryTime;
        Authorization authorization;
        bool bought;
    }

    struct ArbitrationVote {
        uint256 votesForBuyer;
        uint256 votesForSeller;
        mapping(address => bool) voted;
        bool resolved;
    }

    // Mappings
    mapping(address => uint256) private sellers;
    mapping(address => uint256) private buyers;
    mapping(address => uint256) private arbitrators;
    mapping(bytes32 => Product) public products;
    mapping(bytes32 => EscrowDetails) public escrows;
    mapping(bytes32 => ArbitrationVote) public arbitrationVotes;
    mapping(string => bytes32) public productNames;

    mapping(address => int256) public reputation; 

    modifier OnlyAdmin() {
        require(msg.sender == admin, "Only Admin Can Do This");
        _;
    }

    modifier OnlyArbitrators() {
        require(arbitrators[msg.sender] != 0, "You Are Not An Arbitrator");
        _;
    }

    modifier OnlySellers() {
        require(sellers[msg.sender] != 0, "You Are Not A Seller");
        _;
    }

    modifier OnlyBuyers() {
        require(buyers[msg.sender] != 0, "You Are Not A Buyer");
        _;
    }

    // Events
    event BuyerOrSellerAdded(address user, Roles role);
    event ArbitratorAdded(address user);
    event Deposit(address user, uint256 amount);
    event ProductAdded(bytes32 id, string itemName, uint256 price, address seller, bool onSale);
    event ProductBought(bytes32 escrowId, uint256 price, uint256 claimTime, uint256 expiryTime);
    event DisputeOpened(bytes32 escrowId, address complainer);
    event ArbitratorVoted(bytes32 escrowId, address arbitrator, bool votedForBuyer);
    event DisputeResolved(bytes32 escrowId, address winner, string resolution);
    event ReputationUpdated(address user, int256 newReputation);

    // Constructor
    constructor(address _admin, address _receiver, address tokenAddress) {
        admin = _admin;
        receiver = payable(_receiver);
        token = IERC20(tokenAddress);
        buyersCount = 1;
        sellersCount = 1;
        arbitratorsCount = 1;
    }

    // Add buyers, sellers, or arbitrators
    function addBuyerOrSeller(Roles role) external {
        require(
            sellers[msg.sender] == 0 && buyers[msg.sender] == 0 && arbitrators[msg.sender] == 0,
            "You already have a role"
        );

        if (role == Roles.Buyer) {
            buyers[msg.sender] = buyersCount;
            buyersCount++;
            reputation[msg.sender] = 0; // Initialize reputation
            emit BuyerOrSellerAdded(msg.sender, role);
        } else if (role == Roles.Seller) {
            sellers[msg.sender] = sellersCount;
            sellersCount++;
            reputation[msg.sender] = 0; // Initialize reputation
            emit BuyerOrSellerAdded(msg.sender, role);
        }
    }

    function addArbitrator(address _arbitrator) external OnlyAdmin{
        require(
            sellers[_arbitrator] == 0 && buyers[_arbitrator] == 0 && arbitrators[_arbitrator] == 0,
            "This address already has a role"
        );

        arbitrators[_arbitrator] = arbitratorsCount;
        arbitratorsCount++;
        reputation[_arbitrator] = 0; // Initialize reputation
        emit ArbitratorAdded(_arbitrator);
    }

    // Add product by the seller
    function addProduct(string memory _itemName, uint256 _price) external OnlySellers {
        bytes32 id = keccak256(abi.encodePacked(address(msg.sender), _itemName));
        Product memory product = Product(id, _itemName, _price, address(msg.sender), true);
        products[id] = product;
        productNames[_itemName] = id;
        emit ProductAdded(id, _itemName, _price, msg.sender, true);
    }

    // Buy product by the buyer
    function buyProduct(string memory _itemName, uint256 _claimTime, uint256 _expiryTime)
        external
        OnlyBuyers
        returns (bytes32)
    {
        require(_claimTime < _expiryTime, "ClaimTime >= ExpiryTime");

        bytes32 _id = productNames[_itemName];
        Product memory product = products[_id];
        require(product.seller != address(0) && product.price != 0, "Product doesn't exist");
        require(product.onSale == true, "Product is not on sale");

        // Increment nextEscrowId to ensure uniqueness
        bytes32 newEscrowId = keccak256(abi.encodePacked(msg.sender, block.number, nextEscrowId));
        nextEscrowId++;

        // Initialize empty array for arbitrators
        address[] memory emptyArbitrators;

        // Direct assignment to storage
        escrows[newEscrowId] = EscrowDetails({
            escrowId: newEscrowId,
            productId: _id,
            productName: product.itemName,
            productPrice: product.price,
            productSeller: product.seller,
            productBuyer: msg.sender,
            productArbitrators: emptyArbitrators,
            claimTime: block.timestamp + _claimTime,
            expiryTime: block.timestamp + _expiryTime,
            authorization: Authorization.Pending,
            bought: true
        });

        // Safe token transfer
        token.safeTransferFrom(msg.sender, address(this), product.price);

        // Emit the event
        emit ProductBought(newEscrowId, product.price, _claimTime, _expiryTime);

        return newEscrowId; // Return the escrow ID to confirm
    }

    // Seller claims the funds after a successful transaction
    function claimPayment(bytes32 escrowId) external nonReentrant {
        EscrowDetails storage escrow = escrows[escrowId];

        require(escrow.productSeller == msg.sender, "Not the seller of this product");
        require(escrow.authorization == Authorization.Pending, "Escrow is not in a claimable state");
        require(block.timestamp >= escrow.claimTime, "Claim time has not yet passed");
        require(escrow.bought == true, "Product has not been bought");

        // Mark the escrow as claimed
        escrow.authorization = Authorization.Claim;

        // Transfer payment to seller
        uint256 paymentAmount = escrow.productPrice;
        require(token.transfer(escrow.productSeller, paymentAmount), "Transfer to seller failed");

        // **Update seller's reputation** here after successful claim
        updateReputation(escrow.productSeller, true);

        emit DisputeResolved(escrowId, escrow.productSeller, "Seller claimed the payment");
    }

    // Dispute opened by either buyer or seller
    function openDispute(bytes32 escrowId) external nonReentrant{
        EscrowDetails storage escrow = escrows[escrowId];
        require(escrow.productBuyer == msg.sender || escrow.productSeller == msg.sender, "Not your escrow");
        require(escrow.authorization == Authorization.Pending, "Escrow not in Pending state");

        escrow.authorization = Authorization.Disputed;
        escrows[escrowId] = escrow;

        emit DisputeOpened(escrowId, msg.sender);
    }

    // Arbitrators vote on the dispute
    function voteOnDispute(bytes32 escrowId, bool voteForBuyer) external OnlyArbitrators nonReentrant{
        EscrowDetails storage escrow = escrows[escrowId];
        ArbitrationVote storage vote = arbitrationVotes[escrowId];

        require(escrow.authorization == Authorization.Disputed, "Escrow is not disputed");
        require(!vote.voted[msg.sender], "You already voted");

        // Initialize vote if not already present
        if (!vote.resolved) {
            vote.voted[msg.sender] = true;
            escrow.productArbitrators.push(msg.sender);

            if (voteForBuyer) {
                vote.votesForBuyer++;
            } else {
                vote.votesForSeller++;
            }

            emit ArbitratorVoted(escrowId, msg.sender, voteForBuyer);

            if (escrow.productArbitrators.length >= minVotesRequired) {
                resolveDispute(escrowId);
            }
        }
    }

    // Internal function to check if the escrow has expired
    function checkEscrowExpiry(bytes32 escrowId) internal {
        EscrowDetails storage escrow = escrows[escrowId];
        require(block.timestamp >= escrow.expiryTime, "Escrow has not yet expired");
        require(escrow.authorization == Authorization.Pending, "Escrow not in Pending state");

        // Automatically refund the buyer upon expiry
        refundToBuyer(escrowId);
    }

    // Resolve the dispute based on majority vote, also check for expiry
    function resolveDispute(bytes32 escrowId) internal {
        ArbitrationVote storage vote = arbitrationVotes[escrowId];
        EscrowDetails storage escrow = escrows[escrowId];

        require(!vote.resolved, "Dispute already resolved");

        // Check if the escrow has expired, if so, refund the buyer
        if (block.timestamp >= escrow.expiryTime) {
            checkEscrowExpiry(escrowId);
            return; // Exit after expiry handling
        }

        address winner;
        if (vote.votesForBuyer > vote.votesForSeller) {
            escrow.authorization = Authorization.Cancel; // Refund to buyer
            winner = escrow.productBuyer;
            refundToBuyer(escrowId);
        } else {
            escrow.authorization = Authorization.Claim; // Payment to seller
            winner = escrow.productSeller;
            transferToSeller(escrowId);
        }

        vote.resolved = true;
        updateReputation(winner, true);

        emit DisputeResolved(escrowId, winner, "Dispute resolved");
    }

    // Refund product price to buyer
    function refundToBuyer(bytes32 escrowId) internal {
        EscrowDetails storage escrow = escrows[escrowId];
        uint256 refundAmount = escrow.productPrice;
        address buyer = escrow.productBuyer;

        require(token.transfer(buyer, refundAmount), "Refund failed");
        emit DisputeResolved(escrowId, buyer, "Refund issued to buyer");
    }

    // Transfer product price to seller
    function transferToSeller(bytes32 escrowId) internal {
        EscrowDetails storage escrow = escrows[escrowId];
        uint256 paymentAmount = escrow.productPrice;
        address seller = escrow.productSeller;

        require(token.transfer(seller, paymentAmount), "Transfer failed");
    }

    // Update reputation of users involved in the escrow
    function updateReputation(address user, bool positive) internal {
        if (positive) {
            reputation[user]++;
        } else {
            reputation[user]--;
        }

        emit ReputationUpdated(user, reputation[user]);
    }

    // Get the details of an escrow
    function getEscrowDetails(bytes32 escrowId) external view returns (EscrowDetails memory) {
        return escrows[escrowId];
    }
}
