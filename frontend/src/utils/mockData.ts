export interface Token {
  address: string
  symbol: string
  name: string
  decimals: number
  logo?: string
  price: number
  balance?: string
}

export const mockTokens: Token[] = [
  {
    address: '0x0000000000000000000000000000000000000001',
    symbol: 'BDAG',
    name: 'BlockDAG',
    decimals: 18,
    logo: 'https://via.placeholder.com/32/4f46e5/ffffff?text=BDAG',
    price: 0.005,
    balance: '1,234.56',
  },
  {
    address: '0x0000000000000000000000000000000000000002',
    symbol: 'ETH',
    name: 'Ethereum',
    decimals: 18,
    logo: 'https://via.placeholder.com/32/627EEA/ffffff?text=ETH',
    price: 2500.00,
    balance: '0.5234',
  },
  {
    address: '0x0000000000000000000000000000000000000003',
    symbol: 'USDC',
    name: 'USD Coin',
    decimals: 6,
    logo: 'https://via.placeholder.com/32/2775CA/ffffff?text=USDC',
    price: 1.00,
    balance: '5,000.00',
  },
  {
    address: '0x0000000000000000000000000000000000000004',
    symbol: 'USDT',
    name: 'Tether USD',
    decimals: 6,
    logo: 'https://via.placeholder.com/32/26A17B/ffffff?text=USDT',
    price: 1.00,
    balance: '2,500.00',
  },
  {
    address: '0x0000000000000000000000000000000000000005',
    symbol: 'WBTC',
    name: 'Wrapped Bitcoin',
    decimals: 8,
    logo: 'https://via.placeholder.com/32/F7931A/ffffff?text=WBTC',
    price: 45000.00,
    balance: '0.125',
  },
  {
    address: '0x0000000000000000000000000000000000000006',
    symbol: 'DAI',
    name: 'Dai Stablecoin',
    decimals: 18,
    logo: 'https://via.placeholder.com/32/F5AC37/ffffff?text=DAI',
    price: 1.00,
    balance: '1,000.00',
  },
]

export const mockPools = [
  {
    token0: mockTokens[0],
    token1: mockTokens[1],
    liquidity: '$1,234,567',
    volume24h: '$123,456',
    fee: '0.3%',
  },
  {
    token0: mockTokens[0],
    token1: mockTokens[2],
    liquidity: '$987,654',
    volume24h: '$98,765',
    fee: '0.3%',
  },
]

