// const { data, loading, error, refetch } = useFetch('https://api.example.com/posts');

import { useEffect, useState } from "react"

const useFetch = (url) => {
    const [data, setData] = useState();
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [refetch, setRefetch] = useState(false);
    useEffect(() => {
        setLoading(true);
        fetch(url).then((res) => {
            if (res.ok) {
                return res.json()
            } else { setError(true); setRefetch(true) }
        }).then((res) => setData(res)).finally(() => setLoading(false))

    }, [])
    return { data, loading, error, refetch };
}

export default useFetch;



// import { useEffect, useState } from "react";

// const useFetch = (url) => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState("");
//   const [reload, setReload] = useState(0); // Trigger counter for refetching

//   useEffect(() => {
//     if (!url) return;
//     setLoading(true);
//     setError("");

//     fetch(url)
//       .then((res) => {
//         if (!res.ok) throw new Error(`HTTP Error: ${res.status}`);
//         return res.json();
//       })
//       .then((dataPayload) => {
//         setData(dataPayload);
//       })
//       .catch((err) => {
//         setError(err.message || "Failed to fetch data");
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, [url, reload]); // Re-fetch when url or reload changes

//   // Refetch function component can call on button click:
//   const refetch = () => setReload((prev) => prev + 1);

//   return { data, loading, error, refetch };
// };

// export default useFetch;
