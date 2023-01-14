import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import axios from "axios";
import Toast from "../helper/toast";
import { useNavigate } from "react-router-dom";

const useOrder = () => {
  const [ordList, setOrdList] = useState([]);
  const cookieVal = Cookies.get("amritaMenu");
  const userData = JSON.parse(localStorage.getItem("USER"));
  const menuId = localStorage.getItem("MENU_ID");
  const navigate = useNavigate();

  useEffect(() => {
    getOrder();
  }, [cookieVal]);

  useEffect(() => {}, [ordList]);

  const getOrder = async () => {
    await axios
      .get(`${process.env.REACT_APP_API1}getCanteenMenu/${menuId}`, {
        headers: {
          Authorization: cookieVal,
        },
      })
      .then(function (response) {
        console.log("ord", response?.data);
        let menuList = Object.values(response?.data).filter((canteen) => {
          return canteen;
        });

        setOrdList(menuList);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const placeOrder = async (items) => {
    const apiData = {
      rollNo: userData?.rollNo,
      orderList: items,
    };
    await axios
      .post(`${process.env.REACT_APP_API1}saveOrder`, apiData, {
        headers: {
          Authorization: cookieVal,
        },
      })
      .then(function (response) {
        console.log(response?.data);
        Toast(
          "Order Placed Successfully!, Payment Received. Idiot now go to Mess and eat."
        );
        navigate("/select");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return { ordList, placeOrder };
};
export default useOrder;
