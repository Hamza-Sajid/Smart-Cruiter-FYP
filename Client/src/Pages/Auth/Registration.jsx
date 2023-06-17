import {
  Button,
  Modal,
  ModalBody,
  ModalHeader,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";
import axios from "axios";
import { useFormik } from "formik";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { object, string, ref } from "yup";
import MainButton from "../../Components/Common/MainButton";
import ErrorLogo from "../../assets/icons/error.png";

function Registration() {
  const [error, Seterror] = useState();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();
  let userSchema = object({
    f_name: string().max(10, "*Keep it short").required("*Name is required"),
    username: string().max(10, "*Keep it short").required("*Name is required"),
    email: string()
      .email("*Follow abc@domain.com format")
      .required("*Email is must"),
    company_name: string()
      .max(30, "*Name is too long")
      .required("*Company name is must"),
    password: string()
      .max(25, "*password is too long")
      .matches(
        /^(?=.*?[0-9])(?=.*?[A-Z])(?=).{8,}$/,
        "Must contain  [A-Z], [a-z] , [0-1] and length >=8"
      )
      .required("*Password is must"),
    confirm_password: string()
      .required("*Password is must")
      .oneOf([ref("password"), null], "*Both password must match"),
  });

  const values = {
    f_name: "",
    username: "",
    email: "",
    company_name: "",
    password: "",
    confirm_password: "",
  };

  const handleRegitser = async (inputData) => {
    const options = {
      url: "http://localhost:3000/register",
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
          onOpen();
        }
      })
      .catch(function (error) {
        if (error.response.status == 409) {
          console.log("alredy exsists");
          Seterror("Username or email already taken");
        } else if (error.response.status == 400) {
          Seterror(
            "Enter Email in format OR Password greater than 8 character"
          );
        } else {
          Seterror("An error occurred while saving the user.");
        }
      });
  };
  const formik = useFormik({
    initialValues: values,
    validationSchema: userSchema,
    onSubmit: (values) => {
      handleRegitser(values);
    },
  });

  return (
    <div className="flex h-screen bg-background">
      <div className="m-auto flex  w-5/6 sm:w-3/4 h-5/6 sm:h-5/6  shadows">
        <div className="w-2/5 shadows hidden sm:block ">
          <img
            className="h-full w-full"
            src="https://images.unsplash.com/photo-1486175060817-5663aacc6655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1aWxkaW5nc3xlbnwwfHwwfHw%3D&w=1000&q=80"
            alt=""
          />
        </div>

        <div className="w-full sm:w-3/5">
          <h2 className="text-center heading2b mt-5 sm:mt-5 text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-black">
            Become A Part Of Smart Cruiter
          </h2>

          <Modal
            closeOnOverlayClick={false}
            isOpen={isOpen}
            onClose={onClose}
            size={"xl"}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>
                Account is Registered{" "}
                <img
                  className="inline mb-1"
                  width={30}
                  src="https://cdn-icons-png.flaticon.com/512/6559/6559073.png"
                ></img>
                <hr className="mt-1" />
              </ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <h2 className="text-lg">
                  We have sent you an activation link on your email:
                  <d style={{ paddingRight: "3px" }}> </d>
                  <h1 className="inline font-bold text-gray-600">
                    {formik.values.email}
                  </h1>
                  <d style={{ paddingLeft: "3px" }}> </d>
                  kindly open your email and click on received link button to
                  verify your email account.
                </h2>
              </ModalBody>

              <ModalFooter margin={"auto"}>
                <Button
                  onClick={() => navigate("/login")}
                  colorScheme="blue"
                  mr={3}
                >
                  Go to Login
                </Button>{" "}
              </ModalFooter>
            </ModalContent>
          </Modal>

          <form action="" onSubmit={formik.handleSubmit}>
            <div className="py-3 px-8">
              <div className="flex mb-0">
                <div className="w-1/2 mr-1">
                  <label className="label line1 block " htmlFor="first_name">
                    First Name
                  </label>
                  <input
                    type="text"
                    value={formik.values.f_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="f_name"
                    id="f_name"
                    placeholder="Ali"
                    autoComplete="on"
                    className="input input-bordered h-10 w-full max-w-xs"
                  />
                  {/* ERROR MSG */}
                  <span className="text-blue-600">
                    {formik.errors.f_name}
                  </span>{" "}
                </div>
                <div className="w-1/2 mr-1  ml-6">
                  <label className="label block line1" htmlFor="last_name">
                    UserName{" "}
                  </label>
                  <input
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="username"
                    id="username"
                    type="text"
                    placeholder="Ahmad"
                    autoComplete="on"
                    className="input input-bordered h-10 w-4/5 max-w-xs"
                  />
                  {/* ERROR MSG */}
                  {formik.errors.username && formik.touched.username ? (
                    <span className="text-blue-600">
                      {" "}
                      {formik.errors.username}
                    </span>
                  ) : null}
                </div>
              </div>
              <div className="mb-0">
                <label className="label line1">Email</label>
                <input
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="email"
                  id="email"
                  type="email"
                  placeholder="alexa@meta.com"
                  className="h-10 input input-bordered w-3/4"
                />
                {/* ERROR MSG */}
                {formik.errors.email && formik.touched.email ? (
                  <span className="text-blue-600">
                    <br /> {formik.errors.email}
                  </span>
                ) : null}
              </div>

              <div className="mb-0">
                <label className="label line1">
                  Company Name{" "}
                  {formik.errors.company_name && formik.touched.company_name ? (
                    <span className="text-blue-600 relative -left-52">
                      {" "}
                      {formik.errors.company_name}
                    </span>
                  ) : null}
                </label>

                <input
                  type="text"
                  placeholder="META Inc"
                  className="h-10 input input-bordered w-3/4"
                  value={formik.values.company_name}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  name="company_name"
                  id="company_name"
                />
                {/* ERROR MSG */}
              </div>

              <div className="flex mb-0">
                <div className="w-1/2 mr-1">
                  <label className="label line1 block " htmlFor="password">
                    Password
                  </label>
                  <input
                    type="password"
                    placeholder="***"
                    className="input input-bordered h-10 w-full max-w-xs"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="password"
                    id="password"
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
                <div className="w-1/2 mr-1  ml-6">
                  <label
                    className="label block line1"
                    htmlFor="confirm_passowrd"
                  >
                    Confirm Password{" "}
                  </label>
                  <input
                    type="password"
                    placeholder="***"
                    autoComplete="on"
                    className="input input-bordered h-10 w-full max-w-xs"
                    value={formik.values.confirm_password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    name="confirm_password"
                    id="confirm_password"
                  />
                  {/* ERROR MSG */}
                  {formik.errors.confirm_password &&
                  formik.touched.confirm_password ? (
                    <span className="text-blue-600">
                      {" "}
                      {formik.errors.confirm_password}
                    </span>
                  ) : null}
                </div>
              </div>
            </div>
            {/* Error message part */}
            {error == null ? null : (
              <div className="border-2 solid border-blue-700 bg-blue-700 text-white rounded-lg p-2 w-4/5  mt-1 ml-12  m-auto block ">
                <img
                  src={ErrorLogo}
                  width={20}
                  alt=""
                  className="inline mr-2"
                />
                <p className="inline font-semibold text-center">{error}</p>{" "}
              </div>
            )}
            <div className="block m-auto text-center mt-2">
              <MainButton value={"Register"}></MainButton>
              <p className="line2 text-secondrytext mt-3">
                Already have an account?
                <Link to={"/"}>
                  <a href="" className="inline ml-2 cursor-pointer text-black">
                    Login
                  </a>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Registration;
