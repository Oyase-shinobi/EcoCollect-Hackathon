# TrustBazaar: A Decentralized Escrow Marketplace on Scroll

## Description
TrustBazaar is a decentralized escrow platform enabling secure peer-to-peer transactions without relying on intermediaries. Buyers and sellers can exchange goods and services, backed by the security of smart contracts, while arbitrators resolve disputes fairly. Built on Scroll, the platform incorporates an ERC20 token for payments and ensures transparent, trustless, and smooth transactions. 

Key features:
- **Escrow service:** Automated escrow that holds funds securely until both parties fulfill their obligations.
- **Dispute resolution:** Arbitrators can be involved in resolving disputes with a decentralized voting mechanism.
- **Reputation system:** Sellers, buyers, and arbitrators earn or lose reputation points based on their actions, ensuring a trustworthy marketplace.
- **Reusability:** Future marketplaces can utilize TrustBazaar as a framework with extended functionalities through a factory contract.

## Live Demo
[![first TrustBazaar Demo](https://www.loom.com/share/78ebde7985a14ca9b243d5bd67718470?sid=82f04d8b-77d3-4869-b99b-8c4dc5b75a58)]

[![second TrustBazaar Demo](https://www.loom.com/share/01cfce3495e34347b8f234bdf1e94d1e?sid=779b3d9b-179f-4b53-93c3-576159264eac)]

## Tech Stack
- Solidity (v0.8.26)
- Scroll (Testnet deployment)
- Hardhat
- OpenZeppelin ERC20 standards
- Alchemy (for Scroll RPC integration)
- Hardhat Ignition for module-based deployment

## Project Start Date
This project was initiated on **September 24, 2024** and developed as a fresh idea for the Scroll Hackathon.

## Deployed and Verified Contracts on Scroll
- **TrustBazaar Contract:** [0xE006Ef36BA678Ed201587E91200de47255c3d664](https://sepolia.scrollscan.com/address/0xE006Ef36BA678Ed201587E91200de47255c3d664#code)
- **OGToken Contract:** [0xe47fCcABcC282fE9A621c88Ad9E8749a38f61C15](https://sepolia.scrollscan.com/address/0xe47fCcABcC282fE9A621c88Ad9E8749a38f61C15#code)

## How It Works
1. **Product Listing:** Sellers list products with a price in ERC20 tokens.
2. **Product Purchase:** Buyers purchase products using the platform’s ERC20 token, initiating the escrow process.
3. **Escrow Claim:** Once the product is delivered, the seller can claim funds, and their reputation increases automatically.
4. **Dispute Resolution:** If disputes arise, arbitrators vote on the resolution. The winning party gets the funds, and their reputation is updated accordingly.

## Hardhat Configuration with Alchemy RPC
TrustBazaar integrates with the Scroll network via the Alchemy RPC URL, as configured in the Hardhat project.

```typescript
import * as dotenv from "dotenv";

import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.26",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
      evmVersion: "london"
    }
  },
  networks: {
    scrollSepolia: {
      url: process.env.SCROLL_ALCHEMY_URL || 'https://sepolia-rpc.scroll.io',
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  },
  etherscan: {
    apiKey: {
      scrollSepolia:  "SEIAVN8JJ3VWFCVBFV2DQDG1WDAM3CPDEW",
    },
    customChains: [
      {
        network: 'scrollSepolia',
        chainId: 534351,
        urls: {
          apiURL: 'https://api-sepolia.scrollscan.com/api',
          browserURL: 'https://sepolia.scrollscan.com/',
        },
      },
    ],
  },
};

export default config;
```

Ensure you have the necessary environment variables in your `.env` file:
```bash
SCROLL_ALCHEMY_URL=<Your Alchemy RPC URL>
PRIVATE_KEY=<Your Wallet Private Key>
```

## How to Deploy

### 1. Clone the repository
```bash
git clone https://github.com/Lukman-01/Hackathons/tree/main/Scroll-2024
cd Scroll-2024
```

### 2. Install dependencies
```bash
npm install
```

### 3. Compile the contracts
```bash
npx hardhat compile
```

### 4. Deploy the contracts
```bash
npx hardhat ignition deploy ./ignition/modules/deploy.ts --network scrollTestnet
```

### 5. Verify contracts
```bash
npx hardhat verify --network scrollSepolia <contract address> <space separated constructor parameters>
```

## Factory Contract Integration
The platform is scalable by introducing a **factory contract** for creating multiple escrow markets with distinct tokens, fee structures, and rulesets. This will allow other developers to create custom markets using the TrustBazaar framework.

## Public GitHub Repository
Check out the full project source code at [TrustBazaar GitHub Repository](https://github.com/Lukman-01/Hackathons/tree/main/Scroll-2024).

---

## Project Features

### Creativity
TrustBazaar introduces a novel way of handling decentralized escrow services with integrated arbitration and reputation mechanisms, enhancing trust in peer-to-peer transactions without intermediaries.

### Technicality
The platform leverages Scroll's scalability, Ethereum compatibility, and efficient ERC20 token integration. It includes a well-designed escrow smart contract with safe fund management, dispute resolution, and reputation tracking, optimizing the user experience while ensuring robust security.

### Usability
TrustBazaar is designed for everyday users who seek secure, trustless transactions for buying and selling goods or services online. With a factory contract extension, anyone can deploy their own custom marketplace using the framework.
