import React from "react";
import { MdOutlineSpeakerNotes } from "react-icons/md";

import { AiFillHeart } from "react-icons/ai";

import { TiUserDelete } from "react-icons/ti";
import DeleteCandidateProfileButton from "./DeleteCandidateProfileButton";
import CandidateNotes from "./CandidateNotes";

function SwitchStatus({ id }) {
  return (
    <div className="flex bg-white rounded-md shadow flex-row p-4">
      <div className=" w-full flex items-center">
        <h2 className="inline heading4">Switch Status</h2>
        <select className="select select-md select-bordered max-w-xs ml-4">
          <option disabled selected>
            Applied Status
          </option>
          <option>Han Solo</option>
          <option>Greedo</option>
        </select>
      </div>

      <div className="justify-around  items-center w-2/6 flex ml-2">
        {/* NOTES BUTTON CODE */}
        <CandidateNotes id={id} />

        {/* LIKE BUTTON CODE */}
        <div className="flex flex-col justify-center items-center">
          <div className="bg-white shadows w-auto p-2 rounded-full hover:bg-gray-600 hover:text-white">
            <button className="m-auto  text-xl flex justify-center">
              <AiFillHeart className="line1 text-2xl text-blue-500  hover:text-white" />
            </button>
          </div>
          <h5 className="line2">Like</h5>
        </div>

        {/* DELETE BUTTON CODE */}
        <div className="flex flex-col justify-center items-center">
          <DeleteCandidateProfileButton id={id} />
        </div>
      </div>
    </div>
  );
}

export default SwitchStatus;
