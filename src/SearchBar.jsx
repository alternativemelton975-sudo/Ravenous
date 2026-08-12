import { useState } from 'react'
import './SearchBar.css'

function SearchBar({ onSearch, onSortChange }) {
  const [term, setTerm] = useState('')

  function handleInputChange(e) {
    setTerm(e.target.value)
  }

  function handleSearchClick() {
    onSearch(term)
  }

  function handleSort(option) {
    onSortChange(option)
  }

  return (
    <div className="search-bar">
      <div className="search-input">
        <input
          type="text"
          placeholder="Search businesses..."
          value={term}
          onChange={handleInputChange}
        />
        <button onClick={handleSearchClick}>Search</button>
      </div>

      <div className="sort-options">
        <label>
          <input
            type="radio"
            name="sort"
            value="best_match"
            onChange={() => handleSort('best_match')}
            defaultChecked
          />
          Best Match
        </label>

        <label>
          <input
            type="radio"
            name="sort"
            value="rating"
            onChange={() => handleSort('rating')}
          />
          Highest Rated
        </label>

        <label>
          <input
            type="radio"
            name="sort"
            value="review_count"
            onChange={() => handleSort('review_count')}
          />
          Most Reviewed
        </label>
      </div>
    </div>
  )
}

export default SearchBar

