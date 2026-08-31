import { useEffect, useState } from "react"

export default function Module2Q2() {
  const [postId, setPostId] = useState(1)
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  useEffect(() => {
    // 1. Create AbortController instance
    const controller = new AbortController()

    const fetchPost = async () => {
      try {
        setLoading(true)
        setError("")

        // 2. Pass controller.signal to fetch()
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`, {
          signal: controller.signal,
        })

        if (!res.ok) throw new Error(`HTTP Error: ${res.status}`)

        const data = await res.json()
        setPost(data)
      } catch (err) {
        // 3. Ignore AbortError when request is cancelled
        if (err.name !== "AbortError") {
          setError(err.message || "Failed to fetch post")
        }
      } finally {
        setLoading(false)
      }
    }

    fetchPost()

    // 4. Cleanup: Abort in-flight request when postId changes or component unmounts
    return () => controller.abort()
  }, [postId])

  return (
    <div className="max-w-md mx-auto p-6 bg-slate-900 text-white rounded-2xl border border-slate-800 text-center space-y-4">
      <div className="inline-block text-xs font-semibold uppercase px-3 py-1 bg-cyan-950 text-cyan-400 border border-cyan-500/30 rounded-full">
        Module 2 • Question 2
      </div>
      <h2 className="text-xl font-bold text-white">Race Conditions & AbortController</h2>
      
      {/* Controls */}
      <div className="flex justify-center gap-2 items-center">
        <button
          onClick={() => setPostId((id) => Math.max(1, id - 1))}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-bold transition cursor-pointer"
        >
          Previous
        </button>

        <span className="px-4 py-1.5 bg-slate-800 rounded-lg font-mono text-xs text-cyan-300 border border-slate-700">
          Post ID: {postId}
        </span>

        <button
          onClick={() => setPostId((id) => id + 1)}
          className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 rounded-lg text-xs font-bold transition cursor-pointer"
        >
          Next
        </button>
      </div>

      {/* State Displays */}
      {loading && <p className="text-amber-400 text-sm font-medium animate-pulse">Fetching post #{postId}...</p>}
      {error && <p className="text-rose-500 text-sm font-bold">{error}</p>}

      {!loading && !error && post && (
        <div className="p-4 bg-slate-950 rounded-xl text-left border border-slate-800 space-y-2">
          <h3 className="font-bold text-xs text-cyan-300 capitalize">{post.title}</h3>
          <p className="text-xs text-slate-400 line-clamp-3">{post.body}</p>
        </div>
      )}
    </div>
  )
}
