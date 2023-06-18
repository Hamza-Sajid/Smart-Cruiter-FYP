import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { object, string } from "yup";
import MainButton from "../../Components/Common/MainButton";

function ForgetPassword() {
  const [error, Seterror] = useState();

  const navigate = useNavigate();
  const emailValue = {
    email: "",
  };
  const emailSchema = object({
    email: string().email("*Follow format").required("*Email is must"),
  });

  // -> handle login api call
  const handleLogin = async (inputData) => {
    console.log(" i am going to run");
    const options = {
      url: "https://smart-cruiter-fyp-production.up.railway.app/forget-password",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: inputData,
    };

    axios(options)
      .then((response) => {
        if (response.status == 200) {
          console.log(200);

          navigate("/verifyotp?email=" + inputData.email);
        }
      })
      .catch(function (error) {
        if (error.response.status == 400) {
          Seterror("Email address is required");
        } else if (error.response.status == 404) {
          Seterror("Email address not found");
        } else if (error.response.status == 401) {
          Seterror("Email address is not activated");
        } else {
          Seterror("Error processing password reset request");
        }
      });
  };
  const formik = useFormik({
    initialValues: emailValue,
    validationSchema: emailSchema,
    onSubmit: (e) => {
      handleLogin(e);
      // e.preventDefault();
      // console.log(e);
    },
  });
  // console.log(error);
  return (
    <div className="flex h-screen bg-background">
      <div className="m-auto shadows  w-full sm:w-2/3 h-4/5 p-8 sm:p-2">
        <img
          className="m-auto"
          width="120"
          src={
            "https://img.freepik.com/premium-vector/bronze-lock-icon-white-background-flat-design-illustration-stock-vector-graphics_668389-92.jpg?w=2000"
          }
        ></img>
        <h1 className="heading2 text-black text-center mt-4">
          Trouble Logging In
        </h1>

        <p className="heading3 text-center w-4/5 mt-8 block m-auto">
          Enter your email and we’ll send you a link to get back into your
          account.
        </p>

        <form
          className="mt-6 w-full sm:w-2/5  block m-auto "
          onSubmit={formik.handleSubmit}
        >
          <label className="label line1">Email</label>
          <input
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            name="email"
            id="email"
            type="email"
            placeholder="Your email @"
            className="h-10 input input-bordered w-full"
          />
          {/* ERROR MSG */}
          {formik.errors.email && formik.touched.email ? (
            <span className="text-blue-600"> {formik.errors.email}</span>
          ) : null}
          <div className="flex justify-center mt-12">
            <MainButton value={"Reset Password"} />
          </div>
        </form>

        <a href="#" className="heading4 text-center m-auto block mt-6">
          Return to Login
        </a>
      </div>
    </div>
  );
}

export default ForgetPassword;
