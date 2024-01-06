import React, { useState } from 'react'
import Navbar from '../component/Navbar'
import { Link } from 'react-router-dom'


export default function Login() {
    const initialForm={
        name:"",
        password:""
    }
    const [form,setForm]=useState(initialForm)
    const[alldata,setAllData]=useState([])
  
const handleinputChange=(e)=>{
    const {name,value}=e.target;
    setForm((prevform)=>({
        ...prevform ,[name]: value
    }))
}
const submitForm=(e)=>{
    e.preventDefault()
    const NewData={...form}
    setAllData([...alldata,NewData]);
}
console.log(form)
console.log(alldata)



  return (
  <>
   
       <Navbar/>
       
       <div className=' w-full flex flex-col justify-center items-center h-[100vh]'>
       <div> <h1>Login to your account</h1></div>
     <div>
       <form>
     <div>
            <label>Name</label>
            <br/>
            <input className='border border-gray-300 w-72' autoComplete='off'  name="name" onChange={handleinputChange} />
            </div>
            <div>
            <label>Password</label><br></br>
            <input className='border border-gray-300 w-72' autoComplete='off'  name="password" onChange={handleinputChange} />
            </div>
            <button className='bg-blue-300 p-2 mt-4 w-44 rounded' type="submit" onSubmit={submitForm} >Login</button>

        </form>
        <Link to="/register">
        <h1 className=' flex justify-center'>Register Your Account</h1>
       
        </Link>
        </div>
    </div>
  </>
  )
}
