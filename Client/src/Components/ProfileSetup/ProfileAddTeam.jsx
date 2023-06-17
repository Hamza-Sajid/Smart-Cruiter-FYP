import axios from "axios";
import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import NavigationTab from "../Dashboard/ProfileCreation/NavigationTab";

function ProfileAddTeam() {
  const navigate = useNavigate();

  const location = useLocation();

  var { Office_Profile } = location.state;

  // console.log(Office_Profile);

  //new object for POST API
  const data = {
    name: Office_Profile.office_details.office_Value.name,
    phone: Office_Profile.office_details.office_Value.phone_no,
    website_link: Office_Profile.office_details.office_Value.website,

    logo_url: {
      url: Office_Profile.office_details.office_Value.logo.image,
    },
    departments: {
      list: Office_Profile.office_details.office_Value.department.options,
    },

    address: Office_Profile.office_details.office_Value.office_location,

    city: Office_Profile.office_details.office_Value.city,
    country: Office_Profile.office_details.office_Value.country,
    region: Office_Profile.office_details.office_Value.region,
    fb_link: Office_Profile.social_links.facebook_url,
    insta_link: Office_Profile.social_links.insta_url,
    linkedin_link: Office_Profile.social_links.linkedin_url,
    yt_link: Office_Profile.social_links.yt_url,
  };
  const logo = {
    url: Office_Profile.office_details.office_Value.logo.image,
  };

  // console.log(data);
  const [team_details, setTeamDetails] = useState({
    name: "null",
    email: "as@asd.com",
    role: "admin",
  });

  console.log(data);

  //let's try with another object and pass it as a data

  const cv = {
    logo: logo.url,
    detailed_data: data,
    team_details: team_details,
  };
  const [type, setType] = useState();
  const post_Method = () => {
    // axios POST request
    const options = {
      url: "https://smart-cruiter-fyp.vercel.app/profile/setup",
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: localStorage.getItem("token"),
        // "Content-Type": "multipart/form-data",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: cv,
    };
    axios(options)
      .then((response) => {
        console.log(" i am running");
        console.log(response.status);
        if (response.status == 200) {
          navigate("/profilesetup/sucess");
        } else if (response.status == 400) {
          alert("Organization is already registered!");
        } else if (response.status == 404) {
          alert("NO USER WITH THIS USERNAME EXIST IN THE SYSTEM");
        } else {
          alert("Something went wrong, try again with proper data");
        }
      })
      .catch((e) => {
        alert("Organzation is already registered");
      });
  };

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
                value={team_details.name}
                onChange={(e) =>
                  setTeamDetails((old) => ({
                    ...old,
                    name: e.target.value,
                  }))
                }
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
                value={team_details.email}
                onChange={(e) =>
                  setTeamDetails((old) => ({
                    ...old,
                    email: e.target.value,
                  }))
                }
                placeholder="Email@abc.com"
                autoComplete="on"
                className="input input-bordered h-10 max-w-xs inline"
              />
            </div>

            <div className="ml-4 relative -top-1">
              <label className="label line1" htmlFor="role">
                Role
              </label>
              <select
                className="select select-bordered"
                onChange={(e) =>
                  setTeamDetails((old) => ({ ...old, role: e.target.value }))
                }
              >
                <option disabled selected>
                  Pick one
                </option>
                <option value={"View Only"}>View Only</option>
                <option value={"Full Access"}>Full Access</option>
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
              <select
                className="select select-bordered"
                onChange={(e) =>
                  setTeamDetails((old) => ({ ...old, role: e.target.value }))
                }
              >
                <option disabled selected>
                  Pick one
                </option>
                <option value={"View Only"}>View Only</option>
                <option value={"Full Access"}>Full Access</option>
              </select>
            </div>
          </div>
        </div>
        <button
          // onClick={() => navigate("/profilesetup/sucess")}
          onClick={post_Method}
          type="submit"
          className=" mt-12 btnfont btn btn-wide  bg-primary border-none hover:bg-black text-center m-auto block "
        >
          NEXT{" "}
        </button>

        <Link to="/home">
          <p className="heading4 text-center mt-2 text-gray-400 cursor-pointer">
            Go back to HOME
          </p>
        </Link>
      </div>
    </div>
  );
}

export default ProfileAddTeam;
