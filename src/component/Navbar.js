import React from 'react'
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
  <>
   <div className='flex  gap-20  justify-end  px-10 py-4'>
  <ul className='flex space-x-10 font-bold text-lg'>
    <li><Link to="/" className="no-underline">Home</Link></li>
    <li><Link to="/about" className="no-underline">About</Link></li>
    <li><Link to="/contact" className="no-underline">Contact</Link></li>
  </ul>
  <div className='flex gap-4'>
    <Link to="/login">
      <button className='w-28 border border-gray-300 p-2 text-black font-bold rounded-full'>Login</button>
    </Link>
    <Link to="/signup">
      <button className='w-28 border border-gray-300 p-2 text-black font-bold rounded-full'>Logout</button>
    </Link>
  </div>
</div>

  </>
  )
}
