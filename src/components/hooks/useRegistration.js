import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Toast from "../helper/toast";
import { useNavigate } from "react-router-dom";

const useRegistration = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      email: "",
      rollNo: "",
      mobileNo: "",
      confirmpassword: "",
    },
    validationSchema: Yup.object({
      username: Yup.string().required("Username is required"),
      email: Yup.string().required("Email is required"),
      rollNo: Yup.string().required("Roll No is required"),
      mobileNo: Yup.string().required("Mobile No is required"),
      confirmpassword: Yup.string().when("password", {
        is: (val) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("password")],
          "Password Does not match"
        ),
      }),
      password: Yup.string().required("Password is required"),
    }),
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = async (values) => {
    console.log("api data", values);
    const { confirmpassword, ...other } = values;

    await axios
      .post(`${process.env.REACT_APP_API1}register`, {
        role: ["user"],
        ...other,
      })
      .then((response) => {
        Toast("User Registered in successfully!");
        navigate("/login");
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return { formik, handleSubmit };
};

export default useRegistration;
