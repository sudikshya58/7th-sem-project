import React, { useState } from 'react';
import {banks} from "../component/index";

export const Interest = () => {
    const [selectedBank, setSelectedBank] = useState(null);
    const handleBankClick=(index)=>{
        setSelectedBank(banks[index])
        alert(banks[index]);
    }
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg m-4">
    {banks.map((item,index)=>(<>
    <div className=' rounded overflow-hidden shadow-lg m-4'  key={index}  onClick={() => handleBankClick(index)}>
        <div className="px-6 py-4" >
      <div className="font-bold text-xl mb-2">{item.name}</div>
      <p className="text-gray-700 text-base">
        Interest Rate: {item.interestRate}%
      </p>
    </div>
    </div>
    </>))}
   
  </div>
  )
}
