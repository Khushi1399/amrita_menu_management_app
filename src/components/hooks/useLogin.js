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
        Toast("User logged in successfully!");
        navigate("/canteen-selection");
        Cookies.set("amritaMenu", response?.data?.jwt);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return { formik, handleSubmit };
};

export default useLogin;
