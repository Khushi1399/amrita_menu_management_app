import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import axios from "axios";
import Toast from "../helper/toast";

const useOrderHistory = () => {
  const [ordList, setOrdList] = useState([]);
  const cookieVal = Cookies.get("amritaMenu");
  const userData = JSON.parse(localStorage.getItem("USER"));

  useEffect(() => {
    getOrder();
  }, [cookieVal]);

  useEffect(() => {}, [ordList]);

  const getOrder = async () => {
    const roll = userData.rollNo;
    await axios
      .get(`${process.env.REACT_APP_API1}getUserMenuHistory/${roll}`, {
        headers: {
          Authorization: cookieVal,
        },
      })
      .then(function (response) {
        console.log("history--->>", response?.data?.saveOrderList);

        setOrdList(response?.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return { ordList };
};
export default useOrderHistory;
