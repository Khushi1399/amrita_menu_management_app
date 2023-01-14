import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Toast from "../helper/toast";
import { useNavigate } from "react-router-dom";

const useUpdatePass = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      emailId: "darshansampathkumar@gmail.com",
      userPassword: "",
    },
    validationSchema: Yup.object({
      userPassword: Yup.string().required("Password is required"),
      userCPassword: Yup.string().when("password", {
        is: (val) => (val && val.length > 0 ? true : false),
        then: Yup.string().oneOf(
          [Yup.ref("userPassword")],
          "Both password need to be the same"
        ),
      }),
    }),
    onSubmit: (values) => {
      handleSubmit(values);
    },
  });

  const handleSubmit = async ({ userCPassword, ...other }) => {
    console.log("first", other);
    await axios
      .post("http://192.168.60.110:8080/api/auth/updatePassword", other)
      .then((response) => {
        console.log(response);
        Toast("Password updated successfully!");
        navigate("/login");
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return { handleSubmit, formik };
};
export default useUpdatePass;
