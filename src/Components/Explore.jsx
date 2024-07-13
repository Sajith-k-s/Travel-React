import React from 'react'
import Rectangle1 from './Images/Rectangle1.jpeg'
import Rectangle2 from './Images/Rectangle2.jpeg'
import Rectangle3 from './Images/Rectangle3.jpeg'
import logo1 from './Images/img4.jpg'

function Explore() {
  return (
    <div className="flex flex-col items-center bg-white p-8">
      <div className="text-center mb-8 flex-1">
        <button className="bg-pink-200 text-pink-600 px-4 py-2 rounded-full mb-4">Explore the world!  <i class="fa-solid fa-briefcase text-pink"></i></button>
        <h1 className="text-5xl font-bold mb-4">Travel <span className="text-pink-500">top destination</span> of the world</h1>
        <p className="text-gray-500 mb-8">
          We always make our customer happy by providing as many choices as possible
        </p>
        <div className="flex justify-center space-x-4">
          <button className="bg-purple-600 text-white px-6 py-3 rounded-full">Get Started</button>
          <button className="border border-gray-300 px-6 py-3 rounded-full"><i class="fa-solid fa-globe"></i>  Watch Demo</button>
        </div>
      </div>
      <div className="flex justify-center space-x-4">
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={Rectangle1} alt="Destination 1" className="w-full h-56 object-cover transition-transform duration-500 ease-in-out transform hover:scale-110" />
          </div>
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={Rectangle2} alt="Destination 2" className="w-full h-56 object-cover w-full h-56 object-cover transition-transform duration-500 ease-in-out transform hover:scale-110" />
          </div>
        </div>
        <div className="flex flex-col items-center space-y-4">
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={Rectangle3} alt="Destination 3" className="w-full h-56 object-cover w-full h-56 object-cover transition-transform duration-500 ease-in-out transform hover:scale-110" />
          </div>   
        </div>       
      </div>
    
      <div className='w-200'>  
        <img src={logo1} alt="" />
        </div> 
    </div>
    
  )
}

export default Explore