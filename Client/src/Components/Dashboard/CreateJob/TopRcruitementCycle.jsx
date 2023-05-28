import React, { useState } from "react";
import { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function TopRcruitementCycle({ id }) {
  // const [ids, setID] = useState();
  // useEffect(() => {
  //   setID(id);
  // }, [id]);

  const NavLinkStyles = ({ isActive }) => {
    return {
      background: isActive ? "#0063B2" : "#2687F0",
      color: "white",
      padding: "0.75rem",
      borderRadius: "0.5rem",
      fontFamily: "Poppins , sans-serif",
      fontWeight: 300,
      fontSize: "14px",
      lineHeight: "28px",
    };
  };

  // console.log(id);
  return (
    <div className=" flex justify-center">
      <div className="bg-white  w-4/5  flex sm:overflow-auto overflow-x-scroll sm:gap-0 gap-2 m-4 p-4  rounded-lg shadows justify-between items-center">
        {/* <button className="bg-primary text-white p-3 rounded-lg line2">
          Applied Candidates
        </button> */}

        <NavLink style={NavLinkStyles} to={`/JobDetails/${id}`}>
          Applied Candidates
        </NavLink>

        <NavLink style={NavLinkStyles} to={`/JobDetails/interviewing/${id}`}>
          Interviewing
        </NavLink>

        <NavLink style={NavLinkStyles} to={`/JobDetails/reccomended/${id}`}>
          Reccomended
        </NavLink>

        <NavLink style={NavLinkStyles} to={`/JobDetails/hired/${id}`}>
          Hired
        </NavLink>

        <NavLink style={NavLinkStyles} to={`/JobDetails/rejected/${id}`}>
          Declined
        </NavLink>

        <NavLink style={NavLinkStyles} to={`/JobDetails/withdrawn/${id}`}>
          Withdrawn
        </NavLink>
      </div>
    </div>
  );
}

export default TopRcruitementCycle;
