import useFetch from "../hooks/useFetch"

export default function Module2Q3() {
  const { data, loading, error, refetch } = useFetch("https://jsonplaceholder.typicode.com/posts?_limit=4")

  return (
    <div className="max-w-md mx-auto p-6 bg-slate-900 text-white rounded-2xl border border-slate-800 text-center space-y-4 font-sans">
      <div className="inline-block text-xs font-semibold uppercase px-3 py-1 bg-cyan-950 text-cyan-400 border border-cyan-500/30 rounded-full">
        Module 2 • Question 3
      </div>
      <h2 className="text-xl font-bold text-white">Custom `useFetch` Hook Demo</h2>

      {/* Manual Refetch Button */}
      <button
        onClick={refetch}
        className="px-4 py-2 bg-cyan-500 text-slate-950 font-bold rounded-xl text-xs hover:bg-cyan-400 transition cursor-pointer shadow-lg shadow-cyan-500/20"
      >
        🔄 Trigger Refetch
      </button>

      {/* State Displays */}
      {loading && <p className="text-amber-400 text-sm font-medium animate-pulse">Loading API data via useFetch...</p>}
      {error && <p className="text-rose-500 text-sm font-bold">{error}</p>}

      {!loading && !error && Array.isArray(data) && (
        <div className="space-y-2 text-left">
          {data.map((post) => (
            <div key={post.id} className="p-3 bg-slate-950 rounded-xl border border-slate-800">
              <h3 className="font-bold text-xs text-cyan-300 capitalize truncate">{post.title}</h3>
              <p className="text-xs text-slate-400 line-clamp-1 mt-0.5">{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
