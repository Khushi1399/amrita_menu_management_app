import React, { useState } from "react";

const Login = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    setInputs(values => ({ ...values, [event.target.name]: event.target.value }))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return (
    <form className="w-full max-w-sm" onSubmit={handleSubmit}>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-pink-700 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name">
            User Name
          </label>
        </div>
        <div className="md:w-2/3">
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-full-name" type="text" placeholder="Jane Doe" name="username" onChange={handleChange} />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label className="block text-pink-700 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-password">
            Password
          </label>
        </div>
        <div className="md:w-2/3">
          <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            id="inline-password" type="password" placeholder="******************" name="password" onChange={handleChange} />
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3"></div>
        <label className="md:w-2/3 block text-gray-500 font-bold">
          <input className="mr-2 leading-tight" type="checkbox" name="remember" onChange={handleChange} />
          <span className="text-sm">
            Remember me!
          </span>
        </label>
      </div>
      <div className="md:flex md:items-center">
        <div className="md:w-1/3"></div>
        <div className="md:w-2/3">
          <button className="shadow bg-pink-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
            type="submit button">
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default Login;
