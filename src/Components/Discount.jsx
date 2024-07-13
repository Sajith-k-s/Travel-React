import React from 'react'
import Group9238 from './Images/Group9238.png'

function Discount() {
  return (
    <div className="bg-white w-11/12">
    <div className="flex flex-col md:flex-row">
      <div className="w-full md:w-full p-6  ml-20">
        <img
          src={Group9238}
          alt="Traveler"
          className="w-full h-2/3 rounded-md shadow-md"
        />
      </div>
      <div className="w-60 md:w-1/2 p-6 w-3/4">
        <h1 className="text-lg font-bold mb-4 text-pink-500">
          TRAVEL POINT
        </h1>
        <h2 className="text-3xl font-bold mb-4">
          We helping you find your dream location
        </h2>
        <p className="text-gray-500 mb-6">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It has
          roots in a piece of classical Latin literature from 45 BC.
        </p>
        <div className="grid grid-cols-2 gap-4 w-full">
          <div className="bg-white rounded-md shadow-md p-4 text-center transition-transform duration-500 ease-in-out transform hover:scale-110">
            <h3 className="text-2xl font-bold text-orange-500">500+</h3>
            <p className="text-gray-500">Holiday Package</p>
          </div>
          <div className="bg-white rounded-md shadow-md p-4 text-center transition-transform duration-500 ease-in-out transform hover:scale-110">
            <h3 className="text-2xl font-bold text-orange-500">100</h3>
            <p className="text-gray-500">Luxury Hotel</p>
          </div>
          <div className="bg-white rounded-md shadow-md p-4 text-center transition-transform duration-500 ease-in-out transform hover:scale-110">
            <h3 className="text-2xl font-bold text-orange-500">7</h3>
            <p className="text-gray-500">Premium Airlines</p>
          </div>
          <div className="bg-white rounded-md shadow-md p-4 text-center transition-transform duration-500 ease-in-out transform hover:scale-110">
            <h3 className="text-2xl font-bold text-orange-500">2k+</h3>
            <p className="text-gray-500">Happy Customer</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Discount