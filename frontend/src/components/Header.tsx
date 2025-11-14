'use client'

import { useWeb3 } from '@/contexts/Web3Context'
import { BLOCKDAG_NETWORK } from '@/config/network'
import { formatEther } from 'ethers'

export default function Header() {
  const { wallet, connectWallet, disconnectWallet, switchToBlockDAG } = useWeb3()
  const isWrongNetwork = wallet.isConnected && wallet.chainId !== BLOCKDAG_NETWORK.chainId

  const formatAddress = (address: string) => {
    return `${address.slice(0, 6)}...${address.slice(-4)}`
  }

  const formatBalance = (balance: string | null) => {
    if (!balance) return '0.00'
    const num = parseFloat(balance)
    if (num < 0.01) return num.toFixed(6)
    return num.toFixed(4)
  }

  return (
    <header className="w-full border-b border-gray-800 bg-primary-dark/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-swap-DEFAULT rounded-lg"></div>
              <span className="text-xl font-bold text-white">BlockDAG DEX</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Swap
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Explore
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Pools
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            {wallet.isConnected ? (
              <div className="flex items-center space-x-3">
                {isWrongNetwork && (
                  <button
                    onClick={switchToBlockDAG}
                    className="px-4 py-2 bg-yellow-600 hover:bg-yellow-700 text-white rounded-lg text-sm font-medium transition-colors"
                  >
                    Switch to BlockDAG
                  </button>
                )}
                {wallet.balance && (
                  <div className="px-4 py-2 bg-primary-light rounded-lg text-sm">
                    <span className="text-gray-400">Balance: </span>
                    <span className="text-white font-medium">
                      {formatBalance(wallet.balance)} BDAG
                    </span>
                  </div>
                )}
                <div className="px-4 py-2 bg-primary-light rounded-lg text-sm text-white">
                  {wallet.address && formatAddress(wallet.address)}
                </div>
                <button
                  onClick={disconnectWallet}
                  className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Disconnect
                </button>
              </div>
            ) : (
              <button
                onClick={connectWallet}
                className="px-6 py-2 bg-swap-DEFAULT hover:bg-swap-hover text-white rounded-lg font-medium transition-colors"
              >
                Connect Wallet
              </button>
            )}
          </div>
        </div>
      </div>
    </header>
  )
}

