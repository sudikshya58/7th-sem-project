import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser } from "react-icons/fa";
import logo from "../Image/logo.png"

import { MenuListArray2 } from '.';

const Headers = () => {
  const isAuthenticate=localStorage.getItem('auth-token')
  const userEmail=localStorage.getItem('email');
    const navigate=useNavigate();
  const [ setIsScrolled] = useState(false);
  const handleScroll = () => {
    const scrollY = window.scrollY;
    setIsScrolled(scrollY > 0);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll);
    }
  }, []);
  const [state, setState] = useState({
    active: null,
    activeSubmenu: null
  });



 

  const handleLogout = () => {
    // Remove the access token from local storage
    localStorage.removeItem('auth-token');
    localStorage.removeItem("email");
    navigate('/logins');
  };
  const handleLogin=()=>{
    navigate("/logins")
  }

  return (
    <header className="">
  <div
          className={`fixed top-0 left-0 px-20 w-full  h-[4.5rem]  flex justify-between   items-center z-[30] bg-white text-black  font-bold   shadow-lg  text-black-300 font-bold"
            } `}>
        <div id="logo">
          <Link to="/">
            <img src={logo} alt="logo"   className=' w-10 ' />
          </Link>
        </div>
        {/* Rest of the header content */}
        <ul className="flex   gap-10">
          {MenuListArray2.map((data, index) => (
            <li key={index}>
              <Link to={data.to}>{data.title}</Link>
            </li>
              
          ))}
         
          {isAuthenticate ?   <li onClick={handleLogout}>Logout</li> :<li className='cursor-pointer' onClick={handleLogin}>Login</li>}
        {isAuthenticate ? <li className='flex justify-center gap-3 items-center'> <FaUser/>  {userEmail}</li>:null}
        
        </ul>
      
      </div>
    </header>
  );
};

export default Headers;
