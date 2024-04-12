import React, { useEffect, useState } from 'react';
import {  MdOutlineDeleteOutline } from 'react-icons/md';
import { Dashboard_Layout } from '../component/DashboardLayout';

export const PredictionData = () => {
  
const iconClass = "text-xl";
    const tableData = "border-b border-[#eee] py-3 px-4 ";
    const heading = "py-4 text-xl font-bold text-gray-800 pl-4 p-10 bg-blue-100";
    const [predictionData, setPredictionData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('http://127.0.0.1:5000/api/predictions');
                const data = await response.json();
                setPredictionData(data);
            } catch (error) {
                console.error('Error fetching prediction data:', error);
            }
        };
        fetchData();
    }, []);
    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://127.0.0.1:5000/api/predictions/${id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                // If the deletion was successful, update the predictionData state to remove the deleted item
                setPredictionData(predictionData.filter(prediction => prediction.id !== id));
            } else {
                console.error('Failed to delete prediction');
            }
        } catch (error) {
            console.error('Error deleting prediction:', error);
        }
    };

    return (
        <>
        <Dashboard_Layout/>
        <div className="py-4 px-6 mt-20 ml-60 z-10">
            <h2 className="text-xl font-bold mb-4">Prediction Data</h2>
            <div className="overflow-x-auto border  border-gray-100">
            <table className="w-full table-auto border-collapse">
                <thead>
                    <tr className="bg-gray-200">
                        <th className={heading}>Gender</th>
                        <th className={heading}>Married</th>
                        <th className={heading}>Dependents</th>
                        <th className={heading}>Education</th>
                        <th className={heading}>selfEmployed</th>
                        <th className={heading}>creditHistory</th>
                        <th className={heading}>propertyArea</th>
                        <th className={heading}>applicantIncome</th>
                        <th className={heading}>loanAmount</th>
                        <th className={heading}>loanAmountTerm</th>
                        <th className={heading}>totalIncome</th>
                        <th className={heading}>Action</th>
                       
                        {/* Add other table headers as needed */}
                        <th className={heading}>Prediction Result</th>
                    </tr>
                </thead>
                <tbody>
                    {predictionData.map((prediction, index) => (
                        <tr key={prediction.id} className={index % 2 === 0 ? 'bg-gray-100' : ''}>
                            <td className={tableData}>{prediction.gender}</td>
                            <td className={tableData}>{prediction.married}</td>
                            <td className={tableData}>{prediction.dependents}</td>
                            <td className={tableData}>{prediction.education}</td>
                            <td className={tableData}>{prediction.selfEmployed}</td>
                            <td className={tableData}>{prediction.creditHistory}</td>
                            <td className={tableData}>{prediction.propertyArea}</td>
                            <td className={tableData}>{prediction.applicantIncome}</td>
                            <td className={tableData}>{prediction.loanAmount}</td>
                            <td className={tableData}>{prediction.loanAmountTerm}</td>
                            <td className={tableData}>{prediction.totalIncome}</td>
                            {/* Add other table cells as needed */}
                            <td className={tableData}>{prediction.predictionResult}</td>
                            
                        <td className={tableData}>
                          <div className="flex items-center space-x-3.5">
                        
                            <span
                              className="hover:text-primary cursor-pointer"
                              onClick={() => handleDelete(prediction.id)}
                            >
                              <MdOutlineDeleteOutline className={iconClass} />
                            </span>
                          </div>
                        </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            </div>
        </div>
        </>
    );
};
