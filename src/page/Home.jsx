import React from 'react'
import { Link } from 'react-router-dom'
import Headers from '../component/Header'
import { About } from '../component/About'
import { Myloan } from '../component/Myloan'
import { Teams } from '../component/Teams'
import { Footer } from '../component/Footer'
import { FaClock } from "react-icons/fa";



export default function Home() {
  return (
<>
<Headers/>
<div>

  <div className='flex '>
    <div className='basis-50   w-[50%] '>
   
    <div className='flex justify-center items-center flex-col mt-20 translate-y-44'>
 
      <h1 className='text-6xl font-extrabold'>Loan Prediction </h1>
      <h1 className="font-bold mt-8 text-4xl text-blue-700">Using Machine Learning</h1>
    <Link to=""> <button className='bg-black font-bold text-3xl p-4 text-white rounded-2xl w-80 mt-6'>Prediction</button></Link> 
   
      </div>
    </div>
    <div className='basis-50'>
      <figure className=''><img src="https://st4.depositphotos.com/13193658/19840/i/450/depositphotos_198405730-stock-photo-happy-young-businessman-working-laptop.jpg" className='h-[100vh] '/></figure>
    </div>
  </div>
  <div className='h-40 flex mt-1 '>
    <img src="https://themewagon.github.io/loan/assets/img/hero/hero_footer.png" alt=''/>
    <div className='bg-[#67aae6] w-full'>
      <div className='flex mx-10 items-center justify-between h-full '>
        <div className='flex gap-4 items-center'>
        <FaClock color='white' size={16} />
        <h1 className='text-white font-bold'>Loan Eligibility Checker</h1>
        </div>
        <div className='flex gap-4 items-center'>
        <FaClock color='white' size={16} />
        <h1 className='text-white font-bold'>Interest Rate Calculator</h1>
        </div>
        <div className='flex gap-4 items-center'>
        <FaClock color='white' size={16} />
        <h1 className='text-white font-bold'>Track and Review</h1>
        </div>
       
      </div>
    </div>
  </div>

  <div className='mr-[8rem] ml-[8rem] '>
  <About/>
  <Myloan/>
  <Teams/>


  </div>
  <Footer/>
   
    </div>
</>
  )
}
