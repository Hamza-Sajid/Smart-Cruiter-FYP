import React from "react";
import { AiFillHeart } from "react-icons/ai";
import DeleteCandidateProfileButton from "./DeleteCandidateProfileButton";
import CandidateNotes from "./CandidateNotes";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function SwitchStatus({ id }) {
  const [status, setStatus] = useState();
  const [alert, setAlert] = useState();

  const navigate = useNavigate();
  const notify = () =>
    toast.success("Candidate Status Updated", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const handleStatus = () => {
    // axios POST request
    const options = {
      url: "https://smart-cruiter-fyp-production.up.railway.app/details/active/user/updateStatus",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: { id, status },
    };

    axios(options)
      .then((response) => {
        if (response.status == 200) {
          notify();
          setTimeout(() => {
            navigate(-1);
          }, 1000);
        } else if (response.status == 300) {
          alert("Select any value of interview stage");
        } else {
          alert("something went wrong , refresh page and try again");
        }
      })
      .catch((e) => {
        alert("Something went wrong");
      });
  };

  return (
    <div className="flex bg-white rounded-md shadow flex-row p-4">
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

      <div className=" w-full flex items-center">
        <h2 className="inline heading4">Switch Status</h2>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="select select-md select-bordered max-w-xs ml-4"
        >
          <option defaultChecked disabled defaultValue="Applied">
            Applied Status
          </option>
          <option value="">Select</option>
          <option value="Interviewing">Interviewing</option>
          <option value="Reccomended">Reccomended</option>
          <option value="Hired">Hired</option>
          <option value="Declined">Declined</option>
          <option value="Withdrawn">Withdrawn</option>
        </select>

        <button
          onClick={handleStatus}
          className="p-2 border border-solid border-gray-200 text-gray-700 rounded-lg line1 ml-6
    font-medium
          hover:bg-gray-100 hover:shadow-md hover:text-gray-900
        "
        >
          Update
        </button>
      </div>

      <div className="  justify-around  items-center w-1/4 flex ml-2">
        {/* NOTES BUTTON CODE */}
        <CandidateNotes id={id} />

        {/* LIKE BUTTON CODE */}
        {/* <div className="flex flex-col justify-center items-center">
          <div className="bg-white shadows w-auto p-2 rounded-full hover:bg-gray-60 hover:text-white">
            <button className="m-auto  text-xl flex justify-center">
              <AiFillHeart className="line1 text-2xl text-blue-500  hover:text-white" />
            </button>
          </div>
          <h5 className="line2">Like</h5>
        </div> */}

        {/* DELETE BUTTON CODE */}
        <div className="flex flex-col justify-center items-center">
          <DeleteCandidateProfileButton id={id} />
        </div>
      </div>
    </div>
  );
}

export default SwitchStatus;
