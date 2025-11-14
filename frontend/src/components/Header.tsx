'use client'

import { useState } from 'react'

export default function Header() {
  const [walletConnected, setWalletConnected] = useState(false)
  const [walletAddress, setWalletAddress] = useState('')

  const handleConnectWallet = () => {
    // Mock wallet connection
    const mockAddress = '0x' + Array.from({ length: 40 }, () => 
      Math.floor(Math.random() * 16).toString(16)
    ).join('')
    setWalletAddress(mockAddress)
    setWalletConnected(true)
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
            {walletConnected ? (
              <div className="flex items-center space-x-3">
                <div className="px-4 py-2 bg-primary-light rounded-lg text-sm text-white">
                  {walletAddress.slice(0, 6)}...{walletAddress.slice(-4)}
                </div>
                <button
                  onClick={() => {
                    setWalletConnected(false)
                    setWalletAddress('')
                  }}
                  className="px-4 py-2 text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Disconnect
                </button>
              </div>
            ) : (
              <button
                onClick={handleConnectWallet}
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

