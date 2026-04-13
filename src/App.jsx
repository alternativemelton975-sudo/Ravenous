import BusinessList from './BusinessList'
import SearchBar from './SearchBar'
import './App.css'

function App() {
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

  return (
    <main className="app">
      <h1>RAVENOUS CAFE</h1>
      <SearchBar />
      <BusinessList businesses={businesses} />
    </main>
  )
}

export default App