import React from 'react'
import { FaInstagram } from 'react-icons/fa'
import { Follower } from '.'

export const Myloan = () => {
  return (
 <>
      <div className='pb-[70px] pt-[100px] '>
  
    <div className='flex gap-20 '>
    {Follower.map((item, index) => (
  <div key={index} className='border-gray-200 text-center followers-area  items-center justify-center   bg-[#ffffff] border shadow-md p-[35px 30px]  px-8 py-9   w-1/3  '>
    <div className='flex-col'>
      <h3 className='text-[46px] '><span>{item.name}</span></h3>
    
    </div>
    <div>
      <hr className='h-[1px]  mt-[20px] mb-[15px]'/>
      <p className='text-[#666666]  text-[17px] leading-7'>{item.description}</p>
    </div>
  </div>
))}
</div>

  
  </div>
 </>
  )
}
