import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';


import { MenuListArray2 } from '.';

const Headers = () => {
    const navigate=useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
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

  const handleMenuActive = (title) => {
    setState((prevState) => ({
      ...prevState,
      active: prevState.active === title ? null : title
    }));
  };

  const handleSubmenuActive = (title) => {
    setState((prevState) => ({
      ...prevState,
      activeSubmenu: prevState.activeSubmenu === title ? null : title
    }));
  };

  const handleLogout = () => {
    // Remove the access token from local storage
    localStorage.removeItem('auth-token');

    // Navigate to the login page
    navigate('/logins');
  };

  return (
    <header className="header_in clearfix">
  <div
          className={`fixed top-0 left-0 px-20 w-full  h-[4.5rem]  flex justify-between   items-center z-[30] ${isScrolled ?"bg-white  z-[30] shadow-lg  ":"text-black-300 font-bold"
            } `}>
        <div id="logo">
          <Link to="/">
            <img src=""alt="logo" width="140" height="35"  />
          </Link>
        </div>
        {/* Rest of the header content */}
        <ul className="flex   gap-10">
          {MenuListArray2.map((data, index) => (
            <li key={index}>
              <Link to={data.to}>{data.title}</Link>
            </li>
              
          ))}
          <li onClick={handleLogout}>logout</li>
        </ul>
      
      </div>
    </header>
  );
};

export default Headers;
