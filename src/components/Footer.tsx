import React from 'react'
import { Instagram, Twitter, Mail, Phone, MapPin, Facebook } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-6">
              <div className="text-gold border-2 border-gold rounded-lg p-1">
                <span className="font-serif text-xl font-bold">HB</span>
              </div>
              <span className="ml-2 text-2xl font-serif text-white">Huele Bien</span>
            </div>
            <p className="text-gray-400 mb-6">
              Luxury fragrances crafted for those who appreciate the finest scents. Experience the art of perfumery at its most exquisite.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gold transition duration-300">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition duration-300">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-gold transition duration-300">
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-serif mb-6">QUICK LINKS</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-gold transition duration-300">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold transition duration-300">Shop</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold transition duration-300">Collections</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold transition duration-300">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold transition duration-300">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-serif mb-6">CUSTOMER SERVICE</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-gold transition duration-300">FAQ</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold transition duration-300">Shipping & Returns</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold transition duration-300">Store Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold transition duration-300">Payment Methods</a></li>
              <li><a href="#" className="text-gray-400 hover:text-gold transition duration-300">Loyalty Program</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-serif mb-6">CONTACT US</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-gold mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">Online Store, Lagos Nigeria</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-gold mr-3 flex-shrink-0" />
                <span className="text-gray-400">+234 705-473-1538</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-gold mr-3 flex-shrink-0" />
                <span className="text-gray-400">info@huelebien.com</span>
              </li>
            </ul>
            <div className="mt-6">
              <h4 className="text-sm font-medium mb-3">SUBSCRIBE TO OUR NEWSLETTER</h4>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  className="bg-gray-900 text-white px-4 py-2 flex-grow focus:outline-none"
                />
                <button className="bg-gold text-black px-4 py-2 hover:bg-opacity-90 transition duration-300">
                  SUBSCRIBE
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Huele Bien by Prudent. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-gray-300 text-sm">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
