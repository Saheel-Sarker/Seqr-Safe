import { Search } from 'lucide-react'
import React from 'react'

export default function Searchbar({searchTerm, handleSearch}) {
  return (
    <section aria-labelledby="search-heading">
      <form className="relative flex-1">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full bg-gray-800 text-gray-100 px-4 py-2 rounded-lg placeholder-gray-500"
      />
      <Search className="absolute right-3 top-2.5 text-gray-400" size={16} />
      </form>
    </section>
  )
}
