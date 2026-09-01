import { useRef, useState } from "react"


export default function Module3Q1() {
  const [controlled, setControlled] = useState("");

  const [uncontrolled, setUncontrolled] = useState("");
  const uncontrolledRef = useRef();
  const submitHandler = (e) => {
    e.preventDefault();
    setUncontrolled(uncontrolledRef.current.value)
  }

  return <>
    <div className="flex flex-row gap-10">
      <div className="bg-white">
        <input type="text" value={controlled} onChange={(e) => setControlled(e.target.value)} placeholder="Enter data.." className="text-black" />
      
      <p className="text-xs text-slate-300">Typed: {controlled}</p></div>
      <div className="bg-white">
        <form onSubmit={submitHandler}>
          <input ref={uncontrolledRef} defaultValue="" placeholder="Enter data.."  className="text-black" />
          <button type="submit" className="text-black p-2">submit</button>
        </form>
        <h1 className="text-black p-2">{uncontrolled}</h1>
      </div>
    </div>
  </>
}
