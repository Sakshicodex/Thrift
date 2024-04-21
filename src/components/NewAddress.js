// NewAddressPage.js
import React from 'react';
import Layout from './layout';
import { useNavigate } from 'react-router-dom';

const NewAddressPage = () => {
  const navigate = useNavigate();
  const [newAddress, setNewAddress] = React.useState({
    name: '',
    address1: '',
    address2: '',
    city: '',
    postalCode: '',
    phoneNumber: ''
  });
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setNewAddress({ ...newAddress, [name]: value });
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    // Save the new address to local storage
    const existingAddresses = JSON.parse(localStorage.getItem('addresses') || '[]');
    localStorage.setItem('addresses', JSON.stringify([...existingAddresses, newAddress]));
    // Navigate to the address listing page
    navigate('/address');
  };

  return (
    <Layout>
      <div className="container mx-auto p-8 bg-gray-100">
        <h1 className="text-3xl font-bold mb-4 text-center">Add a New Address</h1>
        <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
          <label className="block">
            Name
            <input
              name="name"
              type="text"
              placeholder="Full name"
              value={newAddress.name}
              onChange={handleInputChange}
              className="form-input mt-1 block w-full border border-gray-300 placeholder-gray-400 placeholder-italic"
              required
            />
          </label>
          <label className="block mt-4">
            Address 1
            <input
              name="address1"
              type="text"
              placeholder="Street address or P.O. Box"
              value={newAddress.address1}
              onChange={handleInputChange}
              className="form-input mt-1 block w-full border border-gray-300 placeholder-gray-400 placeholder-italic"
              required
            />
          </label>
          <label className="block mt-4">
            Address 2
            <input
              name="address2"
              type="text"
              placeholder="Apartment, suite, unit, building, floor, etc."
              value={newAddress.address2}
              onChange={handleInputChange}
              className="form-input mt-1 block w-full border border-gray-300 placeholder-gray-400 placeholder-italic"
            />
          </label>
          <label className="block mt-4">
            City
            <input
              name="city"
              type="text"
              placeholder="City"
              value={newAddress.city}
              onChange={handleInputChange}
              className="form-input mt-1 block w-full border border-gray-300 placeholder-gray-400 placeholder-italic"
              required
            />
          </label>
          <label className="block mt-4">
            Postal Code
            <input
              name="postalCode"
              type="text"
              placeholder="Postal Code"
              value={newAddress.postalCode}
              onChange={handleInputChange}
              className="form-input mt-1 block w-full border border-gray-300 placeholder-gray-400 placeholder-italic"
              required
            />
          </label>
          <label className="block mt-4">
            Phone Number
            <input
              name="phoneNumber"
              type="tel"
              placeholder="Phone number"
              value={newAddress.phoneNumber}
              onChange={handleInputChange}
              className="form-input mt-1 block w-full border border-gray-300 placeholder-gray-400 placeholder-italic"
              required
            />
          </label>
          <button
            type="submit"
            className="text-black font-bold py-2 px-4 border-2 border-black rounded transition-all mt-4  hover:bg-black hover:text-white focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50"
          >
            Add Address
          </button>
        </form>

      </div>
    </Layout>
  );
};

export default NewAddressPage;
