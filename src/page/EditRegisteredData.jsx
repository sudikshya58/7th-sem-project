import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Dashboard_Layout } from '../component/DashboardLayout';

export const EditRegisteredData = () => {
    const navigate=useNavigate();
    const location = useLocation();
    const [userData, setUserData] = useState(location.state || {});

    // useEffect to update userData when location.state changes
    useEffect(() => {
        setUserData(location.state || {});
    }, [location.state]);
    console.log(userData);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://127.0.0.1:5000/registered_users/${userData.id}`, userData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            console.log(response.data);
            navigate("/registered");
        } catch (err) {
            console.log('error updating user', err);
        }
    };
    

    return (
        <>
        <Dashboard_Layout />
            <div className="flex justify-center items-center h-[100vh]">
                <div className="w-full max-w-xs">
                    <h1 className="text-center font-bold mb-4">
                        Edit Registered data
                    </h1>
                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                                Username
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="username"
                                type="text"
                                placeholder="Username"
                                value={userData.username || ''}
                                onChange={(e) => setUserData({ ...userData, username: e.target.value })}
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="useremail">
                                Useremail
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="useremail"
                                type="email"
                                placeholder="Useremail"
                                value={userData.useremail || ''}
                                onChange={(e) => setUserData({ ...userData, useremail: e.target.value })}
                            />
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="userphone">
                                Phone number
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                name="userphone"
                                type="number"
                                placeholder="Phone number"
                                value={userData.userphone || ''}
                                onChange={(e) => setUserData({ ...userData, userphone: e.target.value })}
                            />
                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Update
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};
