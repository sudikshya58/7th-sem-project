import axios from "axios";
import React, { useState } from "react";
// import { navigate } from 'react-router-dom';

import { useNavigate } from "react-router-dom";

export default function Logged() {
  // Initialize useHistory hook

  const [user, setUser] = useState({
    useremail: "",
    userpassword: "",
  });
  
  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setUser({
      ...user,
      [name]: value,
    });
  };

 const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post("http://127.0.0.1:5000/logintoken", user, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (response.data && response.data.access_token) {
        const { access_token } = response.data;
        
        // Show alert for successful login
        alert("Login successful");

        // Log the token to the console
        console.log("Token:", access_token);

        // Store token in local storage
        localStorage.setItem("token", access_token);

        // Navigate to /contact page
        navigate("/contact");
      } else {
        // Show alert for login error
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Error:", error);
      // Handle other errors, if necessary
    }
  };
  console.log(user)
  const navigate = useNavigate();

  return (
    <>
      <div className=" bg-[rgb(226,226,236)]  h-[100vh] w-[100vw] absolute ">
        <div className=" flex items-center justify-center  h-full">
          <div class=" box-border items-center gap-40 flex   rounded-xl  bg-white  w-[98vw] h-[98vh] justify-center  ">
            <div className="h-96 w-[30rem] ">
              <div class="flex-col justify-end text-center  items-center">
                <h1 className="font-extrabold text-[28px]">Welcome back</h1>
                <p className="text-[20px]">Please enter your details.</p>
              </div>
              <div className=" bg-[rgb(226,226,236)] rounded ">
                <form onSubmit={handleSubmit} className="p-10">
                  <div className="">
                    <label className="font-bold ">Email</label>
                    <br />
                    <input
                      className="border-none font-sans text-[15px] p-3  w-full border-r-[6px] border-gray-300 "
                      autoComplete="off"
                      name="useremail"
                      type="email"
                      placeholder="Enter your email "
                      onChange={handleInput}
                    />
                  </div>
                  <div>
                    <label className="font-bold">Password</label>
                    <br></br>
                    <input
                      className="border-none font-sans text-[15px] p-3  w-full border-r-[6px]  border-gray-300"
                      autoComplete="off"
                      name="userpassword"
                      type="password"
                      placeholder="Enter ur password"
                      onChange={handleInput}
                    />
                  </div>
                  <button
                    className="font-bold text-center text-[16px] rounded bg-[black] p-2 text-white  mt-6 w-full"
                    type="submit"
                  >
                    <a href="/">
                      <i className="bx bxl-google"></i> Continue
                    </a>
                  </button>
                  <div class="flex gap-2  justify-between w-full items-center">
                    <div className="w-full bg-gray-400 h-[2px]">
                      <img
                        src="http://127.0.0.1:5500/line-removebg-preview.png"
                        alt=""
                        srcset=""
                        className="  h-[1rem]  text-black"
                      />
                    </div>
                    <div class="text-[14px] w-20">
                      <h2 className="font-bold">OR</h2>
                    </div>
                    <div className="w-full bg-gray-400 h-[2px]">
                      <img
                        src="/line-removebg-preview.png"
                        alt=""
                        srcset=""
                        className=" h-[1rem] text-black"
                      />
                    </div>
                  </div>
                  <div>
                    <button className="font-bold text-center text-[16px] rounded bg-[aliceblue] p-2 text-black  mt-6 w-full">
                      <a href="/">
                        <i className="bx bxl-google"></i> Continue with Google
                      </a>
                    </button>
                  </div>
                  <div class="text-center f">
                    <p>Don't have an account</p>
                    <a href="/register" className="font-bold text-center ">
                      Signup?
                    </a>
                  </div>
                </form>
              </div>
            </div>
            {/* 2ndpart */}

            <div class="h-96 w-96 mt-40 ">
              <img
                src="/laptop.jpg"
                alt="sdsd"
                srcset=""
                className="h-full w-full mr-[70px] border "
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
