import axios from "axios";
import React, { useEffect, useState } from "react";
import { FiSend } from "react-icons/fi";
import ReactQuill from "react-quill";
import { useNavigate } from "react-router-dom";
import NoUserSVG from "../../assets/illustrations/no_user.svg";

function HiredCandidates({ id }) {
  const [candidate, setCandidate] = useState();
  const [description, setDiscription] = useState();
  const [emailTitle, setEmailTitle] = useState();
  const [emailList, setEmailList] = useState([]);
  const [jobInfo, setJobInfo] = useState({
    job_id: "",
    organization_name: "",
    job_title: "",
  });
  useEffect(() => {
    const getCandidates = async () => {
      const options = {
        url: "http://localhost:3000/details/active/hired",
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

  const handleEmail = () => {
    //get all user _ for bulk mail send
    candidate?.map((e, index) => {
      setEmailList((old) => [...old, e.emailAddress]);
    });

    setJobInfo((e) => ({
      job_id: candidate[0].jobID,
    }));

    console.log(jobInfo);
    // ---> Now start making API -- REQUEST

    // axios POST request
    const ids = candidate._id;
    console.log(candidate._id);
    const options = {
      url: "http://localhost:3000/details/active/hired/sendEmail",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: { jobInfo, emailTitle, description },
    };
    // emailList
    axios(options).then((response) => {
      console.log(response);
    });
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
        Sent All Hired Email <FiSend className="inline text-lg ml-1" />
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

          <h3 className="font-bold text-xl text-gray-800 text-center">
            Hired Email
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
              placeholder={"Congrats"}
            />
          </div>

          <button
            onClick={handleEmail}
            className="btn bg-primary border-none text-center m-auto block
           mt-6"
          >
            Send
          </button>
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
            Currently no Hired Candidate
          </h2>
        </div>
      )}
    </div>
  );
}

export default HiredCandidates;
