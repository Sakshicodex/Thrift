// Create a new file named `EditAddressModal.js`
import React from 'react';

const EditAddressModal = ({ isVisible, onClose, address, onSave }) => {
  const [editedAddress, setEditedAddress] = React.useState(address);

  if (!isVisible) {
    return null;
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setEditedAddress({ ...editedAddress, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSave(editedAddress);
  };

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full z-50">
      <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
        <div className="mt-3 ">
          <h3 className="text-lg leading-6 font-medium text-gray-900 text-center">Edit Address</h3>
          <div className="mt-2">
            {/* Add form fields here, similar to your new address form, using editedAddress and handleChange */}
            <form onSubmit={handleSubmit} className="max-w-xl mx-auto">
            <label className="block">
            Name
            <input
              name="name"
              type="text"
              placeholder="Full name"
              value={editedAddress.name}
              onChange={handleChange}
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
              value={editedAddress.address1}
              onChange={handleChange}
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
              value={editedAddress.address2}
              onChange={handleChange}
              className="form-input mt-1 block w-full border border-gray-300 placeholder-gray-400 placeholder-italic"
            />
          </label>
          <label className="block mt-4">
            City
            <input
              name="city"
              type="text"
              placeholder="City"
              value={editedAddress.city}
              onChange={handleChange}
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
              value={editedAddress.postalCode}
              onChange={handleChange}
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
              value={editedAddress.phoneNumber}
              onChange={handleChange}
              className="form-input mt-1 block w-full border border-gray-300 placeholder-gray-400 placeholder-italic"
              required
            />
          </label>
              <button
                type="submit"
                className="bg-black text-white rounded-md px-4 py-2 mt-4 mr-2 button-save-hover"
              >
                Save
              </button>
              <button
                onClick={onClose}
                className="bg-black text-white rounded-md px-4 py-2 mt-4 mr-2 button-save-hover"
              >
                Cancel
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditAddressModal;
