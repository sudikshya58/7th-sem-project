import React, { useEffect, useState } from 'react';
import { MdOutlineDeleteOutline } from 'react-icons/md';
import { Dashboard_Layout } from '../component/DashboardLayout';
import { FaRegEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export const RegisterDashboard = () => {
    const [registeredData, setRegisteredData] = useState([]);
    const navigate=useNavigate();
    const [selectedUserId, setSelectedUserId] = useState(null);
    const [editedUserData, setEditedUserData] = useState({
        username: '',
        useremail: '',
        userphone: ''
    });
    const iconClass = "text-xl";
    const heading =
  "py-4 text-xl font-bold text-gray-800 pl-4 p-10   bg-blue-100";
    const tableData = "border-b border-[#eee] py-3 px-4 ";

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch('http://127.0.0.1:5000/registered_users');
                const data = await res.json();
                setRegisteredData(data);
            } catch (error) {
                console.error("Error fetching registered users:", error);
            }
        };
        fetchData();
    }, []);
    const handleEdit = (id) => {
        try {
            const userToEdit = registeredData.find(user => user.id === id);
            if (userToEdit) {
                // Pass the user data as state while navigating
                navigate(`/editregister/${id}`, { state: userToEdit }); 
            } else {
                console.log("User not found for id:", id);
                // Handle the case where user with the specified id is not found
            }
        } catch (error) {
            console.log("Error navigating:", error);
            // Handle navigation error if necessary
        }
    };
    
    
    const handleDelete = async (id) => {
        try {
            const response = await fetch(`http://127.0.0.1:5000/registered_users/${id}`, {
                method: 'DELETE'
            });
            if (response.ok) {
                const updatedData = registeredData.filter(user => user.id !== id);
                setRegisteredData(updatedData);
            } else {
                console.error('Failed to delete user');
            }
        } catch (error) {
            console.error('Error deleting user:', error);
        }
    };

    return (
        <>
            <Dashboard_Layout />
            <div className="py-4 px-6 mt-20 ml-60">
                <h2 className="text-xl font-bold mb-4">Registered Users</h2>
                <div className="overflow-x-auto border  border-gray-100">
                    <table className="w-full table-auto border-collaps">
                        <thead>
                            <tr className="bg-gray-200 text-left">
                                <th className={heading}>Username</th>
                                <th className={heading}>Useremail</th>
                                <th className={heading}>Phone</th>
                                <th className={heading}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {registeredData.map((user,id) => (
                                <tr key={user.id} className={id % 2 === 0 ? 'bg-gray-100' : ''}>
                                    <td className={tableData}>{user.username}</td>
                                    <td className={tableData}>{user.useremail}</td>
                                    <td className={tableData}>{user.userphone}</td>
                                    <td className={tableData}>
                                        <div className="flex items-center space-x-3.5">
                                            <span className="hover:text-primary cursor-pointer">
                                                <FaRegEye
                                                    className={iconClass}
                                                    onClick={() => handleEdit(user.id)}
                                                />
                                            </span>
                                            <span
                                                className="hover:text-primary cursor-pointer"
                                                onClick={() => handleDelete(user.id)}
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
