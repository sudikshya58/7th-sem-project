import React from 'react'
import { Link } from 'react-router-dom'
import logo from "../Image/logo.png"

export const Footer = () => {
  return (
    <>
   
      <footer className="bg-white mt-[2rem] shadow-2xl border border-gray-200   ">
        <div className="w-[90%] ml-20  p-4   md:py-4">
          <div className="sm:flex sm:items-center justify-between ">
            <Link to="#" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
              <img src={logo} className="h-10" alt=" Logo" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Loan Prediction</span>
            </Link>
            <div>
          <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline">Loan prediction</a>. All Rights Reserved.</span>
          </div>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
                <Link to="#" className="hover:underline me-4 md:me-6">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline me-4 md:me-6">About</Link>
              </li>
              <li>
                <Link to="/predictions" className="hover:underline me-4 md:me-6">Prediction</Link>
              </li>
            
             
            </ul>
           
          </div>
        
        
        </div>
      </footer>
  
    </>
  )
}
