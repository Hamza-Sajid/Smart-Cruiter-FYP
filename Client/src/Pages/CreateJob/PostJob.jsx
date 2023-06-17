import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import LeftMenuBar from "../../Components/Dashboard/LeftMenuBar";
import TopNavigationBar from "../../Components/Dashboard/TopNavigationBar";

import Confetti from "react-confetti";
function PostJob() {
  const navigate = useNavigate();
  const [apiFetched, setAPIFetched] = useState(false);
  const [description, setDescription] = useState("");

  const [formData, setFormData] = useState({
    postition: "",
    office_location: "",
    department: "",
    job_type: "",
    no_of_seats: "",
    salary_range_from: "",
    salary_range_upto: "",
  });
  const [department, setDepartments] = useState([]);
  const [officeLocation, setOfficeLocation] = useState();
  const count = useSelector(
    (state) => state.OrganizationDetailsReducer.apiData
  );
  // console.log(count);
  var org_data = [];
  org_data.push(count?.[8][1]);
  org_data.push(count?.[9][1]);
  org_data.push(count?.[2][1]);
  org_data.push(count?.[0][1]);
  // console.log(count[8][1]);

  const imgFilehandler = (e) => {
    if (e.target.files.length !== 0) {
      uploadimg((imgfile) => [
        ...imgfile,
        URL.createObjectURL(e.target.files[0]),
      ]);
    }
  };

  //From here i need to have the following data (dynamicity)
  //1-) Office Location 2-) Departments

  const handleSubmit = async () => {
    // axios POST request
    const options = {
      url: "http://localhost:3000/job/post",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: {
        form: formData,
        description: description,
        org_details: org_data,
      },
    };

    axios(options).then((response) => {
      if (response.status == 200) {
        setAPIFetched(true);
      } else {
        alert("something went wrong try again");
      }
    });
  };
  console.log(formData);
  return (
    <div className="flex bg-white mb-8">
      <div className="hidden sm:block w-2/12 bg-white h-screen">
        <LeftMenuBar />
      </div>
      <div className="w-full bg-background ">
        <div className="p-0">
          <TopNavigationBar title={"Jobs"} />
        </div>

        {/* component */}
        {apiFetched == false ? undefined : (
          <div>
            <Confetti style={{ width: "90%" }} height={220} />

            <div
              className=" min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-50 outline-none focus:outline-none bg-no-repeat bg-center bg-cover"
              id="modal-id"
            >
              <div className="absolute bg-black opacity-80 inset-0 z-0" />
              <div className="w-full  max-w-lg p-5 relative mx-auto my-auto rounded-xl shadow-lg  bg-white ">
                {/*content*/}
                <div className>
                  {/*body*/}
                  <div className="text-center p-5 flex-auto justify-center">
                    <svg
                      fill="rgb(1,160,20)"
                      className="w-16 h-16 block m-auto text-blue-500"
                      viewBox="0 0 24 24"
                      id="d9090658-f907-4d85-8bc1-743b70378e93"
                      data-name="Livello 1"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>prime</title>
                      <path
                        id="70fa6808-131f-4233-9c3a-fc089fd0c1c4"
                        data-name="done circle"
                        d="M12,0A12,12,0,1,0,24,12,12,12,0,0,0,12,0ZM11.52,17L6,12.79l1.83-2.37L11.14,13l4.51-5.08,2.24,2Z"
                      />
                    </svg>
                    <h2 className="text-xl font-bold py-4 ">Congratulations</h2>
                    <p className="text-sm text-gray-500 px-8">
                      Job has been posted successfully
                    </p>
                  </div>
                  {/*footer*/}
                  <div className="p-3  mt-2 text-center space-x-4 md:block">
                    <button
                      onClick={(e) => navigate("/jobs")}
                      className="text-lg mb-2 md:mb-0 bg-gray-900  px-5 py-2  shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-black"
                    >
                      Continue...
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CREATE NEW JOB */}
        <div className="modalShadow bg-white block m-auto w-4/5 mt-14">
          <h2 className="heading2b text-center text-primarytext p-8">
            Create New Job
          </h2>

          {/* DESCRIPTION PARAGRAPH */}
          <p className="line1 text text-secondrytext w-4/5  m-auto">
            A job represents a new opening, an open position or a vacancy
            listing. Creating a job will allow you to add candidates to that job
            and advertise it on your career page and job boards.
          </p>

          {/* JOB INPUT FIELDS */}
          {/* 1- Position and office fields */}
          <div className="flex w-4/5   mt-5 m-auto">
            <div className="w-1/2 mr-1  ml-6">
              <label className="label block line1" htmlFor="last_name">
                Position{" "}
              </label>
              <input
                name="Position"
                id="Position"
                type="text"
                value={formData.postition}
                onChange={(e) => {
                  setFormData((oldValue) => ({
                    ...oldValue,
                    postition: e.target.value,
                  }));
                }}
                placeholder="Digital Markeeting"
                autoComplete="on"
                className="input input-bordered  w-4/5 max-w-xs"
              />
            </div>

            <div className="w-1/2 mr-1  ml-6">
              <label className="label block line1" htmlFor="last_name">
                Office{" "}
              </label>
              <select
                onClick={(e) => {
                  setFormData((old) => ({
                    ...old,
                    office_location: e.target.value,
                  }));
                }}
                value={formData.office_location}
                className="select select-bordered w-full max-w-xs font-medium line1"
              >
                <option disabled selected>
                  Select office location{" "}
                </option>

                <option value={count?.[8][1]}>{count?.[8][1]}</option>
              </select>
            </div>
          </div>

          {/* 2- Depratments and Job Type */}
          <div className="flex w-4/5   mt-5 m-auto">
            <div className="w-1/2 mr-1  ml-6">
              <label className="label block line1" htmlFor="last_name">
                Select Department{" "}
              </label>
              <select
                onChange={(e) => {
                  setFormData((old) => ({
                    ...old,
                    department: e.target.value,
                  }));
                }}
                value={formData.department}
                className=" select select-bordered w-full max-w-xs font-medium line1"
              >
                <option disabled selected>
                  Select Department{" "}
                </option>
                {count?.[6][1].map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
                {/* <option>IT</option>
                <option>HR</option> */}
              </select>
            </div>

            <div className="w-1/2 mr-1  ml-6">
              <label className="label block line1" htmlFor="last_name">
                Job Type
              </label>
              <select
                onChange={(e) => {
                  setFormData((old) => ({
                    ...old,
                    job_type: e.target.value,
                  }));
                }}
                value={formData.job_type}
                className="select select-bordered w-full max-w-xs font-medium line1"
              >
                <option disabled selected>
                  Full / Part Time{" "}
                </option>
                <option value={"Full Time"}>Full Time</option>
                <option value={"Part Time"}>Part Time</option>
                <option value={"Remote Based"}>Remote</option>
                <option value={"Project Based"}>Project Based</option>
                <option value={"Hourly"}>hourly</option>
              </select>
            </div>
          </div>
          {/* 3- Seats input field */}
          <div className="flex w-4/5   mt-5 m-auto">
            <div className="w-1/2 mr-1  ml-6">
              <label className="label block line1" htmlFor="last_name">
                Seats
              </label>
              <input
                min={1}
                placeholder="1"
                type={"number"}
                value={formData.no_of_seats}
                onChange={(e) => {
                  setFormData((old) => ({
                    ...old,
                    no_of_seats: e.target.value,
                  }));
                }}
                className=" select input-bordered  w-2/5 max-w-xs font-medium line1"
              ></input>
            </div>
          </div>

          {/* 4- Salary Range from ~ to input field */}
          <div className="flex w-3/5   mt-5 m-auto">
            <div className="w-1/2 mr-1  ml-6">
              <label className="label block line1" htmlFor="last_name">
                Salary Range from ~~ to
              </label>
              <input
                min={1}
                placeholder="60000"
                type={"number"}
                value={formData.salary_range_from}
                onChange={(e) => {
                  setFormData((old) => ({
                    ...old,
                    salary_range_from: e.target.value,
                  }));
                }}
                className=" input-bordered select w-1/2 max-w-xs font-medium line1"
              ></input>
            </div>

            <div className="w-1/2 mr-1  ml-6">
              <label className="label block line1" htmlFor="last_name">
                To (max)
              </label>
              <input
                min={1}
                value={formData.salary_range_upto}
                onChange={(e) => {
                  setFormData((old) => ({
                    ...old,
                    salary_range_upto: e.target.value,
                  }));
                }}
                type={"number"}
                placeholder="1200000"
                className="  input-bordered select w-1/2 max-w-xs font-medium line1"
              ></input>
            </div>
          </div>

          {/* Cover Photo Input Fields With Button */}

          {/* <div className="flex flex-col  w-4/5 m-auto mt-20">
            <div>
              <h2 className="inline heading3 mr-6">Select an cover photo</h2>

              <label
                htmlFor="filePicker"
                className="text-sm btn  w-18  m-auto bg-primary border-none hover:bg-black"
              >
                Upload
              </label>
              <input
                id="filePicker"
                style={{ visibility: "hidden" }}
                onChange={imgFilehandler}
                type="file"
              />
            </div>
            <div>
              <p className="text-secondrytext line2">
                *cover photo will be shown on the job career page
              </p>
            </div>
          </div> */}

          {/* DESCRIPTION INPUT FILD */}

          <div className="flex flex-col  w-4/5 m-auto mt-8">
            <h3 className="heading3">Description</h3>
            <div className="mt-3 ">
              <ReactQuill
                theme="snow"
                defaultValue={"Enter your job description"}
                value={description}
                className="h-32"
                onChange={setDescription}
              />
            </div>
          </div>

          {/* NEXT BUTTON */}

          <div className="mt-24 text-center">
            <button
              onClick={handleSubmit}
              type="submit"
              className="mb-8 btnfont btn btn-wide  bg-primary border-none hover:bg-black"
            >
              NEXT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PostJob;
