import React, { useContext, useState } from 'react';
import { UserContext } from '../context/user';

function SignUp() {
  const { signup } = useContext(UserContext);
  const [userObj, setUserObj] = useState({
    email: '',
    password: '',
    password_confirmation: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserObj((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signup(userObj);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-cover bg-center" style={{ backgroundImage: 'url(https://wallpaperset.com/w/full/d/d/0/217488.jpg)' }}>
      <form className="signup-page bg-white border shadow-lg rounded-lg p-6" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold mb-4">Sign Up</h2>
        <label className="block mb-4">
          Email:
          <input
            className="w-full border rounded-lg py-2 px-3"
            type="text"
            name="email"
            value={userObj.email}
            onChange={handleInputChange}
          />
        </label>
        <label className="block mb-4">
          Password:
          <input
            className="w-full border rounded-lg py-2 px-3"
            type="password"
            name="password"
            value={userObj.password}
            onChange={handleInputChange}
          />
        </label>
        <label className="block mb-4">
          Password Confirmation:
          <input
            className="w-full border rounded-lg py-2 px-3"
            type="password"
            name="password_confirmation"
            value={userObj.password_confirmation}
            onChange={handleInputChange}
          />
        </label>

        <button className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-lg" type="submit">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default SignUp;
