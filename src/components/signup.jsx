import React, { useState } from 'react';
import {Link ,useNavigate} from 'react-router-dom'; 
import axios from 'axios';
import googleIcon from '../images/google.png';
import Layout from './layout';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [isAnimating, setIsAnimating] = useState(false);
  const handleRegisterClick = () => {
    setIsAnimating(true);
    // Additional logic for registration
  };

  const navigate = useNavigate();


  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`http://localhost:5000/signup`, {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });

      console.log('Signup successful:', response.data);
      setShowPopup(true);
      window.location.href = '/login';
    } catch (error) {
      console.error('Error during signup:', error.response ? error.response.data : 'Server error');
    }
  };

  
  

  return (
    <Layout>
    <div className="flex items-center justify-center h-screen bg-gray-200"> {/* Updated for center alignment and grey background */}
      <div className="container mx-auto my-12 p-8 border border-gray-200 rounded shadow-lg max-w-lg bg-white"> {/* Add bg-white for form background */}
        <h2 className="text-2xl font-bold mb-6 text-center">Create Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
            <input type="email" id="email" name="email" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={formData.email} onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Name</label>
            <input type="text" id="name" name="name" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={formData.name} onChange={handleChange} />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input type="password" id="password" name="password" required className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" value={formData.password} onChange={handleChange} />
          </div>
          <div className="flex items-center justify-center ">
          <button
  type="submit"
  className={`bg-black hover:bg-gray-800 text-white font-bold py-2 px-20 rounded focus:outline-none focus:shadow-outline ${isAnimating ? 'scale-110' : 'scale-100'}`}
  onClick={handleRegisterClick}
  onAnimationEnd={() => setIsAnimating(false)}
>
  Sign Up
</button>
          </div>
        </form>
        <div className="my-4">
          <div className="relative flex py-5 items-center">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="flex-shrink mx-4 text-gray-400">or sign in with</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <div className="flex justify-center">
            <button
              className="bg-white text-gray-600 hover:text-gray-900 shadow-lg font-normal py-2 px-4 rounded inline-flex items-center"
              
            >
              <img src={googleIcon} alt="Google" className="w-6 h-6 mr-2" />
             
            </button>
          </div>
          <div className="text-center mt-4">
          <Link to="/login" className="text-sm text-gray-600 hover:text-gray-900">
            Have an account? Sign In
          </Link>
        </div>
        </div>
      </div>

      {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-xl font-bold mb-4">Signup Successful!</h3>
            <p className="mb-4">Your account has been created successfully.</p>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setShowPopup(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
    </Layout>
  );
};

export default SignUpPage;
