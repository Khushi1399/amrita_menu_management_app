import "./App.css";
import Login from "./components/login/login";
import Registration from "./components/login/registration";
import ToolBar from "./components/container/ToolBar";
import Footer from "./components/container/Footer"
import { useState } from "react";

const App=()=> {
  const [form,setForm] = useState("login1")
  return (
    <div className="App">
      <ToolBar/>
      <div className="flex items-center">
        <img src="https://www.masalabox.com/wp-content/webp-express/webp-images/uploads/2022/08/order-1.png.webp" alt="Order"/>
        {form==="login"?<Login/>:<Registration/>}
      </div>
      {/* <Footer className="s" /> */}
    </div>
  );
}

export default App;
