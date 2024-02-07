import { useState } from 'react';
import { useRouter } from 'next/router';

const Register = () => {
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    empId: '',
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        router.push('/login');
      } else {
        const data = await response.json();
        console.error('Registration error:', data.message);
        // Handle error response
      }
    } catch (error) {
      console.error('Failed to register:', error);
      // Handle fetch error
    }
  };

  return (
    <div className="flex justify-center items-center h-full bg-gray-100">
      <div className="max-w-md w-full p-8 bg-white shadow-lg rounded-md">
        <h1 className="text-3xl font-bold mb-4">Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="age">
              Age
            </label>
            <input
              className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              type="number"
              id="age"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter your age"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="empId">
              Employee ID
            </label>
            <input
              className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              type="text"
              id="empId"
              name="empId"
              value={formData.empId}
              onChange={handleChange}
              placeholder="Enter your employee ID"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="username">
              Username
            </label>
            <input
              className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Choose a username"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              className="w-full px-3 py-2 placeholder-gray-400 border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Choose a password"
              required
            />
          </div>
          <button
            className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
            type="submit"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;