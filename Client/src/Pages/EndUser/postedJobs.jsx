import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function PostedJobs() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://localhost:3000/job/get-all-jobs"
      );
      setData(response.data.fetchAllPostedJobs);
    };

    fetchData();
  }, [0]);

  const navigate = useNavigate();
  const handleMe = (id) => {};
  return (
    <div className="p-6">
      <h2 className="text-3xl text-center font-bold">All posted jobs</h2>

      <div className="flex gap-8 mt-12 flex-wrap justify-center">
        {data?.map((e, index) => {
          return (
            <div
              key={index}
              onClick={() =>
                handleMe(navigate(`/portal/job/description/${e._id}`))
              }
              className="cursor-pointer w-52 rounded-lg text-center flex items-center h-36 bg-gray-300"
            >
              <h2 className="text-2xl">{e.jobPosition}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default PostedJobs;
