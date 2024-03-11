import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const LoginForm = () => {
    const [user, setUser] = useState({
      useremail: "",
      userpassword: "",
    });
    const [alldata, setAllData] = useState([]);
    const [successmessage, setSuccessMessage] = useState("");
    const [errMsg, setErrMsg] = useState("");

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
        if (!user.useremail || !user.userpassword) {
          setErrMsg("Fill all Fields");
          return;
        }

        const response = await axios.post(
          "http://127.0.0.1:5000/logintoken",
          user,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );

        console.log(response);
        console.log(response.data.access_token);
        console.log(localStorage.getItem("auth-token"));

        if (response.data && response.data.access_token) {
       
          localStorage.setItem("auth-token", response.data.access_token);
          navigate("/");
        }
        if (response.status === 201) {
          const responseData = response.data;
          console.log(responseData);
          setAllData([...alldata, responseData]);
          setSuccessMessage(responseData.message);
        } else {
          console.error("error", response.statusText);
          setErrMsg(response.data.message);
          setSuccessMessage("");
        }
      } catch (error) {
        if (error.response && error.response.status === 401) {
          setErrMsg("Authentication failed: Wrong email or password");
          setSuccessMessage("");
          setTimeout(() => {
            setErrMsg("");
          }, 1000);
        } else {
          console.log("error", error);
        }
      }
    };

    return (
      <div className="bg-white rounded-2xl shadow-2xl flex flex-col w-full md:w-1/3 items-center max-w-4xl transition duration-1000 ease-out">
        <h2 className="p-3 text-3xl font-bold text-black">meroLoan</h2>
        <div className="inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div>
        <h3 className="text-xl font-semibold text-blue-400  text-center pt-2">
          Sign In!
        </h3>
        {errMsg && <h1 className="font-bold">{errMsg}</h1>}
        {successmessage && <h1 className="font-bold">{successmessage}</h1>}

        <div className="flex flex-col items-center justify-center">
          <input
            className="border-none font-sans text-[15px] p-3  w-full border-r-[6px] border-gray-300 "
            autoComplete="off"
            name="useremail"
            type="email"
            placeholder="Enter your email "
            onChange={handleInput}
          />
          <input
            className="border-none font-sans text-[15px] p-3  w-full border-r-[6px]  border-gray-300"
            autoComplete="off"
            name="userpassword"
            type="password"
            placeholder="Enter your password"
            onChange={handleInput}
          />

          <button
            className="rounded m-2 hover:text-white bg-blue-400 w-4/5 px-4 py-2 shadow-md   hover:bg-black  transition duration-200 ease-in"
            onClick={handleSubmit}
          >
            Sign In
          </button>
        </div>
        <div className="inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div>
        <p className="text-blue-400 mt-4 text-sm">Don't have an account?</p>
        <p
          className="text-blue-400 mb-4 text-sm  font-medium cursor-pointer"
          onClick={() => navigate('/register')}
        >
          Create a New Account?
        </p>
      </div>
    );
  };

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen md:py-2">
      <main className="flex items-center w-full px-2 md:px-20">
        <div className="hidden md:inline-flex flex-col flex-1 space-y-1">
          <p className="text-6xl text-blue-500 font-bold">Mero Loan</p>
          <p className="font-medium text-lg leading-1 text-pink-400">
            Empower dreams, predict loans. Your financial journey starts here
          </p>
        </div>
        <LoginForm />
      </main>
    </div>
  );
};

export default Login;
