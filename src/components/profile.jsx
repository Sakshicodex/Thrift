import React, { useEffect } from 'react';
import Layout from './layout';
import { useNavigate } from 'react-router-dom';


const ProfilePage = () => {
  const userName = localStorage.getItem('userName'); // Retrieve user's name from local storage
  const navigate = useNavigate();
  const [orderHistory, setOrderHistory] = React.useState([]);

  React.useEffect(() => {
    // Load the order history from local storage when the component mounts
    const storedOrderHistory = JSON.parse(localStorage.getItem('orderHistory')) || [];
    setOrderHistory(storedOrderHistory);
  }, []);


  const goToAddressPage = () => {
    navigate('/address'); // Define the route to navigate to the address page
  };

  const logout = () => {
    localStorage.removeItem('userName');
    localStorage.removeItem('token'); // Remove the stored JWT token
    localStorage.removeItem('orderHistory');
    navigate('/login'); // Redirect to login page
  };
  return (
    <Layout>
      <div className="container mx-auto my-12 px-4 min-h-screen">
        <header className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold">Profile</h1>
          <p className="text-xl">Welcome, {userName}!</p> {/* Display user's name on the right */}
        </header>
        <div className="mb-8">
          <h2 className="text-lg font-bold">Order History</h2>
          {orderHistory.length > 0 ? (
            <ul>
              {orderHistory.map((order, index) => (
                <li key={index} className="mb-4">

<div className="flex items-center">
                  <h3 className="font-semibold mr-4">Order {index + 1}</h3>
                  </div>
                  {order.items.map((item, itemIndex) => (
                    <p key={itemIndex} >
                       {item.name} - Rs.{item.price ? parseFloat(item.price).toFixed(2) : '0.00'}
                    </p>
                  ))}
                  
                </li>
              ))}
            </ul>
          ) : (
            <p>No orders yet.</p>
          )}
        </div>

        {/* Account Section */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold">Account</h2>
          {/* Any account related information or settings can go here */}
        </div>

        {/* Logout Button */}
        <button
          onClick={logout}
          className="text-black font-bold py-2 px-4 border-2 border-black rounded transition-all   hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50">
          Logout
        </button>
        {/* Additional content of the profile page can go here */}
        <button
          onClick={goToAddressPage}
          className="fixed bottom-20 right-20 font-bold py-2 px-4 rounded"
          style={{ backgroundColor: '#BBB49B', color: 'black' }} // Adding inline styles for custom colors
        >
          View Address
        </button>
      </div>
    </Layout>
  );
};

export default ProfilePage;
