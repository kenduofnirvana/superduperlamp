import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import FeaturedProducts from './components/FeaturedProducts'
import Collections from './components/Collections'
import About from './components/About'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <Hero />
      <FeaturedProducts />
      <Collections />
      <About />
      <Footer />
    </div>
  )
}

export default App
