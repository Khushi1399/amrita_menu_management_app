import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ToolBar from "./components/container/ToolBar";
import ForgotPassword from "./components/login/forgotpassword";
import Login from "./components/login/login";
import NewPassword from "./components/login/newpassword";
import Registration from "./components/login/registration";
import SelectCanteen from "./components/selectCanteen/selectCanteen";
import OrderMain from "./components/order/orderMain";
import OrderHistory from "./components/payment/orderHistory";

const App = () => {
  return (
    <div className="App">
      <ToolBar />
      <ReactNotifications />
      <script type="module" src="/path/to/js.cookie.mjs"></script>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/new" element={<NewPassword />} />
        <Route path="/select" element={<SelectCanteen />} />
        <Route path="/order" element={<OrderMain />} />
        <Route path="/history" element={<OrderHistory />} />
        <Route path="/logout" element={<Login />} />
      </Routes>
    </div>
  );
};

export default App;
