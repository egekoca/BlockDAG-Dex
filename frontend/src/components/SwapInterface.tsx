'use client'

import { useState } from 'react'
import TokenSelector from './TokenSelector'
import { mockTokens } from '@/utils/mockData'

export default function SwapInterface() {
  const [fromToken, setFromToken] = useState(mockTokens[0])
  const [toToken, setToToken] = useState(mockTokens[1])
  const [fromAmount, setFromAmount] = useState('')
  const [toAmount, setToAmount] = useState('')
  const [isSwapping, setIsSwapping] = useState(false)

  const handleFromAmountChange = (value: string) => {
    setFromAmount(value)
    // Mock calculation - in real app, this would use actual price data
    if (value && !isNaN(parseFloat(value))) {
      const rate = fromToken.price / toToken.price
      setToAmount((parseFloat(value) * rate).toFixed(6))
    } else {
      setToAmount('')
    }
  }

  const handleSwapTokens = () => {
    const tempToken = fromToken
    const tempAmount = fromAmount
    setFromToken(toToken)
    setToToken(tempToken)
    setFromAmount(toAmount)
    setToAmount(tempAmount)
  }

  const handleSwap = async () => {
    if (!fromAmount || parseFloat(fromAmount) <= 0) return
    
    setIsSwapping(true)
    // Mock swap - in real app, this would interact with smart contract
    setTimeout(() => {
      setIsSwapping(false)
      alert(`Swapped ${fromAmount} ${fromToken.symbol} for ${toAmount} ${toToken.symbol}`)
      setFromAmount('')
      setToAmount('')
    }, 2000)
  }

  const isValidSwap = fromAmount && parseFloat(fromAmount) > 0 && parseFloat(fromAmount) <= parseFloat(fromToken.balance || '0')

  return (
    <div className="bg-primary-dark/80 backdrop-blur-sm rounded-2xl border border-gray-800 p-6 shadow-2xl">
      <div className="space-y-4">
        {/* From Token */}
        <div className="bg-secondary-light rounded-xl p-4 border border-gray-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">You pay</span>
            <span className="text-xs text-gray-500">
              Balance: {fromToken.balance || '0.00'} {fromToken.symbol}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <input
              type="number"
              value={fromAmount}
              onChange={(e) => handleFromAmountChange(e.target.value)}
              placeholder="0.0"
              className="bg-transparent text-2xl font-semibold text-white w-full outline-none"
            />
            <TokenSelector
              selectedToken={fromToken}
              onSelect={setFromToken}
              tokens={mockTokens}
            />
          </div>
          <div className="mt-2 text-sm text-gray-500">
            ${fromAmount ? (parseFloat(fromAmount) * fromToken.price).toFixed(2) : '0.00'}
          </div>
        </div>

        {/* Swap Button */}
        <div className="flex justify-center -my-2 relative z-10">
          <button
            onClick={handleSwapTokens}
            className="bg-primary-light hover:bg-primary-DEFAULT border-2 border-secondary-light rounded-full p-3 transition-all hover:scale-110"
            aria-label="Swap tokens"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              className="text-white"
            >
              <path
                d="M10 3V17M10 17L15 12M10 17L5 12"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* To Token */}
        <div className="bg-secondary-light rounded-xl p-4 border border-gray-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">You receive</span>
            <span className="text-xs text-gray-500">
              Balance: {toToken.balance || '0.00'} {toToken.symbol}
            </span>
          </div>
          <div className="flex items-center justify-between">
            <input
              type="text"
              value={toAmount}
              readOnly
              placeholder="0.0"
              className="bg-transparent text-2xl font-semibold text-white w-full outline-none"
            />
            <TokenSelector
              selectedToken={toToken}
              onSelect={setToToken}
              tokens={mockTokens}
            />
          </div>
          <div className="mt-2 text-sm text-gray-500">
            ${toAmount ? (parseFloat(toAmount) * toToken.price).toFixed(2) : '0.00'}
          </div>
        </div>

        {/* Swap Info */}
        {fromAmount && toAmount && (
          <div className="bg-primary-light/50 rounded-lg p-3 space-y-2 text-sm">
            <div className="flex justify-between text-gray-300">
              <span>Rate</span>
              <span className="text-white">
                1 {fromToken.symbol} = {(fromToken.price / toToken.price).toFixed(6)} {toToken.symbol}
              </span>
            </div>
            <div className="flex justify-between text-gray-300">
              <span>Price Impact</span>
              <span className="text-green-400">0.01%</span>
            </div>
            <div className="flex justify-between text-gray-300">
              <span>Network Fee</span>
              <span className="text-white">~0.001 BDAG</span>
            </div>
          </div>
        )}

        {/* Swap Button */}
        <button
          onClick={handleSwap}
          disabled={!isValidSwap || isSwapping}
          className={`w-full py-4 rounded-xl font-semibold text-lg transition-all ${
            isValidSwap && !isSwapping
              ? 'bg-swap-DEFAULT hover:bg-swap-hover text-white shadow-lg shadow-swap-DEFAULT/50'
              : 'bg-gray-700 text-gray-400 cursor-not-allowed'
          }`}
        >
          {isSwapping ? 'Swapping...' : isValidSwap ? 'Swap' : 'Enter an amount'}
        </button>
      </div>
    </div>
  )
}

