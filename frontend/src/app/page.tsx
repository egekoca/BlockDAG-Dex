import SwapInterface from '@/components/SwapInterface'
import Header from '@/components/Header'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] px-4 py-8">
        <div className="w-full max-w-[480px]">
          <h1 className="text-3xl font-bold text-white mb-2 text-center">
            Swap anytime, anywhere
          </h1>
          <p className="text-gray-400 text-center mb-8">
            Trade tokens on BlockDAG network including BDAG, ETH, and more
          </p>
          <SwapInterface />
        </div>
      </div>
    </main>
  )
}

