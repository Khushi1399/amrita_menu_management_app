import React, { useEffect, useState } from "react";
import NavigationItem from "./NavigationItem";
import Cookies from "js-cookie";

const NavigationItems = () => {
  const cookieVal = Cookies.get("amritaMenu");
  const [cookie, setCookie] = useState(cookieVal);
  const userData = JSON.parse(localStorage.getItem("USER"));

  return (
    <ul className="NavigationItems flex items-center space-x-10 text-xl pl-20 font-semibold text-slate-50">
      {!cookie ? (
        <>
          <NavigationItem link="/login" handleClick={() => {}}>
            LOGIN
          </NavigationItem>
          <NavigationItem link="/register" handleClick={() => {}}>
            REGISTER
          </NavigationItem>
        </>
      ) : (
        <>
          <NavigationItem link="/order" handleClick={() => {}}>
            {`WELCOME ${userData.username}`}
          </NavigationItem>
          <NavigationItem link="/history" handleClick={() => {}}>
            Order History
          </NavigationItem>
          <NavigationItem
            link="/login"
            handleClick={() => {
              Cookies.remove("amritaMenu");
            }}
          >
            LOGOUT
          </NavigationItem>
        </>
      )}
    </ul>
  );
};

export default NavigationItems;
