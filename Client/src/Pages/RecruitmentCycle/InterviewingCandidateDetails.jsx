import React from "react";
import TopRcruitementCycle from "../../Components/Dashboard/CreateJob/TopRcruitementCycle";
import LeftMenuBar from "../../Components/Dashboard/LeftMenuBar";
import TopNavigationBar from "../../Components/Dashboard/TopNavigationBar";
import FeedbackForm from "../../Components/RecruitmentStage/FeedbackForm";
import SwitchStatus from "../../Components/RecruitmentStage/SwitchStatus";
import { motion } from "framer-motion";
import { useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import TimePicker from "react-time-picker";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import JSAlert from "js-alert";
import { FiArrowLeft } from "react-icons/fi";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";
import GoBackButton from "../../Components/Common/GoBackButton";

function InterviewingCandidateDetails() {
  const { id } = useParams();
  const [value, onChange] = useState(new Date());
  const [time, setTime] = useState("10:00");

  const [candidateDetails, setCandidateDetails] = useState();
  const [discription, setDiscription] = useState();
  const [emailDetails, setEmailDetails] = useState({
    to: "asd",
    subject: "",
  });
  const [showAlert, setShowAlert] = useState(false);
  const [rating, setRating] = useState();

  useEffect(() => {
    const fetchAllInterviewingCanidate = () => {
      // axios POST request
      const options = {
        url: "https://smart-cruiter-fyp.vercel.app/details/active/interviewing/details",
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
            console.log(response);
            setCandidateDetails(response.data.candidate_details);
            setRating(response.data.candidate_details.feedback_form);
            const updatedObject = {
              ...emailDetails,
              to: response.data.candidate_details.emailAddress,
            };

            setEmailDetails(updatedObject);
          }
        })
        .catch((e) => {
          console.log(e);
        });
    };

    fetchAllInterviewingCanidate();
  }, [0]);

  const handleSavingDateAndTime = () => {
    // axios POST request

    const options = {
      url: "https://smart-cruiter-fyp.vercel.app/details/active/interviewing/details/dateandtime",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: { id, value, time },
    };

    axios(options)
      .then((response) => {
        if (response.status == 200) {
          JSAlert.alert("Added").dismissIn(1000 * 1);
        } else {
          alert("Something went wrong , refresh page and try again");
        }
      })
      .catch((e) => {
        alert("something went wrong");
      });
  };

  const navigate = useNavigate();
  // || *************************************** ||
  //  Code to make Rating % value based on the formula of 20% each cateogry
  // || *************************************** ||
  const feedback = candidateDetails?.feedback_form;

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

  const RatingPercentage = calculateFeebackPercentage(feedback);

  return (
    <div>
      <div
        style={{
          display: showAlert == false ? "none" : "block",
        }}
        className="alert alert-success shadow-lg w-1/2 absolute left-1/4"
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="stroke-current flex-shrink-0 h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="text-gray-600 heading4">
            Email 📧 has been sent successfully
          </span>
        </div>
      </div>

      <div className="flex bg-white">
        <div className="hidden sm:block w-2/12 bg-white h-screen">
          <LeftMenuBar />
        </div>
        <div className="w-full bg-background ">
          <div className="p-0">
            <TopNavigationBar title={"Interviewing"} />
            <TopRcruitementCycle />
            <div className="w-11/12 m-auto">
              <SwitchStatus id={id} />
            </div>
          </div>

          <div className="w-11/12 m-auto mt-8 ">
            <GoBackButton
              location={"Interviewing"}
              name={candidateDetails?.firstName}
            />
            <div className="flex justify-center">
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                  duration: 2,
                }}
                className="font-medium text-3xl mt-4 mr-4 inline
              
              text-transparent   bg-clip-text bg-gradient-to-r from-blue-500 to-black
              
              "
              >
                Rating
              </motion.div>

              <motion.div
                className="radial-progress text-blue-500"
                style={{ "--value": 70, "--thickness": "2px" }}
                animate={{
                  // scale: [1, 2, 2, 1, 1],
                  rotate: [0, 180, 280, 360, 0],
                  borderRadius: ["20%", "20%", "50%", "50%", "20%"],
                  animationDuration: 2,
                }}
              >
                {RatingPercentage}%
              </motion.div>
            </div>

            {/* //INTERVIEW DATE  &&& TIME */}

            <div className="mb-8">
              <h2 className="heading2b text-gray-700">Interview</h2>
              <label
                className="float-right btn bg-primary border-none"
                onClick={() => {}}
                htmlFor="my-modal-3"
              >
                Add Date & Time
              </label>

              {/* MODAL CONTENT */}
              <input type="checkbox" id="my-modal-3" className="modal-toggle" />
              <div className="modal">
                <div className="modal-box relative">
                  <label
                    htmlFor="my-modal-3"
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                  >
                    ✕
                  </label>
                  <h3 className="text-lg font-bold">
                    Enter your interview date and time
                  </h3>
                  <p className="heading3 inline mr-5">Time:</p>
                  <TimePicker
                    className="rounded-md mt-4"
                    onChange={setTime}
                    value={time}
                  />

                  <Calendar
                    className="mt-4 rounded-md block m-auto"
                    onChange={onChange}
                    value={value}
                  />

                  <button
                    onClick={handleSavingDateAndTime}
                    className="btn bg-primary border-none  block m-auto mt-6"
                  >
                    Save
                  </button>
                </div>
              </div>

              <div className="flex items-center w-1/2 mt-6  justify-start gap-12">
                <div className="bg-white  w-44 p-2  rounded-lg shadow-lg">
                  <h3 className="heading3 text-center">Date</h3>
                  {/* <p className="heading3b mt-3 text-gray-600">12/july/2023</p> */}
                  <motion.p
                    className="heading3b text-center mt-3 text-gray-600"
                    animate={{
                      x: [0, 50, 0],
                      spring: { damping: 50, stiffness: 100 },
                    }}
                  >
                    {candidateDetails?.interviewDate}
                  </motion.p>
                </div>

                <div className="bg-white p-2 w-44 rounded-lg shadow-lg">
                  <h3 className="heading3 text-center ">Time</h3>

                  <motion.p
                    className="heading3b text-center mt-3 text-gray-600"
                    animate={{
                      x: [0, 50, 0],
                      spring: { damping: 50, stiffness: 100 },
                    }}
                  >
                    {candidateDetails?.interviewTime}
                  </motion.p>
                </div>
              </div>
            </div>

            {/* //INTERVIEW LINK */}
            <div>
              <h3 className="heading2b">Generate Interview Link</h3>

              <div className="p-4 mt-12  h-auto  bg-white w-1/2 justify-around rounded-lg shadow-lg m-auto">
                <div className="flex items-center justify-around h-auto pt-24">
                  <div>
                    <img
                      width={80}
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Google_Meet_icon_%282020%29.svg/1200px-Google_Meet_icon_%282020%29.svg.png"
                      alt=""
                    />
                  </div>

                  <div>
                    <img
                      width={80}
                      src="https://companieslogo.com/img/orig/ZM-b326e02f.png?t=1647979587"
                      alt=""
                    />
                  </div>
                </div>

                <h2 className="heading4 ml-4 mt-8">Generated URL:</h2>
                <input
                  className="bg-blue-50 ml-24 p-1 rounded-lg indent-3"
                  type="url"
                  name=""
                  id=""
                  value={candidateDetails?.interview_link}
                />

                <label
                  htmlFor="my-modal-4"
                  className="btn bg-primary  m-auto mt-8 border-none w-1/2 flex items-center justify-center"
                >
                  Send Interview Invitation
                </label>

                <input
                  type="checkbox"
                  id="my-modal-4"
                  className="modal-toggle"
                />
                <div className="modal modal-bottom sm:modal-middle">
                  <div className="modal-box  ">
                    <h3 className="font-bold text-xl text-gray-800 text-center">
                      Send interview Invitation
                    </h3>

                    <div className="flex  w-10/12 m-auto mt-6 items-center">
                      <label
                        htmlFor="to"
                        className="font-semibold heading3b text-gray-700"
                      >
                        To
                      </label>
                      <input
                        className="bg-gray-50 p-2 w-10/12 rounded-md indent-2 ml-4 "
                        type="text"
                        name=""
                        id=""
                        value={emailDetails.to}
                      />
                    </div>

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
                        placeholder="Invitation for [Role] interview"
                        value={emailDetails.subject}
                        onChange={(e) => {
                          setEmailDetails((old) => ({
                            ...old,
                            subject: e.target.value,
                          }));
                        }}
                      />
                    </div>

                    <div className="flex   mt-4 items-center">
                      <ReactQuill
                        theme="snow"
                        defaultValue={"Enter your job description"}
                        value={discription}
                        className="h-auto w-full rounded-md bg-gray-50 border-none"
                        onChange={setDiscription}
                      />
                    </div>

                    <div className="modal-action block m-auto text-center mt-6">
                      <label
                        htmlFor="my-modal-4"
                        className="btn bg-primary border-none"
                        onClick={() => {
                          // axios POST request
                          const options = {
                            url: "https://smart-cruiter-fyp.vercel.app/details/active/interviewing/details/sendInterviewEmail",
                            method: "POST",
                            headers: {
                              Accept: "application/json",
                              "Content-Type": "application/json;charset=UTF-8",
                            },
                            data: {
                              discription,
                              emailDetails,
                            },
                          };

                          axios(options)
                            .then((response) => {
                              if (response.status == 200) {
                                setCandidateDetails(
                                  response.data.candidate_details
                                );

                                window.scrollTo({ top: 0, behavior: "smooth" });
                                setShowAlert(true);

                                setTimeout(() => {
                                  setShowAlert(false);
                                }, 2000);
                              } else if (response.status == 206) {
                                alert("Enter all fields");
                              }
                            })
                            .catch((e) => {
                              console.log(e);
                            });
                        }}
                      >
                        Send Now
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
              <FeedbackForm id={id} rating={rating} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InterviewingCandidateDetails;
