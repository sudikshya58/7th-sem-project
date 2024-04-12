import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        useremail: "",
        userpassword: "",
    });
    const [errmsg, setErrMsg] = useState(null);
    const [successmsg, setSuccessMsg] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default form submission behavior
        try {
            const response = await fetch('http://127.0.0.1:5000/admin_login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            console.log(data);
            if (response.ok) {
                console.log("Login successful. Now You can access dashboard");
                localStorage.setItem("admin_token", data.admin_token);
                setSuccessMsg("Login successful. Redirecting...");
                // Add a delay before redirecting
                setTimeout(() => {
                    navigate("/dashboard");
                }, 2000); // Redirect after 1 second (adjust as needed)
            } else {
                setErrMsg(data.error);
            }
        } catch (error) {
            console.error("Error logging in:", error);
            setErrMsg("Error logging in. Please try again later.");
        }
    };
    
    

    return (
        <div className="flex justify-center items-center h-[100vh]">
            <div className="w-full max-w-xs">
                {errmsg && <h1 className="font-bold text-red-500">{errmsg}</h1>}
                {successmsg && <h1 className="font-bold text-green-500">{successmsg}</h1>}
                <h1 className="text-center font-bold mb-4">
                    Admin Dashboard
                </h1>

                <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Useremail
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="username"
                            name="useremail"
                            type="email"
                            placeholder="Username"
                            value={formData.useremail}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            name="userpassword"
                            type="password"
                            placeholder="******************"
                            value={formData.userpassword}
                            onChange={handleChange}
                        />
                        <p className="text-red-500 text-xs italic">Please choose a password.</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                            onClick={handleSubmit}
                        >
                            Sign In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;
