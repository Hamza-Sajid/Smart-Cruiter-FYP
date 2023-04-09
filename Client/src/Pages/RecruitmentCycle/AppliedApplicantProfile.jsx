import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function AppliedApplicantProfile() {
  const { id } = useParams();
  console.log(id);

  const [userData, setUserData] = useState();
  useEffect(() => {
    const fetchData = () => {
      // axios POST request
      const options = {
        url: "http://localhost:3000/details/active/user",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        data: { user_id: id },
      };

      axios(options).then((response) => {
        setUserData(response.data);
      });
    };
    fetchData();
  }, [0]);

  console.log(userData);
  return (
    <div>
      {userData !== null ? (
        <>
          {/* ~~~~~~~~~~~~~~~~
BASIC PROFILE AREA
~~~~~~~~~~~~~~~~ */}{" "}
          <div className=" flex">
            <div className="flex w-4/6  items-center">
              <div className="">
                <img
                  width={120}
                  src={userData?.ResumeURL}
                  alt=""
                  className="rounded-2xl shadow-md"
                />
              </div>
              <div className="ml-4 ">
                <h2 className="heading3 font-medium">
                  {userData?.firstName + " " + userData?.lastName}
                </h2>
                <h5 className="line1">DoB: (-DB Issue-) </h5>
              </div>
            </div>

            <div className="flex flex-col  w-1/3  justify-center">
              <h3 className="line1">
                <b>Email: </b>
                {userData?.emailAddress[0]}
              </h3>
              <h3 className="line1">
                {" "}
                <b>Contact:</b> {userData?.phoneNo}
              </h3>
              <h3 className="line1">
                {" "}
                <b>Address:</b> {userData?.address}
              </h3>
              <div className="w-1/2 block m-auto mt-6">
                <button className="btn bg-blue-700 border-none">
                  View Resume
                </button>
              </div>
            </div>
          </div>
          {/* EDUCATIONAL DEATILS UI CODE */}
          <div className="mt-16 w-4/5 m-auto">
            <h2 className="heading3 font-medium">Education</h2>

            <div className="mt-4 ">
              <div className="flex flex-row  justify-around bg-blue-50 rounded-md p-2">
                <div>
                  <h2 className="heading3">Degree</h2>
                </div>
                <div>
                  <h2 className="heading3">Institute</h2>
                </div>
                <div>
                  <h2 className="heading3">Graduated In</h2>
                </div>
              </div>

              {/* ---- 1st Education Details Row */}
              <div className="flex justify-around border-2 border-solid border-gray-3 rounded-md text-center p-1">
                <div className="w-2/6">
                  <h4>{userData?.majors[0]}</h4>
                </div>
                <div className="border-l-2 border-solid border-gray-300 w-2/6">
                  <h4 className="">{userData?.institute[0]}</h4>
                </div>
                <div className="border-l-2 border-solid border-gray-300 w-2/6">
                  <h4 className="ml-6">DB Issue</h4>
                </div>
              </div>
            </div>
          </div>
          {/* EXPERIENCE DEATILS UI CODE */}
          <div className="mt-12 w-4/5 m-auto">
            <h2 className="heading3 font-medium">Experience</h2>

            <div className="mt-4 ">
              <div className="flex flex-row  justify-around bg-blue-50 rounded-md p-2">
                <div>
                  <h2 className="heading3">Title</h2>
                </div>
                <div>
                  <h2 className="heading3">Organization</h2>
                </div>
                <div>
                  <h2 className="heading3">Duration</h2>
                </div>
              </div>

              {/* ---- 1st Education Details Row */}
              <div className="flex justify-around border-2 border-solid border-gray-3 rounded-md text-center p-1">
                <div className="w-2/6">
                  <h4>{userData?.title[0]}</h4>
                </div>
                <div className="border-l-2 border-solid border-gray-300 w-2/6">
                  <h4 className=""> {userData?.companyName[0]} </h4>
                </div>
                <div className="border-l-2 border-solid border-gray-300 w-2/6">
                  <h4 className="ml-6">{userData?.duration[0]} Years </h4>
                </div>
              </div>
            </div>
          </div>
          {/* SOCIAL HANDLE DEATILS UI CODE */}
          <div className="w-4/5 m-auto mt-12">
            <h2 className="heading3 font-medium">Social Handles</h2>
          </div>
          <div className="shadows rounded-md flex w-4/5 m-auto mt-4 p-6">
            <div className="w-1/2">
              <h2 className="heading4 font-medium inline">LinkedIn:</h2>
              <input
                className="ml-4"
                type="text"
                name=""
                value={userData?.linkedinProfile}
                id=""
              />
            </div>

            <div>
              <h2 className="heading4 font-medium inline">GitHub</h2>
              <input
                className="ml-4"
                type="text"
                name=""
                value={userData?.gitHubProfile}
                id=""
              />
            </div>
          </div>
        </>
      ) : (
        <h2> Loading ....</h2>
      )}
    </div>
  );
}

export default AppliedApplicantProfile;
