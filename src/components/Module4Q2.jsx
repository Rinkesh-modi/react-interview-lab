import { useState, useCallback, memo } from "react"

// A child component wrapped in React.memo (should ONLY re-render when its props change!)
const ChildButton = memo(({ onClick, children }) => {
  console.log(`🎨 ChildButton "${children}" Rendered!`)
  return (
    <button
      onClick={onClick}
      className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-cyan-300 font-bold rounded-lg border border-slate-700 text-xs transition cursor-pointer"
    >
      {children}
    </button>
  )
})

export default function Module4Q2() {
  const [count, setCount] = useState(0)
  const [darkTheme, setDarkTheme] = useState(false)

  // TODO: Wrap `handleIncrement` in `useCallback` so that toggling `darkTheme` 
  // DOES NOT recreate `handleIncrement` and DOES NOT trigger ChildButton to re-render!
  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1)
  },[])

  return (
    <div
      className={`p-6 rounded-3xl max-w-md mx-auto space-y-4 text-center transition-all ${
        darkTheme ? "bg-slate-950 text-white border border-slate-800" : "bg-slate-100 text-slate-900 border border-slate-300"
      }`}
    >
      <div className="inline-block text-xs font-semibold uppercase px-3 py-1 bg-cyan-950 text-cyan-400 border border-cyan-500/30 rounded-full">
        Module 4 • Question 2
      </div>
      <h2 className="text-xl font-bold">useCallback & React.memo Demo</h2>

      {/* Theme Toggle Button (Triggers parent re-render) */}
      <button
        onClick={() => setDarkTheme((prev) => !prev)}
        className="px-4 py-2 bg-purple-600 text-white font-bold rounded-xl text-xs hover:bg-purple-500 transition cursor-pointer"
      >
        Toggle Parent Theme ({darkTheme ? "Dark 🌙" : "Light ☀️"})
      </button>

      {/* Counter & Child Button */}
      <div className="p-4 bg-slate-900/50 rounded-2xl border border-slate-800 space-y-3">
        <p className="text-xs font-mono text-slate-300">
          Count: <span className="text-cyan-400 font-bold text-sm">{count}</span>
        </p>

        {/* Memoized Child Component */}
        <ChildButton onClick={handleIncrement}>
          ➕ Increment Count
        </ChildButton>
      </div>
    </div>
  )
}
