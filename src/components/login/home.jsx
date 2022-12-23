import React, { useEffect } from "react";
import axios from "axios";
import Cookies from "js-cookie";

const Home = () => {
  useEffect(() => {
    handleSubmit();
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
  return "Welcome";
};

export default Home;
