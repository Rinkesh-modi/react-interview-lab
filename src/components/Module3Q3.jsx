import { useState, useEffect } from "react"
import useDebounce from "../hooks/useDebounce"

const MOCK_ITEMS = [
  { id: 1, name: "React JS", category: "Frontend" },
  { id: 2, name: "Redux Toolkit", category: "State Management" },
  { id: 3, name: "Node.js", category: "Backend" },
  { id: 4, name: "TypeScript", category: "Language" },
  { id: 5, name: "Tailwind CSS", category: "Styling" },
  { id: 6, name: "Next.js", category: "Framework" },
]

export default function Module3Q3() {
  const [searchTerm, setSearchTerm] = useState("")
  
  // 1. Pass rapid state `searchTerm` to useDebounce with 500ms delay:
  const debouncedSearchTerm = useDebounce(searchTerm, 500)
  
  const [isSearching, setIsSearching] = useState(false)

  // Track when debouncing is in progress:
  useEffect(() => {
    if (searchTerm !== debouncedSearchTerm) {
      setIsSearching(true)
    } else {
      setIsSearching(false)
    }
  }, [searchTerm, debouncedSearchTerm])

  // Filter items using debounced value (0 extra calculations while typing fast!)
  const filteredItems = MOCK_ITEMS.filter((item) =>
    item.name.toLowerCase().includes(debouncedSearchTerm.toLowerCase()) ||
    item.category.toLowerCase().includes(debouncedSearchTerm.toLowerCase())
  )

  return (
    <div className="max-w-md w-full mx-auto p-6 bg-slate-900 text-white rounded-3xl border border-slate-800 space-y-6 font-sans">
      <div className="text-center space-y-2">
        <div className="inline-block text-xs font-semibold uppercase px-3 py-1 bg-cyan-950 text-cyan-400 border border-cyan-500/30 rounded-full">
          Module 3 • Question 3 & 4
        </div>
        <h2 className="text-xl font-extrabold text-white">Debounced Search Filter</h2>
        <p className="text-xs text-slate-400">Type fast to see debouncing in action (500ms delay)</p>
      </div>

      {/* Input */}
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search items (e.g. React, Node)..."
          className="w-full px-4 py-2 text-sm bg-slate-950 border border-slate-700 rounded-xl text-white focus:outline-none focus:border-cyan-400"
        />
        {isSearching && (
          <span className="absolute right-3 top-2.5 text-xs text-amber-400 font-mono animate-pulse">
            ⏳ Waiting 500ms...
          </span>
        )}
      </div>

      {/* Status Indicators */}
      <div className="grid grid-cols-2 gap-2 text-xs font-mono">
        <div className="p-2 bg-slate-950 rounded-lg border border-slate-800">
          <span className="text-slate-400">Raw Input:</span>
          <p className="text-cyan-400 font-bold truncate">{searchTerm || '""'}</p>
        </div>
        <div className="p-2 bg-slate-950 rounded-lg border border-slate-800">
          <span className="text-slate-400">Debounced Value:</span>
          <p className="text-purple-400 font-bold truncate">{debouncedSearchTerm || '""'}</p>
        </div>
      </div>

      {/* Filtered List */}
      <div className="space-y-2">
        <h3 className="text-xs font-bold uppercase text-slate-400 tracking-wider">
          Results ({filteredItems.length})
        </h3>
        {filteredItems.length > 0 ? (
          filteredItems.map((item) => (
            <div
              key={item.id}
              className="p-3 bg-slate-950 rounded-xl border border-slate-800 flex justify-between items-center"
            >
              <span className="font-bold text-sm text-cyan-300">{item.name}</span>
              <span className="text-xs px-2 py-0.5 bg-slate-900 text-slate-400 rounded-md border border-slate-800">
                {item.category}
              </span>
            </div>
          ))
        ) : (
          <p className="text-xs text-rose-400 italic">No matching results found.</p>
        )}
      </div>
    </div>
  )
}
