import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import axios from "axios";

const useSelect = () => {
  const [menuList, setMenuList] = useState({});
  const [cookieValue, setCookieValue] = useState();
  const cookieVal = Cookies.get("amritaMenu");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    handleSubmit();
    setCookieValue(cookieVal);
  }, [cookieValue]);

  useEffect(() => {}, [menuList]);

  const handleSubmit = async () => {
    setLoading(true);
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
        setLoading(false);
        // window.location.reload();
        setMenuList(canteensList);
      })
      .finally(() => {
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return { handleSubmit, menuList, loading };
};
export default useSelect;
