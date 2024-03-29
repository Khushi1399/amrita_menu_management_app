import React, { useState } from "react";
import { Link } from "react-router-dom";

import useLogin from "../hooks/useLogin";
import useUpdatePass from "../hooks/useUpdatePass";

const NewPassword = () => {
  const [inputs, setInputs] = useState({});

  const { formik } = useUpdatePass();

  const handleChange = (event) => {
    setInputs((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className="flex items-center">
      <img
        src="https://www.masalabox.com/wp-content/webp-express/webp-images/uploads/2022/08/order-1.png.webp"
        alt="Order"
      />
      <div className="pl-20">
        <form className="w-full max-w-sm" onSubmit={formik.handleSubmit}>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-pink-700 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="username"
              >
                New Password
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="password"
                type="password"
                placeholder="*****"
                name="userPassword"
                {...formik.getFieldProps("userPassword")}
              />
            </div>
            {formik.touched.userPassword && formik.errors.userPassword ? (
              <div className="relative pt-1 pl-1 text-xs text-red-400">
                {formik.errors.userPassword}
              </div>
            ) : null}
          </div>
          <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
              <label
                className="block text-pink-700 font-bold md:text-right mb-1 md:mb-0 pr-4"
                for="password"
              >
                Confirm New Password
              </label>
            </div>
            <div className="md:w-2/3">
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                id="password"
                type="password"
                placeholder="*********"
                name="userCPassword"
                {...formik.getFieldProps("userCPassword")}
              />
            </div>
            {formik.touched.userCPassword && formik.errors.userCPassword ? (
              <div className="relative pt-1 pl-1 text-xs text-red-400">
                {formik.errors.userCPassword}
              </div>
            ) : null}
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                className="shadow bg-pink-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="submit button"
              >
                Login
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default NewPassword;
