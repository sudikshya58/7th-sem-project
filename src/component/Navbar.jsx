import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Remove the access token from local storage
    localStorage.removeItem('token');

    // Navigate to the login page
    navigate('/login');
  };

  return (
    <>
      <div className='flex gap-20 justify-end w-full px-10 py-4'>
        <ul className='flex space-x-10 font-bold text-lg'>
          <li><Link to="/" className="no-underline">Home</Link></li>
          <li><Link to="/about" className="no-underline">About</Link></li>
          <li><Link to="/contact" className="no-underline">Contact</Link></li>
        </ul>
        <div className='flex gap-4'>
          <Link to="/login">
            <button className='w-28 border border-gray-300 p-2 text-black font-bold rounded-full'>Login</button>
          </Link>
          <button onClick={handleLogout} className='w-28 border border-gray-300 p-2 text-black font-bold rounded-full'>Logout</button>
        </div>
      </div>
    </>
  );
}
