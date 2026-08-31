import { useEffect, useState } from "react"

const LoadingUi = () => {
  return <><h1>calling api</h1></>
}
const DisplayPosts = ({ posts }) => {
  return <>
    {posts.length > 0 && posts.map((post) => (<div key={post.id}>
      <h1 className="font-black">{post.title}</h1>
      <p>{post.body}</p>
    </div>))}
  </>
}
export default function Module2Q1() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  useEffect(() => {
    let isMounted = true;
    const fetchPost = async () => {
      try {
        setLoading(true);
        const apiCall = (await fetch('https://jsonplaceholder.typicode.com/posts?_limit=4'));
        if (!apiCall.ok) throw new Error(`HTTP Error: ${apiCall.status}`);
        console.log("apiCall", apiCall);
        const response = await apiCall.json();
        if (isMounted) {
          setData(response);
        }
        console.log("response", response);
      } catch (error) {
        if (isMounted) setError(error?.message || "An unexpected error occurred")
      } finally {
        if (isMounted) setLoading(false);
      }

    }
    fetchPost();
    return () => { isMounted = false }
  }, [])
  return (
    <>
      <div className="w-full flex-1 item-center bg-white text-center">
        <h1 className="text-lg text-black uppercase">api call</h1></div>
      {error && <h2 className="text-red-500 font-bold p-2">{error}</h2>}
      {loading ? <LoadingUi /> : <DisplayPosts posts={data} />}
    </>
  )
}