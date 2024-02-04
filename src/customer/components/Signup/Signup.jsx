import React, { useState } from 'react';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Form submitted:', formData);
  };

  return (
    <div className="max-w-md mx-auto mt-8">
      <h1 className="text-3xl font-semibold mb-4">Sign Up</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">
            First Name:
          </label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Last Name:
          </label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email:
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Password:
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 p-2 border rounded-md w-full"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-indigo-500 text-white py-2 px-4 rounded-md hover:bg-indigo-600 focus:outline-none focus:ring focus:border-indigo-300"
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
