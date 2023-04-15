import axios from "axios";
import React from "react";
import { useState } from "react";
import { TiUserDelete } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

function DeleteCandidateProfileButton({ id }) {
  const [showModal, setShowModal] = useState(false);

  const navigate = useNavigate();

  const handleDeleteButton = async () => {
    // axios POST request
    const options = {
      url: "http://localhost:3000/details/active/user/delete",
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: {
        id: id,
      },
    };

    axios(options)
      .then((response) => {
        if (response.status == 200) {
          setShowModal(false);
          navigate("/jobs");
        }
      })
      .then((e) => {
        console.log(e);
      });
  };

  return (
    <div>
      {/* ///////////// */}

      <>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
              <div className="relative w-auto my-6 mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                    <h3 className="heading3 text-gray-700">
                      Are you sure to delete this candidate?
                    </h3>
                  </div>
                  {/*body*/}

                  {/*footer*/}
                  <div className="flex items-center justify-around p-6 border-t border-solid border-slate-200 rounded-b">
                    <button
                      className="bg-gray-200 h-11 rounded-lg text-black heading3b background-transparent font-bold  px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      No
                    </button>
                    <button
                      className="bg-secondry text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150
                      hover:bg-primary
                      
                      "
                      type="button"
                      onClick={handleDeleteButton}
                    >
                      Yes
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </>

      {/* ////////////////////////////////////// */}
      <div className="bg-white shadows w-auto p-2 rounded-full hover:bg-gray-600 hover:text-white">
        <button
          onClick={() => setShowModal(true)}
          className="m-auto text-xl flex justify-center "
        >
          <TiUserDelete className="line1 text-2xl text-blue-500  hover:text-white" />
        </button>
      </div>
      <h5 className="line2">Delete</h5>
    </div>
  );
}

export default DeleteCandidateProfileButton;
