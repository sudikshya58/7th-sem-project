import React from 'react'
import Headers from '../component/Header'
import {  useNavigate } from "react-router-dom";

export const NotAcceptPage = () => {
  const navigate=useNavigate();
  const clickAnalysis=()=>{
    navigate('/analysispage');

    }
  return (
   <>
   <Headers/>
   <div className='h-[90vh] mt-40'>
   <div className='flex-col flex items-center'>
    <h1 className='font-bold text-[40px]'>Thank You for Prediction</h1>
    <h2 className='text-[32px]'>Your Loan is not accepted Better try next time!</h2>
    <div className='' onClick={clickAnalysis}>
            <button className='bg-blue-300 p-6 text-black font-bold' onClick={clickAnalysis}>Show Analysis</button>
            </div>
    </div>
    </div>
   </>
  )
}
