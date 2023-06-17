import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { MdClose, MdOutlineSpeakerNotes } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function CandidateNotes({ id }) {
  const [showComment, setShowComment] = useState(false);
  const [comment, setComment] = useState({
    Applied: "",
    Interviewing: "",
    Reccomended: "",
    Hired: "",
    Rejected: "",
  });
  const [addComment, setAddComment] = useState(true);
  const [commentID, setCommentID] = useState();
  const handleComments = () => {
    setShowComment(!showComment);
  };

  const updateComment = () => {
    // axios POST request
    const options = {
      url: "https://smart-cruiter-fyp.vercel.app/details/active/user/patch/comments",
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: { commentID, comment, id },
    };

    axios(options).then((response) => {
      if (response.status == 200) {
        notify();
        //   setAddComment(false);
        //   setCommentID(response.data._id);
      }
    });
  };

  const postComments = () => {
    // axios POST request
    const options = {
      url: "https://smart-cruiter-fyp.vercel.app/details/active/user/add/comments",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: { comment, id },
    };

    axios(options).then((response) => {
      if (response.status == 200) {
        setAddComment(false);
        setCommentID(response.data._id);
        notify();
      }
    });
  };

  useEffect(() => {
    //get the detial of inditatls state and show at relevent places

    const getComments = () => {
      // axios GET request
      const options = {
        url: "https://smart-cruiter-fyp.vercel.app/details/active/user/get/comments",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        data: { id },
      };

      axios(options).then((response) => {
        if (response.status == 200) {
          setAddComment(false);
          setComment(() => ({
            Applied: response.data.Applied,
            Interviewing: response.data.Interviewing,
            Reccomended: response.data.Reccomended,
            Hired: response.data.Hired,
            Rejected: response.data.Rejected,
          }));
        }
      });
    };

    getComments();
  }, [0]);

  const notify = () =>
    toast.success("Remarks are saved", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

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
          <div className="w-96 h-auto bg-white rounded-lg modalShadow absolute top-72 p-4">
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

            {/* Same as */}
            <div>
              <MdClose
                onClick={() => setShowComment(false)}
                className="float-right cursor-pointer first-letter:
              hover:bg-blue-100 rounded
              "
              />
              <h2 className="inline bg-gradient-to-r from-orange-300 to-orange-500 p-2 rounded-lg text-white line2 font-medium">
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
              <h2 className="inline bg-gradient-to-r from-green-400 to-green-600 p-2 rounded-lg text-white line2 font-medium">
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
              <h2 className="inline bg-gradient-to-r from-pink-300 to-pink-500 p-2 rounded-lg text-white line2 font-medium">
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
              <h2 className="inline bg-gradient-to-r from-blue-300 to-blue-500 p-2 rounded-lg text-white line2 font-medium">
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
              <h2 className="inline bg-gradient-to-r from-red-300 to-red-500 p-2 rounded-lg text-white line2 font-medium">
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

            {addComment == true ? (
              <button
                onClick={postComments}
                className="bg-secondry p-2 line1 mt-6 block m-auto text-white rounded-md
hover:bg-primary
"
              >
                Add
              </button>
            ) : (
              <button
                onClick={updateComment}
                className="bg-secondry p-2 line1 mt-6 block m-auto text-white rounded-md
      hover:bg-primary
  "
              >
                Update
              </button>
            )}
          </div>
        ) : undefined}
        {/* //END HERE */}
      </div>
    </div>
  );
}

export default CandidateNotes;
