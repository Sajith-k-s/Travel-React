import React from 'react'
import logo from './Images/logo.jpg'

function Footer() {
  return (
    <div>
    <footer className="bg-white py-16 mb-20">
      <div className="container mx-auto px-4 ml-20">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="/" className="flex items-center">
              <img src={logo} alt="Travlog Logo" className="h-8 mr-3" />
              <span className="text-2xl font-bold text-gray-800">Travlog</span>
            </a>
            <p className="mt-2 text-gray-600 w-80 mt-6">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-gray-800">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-800">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-gray-800">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="ml-10">
            <h3 className="text-xl font-bold mb-4 text-gray-800">Company</h3>
            <ul className="list-none p-0">
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Career
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Mobile
                </a>
              </li>
            </ul>
          </div>

          <div className=" mr-30">
            <h3 className="text-xl font-bold mt-4 text-gray-800">Contact</h3>
            <ul className="list-none p-0">
              <li className="mt-3">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Why Travlog?
                </a>
              </li>
              <li className="mt-2">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Partner with us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  FAQ's
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div className="mr-80">
            <h3 className="text-xl font-bold mt-2 text-gray-800">Meet Us</h3>
            <ul className="list-none p-0">
              <li className="mt-3">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  +00 92 1234 56789
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  info@travlog.com
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-800">
                  205. R Street, New York
                  <br />
                  BD23200
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
    </div>
  )
}

export default Footer