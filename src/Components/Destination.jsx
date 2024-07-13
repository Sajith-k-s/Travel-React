import React from 'react'
import Rectangle6 from './Images/Rectangle6.jpeg'
import Rectangle61 from './Images/Rectangle61.jpeg'
import Rectangle62 from './Images/Rectangle62.jpeg'

function Destination() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="max-w-screen-xl px-4 py-8 mx-auto">
        <h2 className="text-lg font-bold text-left text-pink-500">TOP DESTINATION</h2>
        <h1 className="text-3xl font-bold text-left mt-4">Explore top destination</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={Rectangle6} alt="Paradise Beach, Bantayan Island" className="w-full h-64 object-cover transition-transform duration-500 ease-in-out transform hover:skew-y-3" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800">Paradise Beach, Bantayan Island</h3>
              <p className="text-gray-600 mt-2">Rome, Italy</p>
              <div className="flex items-center mt-4">
                <span className="text-lg font-bold text-pink-500">$550.16</span>
                <div className="ml-4 flex items-center">
                <i class="fa-solid fa-star text-yellow-500"></i>
                  {/* <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371.26 1.603.691l1.518 4.674c.3.921-.755 1.688-1.538 1.118l-3.027-2.22A8.012 8.012 0 0118 10c-.544 0-1.053-.228-1.491-.691l-2.641-2.22c-.3-.263-.543-.593-.543-.921H7.053a1 1 0 00-.95-.69h-4.915c-.969 0-1.371-.26-1.603-.691l-1.518-4.674c-.3-.921.755-1.688 1.538-1.118l3.027 2.22A8.012 8.012 0 012 10c.544 0 1.053.228 1.491.691l2.641 2.22c.3.263.543.593.543.921H7.053a1 1 0 00.95.69h4.915c.969 0 1.371.26 1.603.691l1.518 4.674c.3.921-.755 1.688-1.538 1.118l-3.027-2.22A8.012 8.012 0 0118 10c-.544 0-1.053-.228-1.491-.691l-2.641-2.22c-.3-.263-.543-.593-.543-.921H7.053a1 1 0 00-.95-.69h-4.915c-.969 0-1.371-.26-1.603-.691l-1.518-4.674c-.3-.921.755-1.688 1.538-1.118l3.027 2.22A8.012 8.012 0 012 10c.544 0 1.053.228 1.491.691l2.641 2.22c.3.263.543.593.543.921H7.053a1 1 0 00.95.69h4.915c.969 0 1.371.26 1.603.691z" /></svg> */}
                  <span className="ml-2 text-sm font-medium text-gray-500">4.8</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={Rectangle61} alt="Ocean with full of Colors" className="w-full h-64 object-cover transition-transform duration-500 ease-in-out transform hover:skew-y-3" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800">Ocean with full of Colors</h3>
              <p className="text-gray-600 mt-2">Maldives</p>
              <div className="flex items-center mt-4">
                <span className="text-lg font-bold text-pink-500">$20.99</span>
                <div className="ml-4 flex items-center">
                <i class="fa-solid fa-star text-yellow-500"></i>
                  <span className="ml-2 text-sm font-medium text-gray-500">4.5</span>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={Rectangle62} alt="Mountain View, Above the cloud" className="w-full h-64 object-cover transition-transform duration-500 ease-in-out transform hover:skew-y-3" />
            <div className="p-4">
              <h3 className="text-xl font-bold text-gray-800">Mountain View, Above the cloud</h3>
              <p className="text-gray-600 mt-2">United Arab Emeries</p>
              <div className="flex items-center mt-4">
                <span className="text-lg font-bold text-pink-500">$150.99</span>
                <div className="ml-4 flex items-center">
                <i class="fa-solid fa-star text-yellow-500"></i>
                  <span className="ml-2 text-sm font-medium text-gray-500">5.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Destination