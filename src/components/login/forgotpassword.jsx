import React from "react";
import useForgotPass from "../hooks/useForgotPass";
import useOtp from "../hooks/useOtp";

const ForgotPassword = () => {
  const { formik } = useForgotPass();
  const { formik1 } = useOtp();

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
              {formik.touched.emailId && formik.errors.emailId ? (
                <div className="relative pt-1 pl-1 text-xs text-red-400">
                  {formik.errors.emailId}
                </div>
              ) : null}
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
                {...formik1.getFieldProps("userOtp")}
              />
              {formik.touched.userOtp && formik.errors.userOtp ? (
                <div className="relative pt-1 pl-1 text-xs text-red-400">
                  {formik.errors.userOtp}
                </div>
              ) : null}
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
