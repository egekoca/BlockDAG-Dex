'use client'

import { createContext, useContext, useEffect, useState, ReactNode } from 'react'
import { ethers } from 'ethers'
import { WalletState } from '@/types/network'
import { BLOCKDAG_NETWORK_PARAMS, BLOCKDAG_NETWORK } from '@/config/network'

interface Web3ContextType {
  wallet: WalletState
  connectWallet: () => Promise<void>
  disconnectWallet: () => void
  switchToBlockDAG: () => Promise<void>
  provider: ethers.BrowserProvider | null
  signer: ethers.JsonRpcSigner | null
}

const Web3Context = createContext<Web3ContextType | undefined>(undefined)

export function Web3Provider({ children }: { children: ReactNode }) {
  const [wallet, setWallet] = useState<WalletState>({
    address: null,
    isConnected: false,
    chainId: null,
    balance: null,
  })
  const [provider, setProvider] = useState<ethers.BrowserProvider | null>(null)
  const [signer, setSigner] = useState<ethers.JsonRpcSigner | null>(null)

  // Check if wallet is already connected
  useEffect(() => {
    if (typeof window !== 'undefined' && window.ethereum) {
      checkConnection()
      setupEventListeners()
    }
  }, [])

  const checkConnection = async () => {
    try {
      const provider = new ethers.BrowserProvider(window.ethereum)
      const accounts = await provider.listAccounts()
      
      if (accounts.length > 0) {
        const signer = await provider.getSigner()
        const address = await signer.getAddress()
        const network = await provider.getNetwork()
        const balance = await provider.getBalance(address)
        
        setProvider(provider)
        setSigner(signer)
        setWallet({
          address,
          isConnected: true,
          chainId: Number(network.chainId),
          balance: ethers.formatEther(balance),
        })
      }
    } catch (error) {
      console.error('Error checking connection:', error)
    }
  }

  const setupEventListeners = () => {
    if (window.ethereum) {
      window.ethereum.on('accountsChanged', handleAccountsChanged)
      window.ethereum.on('chainChanged', handleChainChanged)
      window.ethereum.on('disconnect', handleDisconnect)
    }
  }

  const handleAccountsChanged = async (accounts: string[]) => {
    if (accounts.length === 0) {
      disconnectWallet()
    } else {
      await checkConnection()
    }
  }

  const handleChainChanged = async (chainId: string) => {
    await checkConnection()
  }

  const handleDisconnect = () => {
    disconnectWallet()
  }

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        alert('Please install MetaMask or another Web3 wallet')
        return
      }

      const provider = new ethers.BrowserProvider(window.ethereum)
      await provider.send('eth_requestAccounts', [])
      
      const signer = await provider.getSigner()
      const address = await signer.getAddress()
      const network = await provider.getNetwork()
      const balance = await provider.getBalance(address)

      setProvider(provider)
      setSigner(signer)
      setWallet({
        address,
        isConnected: true,
        chainId: Number(network.chainId),
        balance: ethers.formatEther(balance),
      })

      // Check if connected to BlockDAG network
      if (Number(network.chainId) !== BLOCKDAG_NETWORK.chainId) {
        const shouldSwitch = confirm(
          `You are connected to a different network. Would you like to switch to BlockDAG network?`
        )
        if (shouldSwitch) {
          await switchToBlockDAG()
        }
      }
    } catch (error: any) {
      console.error('Error connecting wallet:', error)
      if (error.code === 4001) {
        alert('Please connect to MetaMask')
      } else {
        alert(`Error connecting wallet: ${error.message}`)
      }
    }
  }

  const switchToBlockDAG = async () => {
    try {
      if (!window.ethereum) {
        alert('Please install MetaMask')
        return
      }

      try {
        await window.ethereum.request({
          method: 'wallet_switchEthereumChain',
          params: [{ chainId: BLOCKDAG_NETWORK_PARAMS.chainId }],
        })
      } catch (switchError: any) {
        // This error code indicates that the chain has not been added to MetaMask
        if (switchError.code === 4902) {
          try {
            await window.ethereum.request({
              method: 'wallet_addEthereumChain',
              params: [BLOCKDAG_NETWORK_PARAMS],
            })
          } catch (addError) {
            console.error('Error adding BlockDAG network:', addError)
            alert('Error adding BlockDAG network to MetaMask')
          }
        } else {
          console.error('Error switching to BlockDAG network:', switchError)
          alert('Error switching to BlockDAG network')
        }
      }

      // Refresh connection after switching
      await checkConnection()
    } catch (error) {
      console.error('Error switching network:', error)
    }
  }

  const disconnectWallet = () => {
    setWallet({
      address: null,
      isConnected: false,
      chainId: null,
      balance: null,
    })
    setProvider(null)
    setSigner(null)
  }

  return (
    <Web3Context.Provider
      value={{
        wallet,
        connectWallet,
        disconnectWallet,
        switchToBlockDAG,
        provider,
        signer,
      }}
    >
      {children}
    </Web3Context.Provider>
  )
}

export function useWeb3() {
  const context = useContext(Web3Context)
  if (context === undefined) {
    throw new Error('useWeb3 must be used within a Web3Provider')
  }
  return context
}

// Extend Window interface for TypeScript
declare global {
  interface Window {
    ethereum?: {
      request: (args: { method: string; params?: any[] }) => Promise<any>
      on: (event: string, handler: (...args: any[]) => void) => void
      removeListener: (event: string, handler: (...args: any[]) => void) => void
      isMetaMask?: boolean
    }
  }
}

