import React, { Suspense } from 'react'
import FrostedGlass from './components/frosted-glass'

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Suspense fallback={
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-white">加载中...</div>
        </div>
      }>
        <FrostedGlass />
      </Suspense>
    </div>
  )
}

export default App 