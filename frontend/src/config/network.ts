import { Chain } from '@/types/network'

export const BLOCKDAG_NETWORK: Chain = {
  chainId: 1043,
  chainName: 'BlockDag',
  nativeCurrency: {
    name: 'BlockDAG',
    symbol: 'BDAG',
    decimals: 18,
  },
  rpcUrls: ['https://relay.awakening.bdagscan.com'],
  blockExplorerUrls: ['https://bdagscan.com'],
}

export const BLOCKDAG_NETWORK_PARAMS = {
  chainId: `0x${BLOCKDAG_NETWORK.chainId.toString(16)}`, // 0x413 in hex
  chainName: BLOCKDAG_NETWORK.chainName,
  nativeCurrency: BLOCKDAG_NETWORK.nativeCurrency,
  rpcUrls: BLOCKDAG_NETWORK.rpcUrls,
  blockExplorerUrls: BLOCKDAG_NETWORK.blockExplorerUrls,
}

