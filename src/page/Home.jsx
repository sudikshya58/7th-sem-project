import React from 'react'
import { Link } from 'react-router-dom'
import Headers from '../component/Header'


export default function Home() {
  return (
<>
<div>
<Headers/>
  <div className='flex '>
    <div className='basis-50 w-[50%] '>
   
    <div className='flex justify-center items-center flex-col translate-y-44'>
 
      <h1 className='text-6xl font-extrabold'>Loan Prediction </h1>
      <h1 className="font-bold mt-8 text-4xl text-blue-700">Using Machine Learning</h1>
    <Link to="/prediction"> <button className='bg-black font-bold text-3xl p-4 text-white rounded-2xl w-80 mt-6'>Prediction</button></Link> 
      </div>
    </div>
    <div className='basis-50'>
      <figure className=''><img src="https://st4.depositphotos.com/13193658/19840/i/450/depositphotos_198405730-stock-photo-happy-young-businessman-working-laptop.jpg" className='h-[100vh] '/></figure>
    </div>
  </div>
   
    </div>
</>
  )
}
