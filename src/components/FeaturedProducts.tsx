import React from 'react'

const products = [
  {
    id: 1,
    name: "Midnight Elixir",
    description: "A captivating blend of amber and exotic spices",
    price: "$320",
    image: "https://images.unsplash.com/photo-1594035910387-fea47794261f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80"
  },
  {
    id: 2,
    name: "Golden Opulence",
    description: "Luxurious notes of vanilla, sandalwood and musk",
    price: "$285",
    image: "https://images.unsplash.com/photo-1592945403407-9caf930b2c6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80"
  },
  {
    id: 3,
    name: "Royal Essence",
    description: "A sophisticated harmony of rose, oud and patchouli",
    price: "$350",
    image: "https://images.unsplash.com/photo-1608528577891-eb055944f2e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80"
  }
]

const FeaturedProducts = () => {
  return (
    <div className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-serif font-light tracking-wider text-white mb-4">FEATURED FRAGRANCES</h2>
          <div className="w-20 h-0.5 bg-gold mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-40 transition-all duration-300"></div>
                <button className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gold text-black px-6 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  ADD TO CART
                </button>
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-xl font-serif text-white">{product.name}</h3>
                <p className="text-gray-400 mt-1">{product.description}</p>
                <p className="text-gold mt-2 font-light">{product.price}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="border border-gold text-gold px-8 py-3 font-medium hover:bg-gold hover:text-black transition duration-300">
            VIEW ALL PRODUCTS
          </button>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProducts
