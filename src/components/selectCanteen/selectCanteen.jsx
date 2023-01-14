import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import Toast from "../helper/toast";
import CanteenSpecial from "./canteenSpecial";
import menus from "../../local-json/menu.json";

let canteens = ["Main Canteen", "MBA Canteen", "IT Canteen", "Mess"];

const SelectCanteen = () => {
  const [inputs, setInputs] = useState({});
  let canteensList = Object.values(menus).filter((canteen) => {
    return canteen;
  });
  // console.log(canteensList);
  const handleChange = (event) => {
    setInputs((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  useEffect(() => {
    const cookieVal = Cookies.get("amritaMenu");

    handleSubmit(cookieVal);
  }, []);

  const handleSubmit = async () => {
    const cookieVal = Cookies.get("amritaMenu");
    await axios
      .get(`${process.env.REACT_APP_API1}getAllCanteenMenu`, {
        headers: {
          Authorization: cookieVal,
        },
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div className="flex items-center">
      <img
        className="mt-20 ml-10"
        // src="https://www.masalabox.com/wp-content/webp-express/webp-images/uploads/2022/08/order-1.png.webp"
        src="https://simg.nicepng.com/png/small/9-94335_location-icon-location-icon-png-blue.png"
        // src="https://media.kulfyapp.com/2JG0EK/2JG0EK-360.gif"
        alt="Order"
      />
      <div className="grid grid-cols-2">
        <div className="pl-10">
          <form className="w-auto max-w-lg" onSubmit={handleSubmit}>
            <label className="block uppercase tracking-wide text-pink-500 text-2xl font-bold mb-2">
              WELCOME "---USER---"
            </label>
            <div>
              <label
                className="block uppercase tracking-wide text-pink-700 text-xs font-bold mb-2"
                htmlFor="grid-state"
              >
                Select Canteen
              </label>
              <div className="relative">
                <select
                  className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                  id="grid-state"
                  name="role"
                  onChange={handleChange}
                >
                  <option value={"Mess"} disabled>
                    Mess
                  </option>
                  <option value={"main"}>Main Canteen</option>
                  <option value={"mba"}>MBA Canteen</option>
                  <option value={"it"}>IT Canteen</option>
                </select>
              </div>
            </div>
            {/* </div> */}
            <div className="md:flex md:items-center">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3 pt-3">
                <button
                  className="shadow bg-pink-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type=" submit button"
                >
                  SELECT
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="grid grid-cols-2 hover:grid-cols-2 pl-20 p-7">
          {canteens.map((canteen, index) => {
            return (
              <CanteenSpecial key={index} list={canteensList[index]}>
                {canteen}
              </CanteenSpecial>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SelectCanteen;
