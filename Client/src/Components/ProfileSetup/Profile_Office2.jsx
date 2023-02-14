import React, { useState } from "react";
import NavigationTab from "../Dashboard/ProfileCreation/NavigationTab";
import { MdAddCircleOutline } from "react-icons/md";
import {
  CountryDropdown,
  RegionDropdown,
  CountryRegionData,
} from "react-country-region-selector";
import { useNavigate } from "react-router-dom";

function Profile_Office2() {
  const navigate = useNavigate();
  const [text, setText] = useState("");
  const [options, setOptions] = useState([]);
  const [city, SetCity] = useState();

  const [country, setCountry] = useState("");
  const [region, setRegion] = useState("");

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleAdd = () => {
    setOptions([...options, text]);
    setText("");
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
                onChange={handleChange}
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
              placeholder="F-8/Makraz ISB"
              autoComplete="on"
              className="input input-bordered h-10 w-full max-w-xs"
            />

            <div className="flex mb-0">
              <div className="w-1/2 mr-1">
                <label className="label line1 block " htmlFor="first_name">
                  City
                </label>
                <input
                  type="text"
                  name="f_name"
                  id="f_name"
                  value={city}
                  onChange={(e) => SetCity(e.target.value)}
                  placeholder="Your city"
                  autoComplete="on"
                  className="input input-bordered h-10 w-full max-w-xs"
                />
              </div>
              <div className="w-1/2 mr-1  ml-6">
                <label className="label block line1" htmlFor="last_name">
                  Country ~ Region
                </label>

                <div className=" w-full h-8">
                  <CountryDropdown
                    className="w-full h-8 inline rounded p-1"
                    value={country}
                    onChange={(val) => setCountry(val)}
                  />

                  <RegionDropdown
                    className="w-9/12  ml-8 h-8 mt-1 rounded p-1"
                    country={country}
                    value={region}
                    onChange={(val) => setRegion(val)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <button
          onClick={() => navigate("/profilesetup/social")}
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
