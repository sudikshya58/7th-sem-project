import React, { useState } from 'react';
// import { navigate } from 'react-router-dom';
import Navbar from '../component/Navbar';
import { Link } from 'react-router-dom';

export default function Register() {
// Initialize useHistory hook

  const initialForm = {
    email: '',
    password: '',
  };
  const [form, setForm] = useState(initialForm);
  const [alldata, setAllData] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  console.log(form)

  const submitForm = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://127.0.0.1:5000/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          // Add any other headers if required
        },
        body: JSON.stringify(form),
      });

      console.log(response)

      if (response.ok) {
        const responseData = await response.json();
        setAllData([...alldata, responseData]);
        console.log(responseData);

        // Redirect to the home page upon successful login
        // navigate('/home');// Replace '/home' with the desired route
      } else {
        console.error('Error:', response.statusText);
      }
    } catch (error) {
      console.log(error)
      console.error('Error:', error);
    }
  };

  return (
    <>
      <Navbar />

      <div className='w-full flex flex-col justify-center items-center h-[100vh]'>
        <div>
          <h1>Login to your account</h1>
        </div>
        <div>
          <form onSubmit={submitForm}>
            <div>
              <label>Email</label>
              <br />
              <input
                className='border border-gray-300 w-72'
                autoComplete='off'
                name='email'
                type="email"
                onChange={handleInputChange}
              />
            </div>
            <div>
              <label>Password</label>
              <br></br>
              <input
                className='border border-gray-300 w-72'
                autoComplete='off'
                name='password'
                type="password"
                onChange={handleInputChange}
              />
            </div>
            <button className='bg-blue-300 p-2 mt-4 w-44 rounded' type='submit'>
              Login
            </button>
          </form>
          <Link to='/register'>
            <h1 className=' flex justify-center'>Register Your Account</h1>
          </Link>
        </div>
      </div>
    </>
  );
}
