import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Toast from "../helper/toast";

const useLogin = () => {
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
    console.log("first", values);
    await axios
      .post("http://10.11.130.170:8080/api/auth/signin", values)
      .then(function (response) {
        console.log(response);
        Toast("User logged in successfully!");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return { formik, handleSubmit };
};

export default useLogin;
