import { useState, useEffect } from 'react'

export default function Module2Q1() {
  const [endpoint, setEndpoint] = useState('posts') // 'posts', 'error', 'empty'
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true
    setLoading(true)
    setError(null)

    async function fetchData() {
      try {
        let url = 'https://jsonplaceholder.typicode.com/posts?_limit=4'
        if (endpoint === 'error') url = 'https://jsonplaceholder.typicode.com/invalid-endpoint-404'
        if (endpoint === 'empty') url = 'https://jsonplaceholder.typicode.com/posts?userId=99999'

        const res = await fetch(url)
        
        // ⚠️ CRITICAL: fetch() does not reject on 404/500! Must check res.ok manually.
        if (!res.ok) {
          throw new Error(`HTTP ${res.status}: ${res.statusText || 'Failed to fetch data'}`)
        }

        const json = await res.json()
        if (isMounted) setData(json)
      } catch (err) {
        if (isMounted) setError(err.message)
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    fetchData()

    // Cleanup: Guard flag against state updates on unmounted component
    return () => {
      isMounted = false
    }
  }, [endpoint])

  // Derived State for Empty
  const isEmpty = !loading && !error && Array.isArray(data) && data.length === 0

  return (
    <div className="max-w-2xl w-full bg-slate-900/90 border border-slate-800 rounded-3xl p-8 shadow-2xl space-y-6">
      {/* Title */}
      <div className="text-center space-y-2">
        <div className="inline-block text-xs font-semibold uppercase px-3 py-1 bg-cyan-950 text-cyan-400 border border-cyan-500/30 rounded-full">
          Module 2 • Question 1
        </div>
        <h1 className="text-3xl font-extrabold text-white">API Fetching & 4 UI States</h1>
        <p className="text-slate-400 text-sm">
          Handling <span className="text-cyan-400">Data</span>, <span className="text-amber-400">Loading</span>, <span className="text-rose-400">Error</span>, and <span className="text-purple-400">Empty</span> states.
        </p>
      </div>

      {/* State Trigger Controls */}
      <div className="flex flex-wrap items-center justify-center gap-3 py-2">
        <button
          onClick={() => setEndpoint('posts')}
          className={`px-4 py-2 text-xs font-semibold rounded-xl transition cursor-pointer ${
            endpoint === 'posts'
              ? 'bg-cyan-500 text-slate-950 font-bold shadow-lg shadow-cyan-500/20'
              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          Simulate Data Success
        </button>

        <button
          onClick={() => setEndpoint('empty')}
          className={`px-4 py-2 text-xs font-semibold rounded-xl transition cursor-pointer ${
            endpoint === 'empty'
              ? 'bg-purple-500 text-slate-950 font-bold shadow-lg shadow-purple-500/20'
              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          Simulate Empty State
        </button>

        <button
          onClick={() => setEndpoint('error')}
          className={`px-4 py-2 text-xs font-semibold rounded-xl transition cursor-pointer ${
            endpoint === 'error'
              ? 'bg-rose-500 text-slate-950 font-bold shadow-lg shadow-rose-500/20'
              : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
          }`}
        >
          Simulate 404 Error
        </button>
      </div>

      {/* Dynamic State Rendering Area */}
      <div className="bg-slate-950 border border-slate-800/80 rounded-2xl p-6 min-h-[220px] flex items-center justify-center">
        {/* 1. Loading State */}
        {loading && (
          <div className="flex flex-col items-center gap-3 text-amber-400 animate-pulse">
            <svg className="w-8 h-8 animate-spin" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
            </svg>
            <p className="text-sm font-medium">Fetching API data...</p>
          </div>
        )}

        {/* 2. Error State */}
        {!loading && error && (
          <div className="text-center space-y-2 text-rose-400 max-w-md">
            <div className="w-10 h-10 rounded-full bg-rose-500/10 border border-rose-500/30 flex items-center justify-center mx-auto text-rose-400 font-bold text-lg">
              ✕
            </div>
            <h3 className="font-bold text-base">API Error Triggered</h3>
            <p className="text-xs text-rose-300/80 font-mono bg-rose-950/40 p-2 rounded-lg border border-rose-900/50">
              {error}
            </p>
          </div>
        )}

        {/* 3. Empty State */}
        {isEmpty && (
          <div className="text-center space-y-2 text-purple-300 max-w-sm">
            <div className="w-10 h-10 rounded-full bg-purple-500/10 border border-purple-500/30 flex items-center justify-center mx-auto text-purple-400 text-lg">
              📭
            </div>
            <h3 className="font-bold text-base">No Data Available</h3>
            <p className="text-xs text-slate-400">
              The API returned an empty list (`[]`). Render empty state UI.
            </p>
          </div>
        )}

        {/* 4. Data State */}
        {!loading && !error && !isEmpty && data && (
          <div className="w-full space-y-3">
            <div className="text-xs font-semibold text-slate-400 flex justify-between items-center border-b border-slate-800 pb-2">
              <span>Fetched Posts ({data.length})</span>
              <span className="text-cyan-400 font-mono">200 OK</span>
            </div>
            <div className="grid grid-cols-1 gap-2.5">
              {data.map((item) => (
                <div key={item.id} className="p-3 bg-slate-900 border border-slate-800 rounded-xl text-left">
                  <h4 className="text-xs font-bold text-cyan-300 capitalize truncate">{item.title}</h4>
                  <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
