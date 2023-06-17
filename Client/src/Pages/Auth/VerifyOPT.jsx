import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import MainButton from "../../Components/Common/MainButton";

function VerifyOPT() {
  const [inputCode, SetinputCode] = useState([]);
  const [error, SetError] = useState();
  const [params, SetParam] = useState();

  const navigate = useNavigate();
  const handle = (e) => {
    e.preventDefault();

    const convertValues = () => {
      if (location && location?.search?.includes("email")) {
        const emailValue = new URLSearchParams(location.search).get("email");
        SetParam(emailValue);
      }
    };
    convertValues();
    const options = {
      url: "https://smart-cruiter-fyp.vercel.app/verify-forget-pwd",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: { params, inputCode },
    };

    axios(options)
      .then((response) => {
        if (response.status == 200) {
          navigate("/newpassword" + "?id=" + response.data.id);
        }
      })
      .catch(function (error) {
        if (error.response.status == 404) {
          SetError("Invalid code try again");
        } else {
          SetError("Error processing, something went wrong try again");
        }
      });
  };
  useEffect(() => {}, [inputCode, params]);
  return (
    <div>
      {/* component */}
      <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-12">
        <div className="relative bg-white px-6 pt-10 pb-9 shadow-xl mx-auto w-full max-w-lg rounded-2xl">
          <div className="mx-auto flex w-full max-w-md flex-col space-y-12">
            <div className="flex flex-col items-center justify-center text-center space-y-2">
              <div className="text-3xl">
                <p className="heading2">Email Verification</p>
              </div>
              <div className="flex flex-row text-gray-400 w-full ">
                <p className="heading4 mt-4">
                  We have sent a code to your email {params}
                </p>
              </div>
            </div>
            <div>
              <form>
                <div className="flex flex-col space-y-16">
                  <div className="flex flex-row items-center justify-between mx-auto w-full max-w-xs">
                    <div className="w-16 h-16 ">
                      <input
                        maxLength={1}
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text"
                        onChange={(e) => {
                          SetinputCode((oldArray) => [
                            ...oldArray,
                            e.target.value,
                          ]);
                        }}
                        // value={val[0]}
                      />
                    </div>
                    <div className="w-16 h-16 ">
                      <input
                        maxLength={1}
                        max={1}
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text"
                        onChange={(e) => {
                          SetinputCode((oldArray) => [
                            ...oldArray,
                            e.target.value,
                          ]);
                        }}
                      />
                    </div>
                    <div className="w-16 h-16 ">
                      <input
                        maxLength={1}
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text"
                        onChange={(e) => {
                          SetinputCode((oldArray) => [
                            ...oldArray,
                            e.target.value,
                          ]);
                        }}
                      />
                    </div>
                    <div className="w-16 h-16 ">
                      <input
                        maxLength={1}
                        className="w-full h-full flex flex-col items-center justify-center text-center px-5 outline-none rounded-xl border border-gray-200 text-lg bg-white focus:bg-gray-50 focus:ring-1 ring-blue-700"
                        type="text"
                        onChange={(e) => {
                          SetinputCode((oldArray) => [
                            ...oldArray,
                            e.target.value,
                          ]);
                        }}
                      />
                    </div>
                  </div>
                  {/* -> ERROR MESSAGE UI CODE */}
                  {error == null ? null : (
                    <div className="text-white text-center font-semibold bg-red-600 p-2 w-9/12 m-auto rounded">
                      {error}
                    </div>
                  )}

                  {/* ~~ ERROR MESSAGE CODE IS ENDING HERE */}
                  <div className="flex flex-col space-y-5">
                    <div className="m-auto text-center w-full">
                      <button
                        type="submit"
                        onClick={handle}
                        className=" btnfont btn btn-wide  bg-primary border-none hover:bg-black shadow-sm"
                      >
                        Verify Account
                      </button>
                    </div>
                    <div className="flex flex-row items-center justify-center text-center text-sm font-medium space-x-1 text-gray-500">
                      <p>Didn't recieve code?</p>{" "}
                      <a
                        className="flex flex-row items-center text-blue-600"
                        rel="noopener noreferrer"
                      >
                        Try again
                      </a>
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
export default VerifyOPT;
