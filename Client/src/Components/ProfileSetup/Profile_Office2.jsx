import React, { useState } from "react";
import NavigationTab from "../Dashboard/ProfileCreation/NavigationTab";
import { MdAddCircleOutline } from "react-icons/md";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import { useNavigate, useLocation } from "react-router-dom";

function Profile_Office2() {
  const location = useLocation();
  const { basicInfo, image } = location.state;
  // console.log("this is:" + i);

  const navigate = useNavigate();

  const [department, setDepartment] = useState("");
  const [options, setOptions] = useState([]);
  const [city, SetCity] = useState();
  const [address, setAddress] = useState();
  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");
  const [text, setText] = useState();
  //This method is handling the country - orgin -locater library
  const handleAdd = () => {
    setOptions([...options, text]);
    setText("");
  };
  console.log(options);
  console.log(department);
  // => Making a stracture so i can pass as a object to next component
  const office_Value = {
    name: basicInfo.name,
    phone_no: basicInfo.phone_no,
    website: basicInfo.website,
    logo: {
      image,
    },
    department: {
      options,
    },
    office_location: address,
    city: city,
    country: country,
    region: region,
  };
  return (
    <div>
      {" "}
      <div className="bg-white modalShadow w-3/5 m-auto mt-10  pb-12 ">
        <NavigationTab
          first_value={"Organization"}
          second_value={"Office Details"}
          third_value={""}
          fourth_value={""}
          active={2}
          text={2}
        />
        {/* THIS MENUE MAIN INPUT CONTENT */}

        <div className="flex w-4/5 m-auto mt-8">
          <div className="w-1/2">
            <h2 className="heading3">1-Departments</h2>

            <div className="flex items-center mt-4">
              <input
                type="text"
                value={text}
                placeholder="Add Departments e.g HR"
                onChange={(e) => setText(e.target.value)}
                autoComplete="on"
                className="input input-bordered h-10  max-w-xs inline mt-6"
              />

              <button
                className="inline text-center text-gray-600 text-2xl ml-2 mt-6 hover:text-black hover:font-bold"
                onClick={handleAdd}
              >
                <MdAddCircleOutline />
              </button>
            </div>
            <div className="mt-4  flex overflow-hidden flex-wrap">
              {options.map((option, index) => (
                <div
                  key={index}
                  value={option}
                  className="w-auto h-auto bg-blue-500 text-white rounded-2xl ml-2 mr-2 mt-2  inline p-2 font-semibold"
                >
                  {option}
                </div>
              ))}
            </div>
          </div>

          {/* THIS IS THE RIGHT SIDE OF MENU*/}

          <div className=" ml-8">
            <h2 className="heading3">2-Office Location</h2>

            <label className="label line1 block " htmlFor="first_name">
              Address
            </label>
            <input
              type="text"
              name="f_name"
              id="f_name"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder="F-8/Makraz ISB"
              autoComplete="on"
              className="input input-bordered h-10 w-full max-w-xs"
            />
            {/* 2nd Line UI Code */}
            <div className="flex mb-0 justify-between">
              <div className=" mr-1">
                <label className="label line1 block " htmlFor="first_name">
                  City
                </label>
                <input
                  type="text"
                  name="f_name"
                  id="f_name"
                  value={city}
                  onChange={(e) => SetCity(e.target.value)}
                  placeholder="Attock"
                  autoComplete="on"
                  className="input input-bordered h-10 w-11/12 max-w-xs"
                />
              </div>
              <div className="w-9/12 mr-1  ">
                <label className="label block line1" htmlFor="last_name">
                  Country
                </label>
                {/* COUNTRY SELECT UI WITH LIBRARY */}
                <div className=" h-8">
                  <CountryDropdown
                    className="w-full  h-10 bg-transparent border border-solid border-gray-300 inline rounded "
                    value={country}
                    onChange={(val) => setCountry(val)}
                  />
                </div>
              </div>
              <div>
                <label className="label block line1 pl-8" htmlFor="last_name">
                  Region
                </label>
                <RegionDropdown
                  className="w-9/12  ml-8  mt-1  h-10 bg-transparent border border-solid border-gray-300 inline rounded "
                  country={country}
                  value={region}
                  onChange={(val) => setRegion(val)}
                />
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() =>
            navigate("/profilesetup/social", { state: { office_Value } })
          }
          type="submit"
          className=" mt-12 btnfont btn btn-wide  bg-primary border-none hover:bg-black text-center m-auto block "
        >
          NEXT{" "}
        </button>
      </div>
    </div>
  );
}

export default Profile_Office2;
