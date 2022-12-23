import React, { useState } from "react";
import axios from "axios";
import Toast from "../helper/toast";
import useForgotPass from "../hooks/useForgotPass";

const ForgotPassword = () => {
  const { formik, formik1 } = useForgotPass();

  const handleOTPSubmit = async (values) => {
    await axios
      .post("http://192.168.60.110:8080/api/auth/verifyOtp", {
        userOtp: "15089",
        emailId: "darshansampathkumar@gmail.com",
      })
      .then((response) => {
        console.log(response);
        Toast(response?.data?.message);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="flex items-center">
      <img
        src="https://www.masalabox.com/wp-content/webp-express/webp-images/uploads/2022/08/order-1.png.webp"
        alt="Order"
      />
      <div className="pl-20">
        <label className="block text-pink-900 font-bold md:text-center mb-1 md:mb-0 pr-3 pb-6 text-2xl">
          STEP 1
        </label>
        <form className="w-full max-w-sm" onSubmit={formik.handleSubmit}>
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
                name="emailId"
                {...formik.getFieldProps("emailId")}
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
        <label className="block text-pink-900 font-bold md:text-center mb-1 md:mb-0 pr-3 pb-6 text-2xl">
          STEP 2
        </label>
        <form className="w-full max-w-sm" onSubmit={formik1.handleSubmit}>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-pink-700 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="otp"
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
                name="userOtp"
                // {...formik1.getFieldProps("userOtp")}
              />
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                className="shadow bg-pink-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit button"
                onClick={handleOTPSubmit}
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
