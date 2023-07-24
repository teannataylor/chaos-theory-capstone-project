import React, { useState, useContext } from 'react';
import { UserContext } from '../context/user';

function Login() {
    const image_url = 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80'
    const { login } = useContext(UserContext);
    const [userObj, setUserObj] = useState({
      email: '',
      password: ''
    });
  
    
  const handleChange = ({ target: { name, value } }) => {
    setUserObj({
      ...userObj,
      [name]: value
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    login(userObj)
      .then(success => {
        if (!success) {
          console.error('Login failed');
        }
      })
      .catch(error => {
        console.error(error);
      });
  };

    
  return (
<div className="w-full min-h-screen flex items-start">
      <div className='relative w-1/2 min-h-screen flex flex-col'>
       
       
        <img src={image_url} alt='' className='w-full min-h-screen object-cover  '/>
        </div>
        <div className='w-1/2 h-full bg-white flex flex-col p-20 justify-between'>
          <h1 className='text-xl text-black font-semibold uppercase'>Chaos Theory</h1>
            <div className='w-full flex flex-col'>
              <div className='w-full flex flex-col mb-1'/>
                  <p className='text-sm mb-2'>Welcome Back!</p>
            </div>

            <div className='w-full flex flex-col'>
                <form onSubmit={handleSubmit}> 
              <input
                type='email'
                placeholder='email'
                value={userObj.email}
                onChange={handleChange}
                className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
              />

              <input
                type='password'
                placeholder='password'
                value={userObj.password}
                onChange={handleChange}
                className='w-full text-black py-2 my-2 bg-transparent border-b border-black outline-none focus:outline-none'
              />
                </form>
            </div>
            <div className='w-full flex items-center justify-between'>
              <div className='w-full flex items-center'>
                <input
                  type='checkbox'
                  className='w-4 h-4 mr-2'/>
                  <p className='text-sm'>Remember Me</p>
             
              </div>
              
                  <p className='text-sm cursor-pointer underline underline-offset-2'>Forgot Password?</p>
            </div>
            <div>
              <button type='submit' className='w-full text-white my-2 font-semibold bg-[#FAAD63] rounded-md p-4 text-center flex items-center justify-center '>Login</button>
            </div>
            <div className='w-full'>
              <p>Don't have an account? <span className='front-semibold underline underline-offset-2 cursor-pointer'>Signup</span></p>
            </div>
        </div>
    </div>
  )
}

export default Login