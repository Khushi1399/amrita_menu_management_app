import { ReactNotifications } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import ToolBar from "./components/container/ToolBar";
import Login from "./components/login/login";
import Registration from "./components/login/registration";

const App = () => {
  return (
    <div className="App">
      <ToolBar />
      <ReactNotifications />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
      </Routes>
    </div>
  );
};

export default App;
