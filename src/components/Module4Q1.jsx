import { useState, useMemo } from "react"

// A simulated expensive calculation (e.g. 10,000 loop iterations)
const expensiveCalculation = (num) => {
  console.log("🔥 Expensive Calculation Running...")
  let result = 0
  for (let i = 0; i < 10000000; i++) {
    result += num
  }
  return result
}

export default function Module4Q1() {
  const [number, setNumber] = useState(1)
  const [darkTheme, setDarkTheme] = useState(false)

  // TODO: Use useMemo to memoize `expensiveCalculation(number)` 
  // so toggling `darkTheme` doesn't trigger the heavy 10,000,000 iteration loop!
  const calculationResult = useMemo(() => {
    return expensiveCalculation(number);
  }, [number])

  return (
    <div
      className={`p-6 rounded-3xl max-w-md mx-auto space-y-4 text-center transition-all ${darkTheme ? "bg-slate-950 text-white border border-slate-800" : "bg-slate-100 text-slate-900 border border-slate-300"
        }`}
    >
      <div className="inline-block text-xs font-semibold uppercase px-3 py-1 bg-amber-500/20 text-amber-400 border border-amber-500/30 rounded-full">
        Module 4 • Question 1
      </div>
      <h2 className="text-xl font-bold">useMemo Optimization Demo</h2>

      {/* Number Control */}
      <div className="space-y-2">
        <label className="text-xs font-bold block">Number Input:</label>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value) || 0)}
          className="px-3 py-1 text-sm bg-slate-800 text-white rounded-lg border border-slate-700 w-24 text-center"
        />
      </div>

      {/* Theme Toggle Button (Triggers unrelated re-render) */}
      <button
        onClick={() => setDarkTheme((prev) => !prev)}
        className="px-4 py-2 bg-amber-500 text-slate-950 font-bold rounded-xl text-xs hover:bg-amber-400 transition cursor-pointer"
      >
        Toggle Theme ({darkTheme ? "Dark 🌙" : "Light ☀️"})
      </button>

      {/* Output Result */}
      <div className="p-3 bg-slate-900/50 rounded-xl border border-slate-700/50 font-mono text-xs text-amber-400">
        Calculation Result: <span className="font-bold">{calculationResult}</span>
      </div>
    </div>
  )
}
