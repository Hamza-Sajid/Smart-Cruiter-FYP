import axios from "axios";
import React, { useState, useEffect } from "react";
import LeftMenuBar from "../../Components/Dashboard/LeftMenuBar";
import TopNavigationBar from "../../Components/Dashboard/TopNavigationBar";
import ProfileSetup from "../../Components/ProfileSetup/ProfileSetup";
import DepartmentPhoto from "../../assets/illustrations/dep_1.jpg";
import DepartmentPhoto2 from "../../assets/illustrations/dep_2.jpg";
import DepartmentPhoto3 from "../../assets/illustrations/dep_3.jpg";
import { HiOfficeBuilding } from "react-icons/hi";
import { useDispatch } from "react-redux";
import {
  fetchOrganizationDataStart,
  fetchOrganizationDataSuccess,
  fetchOrganizationDataFailure,
} from "../../Features/Dashboard/Organization_Details_Slice";
function HomePage() {
  const dispatch = useDispatch();

  //to store is user setup the organization profile or not
  const [profileSetup, setProfileSetup] = useState(false);
  const [organizationData, setOrganizationData] = useState();
  const [organizationDeatails, setOrganizationDetails] = useState();
  const CheckAuth = async () => {
    axios
      .post(
        "https://smart-cruiter-fyp.vercel.app/home",
        {},
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then(function (response) {
        // console.log(response);
        if (response.data.org_registered == true) {
          setOrganizationData(response.data);
          setProfileSetup(true);
          localStorage.setItem("user_id", response.data._id);
          localStorage.setItem("organization_id", response.data.org_id);
        }
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const CheckOrganization = async () => {
    dispatch(fetchOrganizationDataStart());

    axios
      .post("https://smart-cruiter-fyp.vercel.app/dashboard", {
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },

        data: {
          organization_id: localStorage.getItem("organization_id"),
        },
      })
      .then(function (response) {
        // console.log(response);
        //Translating an ARRAY -> OBJECT
        const arr = Object.entries(response.data.organizaion);
        setOrganizationDetails(arr);
        dispatch(fetchOrganizationDataSuccess(arr));

        // setOrganizationDetails(response.data.organizaion);
      })
      .catch(function (error) {
        dispatch(fetchOrganizationDataFailure(error.message));
        console.log(error);
      });
  };
  useEffect(() => {
    CheckAuth();
    CheckOrganization();
  }, [profileSetup]);

  const depImages = [DepartmentPhoto, DepartmentPhoto2, DepartmentPhoto3];

  return (
    <div className="flex bg-white">
      <div className="hidden sm:block w-2/12 bg-white h-screen">
        <LeftMenuBar />
      </div>
      <div className="w-full bg-background">
        <div className="p-0">
          <TopNavigationBar title={"Home"} />
          {/* ## USING CONDITIONAL RENDERING HERE TO DIFFRENTIATE 1ST TIME USER AND WELL SETUP USER */}
          {profileSetup == false ? (
            // ~~ WHEN USER LOGIN 1ST TIME ~~
            <>
              <h1 className="heading1 ml-12  mt-20 text-transparent text-3xl sm:text-6xl bg-clip-text bg-gradient-to-r from-blue-500 to-black">
                Welcome to Smart Cruiter
              </h1>
              <div className="bg-white w-full sm:w-3/5 rounded-xl m-auto mt-4 topNavigationBoxShadow">
                <ProfileSetup />
              </div>
            </>
          ) : (
            <>
              {/* // ~~ WHEN USER LOGIN AFTER PROFILE SETUP ~~ */}
              <h2>
                <div className="p-6">
                  <h2 className="mt-2 heading2 ">
                    {organizationData?.company_name}
                  </h2>
                  {/* // ~~ To show departments */}
                  <div className="flex gap-6 items-center justify-center text-center mt-12">
                    {organizationDeatails?.[6][1].map((e, index) => {
                      //to get random number value as src
                      let imageNumber = Math.floor(Math.random() * 3);

                      return (
                        <div
                          key={index}
                          className="mt-16 relative shadows  rounded-2xl w-52 h-52 items-center flex justify-center flex-col cursor-pointer"
                        >
                          <img
                            src={depImages[imageNumber]}
                            // width={220}
                            // height={220}
                            className="block  brightness-50 rounded-md shadow-md border border-solid border-gray-300 drop-shadow-md
                            hover:blur-sm
                            
                            "
                            alt=""
                          />
                          <h2 className="heading2b  absolute  text-white top-1/2">
                            {e}
                          </h2>

                          {/* <HiOfficeBuilding className="text-4xl text-blue-500 shadow-lg" /> */}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </h2>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
