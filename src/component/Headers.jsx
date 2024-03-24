import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
// import DropdownUser from './DropDownUser';

const DashboardHeaders = (props) => {
  const navigate=useNavigate();
  const handleLogout = () => {
  
    localStorage.removeItem('admin_token');

    navigate('/adminlogin');
  };
  return (
    <header className="fixed top-0 left-0 z-99999 flex w-screen drop-shadow-1   shadow-lg dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between py-3 px-3 sm:px-4 pt-1 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4">
          {/* <!-- Hamburger Toggle BTN --> */}

          <Link to="/dashboard">
            <img
              src="../Image/logo.jpg" 
              alt="Loan"
              className="w-40 sm:w-40 h-10 md:w-[240px] r-2xl:w-[100px] md:h-[50px] object-cover  md:object-contain"
            />
          </Link>
        </div>



        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
        
            <li className='font-bold cursor-pointer' onClick={handleLogout}>LOGOUT</li>

          </ul>

         
        </div>
      </div>
    </header>
  );
};

export default DashboardHeaders;
