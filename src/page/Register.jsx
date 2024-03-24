import { useEffect, useState } from "react"

import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import axios from 'axios';
import { Inputs } from "../component/Inputs";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const navigate=useNavigate();

    const initialForm={
        username:"",
        userpassword:"",
        useremail:"",
        userphone:"",
        confirmpassword:"",
    }
    const [successfulMessage,setSuccessfulMessage]=useState('');

    const [form, setForm] = useState(initialForm);
    const [alldata, setAllData] = useState([]);
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setForm((prevForm) => ({
        ...prevForm,
        [name]: value,
      }));
    };
  
    console.log(form)
    const validateInputs = () => {
      if (form.userphone < 0) {
        setSuccessfulMessage("Phone number cannot be negative");
        return false;
      } else if (form.userphone.length < 10) {
        setSuccessfulMessage("Phone number should not be less than 10 digits");
        return false;
      }
      if (form.userpassword !== form.confirmpassword) {
        setSuccessfulMessage("Password and Confirm Password do not match");
        return false;
      } else if (form.userpassword.length < 6) {
        setSuccessfulMessage("Password should be greater than or equal to 6 characters");
        return false;
      }
      return true;
    };
    
 
    const submitForm = async (e) => {
      e.preventDefault();
      if(!validateInputs()){
        return;
      };
  
      try {
        const response = await axios.post('http://127.0.0.1:5000/registers', form, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            // Add any other headers if required
          },
        });
  
        console.log(response);
  
        if (response.status === 201) {
          const responseData = response.data;
          setAllData([...alldata, responseData]);
          console.log(responseData);
     
          setSuccessfulMessage(responseData.message);
          navigate('/logins')
          // Redirect to the home page upon successful login
          // navigate('/home');// Replace '/home' with the desired route
        } else {
          console.error('Error:', response.statusText);
          setSuccessfulMessage(response.statusText);
        }
      } 
      catch (error) {
        if (error.response && error.response.status === 409) {
          setSuccessfulMessage("Email already exists. Please use a different email.");
        }
        else{
          console.error('Error:', error);
        }
      }
    };
    const [showPassword,setShowPassword]=useState("");
  
    const togglePassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
      };
  
  
    
    console.log(form)
    console.log(alldata)
  return (
    <>

   

<div className="rounded-sm overflow-y-hidden overflow-x-hidden  bg-white shadow-default">
        <div className="flex  flex-wrap h-[100vh]  ">

      <div className="hidden md:block w-full  basis-[50%] h-[100vh] ">
      <div className="h-full  ">
        <img
          src="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="login"
          className="h-full w-full object-cover"
        />
               </div>
      </div>
     
      <div className="w-full   xl:w-1/2 ">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
            
              <div className="flex  flex-col justify-center items-center h-[100vh]"> 
    {successfulMessage && (<h1>{successfulMessage}</h1>)}

    <div><h1 className="font-extrabold text-[28px] mb-6">Register Your Account</h1></div>
    <form  className="  " onSubmit={submitForm}>
    <div className="flex flex-col   items-center   p-10 justify-center gap-4">
    <Inputs
          
            basis={100}
         
            value={form.username}
            type={"text"}
            
            onchange=""
            placeH="Full Name"
            onChange={(e) =>
                        setForm({ ...form, username: e.target.value })
                      }
           />
                   <Inputs
          
            basis={100}
            name="useremail"
           value={form.useremail}
            type= {"email" }
            onchange=""
            placeH="user email "
            onChange={(e) =>
                        setForm({ ...form, useremail: e.target.value })
                      }/>
              <Inputs
          
            basis={100}
            name="userphone"
          value={form.userphone}
            type={"number"}
            pattern="[0-9]{10}"
          
            placeH="phone number"
            onChange={(e) =>
                        setForm({ ...form, userphone: e.target.value })
                      }
           />
                <div className="relative">
  <Inputs
    basis={100}
    name="userpassword"
    value={form.userpassword}
    type={showPassword ? "text" : "password"}
    placeH="password"
    onChange={(e) => setForm({ ...form, userpassword: e.target.value })}
  />
  {showPassword ? (
    <IoEyeOutline className="h-6 w-6 absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer" onClick={togglePassword} />
  ) : (
    <IoEyeOffOutline className="h-6 w-6 absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer" onClick={togglePassword} />
  )}
</div>
         <div className="relative">
  <Inputs
    basis={100}
    name="confirmpassword"
    value={form.confirmpasswordpassword}
    type={showPassword ? "text" : "password"}
    placeH="confirm password"
    onChange={(e) => setForm({ ...form, confirmpassword: e.target.value })}
  />
  {showPassword ? (
    <IoEyeOutline className="h-6 w-6 absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer" onClick={togglePassword} />
  ) : (
    <IoEyeOffOutline className="h-6 w-6 absolute top-1/2 transform -translate-y-1/2 right-4 cursor-pointer" onClick={togglePassword} />
  )}
</div>
    </div>
    <div className=" w-full  flex items-cenetr justify-center">
    <button className="w-[60%] cursor-pointer rounded-lg font-bold border  border-primary  p-4 text-white bg-black transition hover:bg-opacity-90" type="submit">Register</button>
    </div>

</form>



</div>
            </div>
          </div>
    
    
    </div>
  </div>
</>
  )
}
