import React, { useState } from "react";

const ForgotPassword = () => {
  const [inputs, setInputs] = useState({});
  const [sentOtp, setSentOtp] = useState(false);

  const isOtpSent = (e) => {
    setSentOtp({sentOtp: true})
  }

  return (
    <div className="flex items-center">
      <img
        src="https://www.masalabox.com/wp-content/webp-express/webp-images/uploads/2022/08/order-1.png.webp"
        alt="Order"
      />
      <div className="pl-20">
      <label
                className="block text-pink-900 font-bold md:text-center mb-1 md:mb-0 pr-3 pb-6 text-2xl"
              >
                STEP 1
              </label>
        <form className="w-full max-w-sm" onSubmit={isOtpSent}>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-pink-700 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="email"
              >
                Email
              </label>
            </div>  
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="email"
                type="email"
                placeholder="janedoe@email.com"
                name="email"
              />
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                className="shadow bg-pink-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit button"
              >
                Send OTP
              </button>
            </div>
          </div>
        </form>
      </div>
      <div className="pl-20">
            <label
                className="block text-pink-900 font-bold md:text-center mb-1 md:mb-0 pr-3 pb-6 text-2xl"
              >
                STEP 2
              </label>
      <form className="w-full max-w-sm" onSubmit={isOtpSent}>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-pink-700 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="email"
              >
                Enter OTP
              </label>
            </div>  
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="otp"
                type="number"
                placeholder="*****"
                name="otp"
              />
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                className="shadow bg-pink-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit button"
              >
                Proceed
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
