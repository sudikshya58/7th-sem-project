import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from "../Image/logo.png" 

// import DropdownUser from './DropDownUser';

const DashboardHeaders = (props) => {
  const navigate=useNavigate();
  const handleLogout = () => {
  
    localStorage.removeItem('admin_token');

    navigate('/adminlogin');
  };
  return (
    <header className="fixed top-0 left-0 z-99999 flex w-screen drop-shadow-1   shadow-lg dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex  py-3   w-full pt-1 shadow-2  ">
        <div className="flex justify-start ">
          {/* <!-- Hamburger Toggle BTN --> */}
<div className='flex justify-start w-[60%]'>
          <Link to="/dashboard">
            <img
              src={logo} 
              alt="Loan"
              className="w-40   sm:w-40 h-10 md:w-[300px]  mr-60  r-2xl:w-[100px] md:h-[80px] object-cover  md:object-contain"
            />
          </Link>
          </div>
        </div>



        <div className="flex items-center px-10 gap-3 2xsm:gap-4  w-full justify-end flex-end">
          <ul className="flex items-center gap-2  2xsm:gap-4">
        
            <li className='font-bold cursor-pointer' onClick={handleLogout}>LOGOUT</li>

          </ul>

         
        </div>
      </div>
    </header>
  );
};

export default DashboardHeaders;
