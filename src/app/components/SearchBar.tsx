"use client";
import { useState } from "react";

export const Search = () => {
  const [query, setQuery] = useState<string>();

  return (
    <div className="pt-2 relative mx-auto text-gray-600">
      <input
        className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
        type="search"
        name="search"
        placeholder="Search"
        onChange={(e) => {
          setQuery(e.target.value);
        }}
      />
      <button type="submit" className="absolute right-0 top-4  mr-4">
        🔍
      </button>
    </div>
  );
};
