import React from "react";

import NotificationLogo from "../../assets/icons/notification.svg";
function TopNavigationBar() {
  return (
    <div className="flex  items-center p-2  topNavigationBoxShadow bg-white">
      <div className="w-11/12  ">
        <svg
          className="m-auto inline -mt-1"
          width="23"
          height="21"
          viewBox="0 0 23 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M11.5 16.1948V13.3409M8.371 1.78253L2.7115 5.77801C1.7665 6.44392 1 7.86136 1 8.93633V15.9855C1 18.1925 2.9845 20 5.4205 20H17.5795C20.0155 20 22 18.1925 22 15.995V9.06952C22 7.91844 21.1495 6.44392 20.11 5.78752L13.621 1.66837C12.151 0.736093 9.7885 0.783659 8.371 1.78253Z"
            //Chane stroke value to make a change in color
            stroke="#0162B2"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>{" "}
        <a href="" className="ml-2 text-primary">
          Home
        </a>
      </div>

      <div className="">
        <img src={NotificationLogo} className="inline  mr-2" alt="" />
        <img
          className="hidden sm:inline"
          src="https://seeklogo.com/images/N/new-jazz-logo-D69BD35771-seeklogo.com.jpg"
          width={30}
          alt=""
        />
      </div>
    </div>
  );
}

export default TopNavigationBar;
