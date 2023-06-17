import React from "react";
import Home from "../../assets/icons/home.svg";

import Employees from "../../assets/icons/employees.svg";
import Candidates from "../../assets/icons/candidates.svg";
import Jobs from "../../assets/icons/jobs.svg";
import Report from "../../assets/icons/reports.svg";
import Settings from "../../assets/icons/settings.svg";
import { Link, useNavigate } from "react-router-dom";

function LeftMenuBar() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col">
        <div>
          <img
            className="m-auto mt-4"
            width={60}
            src="https://1000logos.net/wp-content/uploads/2022/07/Logo-ATT.png"
          />
        </div>

        <div className="flex flex-col justify-center items-center mt-14">
          <div className="m-auto w-full  flex-col  flex  items-center justify-center ">
            {/* HOME */}
            <div className=" w-full bg-white hover:bg-blue-100 transition-all duration-[850ms] hover:rounded-lg ease-out py-2  ml-8 mb-2 flex items-center">
              <div className="w-1/5">
                <svg
                  className="m-auto"
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
              </div>
              <Link to={"/"}>
                <div className="inline ml-2 mt-1">
                  <button className="inline navMenuFont">Home</button>
                </div>
              </Link>
            </div>
            {/* EMPLOYEES */}
            {/* <div className="w-full bg-white hover:bg-blue-100 transition-all duration-[850ms] hover:rounded-lg ease-out py-2  ml-8 mb-2 flex items-center">
            {" "}
            <div className="w-1/5">
              <svg
                className="m-auto"
                width="23"
                height="21"
                viewBox="0 0 23 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.1172 3.36515C18.1066 3.36515 19.7064 4.82076 19.7064 6.61014C19.7064 8.36244 18.1681 9.79024 16.2505 9.85514C16.1619 9.84586 16.0724 9.84586 15.9839 9.85514M18.0964 18.1994C18.8347 18.0603 19.532 17.7915 20.1063 17.3928C21.706 16.308 21.706 14.5187 20.1063 13.4339C19.5423 13.0445 18.8552 12.7849 18.1271 12.6366M8.68247 9.73461C8.57993 9.72534 8.45687 9.72534 8.34407 9.73461C7.16703 9.69848 6.05176 9.24956 5.23444 8.48293C4.41712 7.7163 3.96194 6.69215 3.96528 5.62737C3.96528 3.35587 5.99572 1.51086 8.5184 1.51086C9.7246 1.49119 10.89 1.90554 11.7583 2.66276C12.6266 3.41997 13.1267 4.45803 13.1484 5.54856C13.1702 6.6391 12.7119 7.69279 11.8744 8.47782C11.0368 9.26286 9.88867 9.71494 8.68247 9.73461ZM3.55509 13.1558C1.07343 14.6577 1.07343 17.1054 3.55509 18.5981C6.37515 20.304 11.0001 20.304 13.8201 18.5981C16.3018 17.0961 16.3018 14.6485 13.8201 13.1558C11.0103 11.4591 6.3854 11.4591 3.55509 13.1558V13.1558Z"
                  stroke="#333232"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <Link to={"/employees"}>
              <div className="inline ml-2 mt-1">
                <button className="inline navMenuFont">Employees</button>
              </div>
            </Link>
          </div> */}

            {/* CANDIDATES */}
            <div className="w-full bg-white hover:bg-blue-100 transition-all duration-[850ms] hover:rounded-lg ease-out py-2  ml-8 mb-2 flex items-center">
              <div className="w-1/5">
                <svg
                  className="m-auto"
                  width="33"
                  height="32"
                  viewBox="0 0 33 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24.2403 19.6577C26.3675 20.0026 28.7121 19.6427 30.358 18.5778C32.5473 17.168 32.5473 14.8583 30.358 13.4484C28.6966 12.3836 26.3209 12.0236 24.1937 12.3836M8.75971 19.6577C6.63248 20.0026 4.28788 19.6427 2.642 18.5778C0.452667 17.168 0.452667 14.8583 2.642 13.4484C4.30341 12.3836 6.67906 12.0236 8.80629 12.3836M25.8396 8.73903C25.7419 8.72402 25.6423 8.72402 25.5446 8.73903C24.5083 8.70284 23.5273 8.2789 22.8087 7.55682C22.0901 6.83474 21.6903 5.87109 21.6938 4.86952C21.6938 2.72478 23.4795 1 25.6999 1C26.7623 1 27.7813 1.40768 28.5325 2.13336C29.2838 2.85903 29.7059 3.84326 29.7059 4.86952C29.703 5.8718 29.299 6.8342 28.5785 7.5554C27.8579 8.27659 26.8765 8.70071 25.8396 8.73903ZM7.16041 8.73903C7.25357 8.72403 7.36226 8.72403 7.45542 8.73903C8.49166 8.70284 9.47273 8.2789 10.1913 7.55682C10.9099 6.83474 11.3097 5.87109 11.3062 4.86952C11.3062 2.72478 9.52054 1 7.30015 1C6.23769 1 5.21875 1.40768 4.46747 2.13336C3.7162 2.85903 3.29414 3.84326 3.29414 4.86952C3.30967 6.96925 5.01766 8.66404 7.16041 8.73903ZM16.5233 19.9426C16.4256 19.9276 16.326 19.9276 16.2283 19.9426C15.192 19.9064 14.211 19.4825 13.4924 18.7604C12.7738 18.0383 12.374 17.0747 12.3775 16.0731C12.3775 13.9284 14.1632 12.2036 16.3835 12.2036C17.446 12.2036 18.465 12.6113 19.2162 13.337C19.9675 14.0626 20.3896 15.0469 20.3896 16.0731C20.374 18.1729 18.666 19.8826 16.5233 19.9426ZM12.0049 24.667C9.81555 26.0769 9.81555 28.3866 12.0049 29.7964C14.4892 31.4012 18.5574 31.4012 21.0417 29.7964C23.231 28.3866 23.231 26.0769 21.0417 24.667C18.5729 23.0772 14.4892 23.0772 12.0049 24.667Z"
                    stroke="#333232"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <Link to={"/Candidates"}>
                <div className="inline ml-2 mt-1">
                  <button className="inline navMenuFont">Candidates</button>
                </div>
              </Link>
            </div>

            {/* JOBS */}

            <div className="w-full bg-white hover:bg-blue-100 transition-all duration-[850ms] hover:rounded-lg ease-out py-2  ml-8 mb-2 flex items-center">
              <div className="w-1/5">
                <svg
                  className="m-auto"
                  width="31"
                  height="30"
                  viewBox="0 0 31 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.3334 7.5V6.5C10.3334 4.2875 10.3334 2.5 14.4667 2.5H16.5334C20.6667 2.5 20.6667 4.2875 20.6667 6.5V7.5M10.3334 27.5H20.6667C25.8592 27.5 26.7892 25.4875 27.0605 23.0375L28.0292 13.0375C28.378 9.9875 27.4738 7.5 21.9584 7.5H9.04173C3.52631 7.5 2.62214 9.9875 2.97089 13.0375L3.93964 23.0375C4.21089 25.4875 5.14089 27.5 10.3334 27.5Z"
                    stroke="#333232"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M27.9647 13.75C25.0534 15.7961 21.6539 17.0948 18.0834 17.525M3.38428 14.0875C6.29053 16.0125 9.57136 17.175 12.9168 17.5375M18.0834 16.25V17.525C18.0834 18.8875 18.0705 20 15.5001 20C12.9426 20 12.9168 18.9 12.9168 17.5375V16.25C12.9168 15 12.9168 15 14.2084 15H16.7918C18.0834 15 18.0834 15 18.0834 16.25Z"
                    stroke="#333232"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <Link to={"/jobs"}>
                <div className="inline ml-2 mt-1">
                  <button className="inline navMenuFont">Jobs</button>
                </div>
              </Link>
            </div>

            {/* REPORTS */}
            <div className="w-full bg-white hover:bg-blue-100 transition-all duration-[850ms] hover:rounded-lg ease-out py-2  ml-8 mb-2 flex items-center">
              <div className="w-1/5">
                <svg
                  className="m-auto"
                  width="26"
                  height="32"
                  viewBox="0 0 26 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19.8571 1H6.14286M19.8571 31H6.14286M7 26.5H19C22.9943 26.5 25 24.745 25 21.25V10.75C25 7.255 22.9943 5.5 19 5.5H7C3.00571 5.5 1 7.255 1 10.75V21.25C1 24.745 3.00571 26.5 7 26.5Z"
                    stroke="#333232"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13 19V13M18.1429 19V16M7.85718 19V17.5"
                    stroke="#333232"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <Link to={"/report"}>
                <div className="inline ml-2 mt-1">
                  <button className="inline navMenuFont">Statistics</button>
                </div>
              </Link>
            </div>

            {/* SETTINGS */}
            <div className="w-full bg-white hover:bg-blue-100 transition-all duration-[850ms] hover:rounded-lg ease-out py-2  ml-8 mb-2 flex items-center">
              <div className="w-1/5">
                <svg
                  className="m-auto"
                  width="28"
                  height="25"
                  viewBox="0 0 28 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.35474 14.2072V12.0512C1.35474 10.7772 2.41405 9.72371 3.72261 9.72371C5.97833 9.72371 6.90056 8.15573 5.76647 6.23251C5.11842 5.13002 5.50475 3.69679 6.63884 3.0598L8.79486 1.84707C9.7794 1.27132 11.0506 1.61432 11.6363 2.58206L11.7734 2.8148C12.895 4.73803 14.7395 4.73803 15.8736 2.8148L16.0107 2.58206C16.5964 1.61432 17.8676 1.27132 18.8521 1.84707L21.0081 3.0598C22.1422 3.69679 22.5286 5.13002 21.8805 6.23251C20.7464 8.15573 21.6686 9.72371 23.9244 9.72371C25.2205 9.72371 26.2922 10.7649 26.2922 12.0512V14.2072C26.2922 15.4811 25.2329 16.5346 23.9244 16.5346C21.6686 16.5346 20.7464 18.1026 21.8805 20.0258C22.5286 21.1406 22.1422 22.5615 21.0081 23.1985L18.8521 24.4113C17.8676 24.987 16.5964 24.644 16.0107 23.6763L15.8736 23.4435C14.7519 21.5203 12.9075 21.5203 11.7734 23.4435L11.6363 23.6763C11.0506 24.644 9.7794 24.987 8.79486 24.4113L6.63884 23.1985C6.0956 22.8911 5.69865 22.3843 5.5351 21.7895C5.37154 21.1947 5.45475 20.5604 5.76647 20.0258C6.90056 18.1026 5.97833 16.5346 3.72261 16.5346C2.41405 16.5346 1.35474 15.4811 1.35474 14.2072V14.2072Z"
                    stroke="#333232"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <Link to={"/settings"}>
                <div className="inline ml-2 mt-1">
                  <button className="inline navMenuFont">Settings</button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Link to={"portal/job"}>
        <div
          className="flex w-3/5 rounded-md m-auto bg-gray-200 cursor-pointer  justify-center mt-32 items-end p-2
      hover:bg-primary hover:text-white
      "
        >
          <h4 className="heading3b">View Jobs</h4>
        </div>
      </Link>
    </>
  );
}

export default LeftMenuBar;
