import React from "react";
import { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import NavigationTab from "../Dashboard/ProfileCreation/NavigationTab";

function ProfileP1() {
  const navigate = useNavigate();

  const [selectedImage, setSelectedImage] = useState();

  // --> To Handle Input Fields
  const [profileData, SetProfileData] = useState({
    name: "",
    phone_no: "",
    website: "",
  });

  console.log(selectedImage);
  return (
    <div>
      {" "}
      <form className="bg-white modalShadow w-3/5 m-auto mt-10  pb-12 ">
        <NavigationTab
          first_value={"Organization"}
          second_value={""}
          third_value={""}
          fourth_value={""}
          active={1}
          text={1}
        />
        <div className="w-4/5  m-auto mt-12 flex">
          <div className="w-1/2 mr-1">
            <label className="label line1 block " htmlFor="first_name">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Humza"
              autoComplete="on"
              className="input input-bordered h-10 w-4/5 max-w-xs"
              value={profileData.name}
              onChange={(e) =>
                SetProfileData((oldValue) => ({
                  ...oldValue,
                  name: e.target.value,
                }))
              }
            />
          </div>

          <div className="w-1/2 mr-1">
            <label className="label line1 block " htmlFor="first_name">
              Phone No.
            </label>
            <input
              type="tel"
              name="tel_number"
              id="tel_number"
              placeholder="+92 - 1112-222"
              autoComplete="on"
              className="input input-bordered h-10 w-4/5 max-w-xs"
              value={profileData.phone_no}
              onChange={(e) =>
                SetProfileData((oldValue) => ({
                  ...oldValue,
                  phone_no: e.target.value,
                }))
              }
            />
          </div>
        </div>

        <div className="w-4/5 m-auto mt-2 flex">
          <div className="w-1/2 mr-1">
            <label className="label line1 block " htmlFor="first_name">
              Website
            </label>
            <input
              type="url"
              name="website"
              id="website"
              placeholder="Meta.org"
              autoComplete="on"
              className="input input-bordered h-10 w-4/5 max-w-xs"
              value={profileData.website}
              onChange={(e) =>
                SetProfileData((oldValue) => ({
                  ...oldValue,
                  website: e.target.value,
                }))
              }
            />
          </div>

          <div className="w-1/2 mr-1">
            <label className="label line1 block " htmlFor="first_name">
              Logo
            </label>
            <label
              htmlFor="filePicker"
              className="btnfont btn  w-2/5 m-auto bg-primary border-none hover:bg-black"
            >
              Upload
            </label>
            <input
              id="filePicker"
              style={{ visibility: "hidden" }}
              onChange={(event) => {
                setSelectedImage(event.target.files[0]);
              }}
              type="file"
            />
          </div>
        </div>
        <button
          type="button"
          onClick={() =>
            navigate("/profilesetup/organization", {
              state: { basicInfo: profileData, image: selectedImage },
            })
          }
          className=" mt-12 btnfont btn btn-wide  bg-primary border-none hover:bg-black text-center m-auto block "
        >
          NEXT{" "}
        </button>
      </form>
    </div>
  );
}

export default ProfileP1;
