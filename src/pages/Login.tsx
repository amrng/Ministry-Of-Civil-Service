import { useFormik } from "formik";
import MinstryLogo from "../components/Logos/MinistryLogo";
import * as yup from "yup";
import MinstryText from "../components/Logos/MinistryText";
import { LoginSchema } from "../components/interfaces/interface";
import axiosInstance from "../App/api/axios.config";
import { useState } from "react";

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);

  const validationSchema = yup.object({
    email: yup.string().email("Invalid email").required("Email is required"),
    password: yup
      .string()
      .min(5, "Minimum 5 characters")
      .required("Password is required"),
  });

  const initialValues = {
    email: "",
    password: "",
  };

  const handleFormSubmit = async (values: LoginSchema) => {
    try {
      setIsLoading(true);
      const response = await axiosInstance.post("login", values);
      console.log(response.headers.get);

      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
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
    <div className="flex justify-center items-center h-screen">
      <div className="flex flex-col items-center justify-center w-[400px] px-4 py-8 rounded-lg shadow-lg shadow-[#CEA672]">
        <div className="flex flex-col items-center">
          <MinstryLogo width="100px" />
          <MinstryText width="150px" />
        </div>

        <h1 className="my-5 font-semibold text-[#CEA672] text-xl">
          Admin Login
        </h1>

        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col items-center justify-center">
          <div>
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="email"
              name="email"
              placeholder="Email"
              autoComplete="off"
              className="rounded-lg focus:outline-none bg-[#CEA672] text-white pl-4 h-10 placeholder:text-white
            focus:placeholder:opacity-0"
            />

            {formik.errors.email && formik.touched.email ? (
              <p className="text-red-600 pt-1 ps-3 text-sm font-medium">
                {formik.errors.email}
              </p>
            ) : null}
          </div>

          <div className="my-4">
            <input
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              type="password"
              name="password"
              placeholder="Password"
              className="rounded-lg focus:outline-none bg-[#CEA672] text-white pl-4 h-10 placeholder:text-white
            focus:placeholder:opacity-0"
            />
            {formik.errors.password && formik.touched.password ? (
              <p className="text-red-600 pt-1 ps-3 text-sm font-medium">
                {formik.errors.password}
              </p>
            ) : null}
          </div>

          <button
            className="bg-[#CEA672] disabled:opacity-55 disabled:cursor-not-allowed rounded-lg px-10 py-2 text-white font-semibold"
            type="submit"
            disabled={
              formik.errors.email ||
              formik.errors.password ||
              formik.values.email === "" ||
              formik.values.password === ""
                ? true
                : false
            }>
            {isLoading ? "loadin..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
