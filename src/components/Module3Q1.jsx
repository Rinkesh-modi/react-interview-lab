import { useState, useRef } from "react"

export default function Module3Q1() {
  // 1. Controlled Input State (React controls state)
  const [controlledName, setControlledName] = useState("")

  // 2. Uncontrolled Input Ref (DOM controls state)
  const uncontrolledRef = useRef(null)
  const [uncontrolledSubmittedValue, setUncontrolledSubmittedValue] = useState("")

  const handleUncontrolledSubmit = (e) => {
    e.preventDefault()
    // Read value directly from DOM ref node on submit:
    setUncontrolledSubmittedValue(uncontrolledRef.current.value)
  }

  return (
    <div className="max-w-xl w-full mx-auto p-6 bg-slate-900 text-white rounded-3xl border border-slate-800 space-y-6 font-sans">
      <div className="text-center space-y-2">
        <div className="inline-block text-xs font-semibold uppercase px-3 py-1 bg-cyan-950 text-cyan-400 border border-cyan-500/30 rounded-full">
          Module 3 • Question 1
        </div>
        <h2 className="text-2xl font-extrabold">Controlled vs Uncontrolled Inputs</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* 1. CONTROLLED INPUT */}
        <div className="p-4 bg-slate-950 rounded-2xl border border-cyan-500/30 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-cyan-400">Controlled (useState)</h3>
            <span className="text-[10px] px-2 py-0.5 bg-cyan-950 text-cyan-300 rounded font-mono">
              Re-renders per keypress
            </span>
          </div>

          <input
            type="text"
            value={controlledName}
            onChange={(e) => setControlledName(e.target.value)}
            placeholder="Type name here..."
            className="w-full px-3 py-2 text-xs bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-400"
          />

          <div className="p-2 bg-slate-900 rounded-lg text-xs font-mono text-slate-300 border border-slate-800">
            State Value: <span className="text-cyan-400 font-bold">{controlledName || '""'}</span>
          </div>
        </div>

        {/* 2. UNCONTROLLED INPUT */}
        <div className="p-4 bg-slate-950 rounded-2xl border border-purple-500/30 space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-bold text-purple-400">Uncontrolled (useRef)</h3>
            <span className="text-[10px] px-2 py-0.5 bg-purple-950 text-purple-300 rounded font-mono">
              0 re-renders while typing
            </span>
          </div>

          <form onSubmit={handleUncontrolledSubmit} className="space-y-3">
            <input
              type="text"
              ref={uncontrolledRef}
              defaultValue=""
              placeholder="Type name here..."
              className="w-full px-3 py-2 text-xs bg-slate-900 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-purple-400"
            />
            <button
              type="submit"
              className="w-full py-1.5 bg-purple-600 hover:bg-purple-500 text-white rounded-xl text-xs font-bold transition cursor-pointer"
            >
              Submit Form (Read Ref)
            </button>
          </form>

          <div className="p-2 bg-slate-900 rounded-lg text-xs font-mono text-slate-300 border border-slate-800">
            Read Value: <span className="text-purple-400 font-bold">{uncontrolledSubmittedValue || '""'}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
