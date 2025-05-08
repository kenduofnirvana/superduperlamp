import React from 'react'

const Collections = () => {
  return (
    <div className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-light tracking-wider text-white mb-4">OUR COLLECTIONS</h2>
          <div className="w-20 h-0.5 bg-gold mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="relative h-[500px] group overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1595425964071-2c1b7eda0101?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80" 
              alt="Women's Collection" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center p-8">
              <h3 className="text-3xl font-serif text-white mb-4">WOMEN'S COLLECTION</h3>
              <p className="text-gray-200 text-center mb-6 max-w-md">
                Elegant and sophisticated fragrances designed to enhance feminine charm and grace.
              </p>
              <button className="bg-transparent border border-white text-white px-6 py-2 hover:bg-white hover:text-black transition duration-300">
                EXPLORE
              </button>
            </div>
          </div>
          
          <div className="relative h-[500px] group overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80" 
              alt="Men's Collection" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center p-8">
              <h3 className="text-3xl font-serif text-white mb-4">MEN'S COLLECTION</h3>
              <p className="text-gray-200 text-center mb-6 max-w-md">
                Bold and distinctive fragrances crafted for the modern gentleman who appreciates luxury.
              </p>
              <button className="bg-transparent border border-white text-white px-6 py-2 hover:bg-white hover:text-black transition duration-300">
                EXPLORE
              </button>
            </div>
          </div>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="relative h-[300px] group overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80" 
              alt="Limited Edition" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center p-6">
              <h3 className="text-2xl font-serif text-white mb-2">LIMITED EDITION</h3>
              <button className="bg-gold text-black px-4 py-1 text-sm mt-2 hover:bg-opacity-90 transition duration-300">
                DISCOVER
              </button>
            </div>
          </div>
          
          <div className="relative h-[300px] group overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80" 
              alt="Gift Sets" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center p-6">
              <h3 className="text-2xl font-serif text-white mb-2">GIFT SETS</h3>
              <button className="bg-gold text-black px-4 py-1 text-sm mt-2 hover:bg-opacity-90 transition duration-300">
                EXPLORE
              </button>
            </div>
          </div>
          
          <div className="relative h-[300px] group overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1617142137869-325955e2d3cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80" 
              alt="Accessories" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center p-6">
              <h3 className="text-2xl font-serif text-white mb-2">ACCESSORIES</h3>
              <button className="bg-gold text-black px-4 py-1 text-sm mt-2 hover:bg-opacity-90 transition duration-300">
                SHOP NOW
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collections
