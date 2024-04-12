import React from 'react'
import { Link } from 'react-router-dom'
import loanprediction from "../Image/loanprediction.jpg"

export const About = () => {
  return (
   <>
      <div className='flex gap-10 mt-[90px]  pb-[20px]'>
     <div className='w-2/3  '>
      <img src={loanprediction} alt="" className='w-80 h-92' />
     </div>
     <div className='pl-[30px] pt-[60px]'>
<h1 className='capitalize text-[17px] font-normal mb-[10px]'>About us</h1>
<h2 className='mb-[18px] text-[36px] font-bold'>Welcome To Loanday.</h2>
<p className='leading-7 text-[#666666] text-[17px] mb-[15px]'>At Credence, we specialize in loan prediction services, helping users determine their eligibility for loans based on key factors like income, marital status, and gender. Our platform also enables users to calculate interest rates using bank rates and predicted data stored securely in our database..</p>
<p className='leading-7 text-[#666666] text-[17px] mb-[15px]'>Our mission is to empower users to make informed financial decisions, guiding them towards a more secure future. Join us on this journey towards financial empowerment at Credence.</p>
<div>
     <Link to="/about"> <button className='text-white bg-blue-300 to-purple-500 text-[15px] font-bold  p-6 w-[12rem]'>ABOUT US</button></Link>
     </div>
     </div>
    
    </div>
   </>
  )
}
