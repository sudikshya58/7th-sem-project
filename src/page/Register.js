import { useEffect, useState } from "react"
import Navbar from "../component/Navbar";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import axios from 'axios';




export default function Register() {
  const [data, setData] = useState([]);
    const initialForm={
        name:"",
        password:"",
        email:"",
        phone:"",
        confirmpassword:"",
    }
    useEffect(() => {
      const fetchApiData = async () => {
        try {
          const response = await axios.post('https://your-api-endpoint.com/register', form);
          console.log('Response from API:', response.data);
          // Handle success, update UI, etc.
          setData(response.data?.data);
        } catch (err) {
          console.error(err);
        }
      };
  
      fetchApiData();
    }, [form]);
    const [showPassword,setShowPassword]=useState("");
  
    const togglePassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
      };
    const[alldata,setAllData]=useState([])
    const [form,setForm]=useState(initialForm)
    const handleinputChange = (e) => {
        const { name, value } = e.target;
        setForm((prevform) => ({
          ...prevform,
          [name]: value, // Corrected - stores value directly without brackets
        }));
      };
    const handleSubmit=(e)=>{
        e.preventDefault()
        const Newdata={...form}
        setAllData([...alldata,Newdata]);
        console.log("Stored Data:", alldata);
    }
    console.log(form)
    console.log(alldata)
  return (
    <>
    <Navbar/>
    <div className="flex  flex-col justify-center items-center h-[100vh]"> 
    <div><h1>Register Your Account</h1></div>
    <form  className="  ">
    <div className="flex flex-col   items-center  justify-center gap-4">
    <input type="text" placeholder="Enter Name" name="name" className="w-60 p-2 border  border-r-2 focus:outline-none  border-gray-500" value={form.name} onChange={handleinputChange}/>
    <input type="number" placeholder="Enter Phone" name="phone" className="w-60 p-2 border border-r-2 focus:outline-none  border-gray-500" value={form.phone} onChange={handleinputChange}/>
    <input type="email" placeholder="Enter email" name="email" className="w-60 border p-2 border-r-2 focus:outline-none  border-gray-500" value={form.email} onChange={handleinputChange}/>
    <div className="flex   border border-gray-500  items-center w-60">
      <input
        type= {showPassword ? "text" :"password"}
        placeholder="Enter Password"
        name="password"
        className="w-full h-full  focus:outline-none p-2"
        value={form.password}
        onChange={handleinputChange}
      />
     
     {showPassword ?(  <IoEyeOutline className="h-6 w-6  ml-4"  onClick={togglePassword} />):(   <IoEyeOffOutline className="h-6 w-6  ml-4 " onClick={togglePassword} />)}
      
     
       

    
    </div>
    <input type="password" placeholder="Enter Confirm  Password" name="confirmpassword" className="w-60 p-2 border border-r-2 focus:outline-none  border-gray-500" value={form.confirmpassword} onChange={handleinputChange}/>
    </div>
    <button className="w-60 border border-r-2 mt-6 bg-blue-400 p-3 rounded text-white" onSubmit={handleSubmit}>Register</button>

</form></div>
</>
  )
}
