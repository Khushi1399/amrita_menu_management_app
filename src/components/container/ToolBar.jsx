import React from "react";
import NavigationItems from "./NavigationItems";

const ToolBar =() =>{
    return(
            <div className="h-full ">
                <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center space-x-40">
                <div className="mx-10"><img 
                src="https://image3.mouthshut.com/images/imagesp/925968545s.jpg" 
                alt="Logo" className="h-16"/></div>
                <label className="text-center text-purple-50 font-bold text-4xl p-8 pl-20">AMRITA MENU MANAGEMENT APP</label>
                <nav>
                    <NavigationItems/>
                </nav>
            </header>
            </div>
    );
};

export default ToolBar;