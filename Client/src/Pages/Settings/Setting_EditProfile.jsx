import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import LeftMenuBar from "../../Components/Dashboard/LeftMenuBar";
import TopNavigationBar from "../../Components/Dashboard/TopNavigationBar";

function Setting_EditProfile() {
  const [selectedFile, setSelectedFile] = useState();

  const [inputValue, setInputValue] = useState({
    name: "",
    phone_no: "",
    website: "",
    address: "",
    city: "",
    country: "",

    fb_url: "",
    linkedin_url: "",
    yt_url: "",
    insta_url: "",
  });
  // console.log(selectedFile);
  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    // Logic to handle file upload
    if (selectedFile) {
      console.log("Uploading file:", selectedFile);
      // Perform your file upload logic here
    } else {
      console.log("No file selected");
    }
  };

  const updateProfilePic = () => {
    // axios POST request
    const org_id = localStorage.getItem("organization_id");
    if (selectedFile) {
      const formData = new FormData();
      formData.append("file", selectedFile);
      formData.append("userId", org_id); // Replace userId with the actual user ID

      axios
        .post("http://localhost:3000/settings/updateProfile", formData)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      console.log("No file selected");
    }

    // const formData = new FormData();
    // formData.append("file", selectedFile);

    // const options = {
    //   url: "http://localhost:3000/settings/updateProfile",
    //   method: "POST",
    //   //   headers: {
    //   //     Accept: "application/json",
    //   //     "Content-Type": "multipart/form-data",
    //   //   },
    //   data: {
    //     // id: localStorage.getItem("organization_id"),
    //     selectedFile: formData,
    //     img: selectedFile,
    //   },
    // };

    // axios(options).then((response) => {
    //   console.log(response);
    // });
  };

  const callUpdateProfile = () => {
    // axios POST request
    const org_id = localStorage.getItem("organization_id");
    console.log(org_id);
    const formData = new FormData();

    // formData.append("userId", org_id); // Replace userId with the actual user ID
    formData.append("data", inputValue);

    axios
      .post("https://smart-cruiter-fyp.vercel.app/settings/updateProfileData", {
        inputValue,
        org_id,
      })
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div className="flex bg-white">
      <div className="hidden sm:block w-2/12 bg-white h-screen">
        <LeftMenuBar />
      </div>
      <div className="w-full bg-background">
        <div className="p-0">
          <TopNavigationBar title={"Settings"} />
        </div>

        <h2 className="p-6 mt-12 text-center font-medium heading2b">
          Update Your Organization Details
        </h2>

        <div className="w-4/5 m-auto">
          <h2 className="heading3 mb-4">Update Logo</h2>

          <form action=""></form>
          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="file-input file-input-bordered w-full max-w-xs"
          />
        </div>
        <button
          onClick={updateProfilePic}
          className="btn block m-auto w-56 bg-primary border-none mt-6"
        >
          UPDATE
        </button>
        <div className="p-6 mt-2 w-4/5 m-auto">
          <h2 className="heading3 mb-4">Basic</h2>
          <label className="label">
            <span className="label-text heading4">Name</span>
          </label>
          <input
            value={inputValue.name}
            onChange={(e) =>
              setInputValue((prevUser) => ({
                ...prevUser,
                name: e.target.value,
              }))
            }
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />

          <label className="label">
            <span className="label-text heading4">Phone No.</span>
          </label>
          <input
            value={inputValue.phone_no}
            onChange={(e) =>
              setInputValue((prevUser) => ({
                ...prevUser,
                phone_no: e.target.value,
              }))
            }
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />

          <label className="label">
            <span className="label-text heading4">Website</span>
          </label>
          <input
            value={inputValue.website}
            onChange={(e) =>
              setInputValue((prevUser) => ({
                ...prevUser,
                website: e.target.value,
              }))
            }
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        {/* 2nd div */}

        <div className="p-6 mt-2 w-4/5 m-auto">
          <h2 className="heading3 mb-4">Contact</h2>
          <label className="label">
            <span className="label-text heading4">Address</span>
          </label>
          <input
            value={inputValue.address}
            onChange={(e) =>
              setInputValue((prevUser) => ({
                ...prevUser,
                address: e.target.value,
              }))
            }
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />

          <label className="label">
            <span className="label-text heading4">City</span>
          </label>
          <input
            value={inputValue.city}
            onChange={(e) =>
              setInputValue((prevUser) => ({
                ...prevUser,
                city: e.target.value,
              }))
            }
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />

          <label className="label">
            <span className="label-text heading4">Country</span>
          </label>
          <input
            value={inputValue.country}
            onChange={(e) =>
              setInputValue((prevUser) => ({
                ...prevUser,
                country: e.target.value,
              }))
            }
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full max-w-xs"
          />
        </div>

        <div className="p-2  mt-2 w-4/5 m-auto flex">
          <h2 className="heading3 mb-4">Social Link</h2>
        </div>

        <div className=" flex gap-12 m-auto  w-4/5">
          <div className=" flex items-center justify-center">
            <img
              width={100}
              height={100}
              src="https://1000logos.net/wp-content/uploads/2021/04/Facebook-logo.png"
              alt=""
              className="inline w-24 h-22"
            />
            <input
              value={inputValue.fb_url}
              onChange={(e) =>
                setInputValue((prevUser) => ({
                  ...prevUser,
                  fb_url: e.target.value,
                }))
              }
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs inline"
            />
          </div>

          {/* TWIITER LINK */}

          <div className=" flex items-center justify-center">
            {" "}
            <img
              width={60}
              height={60}
              src="https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png"
              alt=""
              className="inline w-24 h-22"
            />
            <input
              value={inputValue.linkedin_url}
              onChange={(e) =>
                setInputValue((prevUser) => ({
                  ...prevUser,
                  linkedin_url: e.target.value,
                }))
              }
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
        </div>

        {/* 2nd DIV COVERING THE IMPORTANT DATA */}

        <div className=" flex gap-12 m-auto  w-4/5 mt-6">
          <div className=" flex items-center justify-center">
            <img
              width={100}
              src="https://img.freepik.com/premium-photo/youtube-logo-video-player-3d-design-video-media-player-interface_41204-12379.jpg"
              alt=""
              className="inline"
            />
            <input
              type="text"
              value={inputValue.yt_url}
              onChange={(e) =>
                setInputValue((prevUser) => ({
                  ...prevUser,
                  yt_url: e.target.value,
                }))
              }
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs inline"
            />
          </div>

          {/* TWIITER LINK */}

          <div className=" flex items-center justify-center">
            {" "}
            <img
              width={60}
              height={60}
              src="https://freelogopng.com/images/all_img/1658586823instagram-logo-transparent.png"
              alt=""
              className="inline "
            />
            <input
              type="text"
              value={inputValue.insta_url}
              onChange={(e) =>
                setInputValue((prevUser) => ({
                  ...prevUser,
                  insta_url: e.target.value,
                }))
              }
              placeholder="Type here"
              className="input input-bordered w-full max-w-xs ml-6"
            />
          </div>
        </div>

        <button
          onClick={callUpdateProfile}
          className="btn text-center m-auto block mt-12 w-56 mb-4 bg-primary border-none"
        >
          UPDATE
        </button>
      </div>
    </div>
  );
}

export default Setting_EditProfile;
