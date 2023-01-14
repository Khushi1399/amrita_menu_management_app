import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Toast from "../helper/toast";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const useLogin = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = async (values) => {
    console.log("api data", values);
    await axios
      .post(`${process.env.REACT_APP_API1}signin`, values)
      .then((response) => {
        const { email, username, jwt, rollNo } = response?.data;
        Toast("User logged in successfully!");
        navigate("/select");
        console.log("login", JSON.stringify({ email, username, rollNo }));
        localStorage.setItem(
          "USER",
          JSON.stringify({ email, username, rollNo })
        );
        Cookies.set("amritaMenu", jwt);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return { formik, handleSubmit };
};

export default useLogin;
