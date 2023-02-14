import { background } from "@chakra-ui/react";
import React from "react";

function NavigationTab({
  first_value,
  second_value,
  third_value,
  fourth_value,
  active,
  text,
}) {
  return (
    <div className="flex items-center justify-around w-3/4 m-auto pt-12">
      <div className="">
        <div
          style={{ background: active == 1 ? "#2687F0" : "#E3F3FF" }}
          className="w-12 h-12 rounded-full m-auto text-2xl text-center text-white pt-2"
        >
          {text == 1 ? 1 : null}
        </div>
        <h2 className="text-center line1">{first_value}</h2>
      </div>

      <div className="">
        <h2 className="text-center line1">{second_value}</h2>

        <div
          style={{ background: active == 2 ? "#2687F0" : "#E3F3FF" }}
          className="w-12 h-12 rounded-full m-auto text-2xl text-center text-white pt-2"
        >
          {text == 2 ? 2 : null}
        </div>
      </div>

      <div className="">
        <div
          style={{ background: active == 3 ? "#2687F0" : "#E3F3FF" }}
          className="w-12 h-12 rounded-full m-auto text-2xl text-center text-white pt-2"
        >
          {text == 3 ? 3 : null}
        </div>
        <h2 className="text-center line1">{third_value}</h2>
      </div>

      <div className="">
        <h2 className="text-center line1">{fourth_value}</h2>

        <div
          style={{ background: active == 4 ? "#2687F0" : "#E3F3FF" }}
          className="w-12 h-12 rounded-full m-auto text-2xl text-center text-white pt-2"
        >
          {text == 4 ? 4 : null}
        </div>
      </div>
    </div>
  );
}

export default NavigationTab;
