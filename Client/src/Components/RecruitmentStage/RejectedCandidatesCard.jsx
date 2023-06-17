import axios from "axios";
import React, { useEffect, useState } from "react";
import { BsFillInfoCircleFill } from "react-icons/bs";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";
import NoUserSVG from "../../assets/illustrations/no_user.svg";
import OkSVG from "../../assets/illustrations/done.svg";
import { BeatLoader } from "react-spinners";
function RejectedCandidateCard({ id }) {
  //   const { width, height } = useWindowSize();

  const [candidate, setCandidate] = useState();
  const [description, setDiscription] = useState();
  const [emailTitle, setEmailTitle] = useState();
  const [emailList, setEmailList] = useState([]);
  const [jobInfo, setJobInfo] = useState({
    job_id: "",
    organization_name: "",
    job_title: "",
  });

  const [successMsg, setSuccessMsg] = useState(false);
  const [showSpinner, setShowSpinner] = useState(false);
  useEffect(() => {
    const getCandidates = async () => {
      const options = {
        url: "https://smart-cruiter-fyp.vercel.app/details/active/rejected",
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
            setCandidate(response.data);
            setJobInfo((e) => ({
              job_id: response.data[0]?.jobID,
            }));
          } else {
            alert("something went wrong , try again");
          }
        })
        .catch((e) => {
          alert("something went wrong , try again");
        });
    };

    getCandidates();
  }, [0]);

  const navigate = useNavigate();

  const handleEmail = async () => {
    //get all user _ for bulk mail send
    if (candidate.length !== 0) {
      var email_to = [];
      candidate.map((e, index) => {
        // setEmailList((old) => [...old, e.emailAddress]);
        email_to.push(e.emailAddress);
      });

      setShowSpinner(true);
      // axios POST request
      const options = {
        url: "https://smart-cruiter-fyp.vercel.app/details/active/hired/sendEmail",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        data: { jobInfo, email_to, emailTitle, description },
      };

      axios(options).then((response) => {
        if (response.status == 200) {
          setSuccessMsg(true);
          setShowSpinner(false);
        } else {
          alert("Something went wrong , refresh page and try again");
          setShowSpinner(false);
        }
      });
    }
  };
  return (
    <div>
      <label
        htmlFor="my-modal-3"
        className="
        w-1/4
        flex 
        items-center
        justify-center
        btn mb-8  m-auto
                border-none
                bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900
                shadow-md
              "
      >
        Sent All Decline Email <FiSend className="inline text-lg ml-1" />
      </label>

      {/* MODAL UI CODE */}

      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          {successMsg == false ? (
            <div>
              <h3 className="font-bold text-xl text-gray-800 text-center">
                Decline Email
              </h3>

              <div className="flex  w-10/12 m-auto mt-6 items-center">
                <label
                  htmlFor="to"
                  className="font-semibold heading3b text-gray-700"
                >
                  Subject
                </label>
                <input
                  className="bg-gray-50 p-2 w-10/12 rounded-md indent-2 ml-4 "
                  type="text"
                  name=""
                  id=""
                  placeholder="Successfully selected for [Role]"
                  value={emailTitle}
                  onChange={(e) => {
                    setEmailTitle(e.target.value);
                  }}
                />
              </div>

              <div className="flex   mt-4 items-center">
                <ReactQuill
                  theme="snow"
                  defaultValue={"Enter your job description"}
                  value={description}
                  className="h-auto w-full rounded-md bg-gray-50 border-none"
                  onChange={setDiscription}
                  placeholder={"Try again!!"}
                />
              </div>

              <button
                onClick={handleEmail}
                className="btn bg-primary border-none text-center m-auto block
           mt-6"
              >
                Send
              </button>
              {showSpinner == true ? (
                <BeatLoader className=" text-center mt-6" color="#0063B2" />
              ) : undefined}
            </div>
          ) : (
            <div>
              <img src={OkSVG} width="250" className="block m-auto" alt="" />
              <h2 className="heading2b text-center">
                Email Sent Successfully!
              </h2>
            </div>
          )}
        </div>
      </div>

      {/* ********************** */}

      {candidate?.length !== 0 ? (
        candidate?.map((e, index) => {
          var educationLevelLastValue = e?.level.slice(-1)[0];

          return (
            <div
              key={index}
              onClick={() => {
                navigate(`/JobDetails/reccomended/details/${e._id}`);
              }}
              className="w-4/5 mb-6 block m-auto bg-white h-auto p-5  shadow-md rounded-md hover:bg-gray-50 hover:border border-solid border-gray-300  cursor-pointer  "
            >
              <div className="  flex  flex-wrap sm:flex-nowrap justify-between items-center">
                <div className="m-auto ">
                  <img
                    width={150}
                    src={e?.ResumeURL}
                    alt=""
                    className="rounded-full "
                  />
                </div>
                {/* 2nd Profile Info */}
                <div className="ml-6 flex flex-col w-full">
                  <h2 className="heading4 font-medium text-2xl mb-4">
                    {e.firstName + " " + e.lastName}
                  </h2>

                  <div className="flex  flex-wrap sm:flex-nowrap gap-2 justify-around">
                    <div className=" bg-white border border-solid border-gray-300 rounded-lg p-2 text-center">
                      <div>
                        <h4 className="block line1 font-medium">Experience</h4>
                        <h4 className="inline">{e.duration}</h4>
                      </div>
                    </div>

                    <div className="  bg-white border border-solid border-gray-300 rounded-lg p-2 text-center">
                      <div>
                        <h4 className="block line1 font-medium">Education</h4>
                        <h4 className="inline">{educationLevelLastValue}</h4>
                      </div>
                    </div>

                    <div className=" bg-white border border-solid border-gray-300 rounded-lg p-2 text-center">
                      <div>
                        <h4 className="block line1 font-medium">City</h4>
                        <h4 className="inline">{e.city}</h4>
                      </div>
                    </div>

                    <div className="bg-white border border-solid border-gray-300 rounded-lg p-2 text-center">
                      <div>
                        <h4 className="block line1 font-medium">
                          Interview Date
                        </h4>
                        <h4 className="inline">{e.interviewDate}</h4>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className=" relative left-0 bg-blue-500 p-3 mt-8 rounded-full">
                <h2 className="text-white label">{e.}%</h2>
              </div> */}
              </div>
            </div>
          );
        })
      ) : (
        // *********************************************
        // CODE FOR IF THERE ARE NOT RECCOMENDED USER
        // *********************************************
        <div className="mt-12">
          <img className="w-1/4 m-auto shadow-sm" src={NoUserSVG}></img>

          <h2 className="heading2b text-center mt-8">
            Currently no Rejected Candidate
          </h2>
        </div>
      )}
    </div>
  );
}

export default RejectedCandidateCard;
