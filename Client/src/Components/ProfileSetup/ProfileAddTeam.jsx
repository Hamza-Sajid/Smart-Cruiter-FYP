import React from "react";
import { useNavigate } from "react-router-dom";
import NavigationTab from "../Dashboard/ProfileCreation/NavigationTab";

function ProfileAddTeam() {
  const navigate = useNavigate();
  return (
    <div>
      {" "}
      <div className="bg-white modalShadow w-3/5 m-auto mt-10  pb-12 ">
        <NavigationTab
          first_value={"Organization"}
          second_value={"Office Details"}
          third_value={"Social Links"}
          fourth_value={"Add Team"}
          active={4}
          text={4}
        />
        {/* THIS MENUE MAIN INPUT CONTENT */}
        <div className="mt-12 w-3/4 m-auto ">
          <h2 className="heading2b text-center ">Add Team Members Link's</h2>
          <p className="line1 text-center mt-2 text-secondrytext">
            You can add other member after finishing up this basic setup.
          </p>
          {/* HANDLING EMPLOYEES INPUT */}
          <div className=" w-full flex ">
            <div>
              <label className="label line1" htmlFor="Name">
                Name
              </label>
              <input
                type="text"
                name="f_name"
                id="f_name"
                placeholder="Name"
                autoComplete="on"
                className="input input-bordered h-10 max-w-xs inline"
              />
            </div>

            <div className="ml-4">
              <label className="label line1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="f_name"
                id="f_name"
                placeholder="Email@abc.com"
                autoComplete="on"
                className="input input-bordered h-10 max-w-xs inline"
              />
            </div>

            <div className="ml-4 relative -top-1">
              <label className="label line1" htmlFor="role">
                Role
              </label>
              <select className="select select-bordered">
                <option disabled selected>
                  Pick one
                </option>
                <option>View Only</option>
                <option>Full Access</option>
              </select>
            </div>
          </div>

          {/* HERE IS THE 2ND LINES OF EMPLOYES LINK UI CODE */}

          <div className=" w-full flex ">
            <div>
              <label className="label line1" htmlFor="Name">
                Name
              </label>
              <input
                type="text"
                name="f_name"
                id="f_name"
                placeholder="Name"
                autoComplete="on"
                className="input input-bordered h-10 max-w-xs inline"
              />
            </div>

            <div className="ml-4">
              <label className="label line1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="f_name"
                id="f_name"
                placeholder="Email@abc.com"
                autoComplete="on"
                className="input input-bordered h-10 max-w-xs inline"
              />
            </div>

            <div className="ml-4 relative -top-1">
              <label className="label line1" htmlFor="role">
                Role
              </label>
              <select className="select select-bordered">
                <option disabled selected>
                  Pick one
                </option>
                <option>View Only</option>
                <option>Full Access</option>
              </select>
            </div>
          </div>
        </div>
        <button
          onClick={() => navigate("/profilesetup/sucess")}
          type="submit"
          className=" mt-12 btnfont btn btn-wide  bg-primary border-none hover:bg-black text-center m-auto block "
        >
          NEXT{" "}
        </button>
      </div>
    </div>
  );
}

export default ProfileAddTeam;
