import { useEffect, useState } from "react"
import Navbar from "../component/Navbar";
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
  
        if (response.status === 200) {
          const responseData = response.data;
          setAllData([...alldata, responseData]);
          console.log(responseData);
  
          // Redirect to the home page upon successful login
          // navigate('/home');// Replace '/home' with the desired route
        } else {
          console.error('Error:', response.statusText);
        }
      } catch (error) {
        console.error('Error:', error);
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
    <Navbar/>
    <div className="flex  flex-col justify-center items-center h-[100vh]"> 
    <div><h1>Register Your Account</h1></div>
    <form  className="  " onSubmit={submitForm}>
    <div className="flex flex-col   items-center  justify-center gap-4">
    <Inputs
            label="user name"
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
            label="Email"
            basis={100}
            name="useremail"
           value={form.useremail}
            type= {"text" }
            onchange=""
            placeH="confirm-password"
            onChange={handleInputChange}/>
              <Inputs
            label="phone number"
            basis={100}
            name="userphone"
          value={form.userphone}
            type={"number"}
            pattern="[0-9]{10}"
          
            placeH="phone number"
            onChange={handleInputChange}
           />
                 <Inputs
            label="password "
            basis={100}
            name="userpassword"
        value={form.userpassword}
            type= {showPassword ? "text" :"password"}
            onchange=""
            placeH="password"
            onChange={handleInputChange}
           />
                      <Inputs
            label="Confirm Password"
            basis={100}
            name="confirmpassword"
           value={form.confirmpassword}
            type= {showPassword ? "text" :"password"}
            onchange=""
            placeH="confirm-password"
            onChange={handleInputChange}
           />
    {/* <div className="flex   border border-gray-500  items-center w-60">
      <input
        type= {showPassword ? "text" :"password"}
        placeholder="Enter Password"
        name="password"
        className="w-full h-full  focus:outline-none p-2"
        value={form.password}
        onChange={handleinputChange}
      />
     
     {showPassword ?(  <IoEyeOutline className="h-6 w-6  ml-4"  onClick={togglePassword} />):(   <IoEyeOffOutline className="h-6 w-6  ml-4 " onClick={togglePassword} />)}
      
     
       

    
    </div> */}

    </div>
    <button className="w-60 border border-r-2 mt-6 bg-blue-400 p-3 rounded text-white" type="submit">Register</button>

</form>
</div>
</>
  )
}
