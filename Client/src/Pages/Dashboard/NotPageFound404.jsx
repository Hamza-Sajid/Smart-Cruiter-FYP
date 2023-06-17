import React from "react";
import NotFound from "../../assets/illustrations/404.png";
function NotPageFound404() {
  return (
    <div className="p-6 bg-gray-700 h-screen flex-col flex justify-center items-center ">
      <div>
        <img className="w-3/4 sm:w-2/6 block m-auto" src={NotFound}></img>
      </div>
      <div>
        <h2 className="heading2 mt-8 text-white">Enter valid address!</h2>
      </div>
    </div>
  );
}

export default NotPageFound404;
