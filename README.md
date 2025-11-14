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
- 💼 Mock wallet connection
- 📊 Price impact and fee display
- 🌙 Dark theme with navy, black, and white color scheme

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
- **UI**: Custom components with dark theme

## Development

The project uses Next.js App Router with TypeScript. Components are located in `frontend/src/components/` and pages in `frontend/src/app/`.

### Mock Data

Currently using mock token data for development. Mock data is defined in `frontend/src/utils/mockData.ts`.

## License

MIT

