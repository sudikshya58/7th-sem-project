import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';



function Logout() {
  const navigate = useNavigate();


 const handleLogout=()=>{
  navigate("/")
 }

  return (
    <div>
      <h1>Logout</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
}

export default Logout;
