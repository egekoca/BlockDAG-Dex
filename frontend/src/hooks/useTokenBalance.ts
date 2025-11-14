import { useState, useEffect } from 'react'
import { ethers } from 'ethers'
import { useWeb3 } from '@/contexts/Web3Context'
import { Token } from '@/utils/mockData'

export function useTokenBalance(token: Token | null) {
  const { provider, wallet } = useWeb3()
  const [balance, setBalance] = useState<string>('0')
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!provider || !wallet.address || !token) {
      setBalance('0')
      return
    }

    const fetchBalance = async () => {
      setLoading(true)
      try {
        // If it's the native token (BDAG), get native balance
        if (token.symbol === 'BDAG' || token.address === '0x0000000000000000000000000000000000000001') {
          const balance = await provider.getBalance(wallet.address)
          setBalance(ethers.formatEther(balance))
        } else {
          // For ERC20 tokens, we would need the token contract ABI
          // This is a placeholder - you'll need to implement ERC20 balance fetching
          // const tokenContract = new ethers.Contract(token.address, ERC20_ABI, provider)
          // const balance = await tokenContract.balanceOf(wallet.address)
          // setBalance(ethers.formatUnits(balance, token.decimals))
          setBalance('0')
        }
      } catch (error) {
        console.error('Error fetching token balance:', error)
        setBalance('0')
      } finally {
        setLoading(false)
      }
    }

    fetchBalance()
  }, [provider, wallet.address, token])

  return { balance, loading }
}

