import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  // useEffect(()=>{
  //   onAuthStateChanged(auth,(data)=>{
  //     console.log(data);
  //   })
  // })


  const LoginForm = () => {
    
    const [user, setUser] = useState({
      useremail: "",
      userpassword: "",
    });
   
    const[successmessage,setSuccessMessage]=useState("");
    const [errMsg,setErrMsg]=useState("");
    // const[buttonDisbaled,setsubmitButtonDisabled]=useState(true);
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
        const response = await axios.post("http://127.0.0.1:5000/logintoken", user, {
          headers: {
            "Content-Type": "application/json",
          },
        });
    
        // Assuming your server responds with a success message and an access token
        const { success, accessToken } = response.data;
    
        if (success) {
          localStorage.setItem('accessToken', accessToken);
          setUser({ useremail: "", userpassword: "" }); // Reset input fields
          setSuccessMessage("Login Successful"); // Set success message
          setTimeout(() => {
            setSuccessMessage("");
          }, 3000); // Clear success message after 3 seconds
          navigate("/dashboard");
        } else {
          setErrMsg("Authentication failed");
          setTimeout(() => {
            setErrMsg("");
          }, 1000);
        }
      } catch (error) {
        console.log("error", error);
      }
    };
    console.log(user)

    
  
    return (
      <div className="bg-white rounded-2xl shadow-2xl flex flex-col w-full md:w-1/3 items-center max-w-4xl transition duration-1000 ease-out">
        <h2 className="p-3 text-3xl font-bold text-black">Quaba</h2>
        <div className="inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div>
        <h3 className="text-xl font-semibold text-blue-400 pt-2">Sign In!</h3>
        {errMsg && <h1 className="font-bold">{errMsg}</h1>}
        {successmessage && <h1 className="font-bold">{successmessage}</h1>}

        {/* Inputs */}

        <div className="flex flex-col items-center justify-center">
        <input
                      className="border-none font-sans text-[15px] p-3  w-full border-r-[6px] border-gray-300 "
                      autoComplete="off"
                      name="useremail"
                      type="email"
                      placeholder="Enter your email "
                      onChange={handleInput}/>
           <input
                      className="border-none font-sans text-[15px] p-3  w-full border-r-[6px]  border-gray-300"
                      autoComplete="off"
                      name="userpassword"
                      type="password"
                      placeholder="Enter ur password"
                      onChange={handleInput}
                    />
                      
          
          <button
            className="rounded m-2 hover:text-white bg-blue-400 w-4/5 px-4 py-2 shadow-md   hover:bg-black  transition duration-200 ease-in"
            onClick={handleSubmit}
            // disabled={submitButtonDisabled}
          >
            Sign In
          </button>
        </div>
        <div className="inline-block border-[1px] justify-center w-20 border-blue-400 border-solid"></div>
        <p className="text-blue-400 mt-4 text-sm">Don't have an account?</p>
        <p
          className="text-blue-400 mb-4 text-sm font-medium cursor-pointer"
          onClick={() => setIsLogin(false)}
        >
          Create a New Account?
        </p>
      </div>
    );
  };

  const SignUpForm = () => {
    const [values, setValues] = useState({
      name: "",
      email: "",
      password: "",
    });
    const [successMessage, setSuccessMessage] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const [submitButtonDisabled, setsubmitButtonDisabled] = useState(false);
    // const handleSubmit = () => {
    //   if (!values.name || !values.email || !values.password) {
    //     setErrMsg("Fill all Fields");

    //     return;
    //   }
    //   setErrMsg("");
    //   setsubmitButtonDisabled(true);

    //   createUserWithEmailAndPassword(auth, values.email, values.password)
    //     .then((res) => {
    //       setsubmitButtonDisabled(false);
    //       setSuccessMessage("Registration successful");
    //       setValues({ name: "", email: "", password: "" });

    //       // Clear success message after 3 seconds
    //       setTimeout(() => {
    //         setSuccessMessage("");
    //       }, 1000);

    //       console.log(res);
    //     })
    //     .catch((err) => {
    //       setsubmitButtonDisabled(false);
    //       setErrMsg(err.message);

    //       // Clear error message after 3 seconds
    //       setTimeout(() => {
    //         setErrMsg("");
    //       }, 1000);

    //       console.error("Error:", err.message);
    //     });
    // };

    return (
      <div className="bg-blue-400 text-white rounded-2xl shadow-2xl  flex flex-col w-full  md:w-1/3 items-center max-w-4xl transition duration-1000 ease-in">
        <h2 className="p-3 text-3xl font-bold text-white">Quaba</h2>
        <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
        <h3 className="text-xl font-semibold text-white pt-2">
          Create Account!
        </h3>

        {errMsg && <h1 className="font-bold">{errMsg}</h1>}
        {successMessage && <h1 className="font-bold">{successMessage}</h1>}

        {/* Inputs */}
        <div className="flex flex-col items-center justify-center mt-2">
          <input
            type="name"
            className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 text-black focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
            placeholder="username" // Change the placeholder to be more appropriate for a password input
            onChange={(event) =>
              setValues((prev) => ({
                ...prev,
                name: event.target.value,
              }))
            }
          />

          <input
            type="email"
            className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] text-black border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
            placeholder="Email"
            onChange={(event) =>
              setValues((prev) => ({
                ...prev,
                email: event.target.value,
              }))
            }
          />
          <input
            type="password"
            className="rounded-2xl px-2 py-1 w-4/5 md:w-full border-[1px] text-black border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
            placeholder="Password"
            onChange={(event) =>
              setValues((prev) => ({
                ...prev,
                password: event.target.value,
              }))
            }
          />

          <button
            className="rounded-2xl m-4 text-blue-400  bg-black w-3/5 px-4 py-2 shadow-md hover:text-black hover:bg-blue-400 transition duration-200 ease-in"
            // onClick={handleSubmit}
            disabled={submitButtonDisabled}
          >
            Sign Up
          </button>
        </div>
        <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
        <p className="text-white mt-4 text-sm">Already have an account?</p>
        <p
          className="text-white mb-4 text-sm font-medium cursor-pointer"
          onClick={() => setIsLogin(true)}
        >
          Sign In to your Account?
        </p>
      </div>
    );
  };

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center min-h-screen md:py-2">
      <main className="flex items-center w-full px-2 md:px-20">
        <div className="hidden md:inline-flex flex-col flex-1 space-y-1">
          <p className="text-6xl text-blue-500 font-bold">Quaba</p>
          <p className="font-medium text-lg leading-1 text-pink-400">
            Explore your interests, meet new friends & expand your horions
          </p>
        </div>
        {isLogin ? <LoginForm /> : <SignUpForm />}
      </main>
    </div>
  );
};

export default Login;
