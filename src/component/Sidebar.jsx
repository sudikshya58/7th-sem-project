import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Dashboard_sidebar_links } from './Common';
const linkClasses='flex items-center gap-8  text-black font-normal px-3 py-3  hover:bg-blue-300 hover:no-underline'
export const Sidebar = () => {
  return (
  <>
    <div className='flex flex-col p-3    w-60 text-black shadow-sm  bg-gray-50 opacity-100'>
        <div className='flex items-center gap-2 px-1 py-10 ' key="i">
        {/* <FcBullish fontsize={24}/> */}
        {/* <span  className='text-black text-lg mt-4'>Dashboard_view</span> */}
        
        </div> 
        <div
  className='flex-1 mt-4 overflow-y-scroll scroll-smooth py-2 flex-col gap-2'
  style={{
    scrollbarWidth: 'none',         
    '-ms-overflow-style': 'none',   
    '&::-webkit-scrollbar': {
      display: 'none'                
    }
  }}
>
  {Dashboard_sidebar_links.map((item) => (
    <SidebarLink key={item.key} item={item} className="" />
  ))}
</div>

      
    </div>

  </>
  )
}
 function SidebarLink({item}){
    const {pathname}=useLocation()
    return (
        <Link to={item.path} className={(pathname===item.path?'text-black ':'text-blue-400 ',linkClasses)}>
  <span className='text-[28px] text-black'>{item.icon}</span>
  <span className='text-[18px]'>{item.label}</span>
        </Link>
    )
 }
