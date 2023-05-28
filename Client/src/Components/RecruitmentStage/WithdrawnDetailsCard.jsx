import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import { toast, ToastContainer } from "react-toastify";
import SwitchStatus from "./SwitchStatus";

function WithdrawnDetailsCard({ id }) {
  const [userDetails, setUserDetails] = useState();
  const [description, setDescription] = useState();

  const notify = () =>
    toast.success("Updated", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  useEffect(() => {
    // axios POST request
    const options = {
      url: "http://localhost:3000/details/active/withdrawn/details",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: { id },
    };

    axios(options)
      .then((response) => {
        if (response.status == 200) {
          setUserDetails(response.data);
          setDescription(response.data.withdrawn_reason);
        } else {
          alert("Something went wrong, refresh page and try again");
        }
      })
      .catch((e) => {
        alert("Something went wrong, refresh page and try again");
      });
  }, [0]);

  const handleTextValue = () => {
    // axios POST request
    const options = {
      url: "http://localhost:3000/details/active/withdrawn/details/updateReason",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: { id, description },
    };

    axios(options)
      .then((response) => {
        if (response.status == 200) {
          notify();
          console.log(response);
        } else {
          alert("Something went wrong, refresh page and try again");
        }
      })
      .catch((e) => {
        alert("Something went wrong, refresh page and try again");
      });
  };

  return (
    <div>
      <h3 className="heading3">Withdrawn Candidate</h3>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />

      <div className="flex p-4">
        <div className=" w-1/2 flex items-center">
          <img
            width={200}
            height={200}
            className="rounded-3xl"
            src={userDetails?.ResumeURL}
            alt=""
            srcset=""
          />

          <h2 className="ml-8 heading2b">
            {userDetails?.firstName + " " + userDetails?.lastName}
          </h2>
        </div>

        <div className="flex justify-end w-1/2 p-4 ">
          <label htmlFor="my-modal-3" className="btn bg-primary border-none ">
            View Resume
          </label>

          {/* **********************************
          MODAL UI CODE
********************************** */}

          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box w-11/12 max-w-5xl h-full relative">
              <label
                htmlFor="my-modal-3"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <iframe
                src={userDetails?.profilePic}
                height="100%"
                width="100%"
              ></iframe>
            </div>
          </div>
          {/* *****************************
           ***************************** */}
        </div>
      </div>

      <div className="w-11/12 m-auto mt-8 mb-8">
        <h2 className="heading3">Widthdrawn Reason</h2>

        <ReactQuill
          value={description}
          onChange={setDescription}
          className="w-full  bg-gray-100 rounded-lg p-1  mt-2 h-auto overflow-hidden"
        />

        <button
          onClick={handleTextValue}
          className="btn bg-primary border-none text-center block m-auto mt-6"
        >
          Update
        </button>
      </div>
    </div>
  );
}

export default WithdrawnDetailsCard;
