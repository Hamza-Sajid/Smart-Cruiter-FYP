import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import ReactQuill from "react-quill";
import SwitchStatus from "./SwitchStatus";

function WithdrawnDetailsCard({ id }) {
  const [userDetails, setUserDetails] = useState();
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
        } else {
          alert("Something went wrong, refresh page and try again");
        }
      })
      .catch((e) => {
        alert("Something went wrong, refresh page and try again");
      });
  }, [0]);

  return (
    <div>
      <h3 className="heading3">Withdrawn Candidate</h3>

      <div className="flex p-4">
        <div className=" w-1/2 flex items-center">
          <img
            width={200}
            height={200}
            className="rounded-3xl"
            src="https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D&w=1000&q=80"
            alt=""
            srcset=""
          />

          <h2 className="ml-8 heading2b">Ahmed Ali</h2>
        </div>

        <div className="flex justify-end w-1/2 p-4 ">
          <button className="btn bg-primary border-none ">View Resume</button>
        </div>
      </div>

      <div className="w-11/12 m-auto mt-8">
        <h2 className="heading3">Widthdrawn Reason</h2>
        {/* <input
          type="text"
          name=""
          id=""
        /> =*/}

        <ReactQuill className="w-full  bg-gray-100 rounded-lg p-1  mt-2 h-auto overflow-hidden" />

        <button className="btn bg-primary border-none text-center block m-auto mt-8">
          Update
        </button>
      </div>
    </div>
  );
}

export default WithdrawnDetailsCard;
