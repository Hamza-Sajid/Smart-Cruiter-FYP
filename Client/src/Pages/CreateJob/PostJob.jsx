import React from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { Link, useNavigate } from "react-router-dom";

import LeftMenuBar from "../../Components/Dashboard/LeftMenuBar";
import TopNavigationBar from "../../Components/Dashboard/TopNavigationBar";
function PostJob() {
  const imgFilehandler = (e) => {
    if (e.target.files.length !== 0) {
      uploadimg((imgfile) => [
        ...imgfile,
        URL.createObjectURL(e.target.files[0]),
      ]);
    }
  };

  const [value, setValue] = useState("");

  return (
    <div className="flex bg-white mb-8">
      <div className="hidden sm:block w-2/12 bg-white h-screen">
        <LeftMenuBar />
      </div>
      <div className="w-full bg-background ">
        <div className="p-0">
          <TopNavigationBar />
        </div>
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
                placeholder="Digital Markeeting"
                autoComplete="on"
                className="input input-bordered  w-4/5 max-w-xs"
              />
            </div>

            <div className="w-1/2 mr-1  ml-6">
              <label className="label block line1" htmlFor="last_name">
                Office{" "}
              </label>
              <select className="select select-bordered w-full max-w-xs font-medium line1">
                <option disabled selected>
                  Islamabad{" "}
                </option>
                <option>Lahore</option>
                <option>Faisalabad</option>
              </select>
            </div>
          </div>

          {/* 2- Depratments and Job Type */}
          <div className="flex w-4/5   mt-5 m-auto">
            <div className="w-1/2 mr-1  ml-6">
              <label className="label block line1" htmlFor="last_name">
                Select Department{" "}
              </label>
              <select className=" select select-bordered w-full max-w-xs font-medium line1">
                <option disabled selected>
                  Markeeting{" "}
                </option>
                <option>IT</option>
                <option>HR</option>
              </select>
            </div>

            <div className="w-1/2 mr-1  ml-6">
              <label className="label block line1" htmlFor="last_name">
                Job Type
              </label>
              <select className="select select-bordered w-full max-w-xs font-medium line1">
                <option disabled selected>
                  Full / Part Time{" "}
                </option>
                <option>Full Time</option>
                <option>Part Time</option>
                <option>Remote</option>
                <option>Project Based</option>
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
                className=" input-bordered select w-1/2 max-w-xs font-medium line1"
              ></input>
            </div>

            <div className="w-1/2 mr-1  ml-6">
              <label className="label block line1" htmlFor="last_name">
                To (max)
              </label>
              <input
                min={1}
                type={"number"}
                placeholder="1200000"
                className="  input-bordered select w-1/2 max-w-xs font-medium line1"
              ></input>
            </div>
          </div>

          {/* Cover Photo Input Fields With Button */}

          <div className="flex flex-col  w-4/5 m-auto mt-20">
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
          </div>

          {/* DESCRIPTION INPUT FILD */}

          <div className="flex flex-col  w-4/5 m-auto mt-8">
            <h3 className="heading3">Description</h3>
            <div className="mt-3 ">
              <ReactQuill
                theme="snow"
                defaultValue={"Enter your job description"}
                value={value}
                className="h-32"
                onChange={setValue}
              />
            </div>
          </div>

          {/* NEXT BUTTON */}

          <div className="mt-24 text-center">
            <button
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
