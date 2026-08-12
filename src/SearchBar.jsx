import styles from './SearchBar.module.css'
import { useState } from 'react'

function SearchBar({ onSearch, onSortChange }) {
  const [term, setTerm] = useState('')
  const [location, setLocation] = useState('')
  const [sortBy, setSortBy] = useState('best_match')

  function handleSortChange(e) {
    const value = e.target.value
    setSortBy(value)
    onSortChange(value)
  }

  function handleSearch() {
    onSearch(term, location)
  }

  return (
    <div className={styles.searchBar}>
      <div className={styles.searchInputs}>
        <input
          type="text"
          placeholder="Search businesses"
          className={styles.searchTerm}
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />

        <input
          type="text"
          placeholder="Where?"
          className={styles.searchLocation}
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <button className={styles.searchButton} onClick={handleSearch}>
          Let's Go
        </button>
      </div>

      <div className={styles.searchFilters}>
        <div className={styles.filterOptions}>
          <div>
            <input
              type="radio"
              id="best-match"
              name="sortBy"
              value="best_match"
              checked={sortBy === 'best_match'}
              onChange={handleSortChange}
            />
            <label htmlFor="best-match">Best Match</label>
          </div>

          <div>
            <input
              type="radio"
              id="highest-rated"
              name="sortBy"
              value="rating"
              checked={sortBy === 'rating'}
              onChange={handleSortChange}
            />
            <label htmlFor="highest-rated">Highest Rated</label>
          </div>

          <div>
            <input
              type="radio"
              id="most-reviewed"
              name="sortBy"
              value="review_count"
              checked={sortBy === 'review_count'}
              onChange={handleSortChange}
            />
            <label htmlFor="most-reviewed">Most Reviewed</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBar
