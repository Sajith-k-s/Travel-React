import React from 'react'
import logo from './Images/logo.jpg'

function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white mt-5 ml-48 mr-30">
    <div className="flex items-center">
      <img src={logo} alt="Travlog Logo" className="w-8 h-8" />
      <span className="ml-2 text-xl font-bold">Travlog</span>
    </div>
    <div className="flex space-x-6">
      <a href="/" className="text-black">Home</a>
      <a href="/discover" className="text-gray-500">Discover</a>
      <a href="/deals" className="text-gray-500">Special Deals</a>
      <a href="/contact" className="text-gray-500">Contact</a>
    </div>
    <div className="flex space-x-8 mr-40">
      <button className="text-black">Log In</button>
      <button className="bg-purple-600 text-white px-6 py-3 rounded-full mr-40">Sign Up</button>
    </div>
  </nav>
  )
}

export default Navbar