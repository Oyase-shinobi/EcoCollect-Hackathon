# EcoCollect

## Project Description

EcoCollect is a decentralized application designed to incentivize individuals and organizations to collect and recycle plastic waste. By rewarding users with tokens for their recycling efforts, EcoCollect aims to promote environmental stewardship and innovation in waste management. The application consists of two main smart contracts: **EcoToken** and **EcoCollect**, which facilitate the locking of rewards and the recycling process, respectively.

## Functionality

- **EcoToken**: This contract manages the rewards system, allowing users to lock tokens as incentives for recycling efforts.
- **EcoCollect**: This contract handles the recycling process, ensuring that collected plastics are processed efficiently and transparently.

## Usage

1. **Collect Plastics**: Users can collect waste plastics in their local communities.
2. **Lock Rewards**: Once collected, users can lock their rewards in the EcoToken contract to receive tokens.
3. **Recycle**: The EcoCollect contract processes the collected plastics and ensures proper recycling practices are followed.

## Installation

To set up the EcoCollect project, follow these steps:

1. **Clone the Repository**:
   ```bash
   git clonehttps://github.com/Lukman-01/Hackathons.git
   cd EcoCollect/Blockend
   ```

2. **Install Dependencies**:
   Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed. Then run:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   Create a `.env` file in the root directory and add your wallet key and Blockscout API key:
   ```plaintext
   WALLET_KEY=<your-wallet-key>
   QUICKNODE_BASE_RPC_URL=<your-quick-node-url>
   BLOCKSCOUT_KEY=<your-blockscout-api-key>
   ```

## Compile

To compile the smart contracts, run:
```bash
npx hardhat compile
```

## Deploy

To deploy the contracts on the Base Sepolia testnet, execute:
```bash
npx hardhat ignition deploy ./ignition/modules/deploy.ts --network lisk-sepolia
```

## Verify Contracts

After deployment, verify your contracts on the Base Sepolia block explorer with:
```bash
npx hardhat verify --network lisk-sepolia <deployed address>
```

### Deployed Addresses

**EcoToken** - 0xdC05628321442cB79Fe19DA8afeFbCD6E4fC640A
**EcoCollect** - 0xf6dCd1F58685108D3a337a692E897DbD7ccBB9aC

Successfully verified contract EcoToken on the block explorer.
https://sepolia-blockscout.lisk.com/address/0xdC05628321442cB79Fe19DA8afeFbCD6E4fC640A#code

Successfully verified contract EcoCollect on the block explorer.
https://sepolia-blockscout.lisk.com/address/0xf6dCd1F58685108D3a337a692E897DbD7ccBB9aC#code


