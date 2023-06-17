import React, { useRef, useState } from "react";
import { Checkbox } from "@chakra-ui/react";

import { BsPlusCircle } from "react-icons/bs";
import axios from "axios";
import { useEffect } from "react";

function FilterProfiles({ can, setCan }) {
  const [city, setCity] = useState();
  const [slider, setSlider] = useState(0);
  const city_name = useRef();
  const filterCandidates = async (filter) => {
    // axios POST request
    const options = {
      url: "https://smart-cruiter-fyp.vercel.app/details/active/user/filter",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: {
        filter_value: filter,
      },
    };

    axios(options)
      .then((response) => {
        setCan(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  return (
    <div className="hidden sm:block">
      <h3 className="line2 font-light text-gray-700">Filter Profile</h3>

      <div className="shadow-md rounded-md bg-white mt-2">
        <h4 className="heading3b text-gray-800 pt-4 pb-3 text-center">
          Education
        </h4>

        {/* Education check boxes */}
        <div className="ml-4">
          <Checkbox
            size="md"
            colorScheme="blue"
            defaultChecked={false}
            display={"block"}
            className="mb-2"
            onChange={() => filterCandidates("BS")}
          >
            BS
          </Checkbox>

          <Checkbox
            size="md"
            colorScheme="blue"
            defaultChecked={false}
            display={"block"}
            className="mb-2"
            onChange={() => filterCandidates("MS")}
          >
            MS
          </Checkbox>

          <Checkbox
            size="md"
            colorScheme="blue"
            defaultChecked={false}
            display={"block"}
            fontSize={"2"}
            className="mb-2"
            onChange={() => filterCandidates("PHD")}
          >
            Ph.D
          </Checkbox>
        </div>
        {/* EXPERIANCE UI */}
        <h4 className="heading3b text-gray-800 pt-4 text-center">Experience</h4>
        <div className="p-3 ">
          <input
            onChange={async (e) => {
              setSlider(e.target.value); // get value as :25
              filterCandidates("Experience:" + slider); //experience : 3s
            }}
            value={slider}
            type="range"
            min="0"
            max="100"
            className="range"
            step="25"
          />
          <div className="w-full flex justify-between text-xs px-2">
            <span>0|1</span>
            <span>1|3</span>
            <span>3|5</span>
            <span>5|8</span>
            <span>8+</span>
          </div>{" "}
        </div>

        {/* CITY INPUT UI */}

        <h4 className="heading3b text-gray-800 pt-4 text-center">City</h4>
        <div className="flex items-center justify-start">
          <input
            title="add city name"
            type="text"
            placeholder="Enter City "
            className="w-8/12 border-2 rounded-lg placeholder:pl-2  border-solid border-gray-600 ml-2 mt-2 p-1"
            onChange={(e) => (city_name.current = e.target.value)}
          />
          <button
            onClick={() => setCity(city_name.current)}
            className="flex items-center mt-2 ml-2"
            title="add button"
          >
            <BsPlusCircle className="text-lg" />
          </button>
        </div>
        {/* INSERTED TAGS LIST */}
        {city !== null ? (
          <div className="flex flex-wrap mt-4  ">
            <h5
              onClick={() => filterCandidates("City:" + city)}
              className="cursor-pointer line1 bg-gray-800 p-2 rounded-lg text-white ml-3"
            >
              {city}
            </h5>
          </div>
        ) : undefined}

        {/* GENDER SELECTION UI */}
        <h4 className="heading3b text-gray-800 pt-4 pb-3 text-center">
          Gender
        </h4>
        <div className="ml-4 pb-1">
          <Checkbox
            size="md"
            colorScheme="blue"
            defaultChecked={false}
            display={"block"}
            className="mb-2  font-light "
            onChange={() => filterCandidates("MALE")}
          >
            Male
          </Checkbox>

          <Checkbox
            size="md"
            colorScheme="blue"
            defaultChecked={false}
            display={"block"}
            className="mb-2 font-light"
            onChange={() => filterCandidates("FEMALE")}
          >
            Female
          </Checkbox>
        </div>
      </div>
    </div>
  );
}

export default FilterProfiles;
