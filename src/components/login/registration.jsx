import React from "react";
import useRegistration from "../hooks/useRegistration";

const Registration = () => {
  const { formik } = useRegistration();

  return (
    <div className="flex items-center justify-between">
      <img
        src="https://www.masalabox.com/wp-content/webp-express/webp-images/uploads/2022/08/order-1.png.webp"
        alt="Order"
      />
      <div className="pr-80 m-20 text-xl">
        <form className="w-full max-w-lg" onSubmit={formik.handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-pink-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Jane"
                name="username"
                {...formik.getFieldProps("username")}
              />
              {formik.touched.username && formik.errors.username ? (
                <div className="relative pt-1 pl-1 text-xs text-red-400">
                  {formik.errors.username}
                </div>
              ) : null}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-pink-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="email"
                placeholder="Jane@email.com"
                name="email"
                {...formik.getFieldProps("email")}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="relative pt-1 pl-1 text-xs text-red-400">
                  {formik.errors.email}
                </div>
              ) : null}
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-pink-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Password
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="password"
                placeholder="**********"
                name="password"
                {...formik.getFieldProps("password")}
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="relative pt-1 pl-1 text-xs text-red-400">
                  {formik.errors.password}
                </div>
              ) : null}
              <p className="text-gray-600 text-xs italic">
                Make it unique and secure
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-pink-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Confirm Password
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-confirm-password"
                type="password"
                placeholder="**********"
                name="confirmpassword"
                {...formik.getFieldProps("confirmpassword")}
              />
              {formik.touched.confirmpassword &&
              formik.errors.confirmpassword ? (
                <div className="relative pt-1 pl-1 text-xs text-red-400">
                  {formik.errors.confirmpassword}
                </div>
              ) : null}
              <p className="text-gray-600 text-xs italic">
                Re-enter your password
              </p>
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-2">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-pink-700 text-xs font-bold mb-2"
                htmlFor="grid-city"
              >
                Roll Number
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-city"
                type="text"
                placeholder="CB.EN.U4CSE21003"
                name="rollNo"
                {...formik.getFieldProps("rollNo")}

                // onChange={handleChange}
              />
              {formik.touched.rollNo && formik.errors.rollNo ? (
                <div className="relative pt-1 pl-1 text-xs text-red-400">
                  {formik.errors.rollNo}
                </div>
              ) : null}
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-pink-700 text-xs font-bold mb-2"
                htmlFor="grid-state"
              >
                Role
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  name="roleId"
                  {...formik.getFieldProps("roleId")}
                >
                  <option value={"student/faculty"}>Student/Faculty</option>
                  <option value={"admin"}>Admin</option>
                </select>
                {/* <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
              <svg
                className="fill-current h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
              </svg>
            </div> */}
              </div>
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-pink-700 text-xs font-bold mb-2"
                htmlFor="grid-zip"
              >
                Mobile Number
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-pink-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-zip"
                type="number"
                placeholder="9021012345"
                name="mobileNo"
                {...formik.getFieldProps("mobileNo")}
              />
              {formik.touched.mobileNo && formik.errors.mobileNo ? (
                <div className="relative pt-1 pl-1 text-xs text-red-400">
                  {formik.errors.mobileNo}
                </div>
              ) : null}
            </div>
          </div>
          <div className="md:flex md:items-center">
            <div className="md:w-1/3"></div>
            <div className="md:w-2/3">
              <button
                className="shadow bg-pink-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type=" submit button"
              >
                Sign Up
              </button>
            </div>
          </div>
        </form>{" "}
      </div>
    </div>
  );
};

export default Registration;
