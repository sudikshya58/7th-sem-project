import React, { useEffect, useState } from "react";
import "../../src/index.css";
import { Link, useNavigate } from "react-router-dom";
import { MdError } from "react-icons/md";
import axios from "axios";

function Predictions() {
  const navigate=useNavigate();
  const [isDisable, setIsDisable] = useState(false);
  const [alertmsg, setAlertMsg] = useState("");

  function openModal() {
    setIsDisable(true);
  }

  function closeModal() {
    setIsDisable(false);
  }

  //all the initial state are set to null
  const [data, setData] = useState("");
  // const [isAuthenticated, setIsAuthenticated] = useState(false);

  //this is for Number Field
  function handleChange(event) {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  }

  //this is for Dropdown
  function handleChange0(event) {
    const { name, value } = event.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  }
  //used for radio button
  const [selectedOption1, setSelectedOption1] = useState("");
  const [selectedOption2, setSelectedOption2] = useState("");
  const [selectedOption3, setSelectedOption3] = useState("");

  //Radio Buttons
  function handleChange1(event) {
    const { name, value } = event.target;
    switch (name) {
      case "married":
        setSelectedOption1(value);
        break;
      case "dependents":
        setSelectedOption2(value);
        break;
      case "selfEmployed":
        setSelectedOption3(value);
        break;
      default:
        break;
    }
    setData((prevData) => ({ ...prevData, [name]: value }));
  }

  function iconInvalid() {
    if (data.creditHistory > 9 || data.creditHistory < 0) {
      return "The credit history should be between 0 to 9 .";
    } else {
      return "";
    }
  }

  function iconInvalid2() {
    if (data.loanAmount > 10000000)
      return " The loan amount cannot be greater than 10 million ";
    else if (data.loanAmount < 100) {
      return "The loan amount cannot be less than 100";
    } else {
      return "";
    }
  }

  function iconInvalid3() {
    if (data.loanAmountTerm > 12 || data.loanAmountTerm < 1)
      return "The loan amount term should be between 1 to 12 months";
    else {
      return "";
    }
  }
  function iconInvalid4() {
    if (data.applicantIncome < 100)
      return "Applicant income cannot be less than 100";
    else {
      return "";
    }
  }

  function iconInvalid5() {
    if (data.totalIncome && data.applicantIncome) {
      if (parseInt(data.totalIncome) < parseInt(data.applicantIncome)) {
        return "Total family income should be more than Applicant Income";
      } else {
        return "";
      }
    } else {
      return "";
    }
  }
  // useEffect(() => {
  //   const accessToken = localStorage.getItem("auth_token");
  //   setIsAuthenticated(!!accessToken);
  // }, []);
  // This function handles the submission of a form by sending data to a server API endpoint
  function handleSubmit(event) {
    event.preventDefault();
    const isAuthenticated = !!localStorage.getItem("auth-token");
    if (!isAuthenticated) {
      // If not authenticated, navigate to the login page
      navigate("/logins");
    } else {
      // If authenticated, proceed with form submission
      let headersList = {
        "Accept": "*/*",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      };

      let bodyContent = JSON.stringify({
        "data": data
      });

      let reqOptions = {
        url: "http://127.0.0.1:5000/api/send-data",
        method: "POST",
        headers: headersList,
        data: bodyContent,
      };

      axios.request(reqOptions)
        .then((response) => {
          const apiResponse = response.data;
          console.log(apiResponse);
          setAlertMsg(apiResponse["Remarks"]);
          openModal();
        })
        .catch((error) => {
          console.error(error);
          setAlertMsg("Error occurred while processing the request.");
        });
    }
  }
  
  const isInvalid =
    iconInvalid() ||
    iconInvalid2() ||
    iconInvalid3() ||
    iconInvalid4() ||
    iconInvalid5();
  const isFormValid =
    data.name &&
    data.Gender &&
    selectedOption1 &&
    selectedOption2 &&
    data.education &&
    selectedOption3 &&
    data.Area &&
    data.applicantIncome &&
    data.totalIncome &&
    data.loanAmount &&
    data.loanAmountTerm &&
    data.creditHistory &&
    !isInvalid 
    

  return (
    <>
      <div className=" container overflow-x-hidden mx-auto p-4">
      <h1 className="text-3xl font-bold mt-20 text-center  mb-4">Fill up the form to check your loan eligibility</h1>
      <form onSubmit={handleSubmit} className="flex flex-wrap gap-20  mx-auto">
        <label>
          <h3> Name</h3>
          <input
            type="text"
            title="Please enter your full name"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
          />
        </label>
    
        <label>
          <h3>Applicant Income </h3>
          <input
            type="number"
            name="applicantIncome"
            placeholder="Applicant Income "
            onChange={handleChange}
            required
          />
          {iconInvalid4() && <MdError color="red" size={20} />}
          <span>{iconInvalid4()}</span>
        </label>
   
        <label>
          <h3>Loan Amount </h3>
          <input
            type="number"
            name="loanAmount"
            value={data.loanAmount}
            placeholder="Loan Amount "
            onChange={handleChange}
            required
          />
          {iconInvalid2() && <MdError color="red" size={20} />}
          <span>{iconInvalid2()}</span>
        </label>
     
        <label>
          <h3>Loan Amount Term (month/s) </h3>
          <input
            type="number"
            name="loanAmountTerm"
            value={data.loanAmountTerm}
            placeholder="Loan Amount Term "
            onChange={handleChange}
            required
            min="1"
            max="480"
          />
          {iconInvalid3() && <MdError color="red" size={20} />}
          <span>{iconInvalid3()}</span>
        </label>
     
        <label>
          <h3>Total Family Income </h3>
          <input
            type="number"
            name="totalIncome"
            placeholder="Total Income "
            onChange={handleChange}
            required
          />
          {iconInvalid5() && <MdError color="red" size={20} />}
          <span>{iconInvalid5()}</span>
        </label>
     
        <label>
          <h3>Credit History</h3>
          <input
            type="number"
            name="creditHistory"
            placeholder="Credit History"
            onChange={handleChange}
            required
            min="0"
          />
          {iconInvalid() && (
            <div>
              <MdError color="red" size={20} />
              <span>{iconInvalid()}</span>
            </div>
          )}
        </label>
      
        <label>
          <h3>Gender</h3>
          <select name="Gender" onChange={handleChange0}>
            <option default value="">
              Select
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </label>
     
        <div>
          <h3>Marital Status</h3>
          <label>
            <input
              type="radio"
              name="married"
              value="Yes"
              checked={selectedOption1 === "Yes"}
              onChange={handleChange1}
            />
            &nbsp; Yes
          </label>
        
          <label>
            <input
              type="radio"
              name="married"
              value="No"
              checked={selectedOption1 === "No"}
              onChange={handleChange1}
            />
            &nbsp; No
          </label>
        </div>
     
        <h3>Dependents</h3>
        <label>
          <input
            type="radio"
            name="dependents"
            value="0"
            checked={selectedOption2 === "0"}
            onChange={handleChange1}
          />
          &nbsp;0
        </label>
       
        <label>
          <input
            type="radio"
            name="dependents"
            value="1"
            checked={selectedOption2 === "1"}
            onChange={handleChange1}
          />
          &nbsp; 1
        </label>
     
        <label>
          <input
            type="radio"
            name="dependents"
            value="2"
            checked={selectedOption2 === "2"}
            onChange={handleChange1}
          />
          &nbsp; 2
        </label>
       
        <label>
          <input
            type="radio"
            name="dependents"
            value="3 or 3+"
            checked={selectedOption2 === "3 or 3+"}
            onChange={handleChange1}
          />
          &nbsp; 3 or 3+
        </label>
      
        <label>
          <h3>Education</h3>
          <select name="education" onChange={handleChange0}>
            <option default value="">
              Select
            </option>
            <option value="Graduate">Graduate</option>
            <option value="Not Graduate">Not Graduate</option>
          </select>
        </label>
     
        <h3>Self Employed</h3>
        <label>
          <input
            type="radio"
            name="selfEmployed"
            value="Yes"
            checked={selectedOption3 === "Yes"}
            onChange={handleChange1}
          />
          &nbsp; Yes
        </label>
      
        <label>
          <input
            type="radio"
            name="selfEmployed"
            value="No"
            checked={selectedOption3 === "No"}
            onChange={handleChange1}
          />
          &nbsp; No
        </label>
     
       
        <label>
          <h3>AreaProperty </h3>
          <select name="Area" onChange={handleChange0}>
            <option default value="">
              Select
            </option>
            <option value="Urban">Urban</option>
            <option value="semiUrban">Semi Urban</option>
            <option value="Rural">Rular</option>
          </select>
        </label>
      
      

        <div className="mt-4">
            {isDisable && (
              <div id="style-one">
                <div id="style-two" className="bg-white p-4 rounded-md shadow-md">
                  <h3>{alertmsg}</h3>
                  <h2 className="text-lg font-semibold">
                    See Information about banks?
                  </h2>
                  <p>
                    Visit our <Link to="/Blog">Blog</Link> content to know more!
                  </p>
                  <button
                    onClick={closeModal}
                    className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4"
                  >
                    Close
                  </button>
                </div>
              </div>
            )}
<div className="mt-40">
            <button
              className={`${
                isFormValid
                  ? "bg-green-500 hover:bg-green-700"
                  : "bg-gray-300 cursor-not-allowed"
              } text-white px-4 py-2 rounded-md mt-4`}
              onClick={openModal}
              type="submit"
              disabled={!isFormValid}
            >
              Submit
            </button>
            </div>
          </div>
      </form>

      <div>
      
      </div>
      </div>
    </>
  );
}

export default Predictions;
