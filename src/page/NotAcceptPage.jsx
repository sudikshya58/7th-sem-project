import React from 'react'
import Headers from '../component/Header'

export const NotAcceptPage = () => {
  return (
   <>
   <Headers/>
   <div className='h-[90vh] mt-40'>
   <div className='flex-col flex items-center'>
    <h1 className='font-bold text-[40px]'>Thank You for Prediction</h1>
    <h2 className='text-[32px]'>Your Loan is not accepted Better try next time!</h2>
    </div>
    </div>
   </>
  )
}
