import React, { useState } from "react";
import axios from "axios";
import Toast from "../helper/toast";
import CanteenSpecial from "./canteenSpecial";
import menus from "../../local-json/menu.json"

let canteens = ['Main Canteen','MBA Canteen','IT Canteen','Mess']
let canteensList = ["mainCanteenMenuList"]
console.log(canteensList);
const SelectCanteen = () => {
  const [inputs, setInputs] = useState({});
  const [menu,setMenu] = useState([]);

  const handleChange = (event) => {
    setInputs((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputs);
    await axios
      .post("http://10.11.130.170:8080/api/auth/register", {
        username: "jack Doe",
        email: "rty@mail.com",
        role: ["user"],
        password: "amrita99",
        rollNo: "11220",
        mobileNo: "9999990000",
      })
      .then(function (response) {
        console.log(response);
        Toast(response.data?.message);
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
        src = "https://simg.nicepng.com/png/small/9-94335_location-icon-location-icon-png-blue.png"
        alt="Order"
      />
      <div className="grid grid-cols-2">
        <div className="pl-20">
          <form className="w-auto max-w-lg" onSubmit={handleSubmit}>
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
                  <option value={"Mess"}>Mess</option>
                  <option value={"main"}>Main Canteen</option>
                  <option value={"mba"}>MBA Canteen</option>
                  <option value={"it"}>IT Canteen</option>
                </select>
              </div>
            </div>
            {/* </div> */}
            <div className="md:flex md:items-center">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3">
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
        <div className="grid grid-cols-2 hover:grid-cols-2 pl-20">
            {
              canteens.map((canteen,index)=>{
                return <CanteenSpecial key={index} list={menus.mainCanteenMenuList}>{canteen}</CanteenSpecial>
              })
            }
        </div>
      </div>
            {console.log(menu)}
    </div>
  );
};

export default SelectCanteen;
