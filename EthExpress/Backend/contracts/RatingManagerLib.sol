// SPDX-License-Identifier: MIT
pragma solidity ^0.8.26;
contract RatingManager {
    uint256 private _ratingIds;

    struct Rating {
        uint256 id;
        uint256 escrowId;
        address rater;
        uint8 rating;
        string review;
    }

    mapping(uint256 => Rating) public ratings;
    mapping(uint256 => Rating[]) public escrowRatings;

    function addRating(
        uint256 _escrowId,
        address _rater,
        uint8 _rating,
        string memory _review
    ) external {
        uint256 newRatingId = _ratingIds;
        Rating memory rating = Rating(newRatingId, _escrowId, _rater, _rating, _review);
        ratings[newRatingId] = rating;
        escrowRatings[_escrowId].push(rating);
        _ratingIds += 1; // Increment the rating ID manually
    }

    function getProductRatings(uint256 _escrowId) external view returns (Rating[] memory) {
        return escrowRatings[_escrowId];
    }
}
