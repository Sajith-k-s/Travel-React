import React from 'react'
import Destination1 from './Images/Destination1.png'
import Booking1 from './Images/Booking1.png'

function Services() {
  return (
    <div className="container mx-auto px-4 py-16 flex">
    <div className='flex-1'>
    <h2 className="text-lg font-bold text-left text-pink-500 mb-8 ml-40">SERVICES</h2>
    <p className="text-3xl text-center mb-12 font-bold ml-3">Our top value categories for you</p>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-3/6 flex-shrink-0 mr-5">
      <div className="bg-white rounded-lg shadow-md p-6 text-center transition-transform duration-500 ease-in-out transform hover:scale-110">
        <img src={Destination1} alt="Best Tour Guide" className="w-16 h-16 mx-auto mb-4" />
        <h3 className="text-xl font-bold mb-2">Best Tour Guide</h3>
        <p className="text-gray-600">What looked like a small patch of purple grass, above five feet.</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 text-center transition-transform duration-500 ease-in-out transform hover:scale-110">
        <img src={Booking1} alt="Easy Booking" className="w-16 h-16 mx-auto mb-4" />
        <h3 className="text-xl font-bold mb-2">Easy Booking</h3>
        <p className="text-gray-600">Square, was moving across the sand in their direction.</p>
      </div>
      <div className="bg-white rounded-lg shadow-md p-6 text-center">
        {/* Add your third service content here */}
      </div>
    </div>
  </div>
  )
}

export default Services