import React, { useState } from 'react'
import { ShoppingBag, Search, Menu, X } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="flex items-center">
                <div className="text-gold border-2 border-gold rounded-lg p-1">
                  <span className="font-serif text-xl font-bold">HB</span>
                </div>
                <span className="ml-2 text-2xl font-serif text-white">Huele Bien</span>
              </div>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">Home</a>
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">Collections</a>
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">Shop</a>
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">About</a>
              <a href="#" className="text-gray-300 hover:text-white px-3 py-2 text-sm font-medium">Contact</a>
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white">
              <Search size={20} />
            </button>
            <button className="text-gray-300 hover:text-white relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-gold text-black text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </button>
          </div>
          
          <div className="md:hidden flex items-center space-x-4">
            <button className="text-gray-300 hover:text-white">
              <Search size={20} />
            </button>
            <button className="text-gray-300 hover:text-white relative">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-gold text-black text-xs rounded-full h-4 w-4 flex items-center justify-center">
                0
              </span>
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black bg-opacity-95 backdrop-blur-sm">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-white block px-3 py-2 text-base font-medium">Home</a>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Collections</a>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Shop</a>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">About</a>
            <a href="#" className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
