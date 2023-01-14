import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import axios from "axios";

const useSelect = () => {
  const [menuList, setMenuList] = useState({});
  const [cookieValue, setCookieValue] = useState();
  const cookieVal = Cookies.get("amritaMenu");

  useEffect(() => {
    handleSubmit();
    setCookieValue(cookieVal);
  }, [cookieValue]);

  useEffect(() => {}, [menuList]);

  const handleSubmit = async () => {
    await axios
      .get(`${process.env.REACT_APP_API1}getAllCanteenMenu`, {
        headers: {
          Authorization: cookieVal,
        },
      })
      .then(function (response = {}) {
        console.log("api res select", response?.data);
        let canteensList = Object.values(response.data)?.filter((canteen) => {
          return canteen;
        });

        setMenuList(canteensList);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return { handleSubmit, menuList };
};
export default useSelect;
