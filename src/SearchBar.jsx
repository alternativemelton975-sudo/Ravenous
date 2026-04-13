import styles from './SearchBar.module.css'

function SearchBar() {
  return (
    <div className={styles.searchBar}>
      <div className={styles.searchInputs}>
        <input type="text" placeholder="Search businesses" className={styles.searchTerm} />
        <input type="text" placeholder="Where?" className={styles.searchLocation} />
        <button className={styles.searchButton}>Let's Go</button>
      </div>
      <div className={styles.searchFilters}>
        <div className={styles.filterOptions}>
          <div>
            <input type="radio" id="best-match" name="sortBy" value="best_match" defaultChecked />
            <label htmlFor="best-match">Best Match</label>
          </div>
          <div>
            <input type="radio" id="highest-rated" name="sortBy" value="rating" />
            <label htmlFor="highest-rated">Highest Rated</label>
          </div>
          <div>
            <input type="radio" id="most-reviewed" name="sortBy" value="review_count" />
            <label htmlFor="most-reviewed">Most Reviewed</label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBar