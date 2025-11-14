'use client'

import { useState, useEffect } from 'react'
import TokenSelector from './TokenSelector'
import { mockTokens } from '@/utils/mockData'
import { useWeb3 } from '@/contexts/Web3Context'
import { useTokenBalance } from '@/hooks/useTokenBalance'
import { BLOCKDAG_NETWORK } from '@/config/network'

export default function SwapInterface() {
  const { wallet, connectWallet, signer } = useWeb3()
  const [fromToken, setFromToken] = useState(mockTokens[0])
  const [toToken, setToToken] = useState(mockTokens[1])
  const [fromAmount, setFromAmount] = useState('')
  const [toAmount, setToAmount] = useState('')
  const [isSwapping, setIsSwapping] = useState(false)
  
  const { balance: fromBalance, loading: fromBalanceLoading } = useTokenBalance(fromToken)
  const { balance: toBalance, loading: toBalanceLoading } = useTokenBalance(toToken)
  
  // Update token balance when token changes
  useEffect(() => {
    // Balance will be updated by useTokenBalance hook
  }, [fromToken, toToken, wallet.address])

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
    
    if (!wallet.isConnected) {
      alert('Please connect your wallet first')
      await connectWallet()
      return
    }

    if (wallet.chainId !== BLOCKDAG_NETWORK.chainId) {
      alert('Please switch to BlockDAG network')
      return
    }

    if (!signer) {
      alert('Wallet signer not available')
      return
    }

    if (parseFloat(fromAmount) > parseFloat(fromBalance)) {
      alert('Insufficient balance')
      return
    }
    
    setIsSwapping(true)
    try {
      // TODO: Implement actual swap with smart contract
      // This is a placeholder for the swap transaction
      // const swapContract = new ethers.Contract(SWAP_CONTRACT_ADDRESS, SWAP_ABI, signer)
      // const tx = await swapContract.swap(...)
      // await tx.wait()
      
      // Mock swap for now
      await new Promise(resolve => setTimeout(resolve, 2000))
      alert(`Swapped ${fromAmount} ${fromToken.symbol} for ${toAmount} ${toToken.symbol}`)
      setFromAmount('')
      setToAmount('')
    } catch (error: any) {
      console.error('Swap error:', error)
      alert(`Swap failed: ${error.message || 'Unknown error'}`)
    } finally {
      setIsSwapping(false)
    }
  }

  const isValidSwap = 
    wallet.isConnected &&
    wallet.chainId === BLOCKDAG_NETWORK.chainId &&
    fromAmount && 
    parseFloat(fromAmount) > 0 && 
    parseFloat(fromAmount) <= parseFloat(fromBalance)

  return (
    <div className="bg-primary-dark/80 backdrop-blur-sm rounded-2xl border border-gray-800 p-6 shadow-2xl">
      <div className="space-y-4">
        {/* From Token */}
        <div className="bg-secondary-light rounded-xl p-4 border border-gray-800">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">You pay</span>
            <div className="flex items-center space-x-2">
              <span className="text-xs text-gray-500">
                Balance: {fromBalanceLoading ? '...' : parseFloat(fromBalance).toFixed(6)} {fromToken.symbol}
              </span>
              {wallet.isConnected && (
                <button
                  onClick={() => setFromAmount(fromBalance)}
                  className="text-xs text-swap-DEFAULT hover:text-swap-hover transition-colors"
                >
                  MAX
                </button>
              )}
            </div>
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
              Balance: {toBalanceLoading ? '...' : parseFloat(toBalance).toFixed(6)} {toToken.symbol}
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
          {isSwapping 
            ? 'Swapping...' 
            : !wallet.isConnected 
            ? 'Connect Wallet' 
            : wallet.chainId !== BLOCKDAG_NETWORK.chainId
            ? 'Switch to BlockDAG Network'
            : isValidSwap 
            ? 'Swap' 
            : 'Enter an amount'}
        </button>
      </div>
    </div>
  )
}

