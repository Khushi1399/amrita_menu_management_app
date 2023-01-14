import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Toast from "../helper/toast";
import { useNavigate } from "react-router-dom";

const useOtp = () => {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      emailId: "",
      userOtp: "",
    },
    validationSchema: Yup.object({
      userOtp: Yup.string().required("Otp is required"),
    }),
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = async ({ userOtp }) => {
    await axios
      .post("http://192.168.60.110:8080/api/auth/verifyOtp", {
        emailId: "darshansampathkumar@gmail.com",
        userOtp,
      })
      .then((response) => {
        console.log(response);
        navigate("/new");
        Toast(response?.data?.message);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return { handleSubmit1: handleSubmit, formik1: formik };
};
export default useOtp;
