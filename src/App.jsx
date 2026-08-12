import { useState } from 'react'
import BusinessList from './BusinessList'
import SearchBar from './SearchBar'
import './App.css'

function App() {
  const [sortBy, setSortBy] = useState('best_match')
  const [searchTerm, setSearchTerm] = useState('')

  const businesses = [
    {
      imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
      name: 'MarginOtto Pizzeria',
      address: '1010 Paddington Way',
      city: 'Flavortown',
      state: 'NY',
      zipCode: '10101',
      category: 'Italian',
      rating: 4.5,
      reviewCount: 90
    },
    {
      imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
      name: 'Another Cafe',
      address: '2020 Cafe St',
      city: 'Coffeetown',
      state: 'CA',
      zipCode: '90210',
      category: 'Cafe',
      rating: 4.0,
      reviewCount: 45
    },
    {
      imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
      name: 'Third Place',
      address: '3030 Third Ave',
      city: 'Thirdcity',
      state: 'TX',
      zipCode: '30303',
      category: 'Restaurant',
      rating: 3.5,
      reviewCount: 67
    }
  ]

  // 🔍 FILTER businesses by name
  const filteredBusinesses = businesses.filter(b =>
    b.name.toLowerCase().includes(searchTerm.toLowerCase())
  )

  // 🔽 SORT filtered businesses
  const sortedBusinesses = [...filteredBusinesses].sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating
    if (sortBy === 'review_count') return b.reviewCount - a.reviewCount
    return 0
  })

  function handleSortChange(option) {
    setSortBy(option)
  }

  function handleSearch(term) {
    setSearchTerm(term)
  }

  return (
    <main className="app">
      <h1>RAVENOUS CAFE</h1>
      <SearchBar onSearch={handleSearch} onSortChange={handleSortChange} />
      <BusinessList businesses={sortedBusinesses} />
    </main>
  )
}

export default App
