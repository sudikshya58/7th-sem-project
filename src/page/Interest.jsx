import React, { useState, useEffect } from 'react';
import { banks } from "../component/index";
import { useLocation } from 'react-router-dom';
import Headers from '../component/Header';

export const Interest = () => {
    const [selectedBank, setSelectedBank] = useState(null);
    const [simpleInterest, setSimpleInterest] = useState(0);
    const [timePeriod, setTimePeriod] = useState(1);
    const [principal, setPrincipal] = useState(0);

    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const loanAmount = searchParams.get('loanAmount');
    const loanAmountTerm = searchParams.get('loanAmountTerm');

    useEffect(() => {
        console.log("loanAmount:", loanAmount);
        console.log("loanAmountTerm:", loanAmountTerm);
        
        const principalAmount = parseFloat(loanAmount);
        const timePeriodMonths = parseFloat(loanAmountTerm);
    
        console.log("Principal Amount:", principalAmount);
        console.log("Time Period in Months:", timePeriodMonths);
    
        setPrincipal(principalAmount);
        setTimePeriod(timePeriodMonths);
    }, [loanAmount, loanAmountTerm]);

    const handleBankClick = (index) => {
        const clickedBank = banks[index];
        setSelectedBank(clickedBank);
        const interestRate = clickedBank.interestRate;
        const interest = (principal * interestRate * timePeriod) / 100;
        setSimpleInterest(interest);
       
    };

    return (
    <>
    <Headers/>
        <div className="rounded overflow-y-hidden overflow-x-hidden mx-10 mt-20   gap-60 shadow-lg m-4">
        <div className=' flex flex-wrap max-h-[100vh]'>
            {banks.map((item, index) => (
                <div className=' rounded overflow-hidden shadow-lg   w-[22rem] m-4' key={index} onClick={() => handleBankClick(index)}>
                    <div className="px-6 py-4" >
                        <div className="font-bold text-xl mb-2">{item.name}</div>
                        <p className="text-gray-700 text-base">
                            Interest Rate: {item.interestRate}%
                        </p>
                    </div>
                </div>
            ))}
            </div>

<div className=' flex items-center justify-center mb-10 mt-6 '>
            {selectedBank && (
                <div className="px-6  w-[24rem] max-w-[28rem] text-center h-28 shadow-xl bg-[#D6EAF8] py-4">
                    <p className='font-bold text-[20px] line-clamp-1'>Selected Bank: {selectedBank.name}</p>
                    <p className='font-bold text-red-800  text-[20px]'>Simple Interest: {simpleInterest} Rs</p>
                </div>
            )}
            </div>
        </div>
        </>
    );
};
