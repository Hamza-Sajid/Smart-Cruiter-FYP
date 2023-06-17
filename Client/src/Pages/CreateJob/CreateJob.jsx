import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CreatedJobElement from "../../Components/Dashboard/CreateJob/CreatedJobElement";
import CreateJobHeadaer from "../../Components/Dashboard/CreateJob/CreateJobHeadaer";
import LeftMenuBar from "../../Components/Dashboard/LeftMenuBar";
import TopNavigationBar from "../../Components/Dashboard/TopNavigationBar";
function CreateJob() {
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      // axios POST request
      const options = {
        url: "https://smart-cruiter-fyp.vercel.app/job/get-jobs",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        data: { id: localStorage.getItem("organization_id") },
      };

      axios(options).then((response) => {
        // console.log(response);

        setData(response.data.jobs);
      });
    };

    fetchData();
  }, []);

  return (
    <div className="flex bg-white">
      <div className="hidden sm:block w-2/12 bg-white h-screen ">
        <LeftMenuBar />
      </div>
      <div className="w-full bg-background ">
        <div className="p-0">
          <TopNavigationBar title={"Jobs"} />

          <CreateJobHeadaer setData={setData} />
        </div>

        <div className="ml-8 flex flex-wrap  gap-6 mt-12 w-11/12 m-auto p-2">
          <CreatedJobElement data={data} setData={setData} />
        </div>
      </div>
    </div>
  );
}

export default CreateJob;
