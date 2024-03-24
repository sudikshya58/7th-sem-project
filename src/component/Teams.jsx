import React from 'react'
import { Link } from 'react-router-dom'
import { TeamMember } from '.'

export const Teams = () => {
  return (
  <>
  <div >
     <div className='text-center mb-[50px]  ml-auto mr-auto'>
    <span className="font-uppercase text-[17px] font-normal mb-[10px]">Teams</span>
    <h1 className='text-[36px] text-[#000000] font-bold'>OUR TEAMS</h1>
    </div>

    <div className="flex  gap-10  shadow-xl border border-gray-100 relative overflow-hidden">
    {TeamMember.map((item, index) => (
        <div className="w-1/3 relative" key={index}>
            <Link to={"/instructor"}>
                <img src="" alt="" className="h-[25rem] w-full  object-cover" />
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gray-800  bg-opacity-50 text-center ">
                    <h5 className="text-white text-[20px]  font-bold">{item.name}</h5>
                    <span className="text-[#46d46e] font-bold text-[16px]">{item.position}</span>
                </div>
            </Link>
        </div>
    ))}
</div>
</div>

  </>
  )
}
