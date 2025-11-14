'use client'

import { useState } from 'react'
import { Token } from '@/utils/mockData'

interface TokenSelectorProps {
  selectedToken: Token
  onSelect: (token: Token) => void
  tokens: Token[]
}

export default function TokenSelector({ selectedToken, onSelect, tokens }: TokenSelectorProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-primary-light hover:bg-primary-DEFAULT px-4 py-2 rounded-lg transition-colors"
      >
        {selectedToken.logo && (
          <img
            src={selectedToken.logo}
            alt={selectedToken.symbol}
            className="w-6 h-6 rounded-full"
          />
        )}
        <span className="text-white font-medium">{selectedToken.symbol}</span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          className={`text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}`}
        >
          <path
            d="M3 4.5L6 7.5L9 4.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 mt-2 w-80 bg-primary-dark border border-gray-800 rounded-xl shadow-2xl z-50 max-h-96 overflow-hidden">
            <div className="p-4 border-b border-gray-800">
              <input
                type="text"
                placeholder="Search tokens..."
                className="w-full bg-secondary-light border border-gray-700 rounded-lg px-4 py-2 text-white placeholder-gray-500 outline-none focus:border-swap-DEFAULT"
                autoFocus
              />
            </div>
            <div className="overflow-y-auto max-h-80">
              {tokens.map((token) => (
                <button
                  key={token.address}
                  onClick={() => {
                    onSelect(token)
                    setIsOpen(false)
                  }}
                  className={`w-full flex items-center justify-between p-4 hover:bg-primary-light transition-colors ${
                    selectedToken.address === token.address ? 'bg-primary-light' : ''
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    {token.logo && (
                      <img
                        src={token.logo}
                        alt={token.symbol}
                        className="w-8 h-8 rounded-full"
                      />
                    )}
                    <div className="text-left">
                      <div className="text-white font-medium">{token.symbol}</div>
                      <div className="text-sm text-gray-400">{token.name}</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-medium">
                      {token.balance || '0.00'}
                    </div>
                    <div className="text-sm text-gray-400">
                      ${token.price.toFixed(2)}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}

