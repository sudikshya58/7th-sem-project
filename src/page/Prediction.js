import React, { useState } from 'react';
import Navbar from '../component/Navbar';

export default function Prediction() {
  const label = "mb-[1px] font-bold  text-[#141312]";
  const input="w-72 p-2 border placeholder:text-black";
  const [formData, setFormData] = useState({
    name: '',
    creditHistory: '',
    applicantIncome: '',
    loanAmount: '',
    totalIncome: '',
    loanAmountTerm: '',
    education:'',
    gender:'',
    Area:'',
    selfEmployed:'',
    maritalStatus:'',
    dependents:'',
    
    
  });
  const handleInputChange=(e)=>{
    const {name,value}=e.target;
    setFormData({...formData,[name]:value});
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(formData)

  }
  return (
    <>
      <Navbar />
      <div>
        <form onSubmit={handleSubmit}>
        <div className='flex flex-wrap gap-10  mx-40 my-40'>
          <div className='flex flex-col' >
            <label className={`${label}`} >full name </label><br />
            <input type="name" placeholder='' name="name"   onChange={handleInputChange} className={`${input}`}/>
          </div>
          <div className='flex flex-col' >
            <label className={`${label}`} >Credit History </label><br />
            <input type="number" placeholder='Credit History' name="creditHistory"   onChange={handleInputChange} className={`${input}`}/>
          </div>
          <div className='flex flex-col' >
            <label className={`${label}`} >Applicant Income </label><br />
            <input type="number" placeholder='Applicant Income' name="applicantIncome"   onChange={handleInputChange} className={`${input}`}/>
          </div>
          <div className='flex flex-col' >
            <label className={`${label}`} >Loan Amount </label><br />
            <input type="name" placeholder='Loan Amount' name="loanAmount"   onChange={handleInputChange} className={`${input}`}/>
          </div>
          <div className='flex flex-col' >
            <label className={`${label}`} >Total Family Income </label><br />
            <input type="name" placeholder='Total Family Income' name="totalIncome"    onChange={handleInputChange} className={`${input}`}/>
          </div>
          <div className='flex flex-col' >
            <label className={`${label}`} >Loan AmountTerm </label><br />
            <input type="name" placeholder='Loan AmountTerm' name="loanAmountTerm"   onChange={handleInputChange}  className={`${input}`}/>
          </div>
          <div className='flex flex-col' >
            <label className={`${label}`} >hhh </label><br />
            <input type="name" placeholder=''    onChange={handleInputChange} className={`${input}`}/>
          </div>
        
          <div className='flex flex-col'>
              <label className={`${label}`}>Gender</label><br />
              <select
                name="gender"
                className={`${input}`}
                value={formData.gender}
                onChange={handleInputChange}
              >
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
            <div className='flex flex-col'>
              <label className={`${label}`}>Education</label><br />
              <select
                name="education"
                className={`${input}`}
                value={formData.education}
                onChange={handleInputChange}
              >
                <option value="">Select Education</option>
                <option value="male">Graduate</option>
                <option value="female">Not Graduate</option>
              </select>
            </div>
            <div className='flex flex-col'>
              <label className={`${label}`}>Property Area</label><br />
              <select
                name="Area"
                className={`${input}`}
                value={formData.Area}
                onChange={handleInputChange}
              >
  <option default value="">
              Select
            </option>
            <option value="Urban">Urban</option>
            <option value="semiUrban">Semi Urban</option>
            <option value="Rural">Rular</option>
              </select>
            </div>
            <div className='flex flex-col'>
              <label className={`${label}`}>Marital Status</label><br />
              <div>
                <input
                  type="radio"
                  name="maritalStatus"
                  value="married"
                  checked={formData.maritalStatus === 'married'}
                  onChange={handleInputChange}
                />
                <label htmlFor="married">Married</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="maritalStatus"
                  value="unmarried"
                  checked={formData.maritalStatus === 'unmarried'}
                  onChange={handleInputChange}
                />
                <label htmlFor="unmarried">Unmarried</label>
              </div>
            </div>
            <div className='flex flex-col'>
              <label className={`${label}`}>Marital Status</label><br />
              <div>
                <input
                  type="radio"
                  name="selfEmployed"
                  value="Yes"
                  checked={formData.selfEmployed === 'Yes'}
                  onChange={handleInputChange}
                />
                <label htmlFor="married">Married</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="selfEmployed"
                  value="No"
                  checked={formData.selfEmployed === 'No'}
                  onChange={handleInputChange}
                />
                <label htmlFor="unmarried">Unmarried</label>
              </div>
            </div>
            <div className='flex flex-col'>
              <label className={`${label}`}>dependents</label><br />
              <div>
                <input
                  type="radio"
                  name="dependents"
                  value="married"
                  checked={formData.dependents === '0'}
                  onChange={handleInputChange}
                />
                <label htmlFor="0">0</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="dependents"
                  value="1"
                  checked={formData.dependents === '1'}
                  onChange={handleInputChange}
                />
                <label htmlFor="1">1</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="dependents"
                  value="2"
                  checked={formData.dependents === '2'}
                  onChange={handleInputChange}
                />
                <label htmlFor="2">2</label>
              </div>
              <div>
                <input
                  type="radio"
                  name="dependents"
                  value="3 or 3+"
                  checked={formData.dependents === '3 or 3+'}
                  onChange={handleInputChange}
                />
                <label htmlFor="1">3 or 3+</label>
              </div>
            </div>

          </div>

          <button type="submit" className=" mx-40 w-60 p-4 bg-red-400 text-white font-bold">submit</button>
        </form>
      </div>
    </>
  );
}
