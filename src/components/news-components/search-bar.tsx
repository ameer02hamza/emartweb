"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

function SearchBar() {
  const [input, setInput] = useState("");
  const router = useRouter();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    if (!input) return;
    console.log(input);
    router.push(`/search?term=${input}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-6xl mx-auto flex justify-between items-center px-5 mt-3"
    >
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        placeholder="Search Keywords"
        className="flex-1 rounded-sm placeholder-gray-500 text-gray-500 outline-none 
       bg-transparent dark:text-orange-400"
      />
      <button
        type="submit"
        disabled={!input}
        className="text-orange-400 disabled:text-gray-400 "
      >
        Search
      </button>
    </form>
  );
}

export default SearchBar;
