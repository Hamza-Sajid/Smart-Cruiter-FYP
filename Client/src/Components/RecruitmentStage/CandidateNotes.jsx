import axios from "axios";
import React from "react";
import { useState } from "react";
import { MdOutlineSpeakerNotes } from "react-icons/md";

function CandidateNotes({ id }) {
  const [showComment, setShowComment] = useState(false);
  const [comment, setComment] = useState({
    Applied: "",
    Interviewing: "",
    Reccomended: "",
    Hired: "",
    Rejected: "",
  });

  const handleComments = () => {
    setShowComment(!showComment);
  };

  const postComments = () => {
    console.log("post is running");
    // axios POST request
    const options = {
      url: "http://localhost:3000/details/active/user/comments",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: { comment, id },
    };

    axios(options).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <div className="flex flex-col justify-center items-center">
        <div className="bg-white shadows w-auto p-2 rounded-full hover:bg-gray-600 hover:text-white">
          <button
            onClick={handleComments}
            className="m-auto text-xl flex justify-center"
          >
            <MdOutlineSpeakerNotes className="line1 text-2xl text-blue-500 hover:bg-gray-600 hover:text-white" />
          </button>
        </div>
        <h5 className="line2">Notes</h5>

        {/* //NOTES UI CODE */}

        {showComment == true ? (
          <div className="w-96 h-auto bg-white rounded-lg shadow-lg absolute top-1/4 p-4">
            <div>
              <h2 className="inline bg-yellow-500 p-2 rounded-lg text-white line2">
                Applied
              </h2>
              <input
                type="text"
                name=""
                id=""
                className="ml-4 bg-gray-100 rounded-md p-1 indent-2"
                placeholder="any - remarks"
                value={comment.Applied}
                onChange={(e) =>
                  setComment((old) => ({
                    ...old,
                    Applied: e.target.value,
                  }))
                }
              />
            </div>

            <div className="mt-6">
              <h2 className="inline bg-green-500 p-2 rounded-lg text-white line2">
                Interviewing
              </h2>
              <input
                type="text"
                name=""
                id=""
                className="ml-4 bg-gray-100 rounded-md p-1 indent-2"
                placeholder="any - remarks"
                value={comment.Interviewing}
                onChange={(e) =>
                  setComment((old) => ({
                    ...old,
                    Interviewing: e.target.value,
                  }))
                }
              />
            </div>

            <div className="mt-6">
              <h2 className="inline bg-pink-500 p-2 rounded-lg text-white line2">
                Reccomended
              </h2>
              <input
                type="text"
                name=""
                id=""
                className="ml-4 bg-gray-100 rounded-md p-1 indent-2"
                placeholder="any - remarks"
                value={comment.Reccomended}
                onChange={(e) =>
                  setComment((old) => ({
                    ...old,
                    Reccomended: e.target.value,
                  }))
                }
              />
            </div>

            <div className="mt-6">
              <h2 className="inline bg-blue-400 p-2 rounded-lg text-white line2">
                Hired
              </h2>
              <input
                type="text"
                name=""
                id=""
                className="ml-4 bg-gray-100 rounded-md p-1 indent-2"
                placeholder="any - remarks"
                value={comment.Hired}
                onChange={(e) =>
                  setComment((old) => ({
                    ...old,
                    Hired: e.target.value,
                  }))
                }
              />
            </div>

            <div className="mt-6">
              <h2 className="inline bg-red-500 p-2 rounded-lg text-white line2">
                Rejected
              </h2>
              <input
                type="text"
                name=""
                id=""
                className="ml-4 bg-gray-100 rounded-md p-1 indent-2"
                placeholder="any - remarks"
                value={comment.Rejected}
                onChange={(e) =>
                  setComment((old) => ({
                    ...old,
                    Rejected: e.target.value,
                  }))
                }
              />
            </div>

            <button
              onClick={postComments}
              className="bg-secondry p-2 line1 mt-6 block m-auto text-white rounded-md
                hover:bg-primary
            "
            >
              Update
            </button>
          </div>
        ) : undefined}
        {/* //END HERE */}
      </div>
    </div>
  );
}

export default CandidateNotes;
