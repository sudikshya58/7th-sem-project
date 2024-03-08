import { useEffect, useState } from "react"

import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import axios from 'axios';
import { Inputs } from "../component/Inputs";
export default function Register() {

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
   
 
    const submitForm = async (e) => {
      e.preventDefault();
  
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

    <div className="flex  flex-col justify-center items-center h-[100vh]"> 
    {successfulMessage && (<h1>{successfulMessage}</h1>)}

    <div><h1 className="font-extrabold text-[28px] mb-6">Register Your Account</h1></div>
    <form  className="  " onSubmit={submitForm}>
    <div className="flex flex-col   items-center  bg-[rgb(226,226,236)]  p-10 justify-center gap-4">
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
            type= {"text" }
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
    <button className="w-60 border border-r-2 mt-6 bg-blue-400 p-3 rounded text-center  text-white" type="submit">Register</button>
    </div>

</form>



</div>
</>
  )
}
