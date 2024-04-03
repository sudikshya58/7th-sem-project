import axios from "axios";
import React, { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

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
    const [isLoading,setIsLoading]=useState(false);

    console.log('i am here')

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
      setIsLoading(true);
      try {
        if (!user.useremail || !user.userpassword) {
          setErrMsg("Fill all Fields");
          setIsLoading(false);
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
          localStorage.setItem("email", user.useremail);
        
          navigate("/home");
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
      finally{
          setIsLoading(false);
      }
    };

    const token = localStorage.getItem("auth-token")  || ""
    console.log(token)

  if(token){
    return <Navigate to={"/Home"} />
  }


    return (
      <div className="bg-white text-black admin-header   flex flex-col w-full h-full  justify-center  items-center max-w-4xl transition duration-1000 ease-out">
      <div className="border  border-dotted rounded p-20   w-full overflow-y-hidden ">
        {/* <h2 className="p-3 text-3xl font-bold text-center text-black">meroLoan</h2> */}
        {/* <div className="inline-block border-[1px] justify-center items-center  w-full border-blue-400 border-solid"></div> */}
        {/* <h3 className="text-xl font-semibold text-blue-400  text-center pt-2">
          Sign In!
        </h3> */}
        {errMsg && <h1 className="font-bold">{errMsg}</h1>}
        {successmessage && <h1 className="font-bold">{successmessage}</h1>}

        <div className="flex flex-col gap-10 items-center justify-center">
          <input
            className="  w-full xl:w-[70%] rounded  border-black  border-2   bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            autoComplete="off"
            name="useremail"
            type="email"
            placeholder="Enter your email "
            onChange={handleInput}
          />
          <input
            className="  w-full xl:w-[70%] rounded  border-black  border-2  bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
            autoComplete="off"
            name="userpassword"
            type="password"
            placeholder="Enter your password"
            onChange={handleInput}
          />

          <button
            className="w-[70%] cursor-pointer  rounded-lg font-bold border border-primary bg-primary p-4 text-white  transition hover:bg-opacity-90"
            onClick={handleSubmit}
            disabled={isLoading}
          >
            {isLoading ? "siginin.....":"sign in"}
          </button>
        </div>
        {/* <div className="inline-block border-[1px] justify-center h border-blue-400 border-solid"></div> */}
        <p className="text-blue-400 mt-4 text-center text-sm">Don't have an account?</p>
        <p
          className="text-blue-400 mb-4 text-sm text-center  font-medium cursor-pointer"
          onClick={() => navigate('/register')}
        >
          Create a New Account?
        </p>
        </div>
      </div>
    );
  };

  return (
    <div className="rounded-sm border border-stroke bg-white shadow-default">
        <div className="flex flex-wrap h-[100vh] items-center ">

      <div className="hidden md:block w-full basis-[50%] h-full ">
      <div className="h-full">
        <img
          src="https://images.unsplash.com/photo-1633158829585-23ba8f7c8caf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="login"
          className="h-full w-full object-cover"
        />
               </div>
      </div>
     
      <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <h2 className="mb-9 xl:text-3xl text-xl font-bold text-black dark:text-white text-center sm:text-title-xl2">
                SIGN IN  TO CREDENCE
              </h2>
              {<LoginForm /> }
            </div>
          </div>
    
    
    </div>
  </div>
  );
};

export default Login;
