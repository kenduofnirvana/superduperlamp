import React from 'react'

const Hero = () => {
  return (
    <div className="relative pt-20">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1770&q=80" 
          alt="Luxury perfume" 
          className="w-full h-screen object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center justify-center h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-light tracking-wider text-white mb-6">
            <span className="block">HUELE BIEN</span>
            <span className="block text-xl sm:text-2xl md:text-3xl mt-2 font-light">BY PRUDENT</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-xl mx-auto">
            Discover our exclusive collection of luxury fragrances crafted for those who appreciate the finest scents.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="bg-gold text-black px-8 py-3 font-medium hover:bg-opacity-90 transition duration-300">
              SHOP COLLECTION
            </button>
            <button className="border border-white text-white px-8 py-3 font-medium hover:bg-white hover:bg-opacity-10 transition duration-300">
              DISCOVER MORE
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
