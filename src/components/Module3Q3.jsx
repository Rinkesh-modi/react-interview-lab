import { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";

export default function Module3Q3() {
  const users = [
    {
      name: "Rinkesh",
      role: "Software Engineer"
    },
    {
      name: "Aarav",
      role: "Frontend Developer"
    },
    {
      name: "Priya",
      role: "Backend Developer"
    },
    {
      name: "Rahul",
      role: "Full Stack Developer"
    },
    {
      name: "Ananya",
      role: "UI/UX Designer"
    },
    {
      name: "Vikram",
      role: "DevOps Engineer"
    },
    {
      name: "Neha",
      role: "Product Manager"
    },
    {
      name: "Arjun",
      role: "Software Architect"
    },
    {
      name: "Sneha",
      role: "QA Engineer"
    },
    {
      name: "Karan",
      role: "Data Engineer"
    },
    {
      name: "Isha",
      role: "Mobile Developer"
    }
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm=useDebounce(searchTerm,2000);
  const userFilter=users.filter((user)=>user.name.toLocaleLowerCase().includes(debouncedSearchTerm.toLocaleLowerCase()))

  return <>
    <div className="flex flex-col text-center">
      <h1 className="text-2xl font-bold">Module 3 - Question 3</h1>
      <h2 className="text-xl">Custom hook Debouncing</h2>
      <input className="border border-1 border-white mb-2" value={searchTerm} placeholder="search user" onChange={(e)=>setSearchTerm(e.target.value)} />
      <h1 className="text-xs font-bold">search term: <span>{searchTerm}</span></h1>
      <h1 className="text-xs font-bold">debounced search term: <span>{debouncedSearchTerm}</span></h1>
      <div className="border border-1 border-white">
        {userFilter && userFilter.map((user) => (<div className="flex justify-between text-left" key={user.name}>
          <h1>{user.name}</h1>
          <h1>{user.role}</h1>
        </div>))}
      </div>
    </div>
  </>
}