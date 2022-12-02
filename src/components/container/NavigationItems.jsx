import React from "react";
import NavigationItem from "./NavigationItem";

const NavigationItems=()=>{
    return(
        <ul className="NavigationItems flex items-center space-x-10 text-xl pl-20 font-semibold text-slate-50">
        <NavigationItem link="/login" active>LOGIN</NavigationItem>
        <NavigationItem link="/register">SIGN UP</NavigationItem>
    </ul>
    );
}

export default NavigationItems;