import { useFormik } from "formik";
import MinstryLogo from "../assets/Logos/MinistryLogo";
import * as yup from "yup";
import MinstryText from "../assets/Logos/MinistryText";
import { LoginSchema } from "../Shared/interfaces/interface";
import axiosInstance from "../App/api/axios.config";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../App/cookies";
import CircularProgress from "@mui/material/CircularProgress";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const [responseError, setResponseError] = useState("");

  const validationSchema = yup.object({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(8, "Minimum 8 characters")
      .required("Password is required"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const handleFormSubmit = async (values: LoginSchema) => {
    setIsLoading(true);
    await axiosInstance
      .post("login", values, {
        withCredentials: true,
      })
      .then((result) => {
        if (result.status === 200) {
          setCookie("admin-token", result.data.token, 7);
          navigate("/admin/control");
        }
      })
      .catch((error) => {
        setResponseError(error.response?.data?.message);
        console.log(error);
        setIsLoading(false);
      });

    setIsLoading(false);
  };

  const formik = useFormik<LoginSchema>({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log(values);
      handleFormSubmit(values);
    },
  });

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      {responseError !== "" ? (
        <div
          className="mb-8 bg-red-300 text-red-600 border-l-8 rounded-lg font-semibold
         border-red-600 py-3 px-12 text-center">
          <p>{responseError}</p>
        </div>
      ) : (
        ""
      )}

      <div className="flex flex-col items-center justify-center w-64 sm:w-[400px] px-4 py-8 rounded-lg shadow-lg shadow-[#CEA672]">
        <div className="flex flex-col items-center">
          <MinstryLogo width="100px" />
          <MinstryText width="150px" />
        </div>

        <h1 className="my-5 font-semibold text-[#CEA672] text-xl">
          Admin Login
        </h1>

        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col items-center w-full">
          <div className="w-full px-5">
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.email}
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
              className="rounded-lg focus:outline-none w-full bg-[#CEA672] text-white pl-4 h-10 placeholder:text-white
            focus:placeholder:opacity-0"
            />

            {formik.errors.email && formik.touched.email ? (
              <p className="text-red-600 pt-1 ps-3 text-sm font-medium">
                {formik.errors.email}
              </p>
            ) : null}
          </div>

          <div className="my-4 w-full px-5">
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
              type="password"
              name="password"
              placeholder="Password"
              className="rounded-lg focus:outline-none w-full bg-[#CEA672] text-white pl-4 h-10 placeholder:text-white
            focus:placeholder:opacity-0"
            />
            {formik.errors.password && formik.touched.password ? (
              <p className="text-red-600 pt-1 ps-3 text-sm font-medium">
                {formik.errors.password}
              </p>
            ) : null}
          </div>

          <button
            className="bg-[#CEA672] disabled:opacity-55 disabled:cursor-not-allowed rounded-lg px-14 py-2 text-white font-semibold"
            type="submit"
            disabled={
              formik.errors.email ||
              formik.errors.password ||
              formik.values.email === "" ||
              formik.values.password === ""
                ? true
                : false
            }>
            {isLoading ? (
              <CircularProgress color="inherit" size={20} thickness={5} />
            ) : (
              "Login"
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
