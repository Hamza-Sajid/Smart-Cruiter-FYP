import { Alert, AlertIcon } from "@chakra-ui/react";
import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { object, string, ref } from "yup";

function EnterNewPassword() {
  const [error, SetError] = useState();
  const [success, SetSuccess] = useState(false);
  const [id, SetIDParam] = useState();
  const navigate = useNavigate();
  const dataSchema = object({
    password: string()
      .max(25, "*password is too long")
      .matches(
        /^(?=.*?[0-9])(?=.*?[A-Z])(?=).{8,}$/,
        "Must contain  [A-Z], [a-z] , [0-1]"
      )
      .required("*Password is must"),
    confirmpwd: string()
      .required("*Password is must")
      .oneOf([ref("password"), null], "*Both password must match"),
  });
  const data = {
    password: "",
    confirmpwd: "",
  };

  const handleSubmission = (pass) => {
    const convertValues = () => {
      if (location && location?.search?.includes("id")) {
        const emailValue = new URLSearchParams(location.search).get("id");
        SetIDParam(emailValue);
      }
    };
    convertValues();
    const password = pass.confirmpwd;
    const options = {
      url: "http://localhost:3000/new-password",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: { id, password },
    };

    axios(options)
      .then((response) => {
        if (response.status == 200) {
          console.log(200);
          SetSuccess(true);
          SetError(false);
          setTimeout(() => {
            navigate("/login");
          }, 1500);
        }
      })
      .catch(function (error) {
        if (error.response.status == 400) {
          SetError("Must fill new-password field.");
        } else {
          SetError("⚠️  Error processing password reset request try again");
        }
      });
  };
  const formik = useFormik({
    initialValues: data,
    validationSchema: dataSchema,
    onSubmit: (e) => {
      handleSubmission(e);
    },
  });
  return (
    <div>
      {/* Sucess alert code */}
      {success == true ? (
        <div>
          <Alert status="success" variant="solid">
            <AlertIcon />
            🔑Password Updated Successfully!{" "}
          </Alert>
        </div>
      ) : null}

      {/* component */}
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
        <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
          <div className="mx-auto flex w-full max-w-md flex-col space-y-6">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="text-3xl">
                <p className="heading2">Enter New Password</p>
              </div>
            </div>
            <hr />
            <div>
              <form onSubmit={formik.handleSubmit}>
                <div className="flex flex-col space-y-16">
                  <div className="flex flex-col w-full  max-w-xs">
                    <div className="w-4/5">
                      <label className="label line1">New password</label>
                      <input
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="password"
                        className="h-10 input input-bordered w-full"
                        id="password"
                        name="password"
                        placeholder="***"
                        autoComplete="on"
                      />
                      {/* ERROR MSG */}
                      {formik.errors.password && formik.touched.password ? (
                        <span className="text-blue-600">
                          {" "}
                          {formik.errors.password}
                        </span>
                      ) : null}
                    </div>

                    <div className="w-4/5">
                      <label className="label line1">Confirm password</label>
                      <input
                        type="password"
                        value={formik.values.confirmpwd}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="h-10 input input-bordered w-full"
                        id="confirmpwd"
                        name="confirmpwd"
                        placeholder="***"
                        autoComplete="on"
                      />
                      {/* ERROR MSG */}
                      {formik.errors.confirmpwd && formik.touched.confirmpwd ? (
                        <span className="text-blue-600">
                          {" "}
                          {formik.errors.confirmpwd}
                        </span>
                      ) : null}
                    </div>
                  </div>

                  {/*  -> STARTING  ERROR HANDLING UI CODE */}

                  {error == null ? null : (
                    <div className="text-white font-semibold bg-red-600 p-2 w-9/12 m-auto rounded">
                      {error}
                    </div>
                  )}

                  {/* ~~ ENDING ERROR UI */}
                  <div className="flex flex-col space-y-5">
                    <div className="m-auto text-center w-full">
                      <button
                        type="submit"
                        className=" btnfont btn btn-wide  bg-primary border-none hover:bg-black shadow-sm"
                      >
                        Update Now
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnterNewPassword;
