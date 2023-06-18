import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";

import {
  FcAssistant,
  FcDataSheet,
  FcGraduationCap,
  FcHome,
  FcInvite,
} from "react-icons/fc";

function ReccomendedCandidateDetailsCard({ id, user, SetUser, setID }) {
  useEffect(() => {
    const getCanidateDetails = () => {
      // axios POST request
      const options = {
        url: "https://smart-cruiter-fyp-production.up.railway.app/details/active/reccomended/details",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        data: { id },
      };

      axios(options)
        .then((response) => {
          SetUser(response.data);
          setID(response.data._id);
        })
        .catch((e) => {
          console.log(e);
        });
    };

    getCanidateDetails();
  }, [0]);

  var educationLevelLastValue = user?.level.slice(-1)[0];

  const calculateFeebackPercentage = (feedback) => {
    let rating = 0;
    for (let i = 0; i < feedback?.length; i++) {
      if (feedback[i] == 0) {
        rating += 0;
      } else {
        rating += feedback[i] * 4;
      }
    }
    return rating;
  };
  const rating = calculateFeebackPercentage(user?.feedback_form);

  return (
    <div className="flex flex-row">
      {/* ****************************************************
        THIS IS 1ST DIV SHOWING PROFILE PICTURE AND RATING
        **************************************************** */}
      <div className="flex flex-col items-center w-2/6 p-2 pt-8 bg-white border-r-2  ">
        <img
          width={150}
          className="rounded-lg"
          src={user?.ResumeURL}
          alt=""
          srcset=""
        />
        <label
          htmlFor="my-modal-3"
          className="btn mt-4 bg-secondry border-none"
        >
          View Resume
        </label>

        <input type="checkbox" id="my-modal-3" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box relative max-w-5xl h-full">
            <label
              htmlFor="my-modal-3"
              className="btn btn-sm btn-circle absolute right-2 top-2"
            >
              ✕
            </label>
            <object
              className="rounded-xl ml-1"
              data={user?.profilePic}
              type="application/pdf"
              width="100%"
              height="100%"
            ></object>
          </div>
        </div>

        <h2 className="heading2b mt-4">Interview Rating</h2>

        <div className="mt-4 bg-gray-600 p-2 w-20 h-20  flex  items-center  justify-center rounded-full">
          <p className="heading4 text-white">{rating} %</p>
        </div>
        <p className="heading3b italic text-gray-700">Details Here</p>
      </div>

      {/* ****************************************************
        THIS IS 2nd DIV SHOWING CANDIDATE DETAILS
        **************************************************** */}
      <div className="w-full p-3 pt-8 bg-white  ">
        <h2 className="heading2 mt-8 ml-12">
          {user?.firstName + " " + user?.lastName}
        </h2>

        <div className=" flex flex-col gap-4 ml-4 bg-white rounded-lg p-3 mt-12 ">
          <div className=" w-1/2">
            <h2 className="inline heading4 font-medium">
              <FcHome className="inline text-2xl relative bottom-1" /> City :
            </h2>
            <p className="inline heading4">{user?.city}</p>
          </div>

          <div className="w-1/2">
            <h2 className="inline heading4 font-medium">
              <FcDataSheet className="inline text-2xl relative bottom-1" /> DoB
              :
            </h2>
            <p className="inline heading4">{user?.dob}</p>
          </div>

          <div className="w-1/2">
            <h2 className="inline heading4 font-medium">
              <FcGraduationCap className="inline text-2xl relative bottom-1" />{" "}
              Last Degree :{" "}
            </h2>
            <p className="inline heading4">{educationLevelLastValue}</p>
          </div>

          <div className="w-1/2">
            <h2 className="inline heading4 font-medium">
              <FcAssistant className="inline text-2xl relative bottom-1" />{" "}
              Interview Date :{" "}
            </h2>
            <p className="inline heading4">{user?.interviewDate}</p>
          </div>

          <div className="w-1/2">
            <h2 className="inline heading4 font-medium">
              <FcInvite className="inline text-2xl relative bottom-1" /> Email :{" "}
            </h2>
            <p className="inline heading4">{user?.emailAddress}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReccomendedCandidateDetailsCard;
