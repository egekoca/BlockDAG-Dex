export interface Token {
  address: string
  symbol: string
  name: string
  decimals: number
  logo?: string
  price: number
  balance?: string
}

export interface SwapInfo {
  rate: number
  priceImpact: number
  networkFee: string
}

