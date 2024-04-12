import React, { useState, useEffect } from 'react';
import { banks } from "../component/index";
import { useLocation } from 'react-router-dom';
import Headers from '../component/Header';
import { Link, useNavigate } from "react-router-dom";

export const Interest = () => {
    const navigate=useNavigate();
    const [selectedBank, setSelectedBank] = useState(null);
    const [simpleInterest, setSimpleInterest] = useState(0);
    const [timePeriod, setTimePeriod] = useState(1);
    const [principal, setPrincipal] = useState(0);
    const [monthlyinterest,setmonthlyinterest]=useState(0);

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
        const monthlyinterestRate=interestRate/12;
        const interest = (principal * interestRate * timePeriod/12) / 100;
        const monthlyinterest=(principal * monthlyinterestRate * 1) / 100;
        setSimpleInterest(interest);
        setmonthlyinterest(monthlyinterest);
       
    };
    const clickAnalysis=()=>{
    navigate('/analysispage');

    }

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
                            Rate: {item.interestRate}%
                        </p>
                    </div>
                </div>
            ))}
            </div>

<div className=' flex items-center justify-center mb-10 mt-6 '>
            {selectedBank && (
                <div className="px-6  w-[28rem] max-w-[28rem] text-center h-36 shadow-xl bg-[#D6EAF8] py-4">
                    <p className='font-bold text-[20px] line-clamp-1'>Selected Bank: {selectedBank.name}</p>
                    <p className='font-bold text-red-800  text-[20px]'>Total Loan Installment Amount: {simpleInterest.toFixed(2)} Rs</p>
                    <p className='font-bold text-red-800  text-[20px]'>Monthly pay: {monthlyinterest.toFixed(2)} Rs</p>
                </div>
            )}
            </div>
<div className='' onClick={clickAnalysis}>
            <button className='bg-blue-300 p-6 text-black font-bold' onClick={clickAnalysis}>Show Analysis</button>
            </div>
        </div>
        </>
    );
};
