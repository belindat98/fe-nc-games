import './App.css'
import {Routes, Route} from 'react-router-dom'
import ReviewList from './Components/ReviewList'
import Nav from './Components/Nav'
import Header from './Components/Header'
import { useEffect, useState } from 'react'
import { getAllCategories } from './utils/api'
import Footer from './Components/Footer'

function App() {

  const [allCategories, setAllCategories] = useState([])

  useEffect(() => {
    getAllCategories().then((categoriesFromApi) => {
      setAllCategories(categoriesFromApi)
    })
  }, [])

  return (
    <>
      <Nav categories={allCategories}/>
      <Header />
      <Routes>
        <Route path="/" element={<ReviewList />} />
        <Route path="/reviews" element={<ReviewList />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
