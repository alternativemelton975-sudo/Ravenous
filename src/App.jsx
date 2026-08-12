import { useState } from 'react'
import BusinessList from './BusinessList'
import SearchBar from './SearchBar'
import './App.css'

function App() {
  const [sortBy, setSortBy] = useState('best_match')

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
    },
    {
      imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
      name: 'Sunrise Bakery',
      address: '4040 Bread Lane',
      city: 'Doughville',
      state: 'FL',
      zipCode: '33160',
      category: 'Bakery',
      rating: 4.8,
      reviewCount: 120
    },
    {
      imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
      name: 'Green Leaf Deli',
      address: '5050 Salad Street',
      city: 'VeggieTown',
      state: 'WA',
      zipCode: '98101',
      category: 'Deli',
      rating: 4.2,
      reviewCount: 75
    },
    {
      imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
      name: 'Spice Route Grill',
      address: '6060 Curry Blvd',
      city: 'HeatCity',
      state: 'AZ',
      zipCode: '85001',
      category: 'Indian',
      rating: 4.7,
      reviewCount: 150
    }
  ]

  // Sorting logic
  const sortedBusinesses = [...businesses].sort((a, b) => {
    if (sortBy === 'rating') return b.rating - a.rating
    if (sortBy === 'review_count') return b.reviewCount - a.reviewCount
    return 0 // best_match = original order
  })

  function handleSortChange(sortOption) {
    setSortBy(sortOption)
  }

  function handleSearch(term, location) {
    console.log('Search term:', term)
    console.log('Location:', location)
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

