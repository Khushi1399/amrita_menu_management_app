import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Toast from "../helper/toast";

const useForgotPass = () => {
  const formik = useFormik({
    initialValues: {
      emailId: "",
    },
    validationSchema: Yup.object({
      emailId: Yup.string().required("email is required"),
    }),
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const formik1 = useFormik({
    initialValues: {
      emailId: "",
      userOtp: "",
    },

    onSubmit: (values) => {
      handleOTPSubmit(values);
    },
  });

  const handleSubmit = async (values) => {
    console.log("first", values);
    await axios
      .post("http://192.168.60.110:8080/api/auth/forgotpassword", values)
      .then((response) => {
        console.log(response);
        Toast(response?.data?.message);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const handleOTPSubmit = async (values) => {
    console.log("first otp", ...formik.values, ...values);
    values.userOtp &&
      axios
        .post("http://192.168.60.110:8080/api/auth/verifyOtp", {
          emailId: "darshansampathkumar@gmail.com",
          userOtp: "20328",
        })
        .then((response) => {
          console.log(response);
          Toast(response?.data?.message);
        })
        .catch(function (error) {
          console.log(error);
        });
  };

  return { handleSubmit, handleOTPSubmit, formik, formik1 };
};
export default useForgotPass;
