import React from "react";
import { Checkbox } from "@chakra-ui/react";

import { BsPlusCircle } from "react-icons/bs";

function FilterProfiles() {
  return (
    <div>
      <h3 className="heading4 ">Filter Profile</h3>

      <div className="modalShadow bg-white mt-2">
        <h4 className="heading3 pt-4 pb-3 text-center">Education</h4>

        {/* Education check boxes */}
        <div className="ml-4">
          <Checkbox
            size="md"
            colorScheme="blue"
            defaultChecked={false}
            display={"block"}
            className="mb-2"
          >
            10th
          </Checkbox>

          <Checkbox
            size="md"
            colorScheme="blue"
            defaultChecked={false}
            display={"block"}
            className="mb-2"
          >
            12th
          </Checkbox>

          <Checkbox
            size="md"
            colorScheme="blue"
            defaultChecked={false}
            display={"block"}
            className="mb-2"
          >
            BS
          </Checkbox>

          <Checkbox
            size="md"
            colorScheme="blue"
            defaultChecked={false}
            display={"block"}
            className="mb-2"
          >
            MS
          </Checkbox>

          <Checkbox
            size="md"
            colorScheme="blue"
            defaultChecked={false}
            display={"block"}
            className="mb-2"
          >
            Ph.D
          </Checkbox>
        </div>
        {/* EXPERIANCE UI */}
        <h4 className="heading3 pt-4 text-center">Experience</h4>
        <div className="p-3 ">
          <input type="range" min="0" max="100" className="range" step="25" />
          <div className="w-full flex justify-between text-xs px-2">
            <span>0|1</span>
            <span>1|3</span>
            <span>3|5</span>
            <span>5|8</span>
            <span>8+</span>
          </div>{" "}
        </div>

        {/* CITY INPUT UI */}

        <h4 className="heading3 pt-4 text-center">City</h4>
        <div className="flex items-center justify-start">
          <input
            title="add city name"
            type="text"
            placeholder="Enter City "
            className="w-8/12 border-2 rounded-lg placeholder:pl-2  border-solid border-gray-200 ml-2 mt-2"
          />
          <button className="flex items-center mt-2 ml-2" title="add button">
            <BsPlusCircle className="text-lg" />
          </button>
        </div>
        {/* INSERTED TAGS LIST */}

        <div className="flex flex-wrap mt-4  ">
          <h5 className="bg-gray-800 p-2 rounded-lg text-white ml-3">
            Islamabad
          </h5>
          <h5 className="bg-gray-800 p-2 rounded-lg text-white ml-3">Attock</h5>
        </div>

        {/* GENDER SELECTION UI */}
        <h4 className="heading3 pt-4 pb-3 text-center">Gender</h4>
        <div className="ml-4 pb-1">
          <Checkbox
            size="lg"
            colorScheme="blue"
            defaultChecked={false}
            display={"block"}
            className="mb-2"
          >
            Male
          </Checkbox>

          <Checkbox
            size="lg"
            colorScheme="blue"
            defaultChecked={false}
            display={"block"}
            className="mb-2"
          >
            Female
          </Checkbox>
        </div>
      </div>
    </div>
  );
}

export default FilterProfiles;
