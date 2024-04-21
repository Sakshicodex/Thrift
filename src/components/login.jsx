import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import googleIcon from '../images/google.png';
import Layout from './layout';



const apiBaseUrl = process.env.REACT_APP_BACKEND_URL;



const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  const navigate = useNavigate();


  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${apiBaseUrl}/login`, loginData);
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userName', response.data.name); 
      console.log('Login successful:', response.data);
      navigate('/profile'); // Redirects the user to the homepage
    } catch (error) {
      console.error('Error during login:', error.response ? error.response.data : 'Server error');
    }
  };

 


  return (
    <Layout>
    <div className="flex items-center justify-center h-screen bg-gray-200"> {/* This centers the form */}
      <div className="container mx-auto p-8 border border-gray-300 rounded shadow-lg max-w-md bg-white">
        <h2 className="text-3xl font-bold mb-8 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <input type="email" id="email" name="email" placeholder="Email" required
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={loginData.email} onChange={handleChange} />
          </div>
          <div className="mb-6">
            <input type="password" id="password" name="password" placeholder="Password" required
              className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={loginData.password} onChange={handleChange} />
          </div>
          <div className="mb-6 text-right">
            <Link to="/forgot-password" className="text-sm text-gray-600 hover:text-gray-900">
              Forgot your password?
            </Link>
          </div>
          <div className="mb-6">
            <button type="submit" className="bg-black text-white w-full py-3 px-4 rounded focus:outline-none">
              Sign in
            </button>
          </div>
          
        </form>
        <div className="my-4">
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-gray-400">or sign in with</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <div className="flex justify-center  mb-4">
            <button
              className="bg-white text-gray-600 hover:text-gray-900 shadow-lg font-normal py-2 px-4 rounded inline-flex items-center"
             
            >
              <img src={googleIcon} alt="Google" className="w-6 h-6" />
             
            </button>
          </div>
          <div className="text-center">
          <Link to="/signup" className="text-sm text-gray-600 hover:text-gray-900">
            Don't have an account? Register
          </Link>
        </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default LoginPage;
