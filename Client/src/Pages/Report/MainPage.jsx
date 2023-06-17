import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import LeftMenuBar from "../../Components/Dashboard/LeftMenuBar";
import TopNavigationBar from "../../Components/Dashboard/TopNavigationBar";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Sector,
  Cell,
} from "recharts";

function MainPage() {
  const [report, setReport] = useState();

  const data = [
    {
      name: "Applied",
      candidates: report?.appliedSum,
    },
    {
      name: "Rejected",
      candidates: report?.rejectedSum,
    },
    {
      name: "Hired",
      candidates: report?.hiredSum,
    },
  ];

  const educationalStats = [
    { name: "BS", value: report?.countMap.BS },
    { name: "MS", value: report?.countMap.MS },
    { name: "Ph.D", value: report?.countMap[`Ph.D`] },
  ];

  //   const data3 = [
  //     { name: "Attock", value: 10 },
  //     { name: "Islamabad", value: 20 },
  //     { name: "Karachi", value: 15 },
  //     // Add more data for other cities
  //   ];
  var data3;
  if (report) {
    data3 = Object.entries(report?.citiesList)?.map(([name, value]) => ({
      name,
      value,
    }));
  }

  var UniversityLists;
  if (report) {
    UniversityLists = Object.entries(report?.UniversitiesList)?.map(
      ([name, Universities]) => ({
        name,
        Universities,
      })
    );
  }
  var genderRatio;
  if (report) {
    genderRatio = [
      { name: "Male", value: report?.GenderPercentage.Male },
      { name: "Female", value: report?.GenderPercentage.Female },
    ];
  }

  useEffect(() => {
    const getCandidates = async () => {
      const options = {
        url: "https://smart-cruiter-fyp.vercel.app/report/main",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        data: { id: localStorage.getItem("organization_id") },
      };

      axios(options)
        .then((response) => {
          console.log(response);
          if (response.status == 200) {
            setReport(response.data);
          } else {
            // alert("something went wrong , try again");
          }
        })
        .catch((e) => {
          //   alert("something went wrong , try again");
        });
    };

    getCandidates();
  }, [0]);

  const colors = ["#8884d8", "#82ca9d", "#ffc658", "#d0ed57"];

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
    // const arrs = [12, 2, 5];
    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor="middle"
        dominantBaseline="central"
      >
        {`${educationalStats[index].name}`}
      </text>
    );
  };

  const CustomizedAxisTick = (props) => {
    const { x, y, payload } = props;
    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={80}
          y={0}
          dy={6}
          textAnchor="end"
          fontSize={8} // Adjust the font size as needed
          transform="rotate(-25)" // Rotate the tick labels for better visibility
        >
          {payload.value}
        </text>
      </g>
    );
  };

  console.log(report?.citiesList);

  return (
    <div className="flex bg-white">
      <div className="hidden sm:block w-2/12 bg-white h-screen">
        <LeftMenuBar />
      </div>
      <div className="w-full bg-background">
        <div className="p-0">
          <TopNavigationBar title={"Statistics"} />
        </div>

        <div className="p-6  mt-12 block m-auto">
          <div className="flex flex-wrap w-3/5 m-auto gap-20 justify-center ">
            <div className="">
              <h2 className="heading2b text-center">Jobs Created</h2>
              <h5 className="text-center heading4 mb-2">Till now</h5>

              <div className="m-auto bg-white p-4 rounded-lg shadow-md flex justify-center items-center heading1 w-56 h-40">
                {report?.totallJobsPosted}
              </div>
            </div>

            <div className="">
              <h2 className="heading2b text-center">Applied Candidates</h2>
              <h5 className="text-center heading4 mb-2">Totall</h5>

              <div className="m-auto bg-white p-4 rounded-lg shadow-md flex justify-center items-center heading1 w-56 h-40">
                {report?.totallApplicants}
              </div>
            </div>
          </div>

          <h2 className="heading3 mt-16 ml-12">
            No of candidate applied and get hired
          </h2>
          {/* ***********************
OVER ALL GENERAL STATS OF CANDIDATES
*************************** */}
          <div className="p-6 mt-12 flex justify-center items-center">
            {/* <ResponsiveContainer width="100%" height="100%"> */}

            <BarChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
              }}
              barSize={20}
            >
              <XAxis
                dataKey="name"
                scale="point"
                padding={{ left: 10, right: 10 }}
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid strokeDasharray="3 3" />
              <Bar
                dataKey="candidates"
                fill="#2884d8"
                background={{ fill: "#eee" }}
              />
            </BarChart>
            {/* </ResponsiveContainer> */}
          </div>
          {/* ***********************
APPLICANT EDUCATIONAL LEVEL
*************************** */}
          <h2 className="heading3 mt-16 ml-12">
            Qualification of your applicants
          </h2>

          <div className="flex justify-center items-center">
            <PieChart width={400} height={400}>
              <Pie
                data={educationalStats}
                dataKey="value"
                nameKey="name"
                startAngle={0}
                cx="50%"
                cy="50%"
                endAngle={360}
                label={renderCustomizedLabel}
                outerRadius={180}
                fill="#2884d8"
              />
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={colors[index % colors.length]}
                />
              ))}
            </PieChart>
          </div>
          {/* ***********************
APPLICANT CITY 
*************************** */}
          <h2 className="heading3 mt-16 ml-12">Applicant cities</h2>

          <div className="flex justify-center items-center">
            <PieChart width={400} height={400}>
              <Pie
                data={data3}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={130}
                fill="#2884d8"
                label
              />
              <Tooltip />
              <Legend />
            </PieChart>
          </div>

          <h2 className="heading3 mt-16 ml-12">
            Applicants Institute they graduated from
          </h2>

          <div className="p-6 mt-12 flex justify-center items-center">
            {/* <ResponsiveContainer width="100%" height="100%"> */}

            <BarChart
              className="overflow-hidden"
              width={1000}
              height={300}
              data={UniversityLists}
              margin={{
                top: 0,
                right: 0,
                left: 0,
                bottom: 0,
              }}
              barSize={10}
            >
              <XAxis
                dataKey="name"
                scale="point"
                padding={{ left: 10, right: 10 }}
                tick={<CustomizedAxisTick />} // Use the custom tick component
                interval={0} // Show all tick labels
                height={80} // Increase the height to fit the rotated tick labels
                axisLine={false} // Hide the x-axis line
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid strokeDasharray="3 3" />
              <Bar
                dataKey="Universities"
                fill="#2884d8"
                background={{ fill: "#eee" }}
              />
            </BarChart>
            {/* </ResponsiveContainer> */}
          </div>

          {/* ***********************
APPLICANT MALE VS FEMALE RATIO %
*************************** */}
          <h2 className="heading3 mt-16 ml-12">Applicant Gender Ratio (%)</h2>

          <div className="flex justify-center items-center">
            <PieChart width={400} height={400}>
              <Pie
                data={genderRatio}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={130}
                fill="#2884d8"
                label
              />
              <Tooltip />
              <Legend />
            </PieChart>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainPage;
