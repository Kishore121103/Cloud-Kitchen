import React, { useState, useEffect } from 'react';
import Header from '../components/header';
import UserTabs from '../components/UserTabs';

const Profile = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    streetAddress: '',
    postalCode: '',
    city: '',
    country: '',
  });

  const userId = 1; // Replace with actual logged-in user ID
  const apiUrl = `http://localhost:5213/api/User/update/${userId}`;

  // Fetch user data on component mount
  useEffect(() => {
    fetch(`http://localhost:5213/api/User/all`)
      .then((response) => response.json())
      .then((data) => {
        const user = data.find((u) => u.id === userId);
        if (user) setUserData(user);
      })
      .catch((error) => console.error('Error fetching user data:', error));
  }, [userId]);

  // Handle input change
  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.id]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(apiUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        alert('Profile updated successfully!');
      } else {
        alert('Failed to update profile.');
      }
    } catch (error) {
      console.error('Error updating profile:', error);
    }
  };

  return (
    <div className='min-h-screen bg-gray-50 p-4'>
      <Header/>
      <div className='max-w-3xl mx-auto mt-10 mb-10'>
        <UserTabs/>
        <div className='bg-white p-6 rounded-xl shadow border border-gray-200'>
          <div className='flex flex-col md:flex-row gap-8'>
            {/* Profile Image Section */}
            <div className='flex flex-col items-center justify-center space-y-5 md:w-1/3'>
              <div className='w-52 h-52 rounded-full overflow-hidden border-2 border-gray-200 shadow-md mx-auto'>
                <img 
                  src="profile_img.jpg" 
                  alt="Profile" 
                  className='w-full h-full object-cover'
                />
              </div>
              <button className='px-4 py-2 bg-gray-100 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 shadow-sm w-full max-w-xs hover:bg-gray-200 transition-colors'>
                Change Photo
              </button>
            </div>

            {/* Form Section */}
            <form className='flex-1 space-y-4' onSubmit={handleSubmit}>
              <div className='form-group'>
                <label htmlFor="name" className='text-sm font-medium text-gray-700 block mb-1'>Full Name</label>
                <input 
                  type="text" 
                  id="name"
                  value={userData.name}
                  onChange={handleChange}
                  className="w-full h-11 px-4 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-[#f13a01] focus:border-[#f13a01] shadow-sm"
                />
              </div>

              <div className='form-group'>
                <label htmlFor="email" className='text-sm font-medium text-gray-700 block mb-1'>Email Address</label>
                <input 
                  type='email'
                  id="email" 
                  value={userData.email}
                  onChange={handleChange}
                  disabled
                  className="w-full h-11 px-4 rounded-lg border border-gray-300 bg-gray-100 cursor-not-allowed shadow-sm"
                />
              </div>

              <div className='form-group'>
                <label htmlFor="phoneNumber" className='text-sm font-medium text-gray-700 block mb-1'>Phone Number</label>
                <input 
                  type='tel'
                  id="phoneNumber" 
                  value={userData.phoneNumber}
                  onChange={handleChange}
                  className="w-full h-11 px-4 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-[#f13a01] focus:border-[#f13a01] shadow-sm"
                />
              </div>

              <div className='form-group'>
                <label htmlFor="streetAddress" className='text-sm font-medium text-gray-700 block mb-1'>Street Address</label>
                <input 
                  type='text'
                  id="streetAddress" 
                  value={userData.streetAddress}
                  onChange={handleChange}
                  className="w-full h-11 px-4 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-[#f13a01] focus:border-[#f13a01] shadow-sm"
                />
              </div>

              <div className='grid grid-cols-2 gap-3'>
                <div className='form-group'>
                  <label htmlFor="postalCode" className='text-sm font-medium text-gray-700 block mb-1'>Postal Code</label>
                  <input 
                    type='text'
                    id="postalCode" 
                    value={userData.postalCode}
                    onChange={handleChange}
                    className="w-full h-11 px-4 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-[#f13a01] focus:border-[#f13a01] shadow-sm"
                  />
                </div>

                <div className='form-group'>
                  <label htmlFor="city" className='text-sm font-medium text-gray-700 block mb-1'>City</label>
                  <input 
                    type='text'
                    id="city" 
                    value={userData.city}
                    onChange={handleChange}
                    className="w-full h-11 px-4 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-[#f13a01] focus:border-[#f13a01] shadow-sm"
                  />
                </div>
              </div>

              <div className='form-group'>
                <label htmlFor="country" className='text-sm font-medium text-gray-700 block mb-1'>Country</label>
                <input 
                  type='text'
                  id="country" 
                  value={userData.country}
                  onChange={handleChange}
                  className="w-full h-11 px-4 rounded-lg border border-gray-300 bg-gray-50 focus:outline-none focus:ring-1 focus:ring-[#f13a01] focus:border-[#f13a01] shadow-sm"
                />
              </div>

              <div className='pt-4 flex justify-center'>
                <button 
                  type='submit' 
                  className='bg-[#f13a01] text-white font-medium rounded-lg px-8 py-3 shadow-md hover:bg-[#e03500] transition-colors'>
                  Save Changes
                </button>
              </div>
            </form>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
