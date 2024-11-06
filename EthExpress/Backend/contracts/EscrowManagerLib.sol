// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;

contract EscrowManager{
    uint256 private _escrowIdCounter;

    enum Authorization {
        Pending,
        Claim,
        Cancel,
        Disputed
    }

    struct EscrowDetails {
        uint256 id;
        uint256 productId;
        uint256 claimTime;
        uint256 expiryTime;
        address productSeller;
        address productBuyer;
        address[] productArbitrators;
        Authorization authorization;
        bool bought;
    }

    struct ArbitrationVote {
        uint256 votesForBuyer;
        uint256 votesForSeller;
        mapping(address => bool) voted;
        bool resolved;
    }

    mapping(uint256 => EscrowDetails) public escrows;
    mapping(uint256 => ArbitrationVote) public arbitrationVotes;

    event ProductBought(uint256 indexed escrowId, address indexed buyer, address indexed seller);
    event PaymentClaimed(uint256 indexed escrowId, address indexed seller);
    event PaymentCancelled(uint256 indexed escrowId, address indexed buyer);
    event DisputeInitiated(uint256 indexed escrowId);
    event DisputeResolved(uint256 indexed escrowId, bool indexed buyerWon);

    function buyProduct(
        address _buyer,
        uint256 _productId,
        uint256 _claimTime,
        uint256 _expiryTime
    ) external returns (uint256) {
        uint256 newEscrowId = _escrowIdCounter;
        _escrowIdCounter++;

        address[] memory emptyArbitrators;
        escrows[newEscrowId] = EscrowDetails({
            id: newEscrowId,
            productId: _productId,
            claimTime: block.timestamp + _claimTime,
            expiryTime: block.timestamp + _expiryTime,
            productSeller: msg.sender,
            productBuyer: _buyer,
            productArbitrators: emptyArbitrators,
            authorization: Authorization.Pending,
            bought: true
        });

        emit ProductBought(newEscrowId, _buyer, msg.sender);
        return newEscrowId;
    }

    function claimPayment(uint256 _escrowId, address _seller) external{
        EscrowDetails storage escrow = escrows[_escrowId];
        require(escrow.productSeller == _seller, "Not the seller of this product");
        require(escrow.authorization == Authorization.Pending, "Payment can only be claimed in the Pending state");
        require(block.timestamp >= escrow.claimTime, "Cannot claim payment before the claim time");

        escrow.authorization = Authorization.Claim;
        emit PaymentClaimed(_escrowId, _seller);
    }

    function cancelPayment(uint256 _escrowId, address _buyer) external{
        EscrowDetails storage escrow = escrows[_escrowId];
        require(escrow.productBuyer == _buyer, "Not the buyer of this product");
        require(escrow.authorization == Authorization.Pending, "Payment can only be cancelled in the Pending state");
        require(block.timestamp >= escrow.expiryTime, "Cannot cancel payment before the expiry time");

        escrow.authorization = Authorization.Cancel;
        emit PaymentCancelled(_escrowId, _buyer);
    }

    function initiateDispute(uint256 _escrowId, address[] memory _arbitrators) external{
        EscrowDetails storage escrow = escrows[_escrowId];
        require(
            escrow.productBuyer == msg.sender || escrow.productSeller == msg.sender,
            "Only the buyer or seller can initiate a dispute"
        );
        require(escrow.authorization == Authorization.Claim, "Dispute can only be initiated in the Claim state");

        escrow.authorization = Authorization.Disputed;
        escrow.productArbitrators = _arbitrators;
        emit DisputeInitiated(_escrowId);
    }

    function voteOnDispute(
        uint256 _escrowId,
        address _arbitrator,
        bool _voteForBuyer
    ) external {
        EscrowDetails storage escrow = escrows[_escrowId];
        ArbitrationVote storage vote = arbitrationVotes[_escrowId];
        require(
            _isArbitrator(escrow.productArbitrators, _arbitrator),
            "Only the assigned arbitrators can vote on the dispute"
        );
        require(!vote.voted[_arbitrator], "Arbitrator has already voted");

        if (_voteForBuyer) {
            vote.votesForBuyer++;
        } else {
            vote.votesForSeller++;
        }
        vote.voted[_arbitrator] = true;

        if (
            vote.votesForBuyer > escrow.productArbitrators.length / 2 ||
            vote.votesForSeller > escrow.productArbitrators.length / 2
        ) {
            vote.resolved = true;
            if (vote.votesForBuyer > vote.votesForSeller) {
                escrow.authorization = Authorization.Cancel;
            } else {
                escrow.authorization = Authorization.Claim;
            }
            emit DisputeResolved(_escrowId, vote.votesForBuyer > vote.votesForSeller);
        }
    }

    function _isArbitrator(address[] memory _arbitrators, address _address) private pure returns (bool) {
        for (uint256 i = 0; i < _arbitrators.length; i++) {
            if (_arbitrators[i] == _address) {
                return true;
            }
        }
        return false;
    }
}