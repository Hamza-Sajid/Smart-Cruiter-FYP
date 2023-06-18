import React from "react";
import SucessImg from "../../assets/illustrations/profile_success.svg";
import { AiFillHome } from "react-icons/ai";
import { useNavigate } from "react-router-dom";

function SucessModel() {
  const navigate = useNavigate();
  return (
    <div>
      {" "}
      <div className="bg-white modalShadow w-3/5 m-auto mt-10  pb-12 ">
        {/* THIS MENUE MAIN INPUT CONTENT */}
        <div className="mt-12 w-3/4 m-auto ">
          <h2 className="heading2b text-center pt-12 ">
            Congratulations Profile Setup Complete
          </h2>

          <img
            src={SucessImg}
            width="200"
            alt=""
            className="block m-auto mt-8"
          />
        </div>

        {/* NEXT BUTTON CODE */}
        <button
          onClick={() => navigate("/")}
          type="submit"
          className=" mt-12 btnfont btn btn-wide  bg-primary border-none hover:bg-black text-center m-auto block "
        >
          FINISH <AiFillHome className="inline text-xl ml-2" />
        </button>
      </div>
    </div>
  );
}

export default SucessModel;
