import React from 'react'

const Search = ({searchTerm, setSearchTerm, onSearch}) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onSearch(searchTerm);
    }
  }

  return (
    <div className="search">
      <div>
        <img src="./search.svg" alt="search" />
        <input 
          type="text"
          placeholder="Search for a movie..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </div>
  )
}

export default Search