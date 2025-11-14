# BlockDAG DEX

A decentralized exchange (DEX) platform built for the BlockDAG network. Swap tokens seamlessly with a modern, Uniswap-inspired interface.

## Project Structure

```
blockdag-dex/
├── frontend/          # Next.js frontend application
│   ├── src/
│   │   ├── app/      # Next.js app router pages
│   │   ├── components/  # React components
│   │   └── utils/    # Utility functions and mock data
│   └── package.json
└── package.json      # Root package.json for workspace
```

## Features

- 🎨 Modern UI inspired by Uniswap
- 🔄 Token swap interface with real-time price calculation
- 🎯 Token selector with search functionality
- 💼 **Real Web3 wallet connection** (MetaMask support)
- 🔗 **Automatic BlockDAG network detection and switching**
- 💰 **Real-time token balance fetching**
- 📊 Price impact and fee display
- 🌙 Dark theme with navy, black, and white color scheme
- ✅ Network validation and error handling

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm run install:all
```

2. Start development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## BlockDAG Network Configuration

- **Network Name**: BlockDag
- **RPC URL**: https://relay.awakening.bdagscan.com
- **Chain ID**: 1043
- **Currency Symbol**: BDAG

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Web3**: ethers.js v6
- **UI**: Custom components with dark theme
- **Wallet**: MetaMask and Web3 compatible wallets

## Development

The project uses Next.js App Router with TypeScript. Components are located in `frontend/src/components/` and pages in `frontend/src/app/`.

### Wallet Connection

The app supports MetaMask and other Web3-compatible wallets. When you connect:

1. Click "Connect Wallet" button
2. Approve the connection in MetaMask
3. If you're on a different network, you'll be prompted to switch to BlockDAG network
4. The app will automatically add BlockDAG network to MetaMask if it's not already added

### Token Balances

- Native BDAG balance is automatically fetched from your connected wallet
- ERC20 token balance fetching is ready for implementation (requires token contract addresses)

### Mock Data

Currently using mock token data for token list and prices. Real balances are fetched from the connected wallet.

## License

MIT

