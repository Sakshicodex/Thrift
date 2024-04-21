import React, { useState } from 'react';
import Layout from './layout';
import { useNavigate } from 'react-router-dom';
import EditAddressModal from './EditAddressModal';

const AddressPage = () => {
  const navigate = useNavigate();
  const [addresses, setAddresses] = React.useState([]);
  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [currentEditIndex, setCurrentEditIndex] = useState(-1);

  React.useEffect(() => {
    // Load addresses from local storage
    const storedAddresses = JSON.parse(localStorage.getItem('addresses') || '[]');
    setAddresses(storedAddresses);
  }, []);

  // Function to handle navigation back to the account details
  const goToAccountDetails = () => {
    navigate('/profile'); // Replace with the actual route to account details
  };

  // Replace with your actual address data retrieval logic
  const address = {
    name: 'Sakshi Mittal',
    country: 'India'
  };

  const [hoverReturn, setHoverReturn] = useState(false);
  const [hoverAdd, setHoverAdd] = useState(false);

  const editAddress = (index) => {
    navigate('/editaddress', { state: { index, address: addresses[index] } });
  };

  const deleteAddress = (index) => {
    // Filter out the address at the given index
    const updatedAddresses = addresses.filter((_, i) => i !== index);
    // Update local storage
    localStorage.setItem('addresses', JSON.stringify(updatedAddresses));
    // Update local state
    setAddresses(updatedAddresses);
  };

  const openEditModal = (index) => {
    setCurrentEditIndex(index);
    setIsEditModalVisible(true);
  };

  const closeEditModal = () => {
    setIsEditModalVisible(false);
  };

  const saveEditedAddress = (editedAddress) => {
    // Update the address in the addresses array and save to local storage
    const updatedAddresses = [...addresses];
    updatedAddresses[currentEditIndex] = editedAddress;
    localStorage.setItem('addresses', JSON.stringify(updatedAddresses));
    setAddresses(updatedAddresses);
    closeEditModal();
  };

  return (
    <Layout>
      <div className="container mx-auto p-8">
        <h1 className="text-3xl font-bold mb-4 text-center">Addresses</h1>
        <button
          onMouseEnter={() => setHoverReturn(true)}
          onMouseLeave={() => setHoverReturn(false)}
          onClick={goToAccountDetails}
          className="text-md mb-4 text-black"
          style={{
            backgroundColor: hoverReturn ? '#BBB49B' : 'transparent',
            transition: 'background-color 0.3s',
          }}
        >
          Return to Account details
        </button>

        <div className="border border-gray-300 p-4 rounded-md mb-4">



        {addresses.map((address, index) => (
  <div key={index} className="border border-gray-300 p-4 rounded-md mb-4">
    <h3 className="text-lg font-semibold">Address {index + 1}</h3>
    <p>{address.name}</p>
    <p>{address.address1}</p>
    <p>{address.city}</p>
    {/* ... other address fields ... */}
    <div className="flex justify-end mt-4 space-x-2">
      <button
        onClick={() => openEditModal(index)}// Correctly pass the index to the edit function
        className="border border-gray-300 py-1 px-3 rounded-md hover:bg-gray-100"
      >
        Edit
      </button>
      <EditAddressModal
        isVisible={isEditModalVisible}
        onClose={closeEditModal}
        address={addresses[currentEditIndex] || {}}
        onSave={saveEditedAddress}
      />
      <button
        onClick={() => deleteAddress(index)} // Correctly pass the index to the delete function
        className="border border-gray-300 py-1 px-3 rounded-md hover:bg-gray-100"
      >
        Delete
      </button>
    </div>
  </div>
))}

          <button
            onMouseEnter={() => setHoverAdd(true)}
            onMouseLeave={() => setHoverAdd(false)}
            onClick={() => navigate('/newaddress')}
            className="bg-black text-white py-2 px-4 rounded mb-4"
            style={{
              backgroundColor: hoverAdd ? '#BBB49B' : 'black',
              color: hoverAdd ? 'black' : 'white',
              transition: 'background-color 0.3s, color 0.3s',
            }}
          >
            Add a new address
          </button>

        </div>
      </div>
    </Layout>
  );
};

export default AddressPage;
