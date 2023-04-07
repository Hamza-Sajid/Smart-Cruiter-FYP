import axios from "axios";
import React from "react";
import { useState } from "react";

import {
  FcBusinessman,
  FcGraduationCap,
  FcAssistant,
  FcAdvertising,
  FcPlus,
  FcCamera,
  FcDocument,
} from "react-icons/fc";

import { FiPlusCircle } from "react-icons/fi";
import { useLocation, useParams } from "react-router-dom";

function PostedJobApplyForm() {
  const [educationDetailsPart2, setEducationaDetailsPart2] = useState(false);
  const [educationDetailsPart3, setEducationaDetailsPart3] = useState(false);

  const [experienceDetails, setExperienceDetails] = useState(false);
  const [value, setValue] = useState(1);

  const [personalInformation, setPersonalInformation] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    address: "",
    city: "",
    zipCode: "",
  });

  const [educationalInformation, setEducationalInformation] = useState({
    institute: [],
    level: [],
    majors: [],
  });

  const [professionalInformation, setProfessionalInformation] = useState({
    title: [],
    duration: [],
    companyName: [],
  });

  const [contactInformation, setContactInformation] = useState({
    emailAddress: "",
    phoneNo: "",
    linkedinProfile: "",
    gitHubProfile: "",
  });

  const [file, setFile] = useState();
  const [resume, setResume] = useState();

  const location = useLocation();
  const Organization_id = location.state?.orgID;
  const { id } = useParams();

  const handleResumeUpload = (e) => {
    setResume(e.target.files[0]);
  };

  const handleProfilePic = (e) => {
    console.log("setting profule pic");
    setFile(e.target.files[0]);
  };
  console.log(file);
  console.log(resume);
  const submit = async (e) => {
    e.preventDefault();
    // const formData = await new FormData();
    // await formData.append("file", file);
    const userData = {
      image: file,
      resume: resume,
      personalInfo: personalInformation,
      accadamics: educationalInformation,
      profesional: professionalInformation,
      contact: contactInformation,
      org_id: Organization_id,
      job_id: id,
    };
    console.log(userData);
    const options = {
      url: "http://localhost:3000/job/apply-to-job",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "multipart/form-data; ",
      },
      data: userData,
    };

    axios(options).then((response) => {
      console.log(response);
    });
  };

  console.log(educationalInformation);
  const handleSubmit = () => {
    console.log("funciton running");
    // axios POST request
    const options = {
      url: "http://localhost:3000/job/apply-to-job",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: {
        personal: personalInformation,
        accadamics: educationalInformation,
        profesional: professionalInformation,
        contact: contactInformation,
      },
    };

    axios(options).then((response) => {
      console.log(response);
    });
  };

  return (
    <div>
      <div className="bg-gray-700 h-40 flex items-center justify-center shadow-xl">
        <h1 className="text-4xl heading text-white text-center">
          Product Manager
        </h1>
      </div>

      <div className="w-4/5 m-auto bg-gray-100 rounded-lg shadows flex flex-wrap gap-6 p-8 mt-12 mb-12">
        <div className="block w-full">
          <h2 className="text-3xl heading2 text-center mb-8">
            Fill out the form
          </h2>
          <h3 className="heading3 font-medium ">
            <FcBusinessman className="inline text-4xl" /> Personal Information{" "}
          </h3>
        </div>
        <div>
          <label className="label line1">First Name</label>
          <input
            type="text"
            className="h-10 input input-bordered w-full"
            id="text"
            name="name"
            autoComplete="on"
            placeholder="Ali"
            value={personalInformation.firstName}
            onChange={(e) => {
              setPersonalInformation((oldValue) => ({
                ...oldValue,
                firstName: e.target.value,
              }));
            }}
          />
        </div>

        <div className="ml-12">
          <label className="label line1">Last Name</label>
          <input
            type="text"
            className="h-10 input input-bordered w-full"
            id="text"
            name="name"
            autoComplete="on"
            placeholder="Adnan"
            value={personalInformation.lastName}
            onChange={(e) => {
              setPersonalInformation((oldValue) => ({
                ...oldValue,
                lastName: e.target.value,
              }));
            }}
          />
        </div>

        <div className="ml-12">
          <label className="label line1">Gender</label>
          <select
            onChange={(e) => {
              setPersonalInformation((oldValue) => ({
                ...oldValue,
                gender: e.target.value,
              }));
            }}
            className="select select-bordered w-full  max-w-xs text-gray-500"
          >
            <option disabled selected className="text-gray-700">
              Select Gender
            </option>
            <option value={"Female"}>Female</option>
            <option value={"Male"}>Male</option>
          </select>
        </div>

        <div className=" w-2/6">
          <label className="label line1">Address</label>
          <input
            type="text"
            className="h-10 input input-bordered w-full"
            id="text"
            name="address"
            autoComplete="on"
            placeholder="G-9/4 ISB"
            value={personalInformation.address}
            onChange={(e) => {
              setPersonalInformation((oldValue) => ({
                ...oldValue,
                address: e.target.value,
              }));
            }}
          />
        </div>

        <div className="ml-12">
          <label className="label line1">City</label>
          <input
            type="text"
            className="h-10 input input-bordered w-full"
            id="text"
            name="address"
            autoComplete="on"
            placeholder="Islamabad"
            value={personalInformation.city}
            onChange={(e) => {
              setPersonalInformation((oldValue) => ({
                ...oldValue,
                city: e.target.value,
              }));
            }}
          />
        </div>

        <div className="ml-12">
          <label className="label line1">Zip-Code</label>
          <input
            type="number"
            className="h-10 input input-bordered w-1/2"
            id="text"
            name="address"
            autoComplete="on"
            placeholder="0110"
            value={personalInformation.zipCode}
            onChange={(e) => {
              setPersonalInformation((oldValue) => ({
                ...oldValue,
                zipCode: e.target.value,
              }));
            }}
          />
        </div>
        {/* ~~~~~ PROFILE PIC UPLOAD UI CODE  ~~~~~~~~*/}
        <div className="mt-2 flex justify-center m-auto p-4 items-center bg-transparent shadow-md cursor-pointer h-1/2 rounded-md">
          <div
            className="border bg-transparent border-gray-400 border-dashed rounded-md p-4 flex flex-col items-center justify-center
            hover:bg-gray-100
          "
          >
            <FcCamera className="text-4xl block" />
            <h3 className="mt-2 line1">Click here to Upload profile picture</h3>
            <input
              type="file"
              name="profile"
              onChange={handleProfilePic}
              id=""
              alt="select profile picture"
              accept="image/*"
              style={{
                position: "relative",
                top: "5px",
                background: "white",
                color: "white",
                display: "block",
                margin: "auto",
                width: "6.5em",
                border: "1px solid black",
                boxShadow: "2px 2px 2px 1px white",
                borderRadius: "12px",
              }}
            />
          </div>
        </div>
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
        {/* ACCAADAMIC QUALITFICATION */}
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
        <h3 className="heading3 mt-8 block w-full font-medium">
          <FcGraduationCap className="inline text-4xl mr-2" />
          Accadamics Qualification
        </h3>

        <div className="w-2/6">
          <label className="label line1">Institute</label>
          <select
            onChange={(e) => {
              setEducationalInformation((prevState) => ({
                ...prevState,
                institute: [...prevState.institute, e.target.value],
              }));
            }}
            value={educationalInformation.institute[0]}
            className="select select-bordered w-full  max-w-xs text-gray-500"
          >
            <option disabled selected className="text-gray-700">
              Select Insitute
            </option>
            <option value="Air University Islamabad">
              Air University Islamabad
            </option>
            <option value="Bahauddin Zakariya University, Multan">
              Bahauddin Zakariya University, Multan
            </option>
            <option value="Balochistan University of Engineering and Technology, Khuzdar">
              Balochistan University of Engineering and Technology, Khuzdar
            </option>
            <option value="Balochistan University of Information Technology, Engineering and Management Sciences, Quetta">
              Balochistan University of Information Technology, Engineering and
              Management Sciences, Quetta
            </option>
            <option value="Benazir Bhutto Shaheed University, Lyari">
              Benazir Bhutto Shaheed University, Lyari
            </option>
            <option value="Benazir Bhutto Shaheed University of Technology and Skill Development, Khairpur Mirs">
              Benazir Bhutto Shaheed University of Technology and Skill
              Development, Khairpur Mirs
            </option>
            <option value="Comsats University Islamabad">
              Comsats University,Islamabad
            </option>
            <option value="Dow University of Health Sciences, Karachi">
              Dow University of Health Sciences, Karachi
            </option>
            <option value="Fatima Jinnah Women University, Rawalpindi">
              Fatima Jinnah Women University, Rawalpindi
            </option>
            <option value="Federal Urdu University of Arts, Sciences and Technology, Islamabad">
              Federal Urdu University of Arts, Sciences and Technology,
              Islamabad
            </option>
            <option value="Ghazi University, Dera Ghazi Khan">
              Ghazi University, Dera Ghazi Khan
            </option>
            <option value="Government College University, Faisalabad">
              Government College University, Faisalabad
            </option>
            <option value="Government College University, Lahore">
              Government College University, Lahore
            </option>
            <option value="Government College Women University, Sialkot">
              Government College Women University, Sialkot
            </option>
            <option value="Government Sadiq College Women University, Bahawalpur">
              Government Sadiq College Women University, Bahawalpur
            </option>
            <option value="Institute of Business Administration, Karachi">
              Institute of Business Administration, Karachi
            </option>
            <option value="Islamia University, Bahawalpur">
              Islamia University, Bahawalpur
            </option>
            <option value="Karakoram International University, Gilgit">
              Karakoram International University, Gilgit
            </option>
            <option value="Kohat University of Science and Technology, Kohat">
              Kohat University of Science and Technology, Kohat
            </option>
            <option value="Kwara State University, Malete">
              Kwara State University, Malete
            </option>
            <option value="Lahore College for Women University, Lahore">
              Lahore College for Women University, Lahore
            </option>
            <option value="Lahore Garrison University, Lahore">
              Lahore Garrison University, Lahore
            </option>
            <option value="Lahore University of Management Sciences, Lahore">
              Lahore University of Management Sciences, Lahore
            </option>
            <option value="Lasbela University of Agriculture, Water and Marine Sciences, Uthal">
              Lasbela University of Agriculture, Water and Marine Sciences,
              Uthal
            </option>

            <option value="Mirpur University of Science and Technology, Mirpur">
              Mirpur University of Science and Technology, Mirpur
            </option>
            <option value="Mohi-ud-Din Islamic University, Nerian Sharif">
              Mohi-ud-Din Islamic University, Nerian Sharif
            </option>
            <option value="Mohammad Ali Jinnah University, Islamabad">
              Mohammad Ali Jinnah University, Islamabad
            </option>
            <option value="Mohammad Ali Jinnah University, Karachi">
              Mohammad Ali Jinnah University, Karachi
            </option>
            <option value="Muhammad Nawaz Sharif University of Agriculture, Multan">
              Muhammad Nawaz Sharif University of Agriculture, Multan
            </option>
            <option value="Multan College of Arts, Multan">
              Multan College of Arts, Multan
            </option>
            <option value="Mehran University of Engineering and Technology, Jamshoro">
              Mehran University of Engineering and Technology, Jamshoro
            </option>
            <option value="Mir Chakar Khan Rind University of Technology, Dera Ghazi Khan">
              Mir Chakar Khan Rind University of Technology, Dera Ghazi Khan
            </option>
            <option value="NED University of Engineering and Technology, Karachi">
              NED University of Engineering and Technology, Karachi
            </option>
            <option value="National College of Arts, Lahore">
              National College of Arts, Lahore
            </option>
            <option value="National Defense University, Islamabad">
              National Defense University, Islamabad
            </option>
            <option value="National Textile University, Faisalabad">
              National Textile University, Faisalabad
            </option>
            <option value="National University of Computer and Emerging Sciences, Islamabad">
              National University of Computer and Emerging Sciences, Islamabad
            </option>
            <option value="National University of Modern Languages, Islamabad">
              National University of Modern Languages, Islamabad
            </option>
            <option value="National University of Sciences and Technology, Islamabad">
              National University of Sciences and Technology, Islamabad
            </option>
            <option value="NED University of Engineering and Technology, Karachi">
              NED University of Engineering and Technology, Karachi
            </option>
            <option value="Pakistan Institute of Development Economics, Islamabad">
              Pakistan Institute of Development Economics, Islamabad
            </option>
            <option value="Pakistan Institute of Engineering and Applied Sciences, Islamabad">
              Pakistan Institute of Engineering and Applied Sciences, Islamabad
            </option>
            <option value="Pakistan Military Academy, Abbottabad">
              Pakistan Military Academy, Abbottabad
            </option>
            <option value="Pakistan Naval Academy, Karachi">
              Pakistan Naval Academy, Karachi
            </option>
            <option value="Pir Mehr Ali Shah Arid Agriculture University, Rawalpindi">
              Pir Mehr Ali Shah Arid Agriculture University, Rawalpindi
            </option>
            <option value="Quaid-e-Awam University of Engineering, Science and Technology, Nawabshah">
              Quaid-e-Awam University of Engineering, Science and Technology,
              Nawabshah
            </option>
            <option value="Quaid-i-Azam University, Islamabad">
              Quaid-i-Azam University, Islamabad
            </option>

            <option value="The Women University, Multan">
              The Women University, Multan
            </option>
            <option value="University of Agriculture, Faisalabad">
              University of Agriculture, Faisalabad
            </option>
            <option value="University of Azad Jammu and Kashmir, Muzaffarabad">
              University of Azad Jammu and Kashmir, Muzaffarabad
            </option>
            <option value="University of Balochistan, Quetta">
              University of Balochistan, Quetta
            </option>
            <option value="University of Education, Lahore">
              University of Education, Lahore
            </option>
            <option value="University of Engineering and Technology, Lahore">
              University of Engineering and Technology, Lahore
            </option>
            <option value="University of Engineering and Technology, Peshawar">
              University of Engineering and Technology, Peshawar
            </option>
            <option value="University of Engineering and Technology, Taxila">
              University of Engineering and Technology, Taxila
            </option>
            <option value="University of FATA, Kohat">
              University of FATA, Kohat
            </option>
            <option value="University of Gujrat, Gujrat">
              University of Gujrat, Gujrat
            </option>
            <option value="University of Haripur, Haripur">
              University of Haripur, Haripur
            </option>
            <option value="University of Health Sciences, Lahore">
              University of Health Sciences, Lahore
            </option>
            <option value="University of Karachi, Karachi">
              University of Karachi, Karachi
            </option>
            <option value="University of Kotli Azad Jammu and Kashmir, Kotli">
              University of Kotli Azad Jammu and Kashmir, Kotli
            </option>
            <option value="University of Lahore, Lahore">
              University of Lahore, Lahore
            </option>
            <option value="University of Loralai, Loralai">
              University of Loralai, Loralai
            </option>
            <option value="University of Malakand, Chakdara">
              University of Malakand, Chakdara
            </option>
            <option value="University of Management and Technology, Lahore">
              University of Management and Technology, Lahore
            </option>
            <option value="University of Okara, Okara">
              University of Okara, Okara
            </option>
            <option value="University of Peshawar, Peshawar">
              University of Peshawar, Peshawar
            </option>
            <option value="University of Sargodha, Sargodha">
              University of Sargodha, Sargodha
            </option>
            <option value="University of Science and Technology, Bannu">
              University of Science and Technology, Bannu
            </option>

            <option value="University of Sindh, Jamshoro">
              University of Sindh, Jamshoro
            </option>
            <option value="University of Swabi, Swabi">
              University of Swabi, Swabi
            </option>
            <option value="University of Swat, Swat">
              University of Swat, Swat
            </option>
            <option value="University of the Punjab, Lahore">
              University of the Punjab, Lahore
            </option>
            <option value="University of Turbat, Turbat">
              University of Turbat, Turbat
            </option>
            <option value="University of Veterinary and Animal Sciences, Lahore">
              University of Veterinary and Animal Sciences, Lahore
            </option>
            <option value="University of Wah, Wah">
              University of Wah, Wah
            </option>
            <option value="Women University of Azad Jammu and Kashmir, Bagh">
              Women University of Azad Jammu and Kashmir, Bagh
            </option>
          </select>
        </div>

        <div className="w-1/5">
          <label className="label line1">Level</label>
          <select
            onChange={(e) => {
              setEducationalInformation((prevState) => ({
                ...prevState,
                level: [...prevState.level, e.target.value],
              }));
            }}
            value={educationalInformation.level[0]}
            className="select select-bordered w-full  max-w-xs text-gray-500"
          >
            <option disabled selected className="text-gray-700">
              Under / Post Grad
            </option>
            <option>B.S</option>
            <option>M.S</option>
            <option>Ph.D</option>
          </select>
        </div>

        <div className="w-1/5">
          <label className="label line1">Majors In</label>
          <select
            onChange={(e) => {
              setEducationalInformation((prevState) => ({
                ...prevState,
                majors: [...prevState.majors, e.target.value],
              }));
            }}
            value={educationalInformation.majors[0]}
            className="select select-bordered w-full  max-w-xs text-gray-500"
          >
            <option disabled selected className="text-gray-700">
              Degree Program
            </option>
            <option value="Accounting and Finance">
              Accounting and Finance
            </option>
            <option value="Actuarial Science">Actuarial Science</option>
            <option value="Aerospace Engineering">Aerospace Engineering</option>
            <option value="Agricultural Sciences">Agricultural Sciences</option>
            <option value="Anthropology">Anthropology</option>
            <option value="Applied Linguistics">Applied Linguistics</option>
            <option value="Applied Psychology">Applied Psychology</option>
            <option value="Architecture and Design">
              Architecture and Design
            </option>
            <option value="Artificial Intelligence">
              Artificial Intelligence
            </option>
            <option value="Automotive Engineering">
              Automotive Engineering
            </option>
            <option value="Aviation Management">Aviation Management</option>
            <option value="Banking and Finance">Banking and Finance</option>
            <option value="Biochemistry">Biochemistry</option>
            <option value="Bioinformatics">Bioinformatics</option>
            <option value="Biological Sciences">Biological Sciences</option>
            <option value="Biomedical Engineering">
              Biomedical Engineering
            </option>
            <option value="Biotechnology">Biotechnology</option>
            <option value="Botany">Botany</option>
            <option value="Business Administration">
              Business Administration
            </option>
            <option value="Chemical Engineering">Chemical Engineering</option>
            <option value="Chemistry">Chemistry</option>
            <option value="Civil Engineering">Civil Engineering</option>
            <option value="Climate Change">Climate Change</option>
            <option value="Commerce">Commerce</option>
            <option value="Computer Engineering">Computer Engineering</option>
            <option value="Computer Science">Computer Science</option>
            <option value="Criminology">Criminology</option>
            <option value="Data Science">Data Science</option>
            <option value="Dentistry">Dentistry</option>
            <option value="Design and Visual Arts">
              Design and Visual Arts
            </option>
            <option value="Development Studies">Development Studies</option>
            <option value="Economics">Economics</option>
            <option value="Education">Education</option>
            <option value="Electrical Engineering">
              Electrical Engineering
            </option>
            <option value="Electronics Engineering">
              Electronics Engineering
            </option>
            <option value="Energy Systems Engineering">
              Energy Systems Engineering
            </option>
            <option value="English Language and Literature">
              English Language and Literature
            </option>
            <option value="Environmental Sciences">
              Environmental Sciences
            </option>
            <option value="Fashion Design">Fashion Design</option>
            <option value="Film and TV Production">
              Film and TV Production
            </option>
            <option value="Food Science and Technology">
              Food Science and Technology
            </option>
            <option value="Forensic Sciences">Forensic Sciences</option>
            <option value="Gender Studies">Gender Studies</option>
            <option value="Genetics">Genetics</option>
            <option value="Geography">Geography</option>
            <option value="Geology">Geology</option>
            <option value="Graphic Design">Graphic Design</option>
            <option value="Health and Physical Education">
              Health and Physical Education
            </option>
            <option value="History">History</option>
            <option value="Hospitality and Tourism Management">
              Hospitality and Tourism Management
            </option>
            <option value="Human Resource Management">
              Human Resource Management
            </option>
            <option value="Industrial Design">Industrial Design</option>
            <option value="Information Security">Information Security</option>
            <option value="Information Technology">
              Information Technology
            </option>
            <option value="International Relations">
              International Relations
            </option>
            <option value="Islamic Studies">Islamic Studies</option>
            <option value="Journalism and Mass Communication">
              Journalism and Mass Communication
            </option>
            <option value="Law">Law</option>
            <option value="Library and Information Science">
              Library and Information Science
            </option>
            <option value="Linguistics">Linguistics</option>
            <option value="Management Sciences">Management Sciences</option>
            <option value="Marine Sciences">Marine Sciences</option>
            <option value="Marketing">Marketing</option>
            <option value="Materials Science and Engineering">
              Materials Science and Engineering
            </option>
            <option value="Mathematics">Mathematics</option>
            <option value="Mechanical Engineering">
              Mechanical Engineering
            </option>
            <option value="Media and Communication Studies">
              Media and Communication Studies
            </option>
            <option value="Medical Laboratory Technology">
              Medical Laboratory Technology
            </option>
            <option value="Medicine and Surgery">Medicine and Surgery</option>
            <option value="Metallurgy and Materials Engineering">
              Metallurgy and Materials Engineering
            </option>
            <option value="Microbiology">Microbiology</option>
            <option value="Mining Engineering">Mining Engineering</option>
            <option value="Multimedia Arts">Multimedia Arts</option>
            <option value="Nanotechnology">Nanotechnology</option>
            <option value="Natural Resource Management">
              Natural Resource Management
            </option>
            <option value="Neuroscience">Neuroscience</option>
            <option value="Nursing">Nursing</option>
            <option value="Nutrition and Dietetics">
              Nutrition and Dietetics
            </option>
            <option value="Peace and Conflict Studies">
              Peace and Conflict Studies
            </option>
            <option value="Pharmaceutical Sciences">
              Pharmaceutical Sciences
            </option>
            <option value="Pharmacy">Pharmacy</option>
            <option value="Philosophy">Philosophy</option>
            <option value="Physics">Physics</option>
            <option value="Physiotherapy">Physiotherapy</option>
            <option value="Plant Sciences">Plant Sciences</option>
            <option value="Political Science">Political Science</option>
            <option value="Project Management">Project Management</option>
            <option value="Psychology">Psychology</option>
            <option value="Public Administration">Public Administration</option>
            <option value="Public Health">Public Health</option>
            <option value="Quality Management">Quality Management</option>
            <option value="Renewable Energy Engineering">
              Renewable Energy Engineering
            </option>
            <option value="Robotics and Artificial Intelligence">
              Robotics and Artificial Intelligence
            </option>
            <option value="Social Sciences">Social Sciences</option>
            <option value="Software Engineering">Software Engineering</option>
            <option value="Sociology">Sociology</option>
            <option value="Soil and Environmental Sciences">
              Soil and Environmental Sciences
            </option>
            <option value="Statistics">Statistics</option>
            <option value="Supply Chain Management">
              Supply Chain Management
            </option>
            <option value="Telecommunication Engineering">
              Telecommunication Engineering
            </option>
            <option value="Textile Design">Textile Design</option>
            <option value="Textile Engineering">Textile Engineering</option>
            <option value="Tourism and Hospitality Management">
              Tourism and Hospitality Management
            </option>
            <option value="Transportation Engineering">
              Transportation Engineering
            </option>
            <option value="Urdu Language and Literature">
              Urdu Language and Literature
            </option>
            <option value="Veterinary Sciences">Veterinary Sciences</option>
            <option value="Water Resource Engineering">
              Water Resource Engineering
            </option>
            <option value="Zoology">Zoology</option>
          </select>
        </div>

        <div className=" w-full">
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
          {/* CODE FOR 2ND EDUCATION DETAILS UI CODE */}
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
          {educationDetailsPart2 == true && value >= 2 ? (
            <div className="flex mb-6">
              <div className="w-2/6">
                <label className="label line1">Institute</label>
                <select
                  onChange={(e) => {
                    setEducationalInformation((prevState) => ({
                      ...prevState,
                      institute: [...prevState.institute, e.target.value],
                    }));
                  }}
                  value={educationalInformation.institute[1]}
                  className="select select-bordered w-full  max-w-xs text-gray-500"
                >
                  <option disabled selected className="text-gray-700">
                    Select Insitute
                  </option>
                  <option value="Air University Islamabad">
                    Air University Islamabad
                  </option>
                  <option value="Bahauddin Zakariya University, Multan">
                    Bahauddin Zakariya University, Multan
                  </option>
                  <option value="Balochistan University of Engineering and Technology, Khuzdar">
                    Balochistan University of Engineering and Technology,
                    Khuzdar
                  </option>
                  <option value="Balochistan University of Information Technology, Engineering and Management Sciences, Quetta">
                    Balochistan University of Information Technology,
                    Engineering and Management Sciences, Quetta
                  </option>
                  <option value="Benazir Bhutto Shaheed University, Lyari">
                    Benazir Bhutto Shaheed University, Lyari
                  </option>
                  <option value="Benazir Bhutto Shaheed University of Technology and Skill Development, Khairpur Mirs">
                    Benazir Bhutto Shaheed University of Technology and Skill
                    Development, Khairpur Mirs
                  </option>
                  <option value="Comsats University Islamabad">
                    Comsats University,Islamabad
                  </option>
                  <option value="Dow University of Health Sciences, Karachi">
                    Dow University of Health Sciences, Karachi
                  </option>
                  <option value="Fatima Jinnah Women University, Rawalpindi">
                    Fatima Jinnah Women University, Rawalpindi
                  </option>
                  <option value="Federal Urdu University of Arts, Sciences and Technology, Islamabad">
                    Federal Urdu University of Arts, Sciences and Technology,
                    Islamabad
                  </option>
                  <option value="Ghazi University, Dera Ghazi Khan">
                    Ghazi University, Dera Ghazi Khan
                  </option>
                  <option value="Government College University, Faisalabad">
                    Government College University, Faisalabad
                  </option>
                  <option value="Government College University, Lahore">
                    Government College University, Lahore
                  </option>
                  <option value="Government College Women University, Sialkot">
                    Government College Women University, Sialkot
                  </option>
                  <option value="Government Sadiq College Women University, Bahawalpur">
                    Government Sadiq College Women University, Bahawalpur
                  </option>
                  <option value="Institute of Business Administration, Karachi">
                    Institute of Business Administration, Karachi
                  </option>
                  <option value="Islamia University, Bahawalpur">
                    Islamia University, Bahawalpur
                  </option>
                  <option value="Karakoram International University, Gilgit">
                    Karakoram International University, Gilgit
                  </option>
                  <option value="Kohat University of Science and Technology, Kohat">
                    Kohat University of Science and Technology, Kohat
                  </option>
                  <option value="Kwara State University, Malete">
                    Kwara State University, Malete
                  </option>
                  <option value="Lahore College for Women University, Lahore">
                    Lahore College for Women University, Lahore
                  </option>
                  <option value="Lahore Garrison University, Lahore">
                    Lahore Garrison University, Lahore
                  </option>
                  <option value="Lahore University of Management Sciences, Lahore">
                    Lahore University of Management Sciences, Lahore
                  </option>
                  <option value="Lasbela University of Agriculture, Water and Marine Sciences, Uthal">
                    Lasbela University of Agriculture, Water and Marine
                    Sciences, Uthal
                  </option>

                  <option value="Mirpur University of Science and Technology, Mirpur">
                    Mirpur University of Science and Technology, Mirpur
                  </option>
                  <option value="Mohi-ud-Din Islamic University, Nerian Sharif">
                    Mohi-ud-Din Islamic University, Nerian Sharif
                  </option>
                  <option value="Mohammad Ali Jinnah University, Islamabad">
                    Mohammad Ali Jinnah University, Islamabad
                  </option>
                  <option value="Mohammad Ali Jinnah University, Karachi">
                    Mohammad Ali Jinnah University, Karachi
                  </option>
                  <option value="Muhammad Nawaz Sharif University of Agriculture, Multan">
                    Muhammad Nawaz Sharif University of Agriculture, Multan
                  </option>
                  <option value="Multan College of Arts, Multan">
                    Multan College of Arts, Multan
                  </option>
                  <option value="Mehran University of Engineering and Technology, Jamshoro">
                    Mehran University of Engineering and Technology, Jamshoro
                  </option>
                  <option value="Mir Chakar Khan Rind University of Technology, Dera Ghazi Khan">
                    Mir Chakar Khan Rind University of Technology, Dera Ghazi
                    Khan
                  </option>
                  <option value="NED University of Engineering and Technology, Karachi">
                    NED University of Engineering and Technology, Karachi
                  </option>
                  <option value="National College of Arts, Lahore">
                    National College of Arts, Lahore
                  </option>
                  <option value="National Defense University, Islamabad">
                    National Defense University, Islamabad
                  </option>
                  <option value="National Textile University, Faisalabad">
                    National Textile University, Faisalabad
                  </option>
                  <option value="National University of Computer and Emerging Sciences, Islamabad">
                    National University of Computer and Emerging Sciences,
                    Islamabad
                  </option>
                  <option value="National University of Modern Languages, Islamabad">
                    National University of Modern Languages, Islamabad
                  </option>
                  <option value="National University of Sciences and Technology, Islamabad">
                    National University of Sciences and Technology, Islamabad
                  </option>
                  <option value="NED University of Engineering and Technology, Karachi">
                    NED University of Engineering and Technology, Karachi
                  </option>
                  <option value="Pakistan Institute of Development Economics, Islamabad">
                    Pakistan Institute of Development Economics, Islamabad
                  </option>
                  <option value="Pakistan Institute of Engineering and Applied Sciences, Islamabad">
                    Pakistan Institute of Engineering and Applied Sciences,
                    Islamabad
                  </option>
                  <option value="Pakistan Military Academy, Abbottabad">
                    Pakistan Military Academy, Abbottabad
                  </option>
                  <option value="Pakistan Naval Academy, Karachi">
                    Pakistan Naval Academy, Karachi
                  </option>
                  <option value="Pir Mehr Ali Shah Arid Agriculture University, Rawalpindi">
                    Pir Mehr Ali Shah Arid Agriculture University, Rawalpindi
                  </option>
                  <option value="Quaid-e-Awam University of Engineering, Science and Technology, Nawabshah">
                    Quaid-e-Awam University of Engineering, Science and
                    Technology, Nawabshah
                  </option>
                  <option value="Quaid-i-Azam University, Islamabad">
                    Quaid-i-Azam University, Islamabad
                  </option>

                  <option value="The Women University, Multan">
                    The Women University, Multan
                  </option>
                  <option value="University of Agriculture, Faisalabad">
                    University of Agriculture, Faisalabad
                  </option>
                  <option value="University of Azad Jammu and Kashmir, Muzaffarabad">
                    University of Azad Jammu and Kashmir, Muzaffarabad
                  </option>
                  <option value="University of Balochistan, Quetta">
                    University of Balochistan, Quetta
                  </option>
                  <option value="University of Education, Lahore">
                    University of Education, Lahore
                  </option>
                  <option value="University of Engineering and Technology, Lahore">
                    University of Engineering and Technology, Lahore
                  </option>
                  <option value="University of Engineering and Technology, Peshawar">
                    University of Engineering and Technology, Peshawar
                  </option>
                  <option value="University of Engineering and Technology, Taxila">
                    University of Engineering and Technology, Taxila
                  </option>
                  <option value="University of FATA, Kohat">
                    University of FATA, Kohat
                  </option>
                  <option value="University of Gujrat, Gujrat">
                    University of Gujrat, Gujrat
                  </option>
                  <option value="University of Haripur, Haripur">
                    University of Haripur, Haripur
                  </option>
                  <option value="University of Health Sciences, Lahore">
                    University of Health Sciences, Lahore
                  </option>
                  <option value="University of Karachi, Karachi">
                    University of Karachi, Karachi
                  </option>
                  <option value="University of Kotli Azad Jammu and Kashmir, Kotli">
                    University of Kotli Azad Jammu and Kashmir, Kotli
                  </option>
                  <option value="University of Lahore, Lahore">
                    University of Lahore, Lahore
                  </option>
                  <option value="University of Loralai, Loralai">
                    University of Loralai, Loralai
                  </option>
                  <option value="University of Malakand, Chakdara">
                    University of Malakand, Chakdara
                  </option>
                  <option value="University of Management and Technology, Lahore">
                    University of Management and Technology, Lahore
                  </option>
                  <option value="University of Okara, Okara">
                    University of Okara, Okara
                  </option>
                  <option value="University of Peshawar, Peshawar">
                    University of Peshawar, Peshawar
                  </option>
                  <option value="University of Sargodha, Sargodha">
                    University of Sargodha, Sargodha
                  </option>
                  <option value="University of Science and Technology, Bannu">
                    University of Science and Technology, Bannu
                  </option>

                  <option value="University of Sindh, Jamshoro">
                    University of Sindh, Jamshoro
                  </option>
                  <option value="University of Swabi, Swabi">
                    University of Swabi, Swabi
                  </option>
                  <option value="University of Swat, Swat">
                    University of Swat, Swat
                  </option>
                  <option value="University of the Punjab, Lahore">
                    University of the Punjab, Lahore
                  </option>
                  <option value="University of Turbat, Turbat">
                    University of Turbat, Turbat
                  </option>
                  <option value="University of Veterinary and Animal Sciences, Lahore">
                    University of Veterinary and Animal Sciences, Lahore
                  </option>
                  <option value="University of Wah, Wah">
                    University of Wah, Wah
                  </option>
                  <option value="Women University of Azad Jammu and Kashmir, Bagh">
                    Women University of Azad Jammu and Kashmir, Bagh
                  </option>
                </select>
              </div>

              <div className="w-1/5 ml-6">
                <label className="label line1">Level</label>
                <select
                  onChange={(e) => {
                    setEducationalInformation((prevState) => ({
                      ...prevState,
                      level: [...prevState.level, e.target.value],
                    }));
                  }}
                  value={educationalInformation.level[1]}
                  className="select select-bordered w-full  max-w-xs text-gray-500"
                >
                  <option disabled selected className="text-gray-700">
                    Under / Post Grad
                  </option>
                  <option>B.S</option>
                  <option>M.S</option>
                  <option>Ph.D</option>
                </select>
              </div>

              <div className="w-1/5 ml-6">
                <label className="label line1">Majors In</label>
                <select
                  onChange={(e) => {
                    setEducationalInformation((prevState) => ({
                      ...prevState,
                      majors: [...prevState.majors, e.target.value],
                    }));
                  }}
                  value={educationalInformation.majors[1]}
                  className="select select-bordered w-full  max-w-xs text-gray-500"
                >
                  <option disabled selected className="text-gray-700">
                    Degree Program
                  </option>
                  <option value="Accounting and Finance">
                    Accounting and Finance
                  </option>
                  <option value="Actuarial Science">Actuarial Science</option>
                  <option value="Aerospace Engineering">
                    Aerospace Engineering
                  </option>
                  <option value="Agricultural Sciences">
                    Agricultural Sciences
                  </option>
                  <option value="Anthropology">Anthropology</option>
                  <option value="Applied Linguistics">
                    Applied Linguistics
                  </option>
                  <option value="Applied Psychology">Applied Psychology</option>
                  <option value="Architecture and Design">
                    Architecture and Design
                  </option>
                  <option value="Artificial Intelligence">
                    Artificial Intelligence
                  </option>
                  <option value="Automotive Engineering">
                    Automotive Engineering
                  </option>
                  <option value="Aviation Management">
                    Aviation Management
                  </option>
                  <option value="Banking and Finance">
                    Banking and Finance
                  </option>
                  <option value="Biochemistry">Biochemistry</option>
                  <option value="Bioinformatics">Bioinformatics</option>
                  <option value="Biological Sciences">
                    Biological Sciences
                  </option>
                  <option value="Biomedical Engineering">
                    Biomedical Engineering
                  </option>
                  <option value="Biotechnology">Biotechnology</option>
                  <option value="Botany">Botany</option>
                  <option value="Business Administration">
                    Business Administration
                  </option>
                  <option value="Chemical Engineering">
                    Chemical Engineering
                  </option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="Civil Engineering">Civil Engineering</option>
                  <option value="Climate Change">Climate Change</option>
                  <option value="Commerce">Commerce</option>
                  <option value="Computer Engineering">
                    Computer Engineering
                  </option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Criminology">Criminology</option>
                  <option value="Data Science">Data Science</option>
                  <option value="Dentistry">Dentistry</option>
                  <option value="Design and Visual Arts">
                    Design and Visual Arts
                  </option>
                  <option value="Development Studies">
                    Development Studies
                  </option>
                  <option value="Economics">Economics</option>
                  <option value="Education">Education</option>
                  <option value="Electrical Engineering">
                    Electrical Engineering
                  </option>
                  <option value="Electronics Engineering">
                    Electronics Engineering
                  </option>
                  <option value="Energy Systems Engineering">
                    Energy Systems Engineering
                  </option>
                  <option value="English Language and Literature">
                    English Language and Literature
                  </option>
                  <option value="Environmental Sciences">
                    Environmental Sciences
                  </option>
                  <option value="Fashion Design">Fashion Design</option>
                  <option value="Film and TV Production">
                    Film and TV Production
                  </option>
                  <option value="Food Science and Technology">
                    Food Science and Technology
                  </option>
                  <option value="Forensic Sciences">Forensic Sciences</option>
                  <option value="Gender Studies">Gender Studies</option>
                  <option value="Genetics">Genetics</option>
                  <option value="Geography">Geography</option>
                  <option value="Geology">Geology</option>
                  <option value="Graphic Design">Graphic Design</option>
                  <option value="Health and Physical Education">
                    Health and Physical Education
                  </option>
                  <option value="History">History</option>
                  <option value="Hospitality and Tourism Management">
                    Hospitality and Tourism Management
                  </option>
                  <option value="Human Resource Management">
                    Human Resource Management
                  </option>
                  <option value="Industrial Design">Industrial Design</option>
                  <option value="Information Security">
                    Information Security
                  </option>
                  <option value="Information Technology">
                    Information Technology
                  </option>
                  <option value="International Relations">
                    International Relations
                  </option>
                  <option value="Islamic Studies">Islamic Studies</option>
                  <option value="Journalism and Mass Communication">
                    Journalism and Mass Communication
                  </option>
                  <option value="Law">Law</option>
                  <option value="Library and Information Science">
                    Library and Information Science
                  </option>
                  <option value="Linguistics">Linguistics</option>
                  <option value="Management Sciences">
                    Management Sciences
                  </option>
                  <option value="Marine Sciences">Marine Sciences</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Materials Science and Engineering">
                    Materials Science and Engineering
                  </option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Mechanical Engineering">
                    Mechanical Engineering
                  </option>
                  <option value="Media and Communication Studies">
                    Media and Communication Studies
                  </option>
                  <option value="Medical Laboratory Technology">
                    Medical Laboratory Technology
                  </option>
                  <option value="Medicine and Surgery">
                    Medicine and Surgery
                  </option>
                  <option value="Metallurgy and Materials Engineering">
                    Metallurgy and Materials Engineering
                  </option>
                  <option value="Microbiology">Microbiology</option>
                  <option value="Mining Engineering">Mining Engineering</option>
                  <option value="Multimedia Arts">Multimedia Arts</option>
                  <option value="Nanotechnology">Nanotechnology</option>
                  <option value="Natural Resource Management">
                    Natural Resource Management
                  </option>
                  <option value="Neuroscience">Neuroscience</option>
                  <option value="Nursing">Nursing</option>
                  <option value="Nutrition and Dietetics">
                    Nutrition and Dietetics
                  </option>
                  <option value="Peace and Conflict Studies">
                    Peace and Conflict Studies
                  </option>
                  <option value="Pharmaceutical Sciences">
                    Pharmaceutical Sciences
                  </option>
                  <option value="Pharmacy">Pharmacy</option>
                  <option value="Philosophy">Philosophy</option>
                  <option value="Physics">Physics</option>
                  <option value="Physiotherapy">Physiotherapy</option>
                  <option value="Plant Sciences">Plant Sciences</option>
                  <option value="Political Science">Political Science</option>
                  <option value="Project Management">Project Management</option>
                  <option value="Psychology">Psychology</option>
                  <option value="Public Administration">
                    Public Administration
                  </option>
                  <option value="Public Health">Public Health</option>
                  <option value="Quality Management">Quality Management</option>
                  <option value="Renewable Energy Engineering">
                    Renewable Energy Engineering
                  </option>
                  <option value="Robotics and Artificial Intelligence">
                    Robotics and Artificial Intelligence
                  </option>
                  <option value="Social Sciences">Social Sciences</option>
                  <option value="Software Engineering">
                    Software Engineering
                  </option>
                  <option value="Sociology">Sociology</option>
                  <option value="Soil and Environmental Sciences">
                    Soil and Environmental Sciences
                  </option>
                  <option value="Statistics">Statistics</option>
                  <option value="Supply Chain Management">
                    Supply Chain Management
                  </option>
                  <option value="Telecommunication Engineering">
                    Telecommunication Engineering
                  </option>
                  <option value="Textile Design">Textile Design</option>
                  <option value="Textile Engineering">
                    Textile Engineering
                  </option>
                  <option value="Tourism and Hospitality Management">
                    Tourism and Hospitality Management
                  </option>
                  <option value="Transportation Engineering">
                    Transportation Engineering
                  </option>
                  <option value="Urdu Language and Literature">
                    Urdu Language and Literature
                  </option>
                  <option value="Veterinary Sciences">
                    Veterinary Sciences
                  </option>
                  <option value="Water Resource Engineering">
                    Water Resource Engineering
                  </option>
                  <option value="Zoology">Zoology</option>
                </select>
              </div>
            </div>
          ) : undefined}
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
          {/* CODE FOR 3RD EDUCATION DETAILS UI CODE */}
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
          {educationDetailsPart2 == true && value == 3 ? (
            <div className="flex mb-6">
              <div className="w-2/6">
                <label className="label line1">Institute</label>
                <select
                  onChange={(e) => {
                    setEducationalInformation((prevState) => ({
                      ...prevState,
                      institute: [...prevState.institute, e.target.value],
                    }));
                  }}
                  value={educationalInformation.institute[2]}
                  className="select select-bordered w-full  max-w-xs text-gray-500"
                >
                  <option disabled selected className="text-gray-700">
                    Select Insitute
                  </option>
                  <option value="Air University Islamabad">
                    Air University Islamabad
                  </option>
                  <option value="Bahauddin Zakariya University, Multan">
                    Bahauddin Zakariya University, Multan
                  </option>
                  <option value="Balochistan University of Engineering and Technology, Khuzdar">
                    Balochistan University of Engineering and Technology,
                    Khuzdar
                  </option>
                  <option value="Balochistan University of Information Technology, Engineering and Management Sciences, Quetta">
                    Balochistan University of Information Technology,
                    Engineering and Management Sciences, Quetta
                  </option>
                  <option value="Benazir Bhutto Shaheed University, Lyari">
                    Benazir Bhutto Shaheed University, Lyari
                  </option>
                  <option value="Benazir Bhutto Shaheed University of Technology and Skill Development, Khairpur Mirs">
                    Benazir Bhutto Shaheed University of Technology and Skill
                    Development, Khairpur Mirs
                  </option>
                  <option value="Comsats University Islamabad">
                    Comsats University,Islamabad
                  </option>
                  <option value="Dow University of Health Sciences, Karachi">
                    Dow University of Health Sciences, Karachi
                  </option>
                  <option value="Fatima Jinnah Women University, Rawalpindi">
                    Fatima Jinnah Women University, Rawalpindi
                  </option>
                  <option value="Federal Urdu University of Arts, Sciences and Technology, Islamabad">
                    Federal Urdu University of Arts, Sciences and Technology,
                    Islamabad
                  </option>
                  <option value="Ghazi University, Dera Ghazi Khan">
                    Ghazi University, Dera Ghazi Khan
                  </option>
                  <option value="Government College University, Faisalabad">
                    Government College University, Faisalabad
                  </option>
                  <option value="Government College University, Lahore">
                    Government College University, Lahore
                  </option>
                  <option value="Government College Women University, Sialkot">
                    Government College Women University, Sialkot
                  </option>
                  <option value="Government Sadiq College Women University, Bahawalpur">
                    Government Sadiq College Women University, Bahawalpur
                  </option>
                  <option value="Institute of Business Administration, Karachi">
                    Institute of Business Administration, Karachi
                  </option>
                  <option value="Islamia University, Bahawalpur">
                    Islamia University, Bahawalpur
                  </option>
                  <option value="Karakoram International University, Gilgit">
                    Karakoram International University, Gilgit
                  </option>
                  <option value="Kohat University of Science and Technology, Kohat">
                    Kohat University of Science and Technology, Kohat
                  </option>
                  <option value="Kwara State University, Malete">
                    Kwara State University, Malete
                  </option>
                  <option value="Lahore College for Women University, Lahore">
                    Lahore College for Women University, Lahore
                  </option>
                  <option value="Lahore Garrison University, Lahore">
                    Lahore Garrison University, Lahore
                  </option>
                  <option value="Lahore University of Management Sciences, Lahore">
                    Lahore University of Management Sciences, Lahore
                  </option>
                  <option value="Lasbela University of Agriculture, Water and Marine Sciences, Uthal">
                    Lasbela University of Agriculture, Water and Marine
                    Sciences, Uthal
                  </option>

                  <option value="Mirpur University of Science and Technology, Mirpur">
                    Mirpur University of Science and Technology, Mirpur
                  </option>
                  <option value="Mohi-ud-Din Islamic University, Nerian Sharif">
                    Mohi-ud-Din Islamic University, Nerian Sharif
                  </option>
                  <option value="Mohammad Ali Jinnah University, Islamabad">
                    Mohammad Ali Jinnah University, Islamabad
                  </option>
                  <option value="Mohammad Ali Jinnah University, Karachi">
                    Mohammad Ali Jinnah University, Karachi
                  </option>
                  <option value="Muhammad Nawaz Sharif University of Agriculture, Multan">
                    Muhammad Nawaz Sharif University of Agriculture, Multan
                  </option>
                  <option value="Multan College of Arts, Multan">
                    Multan College of Arts, Multan
                  </option>
                  <option value="Mehran University of Engineering and Technology, Jamshoro">
                    Mehran University of Engineering and Technology, Jamshoro
                  </option>
                  <option value="Mir Chakar Khan Rind University of Technology, Dera Ghazi Khan">
                    Mir Chakar Khan Rind University of Technology, Dera Ghazi
                    Khan
                  </option>
                  <option value="NED University of Engineering and Technology, Karachi">
                    NED University of Engineering and Technology, Karachi
                  </option>
                  <option value="National College of Arts, Lahore">
                    National College of Arts, Lahore
                  </option>
                  <option value="National Defense University, Islamabad">
                    National Defense University, Islamabad
                  </option>
                  <option value="National Textile University, Faisalabad">
                    National Textile University, Faisalabad
                  </option>
                  <option value="National University of Computer and Emerging Sciences, Islamabad">
                    National University of Computer and Emerging Sciences,
                    Islamabad
                  </option>
                  <option value="National University of Modern Languages, Islamabad">
                    National University of Modern Languages, Islamabad
                  </option>
                  <option value="National University of Sciences and Technology, Islamabad">
                    National University of Sciences and Technology, Islamabad
                  </option>
                  <option value="NED University of Engineering and Technology, Karachi">
                    NED University of Engineering and Technology, Karachi
                  </option>
                  <option value="Pakistan Institute of Development Economics, Islamabad">
                    Pakistan Institute of Development Economics, Islamabad
                  </option>
                  <option value="Pakistan Institute of Engineering and Applied Sciences, Islamabad">
                    Pakistan Institute of Engineering and Applied Sciences,
                    Islamabad
                  </option>
                  <option value="Pakistan Military Academy, Abbottabad">
                    Pakistan Military Academy, Abbottabad
                  </option>
                  <option value="Pakistan Naval Academy, Karachi">
                    Pakistan Naval Academy, Karachi
                  </option>
                  <option value="Pir Mehr Ali Shah Arid Agriculture University, Rawalpindi">
                    Pir Mehr Ali Shah Arid Agriculture University, Rawalpindi
                  </option>
                  <option value="Quaid-e-Awam University of Engineering, Science and Technology, Nawabshah">
                    Quaid-e-Awam University of Engineering, Science and
                    Technology, Nawabshah
                  </option>
                  <option value="Quaid-i-Azam University, Islamabad">
                    Quaid-i-Azam University, Islamabad
                  </option>

                  <option value="The Women University, Multan">
                    The Women University, Multan
                  </option>
                  <option value="University of Agriculture, Faisalabad">
                    University of Agriculture, Faisalabad
                  </option>
                  <option value="University of Azad Jammu and Kashmir, Muzaffarabad">
                    University of Azad Jammu and Kashmir, Muzaffarabad
                  </option>
                  <option value="University of Balochistan, Quetta">
                    University of Balochistan, Quetta
                  </option>
                  <option value="University of Education, Lahore">
                    University of Education, Lahore
                  </option>
                  <option value="University of Engineering and Technology, Lahore">
                    University of Engineering and Technology, Lahore
                  </option>
                  <option value="University of Engineering and Technology, Peshawar">
                    University of Engineering and Technology, Peshawar
                  </option>
                  <option value="University of Engineering and Technology, Taxila">
                    University of Engineering and Technology, Taxila
                  </option>
                  <option value="University of FATA, Kohat">
                    University of FATA, Kohat
                  </option>
                  <option value="University of Gujrat, Gujrat">
                    University of Gujrat, Gujrat
                  </option>
                  <option value="University of Haripur, Haripur">
                    University of Haripur, Haripur
                  </option>
                  <option value="University of Health Sciences, Lahore">
                    University of Health Sciences, Lahore
                  </option>
                  <option value="University of Karachi, Karachi">
                    University of Karachi, Karachi
                  </option>
                  <option value="University of Kotli Azad Jammu and Kashmir, Kotli">
                    University of Kotli Azad Jammu and Kashmir, Kotli
                  </option>
                  <option value="University of Lahore, Lahore">
                    University of Lahore, Lahore
                  </option>
                  <option value="University of Loralai, Loralai">
                    University of Loralai, Loralai
                  </option>
                  <option value="University of Malakand, Chakdara">
                    University of Malakand, Chakdara
                  </option>
                  <option value="University of Management and Technology, Lahore">
                    University of Management and Technology, Lahore
                  </option>
                  <option value="University of Okara, Okara">
                    University of Okara, Okara
                  </option>
                  <option value="University of Peshawar, Peshawar">
                    University of Peshawar, Peshawar
                  </option>
                  <option value="University of Sargodha, Sargodha">
                    University of Sargodha, Sargodha
                  </option>
                  <option value="University of Science and Technology, Bannu">
                    University of Science and Technology, Bannu
                  </option>

                  <option value="University of Sindh, Jamshoro">
                    University of Sindh, Jamshoro
                  </option>
                  <option value="University of Swabi, Swabi">
                    University of Swabi, Swabi
                  </option>
                  <option value="University of Swat, Swat">
                    University of Swat, Swat
                  </option>
                  <option value="University of the Punjab, Lahore">
                    University of the Punjab, Lahore
                  </option>
                  <option value="University of Turbat, Turbat">
                    University of Turbat, Turbat
                  </option>
                  <option value="University of Veterinary and Animal Sciences, Lahore">
                    University of Veterinary and Animal Sciences, Lahore
                  </option>
                  <option value="University of Wah, Wah">
                    University of Wah, Wah
                  </option>
                  <option value="Women University of Azad Jammu and Kashmir, Bagh">
                    Women University of Azad Jammu and Kashmir, Bagh
                  </option>
                </select>
              </div>

              <div className="w-1/5 ml-6">
                <label className="label line1">Level</label>
                <select
                  onChange={(e) => {
                    setEducationalInformation((prevState) => ({
                      ...prevState,
                      level: [...prevState.level, e.target.value],
                    }));
                  }}
                  value={educationalInformation.level[2]}
                  className="select select-bordered w-full  max-w-xs text-gray-500"
                >
                  <option disabled selected className="text-gray-700">
                    Under / Post Grad
                  </option>
                  <option>B.S</option>
                  <option>M.S</option>
                  <option>Ph.D</option>
                </select>
              </div>

              <div className="w-1/5 ml-6">
                <label className="label line1">Majors In</label>
                <select
                  onChange={(e) => {
                    setEducationalInformation((prevState) => ({
                      ...prevState,
                      majors: [...prevState.majors, e.target.value],
                    }));
                  }}
                  value={educationalInformation.majors[2]}
                  className="select select-bordered w-full  max-w-xs text-gray-500"
                >
                  <option disabled selected className="text-gray-700">
                    Degree Program
                  </option>
                  <option value="Accounting and Finance">
                    Accounting and Finance
                  </option>
                  <option value="Actuarial Science">Actuarial Science</option>
                  <option value="Aerospace Engineering">
                    Aerospace Engineering
                  </option>
                  <option value="Agricultural Sciences">
                    Agricultural Sciences
                  </option>
                  <option value="Anthropology">Anthropology</option>
                  <option value="Applied Linguistics">
                    Applied Linguistics
                  </option>
                  <option value="Applied Psychology">Applied Psychology</option>
                  <option value="Architecture and Design">
                    Architecture and Design
                  </option>
                  <option value="Artificial Intelligence">
                    Artificial Intelligence
                  </option>
                  <option value="Automotive Engineering">
                    Automotive Engineering
                  </option>
                  <option value="Aviation Management">
                    Aviation Management
                  </option>
                  <option value="Banking and Finance">
                    Banking and Finance
                  </option>
                  <option value="Biochemistry">Biochemistry</option>
                  <option value="Bioinformatics">Bioinformatics</option>
                  <option value="Biological Sciences">
                    Biological Sciences
                  </option>
                  <option value="Biomedical Engineering">
                    Biomedical Engineering
                  </option>
                  <option value="Biotechnology">Biotechnology</option>
                  <option value="Botany">Botany</option>
                  <option value="Business Administration">
                    Business Administration
                  </option>
                  <option value="Chemical Engineering">
                    Chemical Engineering
                  </option>
                  <option value="Chemistry">Chemistry</option>
                  <option value="Civil Engineering">Civil Engineering</option>
                  <option value="Climate Change">Climate Change</option>
                  <option value="Commerce">Commerce</option>
                  <option value="Computer Engineering">
                    Computer Engineering
                  </option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Criminology">Criminology</option>
                  <option value="Data Science">Data Science</option>
                  <option value="Dentistry">Dentistry</option>
                  <option value="Design and Visual Arts">
                    Design and Visual Arts
                  </option>
                  <option value="Development Studies">
                    Development Studies
                  </option>
                  <option value="Economics">Economics</option>
                  <option value="Education">Education</option>
                  <option value="Electrical Engineering">
                    Electrical Engineering
                  </option>
                  <option value="Electronics Engineering">
                    Electronics Engineering
                  </option>
                  <option value="Energy Systems Engineering">
                    Energy Systems Engineering
                  </option>
                  <option value="English Language and Literature">
                    English Language and Literature
                  </option>
                  <option value="Environmental Sciences">
                    Environmental Sciences
                  </option>
                  <option value="Fashion Design">Fashion Design</option>
                  <option value="Film and TV Production">
                    Film and TV Production
                  </option>
                  <option value="Food Science and Technology">
                    Food Science and Technology
                  </option>
                  <option value="Forensic Sciences">Forensic Sciences</option>
                  <option value="Gender Studies">Gender Studies</option>
                  <option value="Genetics">Genetics</option>
                  <option value="Geography">Geography</option>
                  <option value="Geology">Geology</option>
                  <option value="Graphic Design">Graphic Design</option>
                  <option value="Health and Physical Education">
                    Health and Physical Education
                  </option>
                  <option value="History">History</option>
                  <option value="Hospitality and Tourism Management">
                    Hospitality and Tourism Management
                  </option>
                  <option value="Human Resource Management">
                    Human Resource Management
                  </option>
                  <option value="Industrial Design">Industrial Design</option>
                  <option value="Information Security">
                    Information Security
                  </option>
                  <option value="Information Technology">
                    Information Technology
                  </option>
                  <option value="International Relations">
                    International Relations
                  </option>
                  <option value="Islamic Studies">Islamic Studies</option>
                  <option value="Journalism and Mass Communication">
                    Journalism and Mass Communication
                  </option>
                  <option value="Law">Law</option>
                  <option value="Library and Information Science">
                    Library and Information Science
                  </option>
                  <option value="Linguistics">Linguistics</option>
                  <option value="Management Sciences">
                    Management Sciences
                  </option>
                  <option value="Marine Sciences">Marine Sciences</option>
                  <option value="Marketing">Marketing</option>
                  <option value="Materials Science and Engineering">
                    Materials Science and Engineering
                  </option>
                  <option value="Mathematics">Mathematics</option>
                  <option value="Mechanical Engineering">
                    Mechanical Engineering
                  </option>
                  <option value="Media and Communication Studies">
                    Media and Communication Studies
                  </option>
                  <option value="Medical Laboratory Technology">
                    Medical Laboratory Technology
                  </option>
                  <option value="Medicine and Surgery">
                    Medicine and Surgery
                  </option>
                  <option value="Metallurgy and Materials Engineering">
                    Metallurgy and Materials Engineering
                  </option>
                  <option value="Microbiology">Microbiology</option>
                  <option value="Mining Engineering">Mining Engineering</option>
                  <option value="Multimedia Arts">Multimedia Arts</option>
                  <option value="Nanotechnology">Nanotechnology</option>
                  <option value="Natural Resource Management">
                    Natural Resource Management
                  </option>
                  <option value="Neuroscience">Neuroscience</option>
                  <option value="Nursing">Nursing</option>
                  <option value="Nutrition and Dietetics">
                    Nutrition and Dietetics
                  </option>
                  <option value="Peace and Conflict Studies">
                    Peace and Conflict Studies
                  </option>
                  <option value="Pharmaceutical Sciences">
                    Pharmaceutical Sciences
                  </option>
                  <option value="Pharmacy">Pharmacy</option>
                  <option value="Philosophy">Philosophy</option>
                  <option value="Physics">Physics</option>
                  <option value="Physiotherapy">Physiotherapy</option>
                  <option value="Plant Sciences">Plant Sciences</option>
                  <option value="Political Science">Political Science</option>
                  <option value="Project Management">Project Management</option>
                  <option value="Psychology">Psychology</option>
                  <option value="Public Administration">
                    Public Administration
                  </option>
                  <option value="Public Health">Public Health</option>
                  <option value="Quality Management">Quality Management</option>
                  <option value="Renewable Energy Engineering">
                    Renewable Energy Engineering
                  </option>
                  <option value="Robotics and Artificial Intelligence">
                    Robotics and Artificial Intelligence
                  </option>
                  <option value="Social Sciences">Social Sciences</option>
                  <option value="Software Engineering">
                    Software Engineering
                  </option>
                  <option value="Sociology">Sociology</option>
                  <option value="Soil and Environmental Sciences">
                    Soil and Environmental Sciences
                  </option>
                  <option value="Statistics">Statistics</option>
                  <option value="Supply Chain Management">
                    Supply Chain Management
                  </option>
                  <option value="Telecommunication Engineering">
                    Telecommunication Engineering
                  </option>
                  <option value="Textile Design">Textile Design</option>
                  <option value="Textile Engineering">
                    Textile Engineering
                  </option>
                  <option value="Tourism and Hospitality Management">
                    Tourism and Hospitality Management
                  </option>
                  <option value="Transportation Engineering">
                    Transportation Engineering
                  </option>
                  <option value="Urdu Language and Literature">
                    Urdu Language and Literature
                  </option>
                  <option value="Veterinary Sciences">
                    Veterinary Sciences
                  </option>
                  <option value="Water Resource Engineering">
                    Water Resource Engineering
                  </option>
                  <option value="Zoology">Zoology</option>
                </select>
              </div>
            </div>
          ) : undefined}
          <FiPlusCircle
            onClick={() => {
              setEducationaDetailsPart2(true);
              setValue((previousValue) => {
                if (previousValue <= 2) {
                  return previousValue + 1;
                } else {
                  return previousValue;
                }
              });
            }}
            className="
            hover:text-blue-500 hover:bg-white hover:rounded-md hover:shadow-xl
            text-4xl cursor-pointer  text-gray-600 m-auto block text-center"
          >
            Add More
          </FiPlusCircle>

          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
          {/* PROFESSIONAL EXPERIENCE  UI CODE */}
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}

          <h3 className="heading3 mt-8 block w-full font-medium">
            <FcAssistant className="inline text-4xl mr-2" /> Professional
            Experience
          </h3>

          <div className="flex mt-4">
            <div className="w-5/12">
              <label className="label line1">Title</label>
              <input
                type="text"
                className="h-10 input input-bordered w-full"
                id="text"
                name="name"
                autoComplete="on"
                placeholder="Lead Backend Developer"
                onChange={(e) =>
                  setProfessionalInformation((prevState) => ({
                    ...prevState,
                    title: [e.target.value],
                  }))
                }
                value={professionalInformation.title}
              />
            </div>

            <div className="ml-16">
              <label className="label line1">Duration (/Years)</label>
              <input
                type="number"
                className="h-10 input input-bordered w-1/2"
                id="text"
                name="year"
                min={0}
                autoComplete="on"
                placeholder="0.6 / 5 -- In Years"
                onChange={(e) =>
                  setProfessionalInformation((prevState) => ({
                    ...prevState,
                    duration: [e.target.value],
                  }))
                }
                value={professionalInformation.duration}
              />
            </div>

            <div className="ml-0">
              <label className="label line1">Company Name</label>
              <input
                type="text"
                className="h-10 input input-bordered w-full"
                id="text"
                name="company"
                autoComplete="on"
                placeholder="META"
                onChange={(e) =>
                  setProfessionalInformation((prevState) => ({
                    ...prevState,
                    companyName: [e.target.value],
                  }))
                }
                value={professionalInformation.companyName}
              />
            </div>
          </div>
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
          {/* PROFESSIONAL EXPERIENCE 2ND   UI CODE */}
          {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}

          {experienceDetails == true ? (
            <div className="flex mt-4">
              <div className="w-5/12">
                <label className="label line1">Title</label>
                <input
                  type="text"
                  className="h-10 input input-bordered w-full"
                  id="text"
                  name="name"
                  autoComplete="on"
                  placeholder="Software Architect"
                  onChange={(e) =>
                    setProfessionalInformation((prevState) => ({
                      ...prevState,
                      title: [...prevState.title, e.target.value],
                    }))
                  }
                  value={professionalInformation.title[1]}
                />
              </div>

              <div className="ml-16">
                <label className="label line1">Duration (/Years)</label>
                <input
                  type="number"
                  className="h-10 input input-bordered w-1/2"
                  id="text"
                  name="year"
                  min={0}
                  autoComplete="on"
                  placeholder="0.6 / 5 -- In Years"
                  onChange={(e) =>
                    setProfessionalInformation((prevState) => ({
                      ...prevState,
                      duration: [...prevState.duration, e.target.value],
                    }))
                  }
                  value={professionalInformation.duration[1]}
                />
              </div>

              <div className="ml-0">
                <label className="label line1">Company Name</label>
                <input
                  type="text"
                  className="h-10 input input-bordered w-full"
                  id="text"
                  name="company"
                  autoComplete="on"
                  placeholder="SAMSUNG"
                  onChange={(e) =>
                    setProfessionalInformation((prevState) => ({
                      ...prevState,
                      companyName: [...prevState.companyName, e.target.value],
                    }))
                  }
                  value={professionalInformation.companyName[1]}
                />
              </div>
            </div>
          ) : undefined}
          <div className="block m-auto text-center mt-12 w-full">
            <FiPlusCircle
              className="
             hover:text-blue-500 hover:bg-white hover:rounded-md hover:shadow-xl
             text-4xl cursor-pointer  text-gray-600 m-auto block text-center"
              onClick={() => setExperienceDetails(true)}
            >
              Add More...
            </FiPlusCircle>
          </div>
        </div>

        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
        {/* CONTACT DETAILS UI CODE */}
        {/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */}
        <h3 className="heading3 mt-8 block w-full font-medium">
          <FcAdvertising className="inline text-4xl mr-2" />
          Contact / Social Handles
        </h3>

        <div className="flex w-full ">
          <div className=" w-1/3">
            <label className="label line1">Email Address</label>
            <input
              type="email"
              className="h-10 input input-bordered w-full"
              id="text"
              name="name"
              autoComplete="on"
              placeholder="name@gmail.com"
              onChange={(e) => {
                setContactInformation((old) => ({
                  ...old,
                  emailAddress: e.target.value,
                }));
              }}
              value={personalInformation.emailAddress}
            />
          </div>

          <div className=" w-1/3 ml-16">
            <label className="label line1">Phone / WhatsApp Number</label>
            <input
              type="tel"
              className="h-10 input input-bordered w-full"
              id="text"
              name="phone number"
              autoComplete="on"
              placeholder="+92-340-111-222"
              onChange={(e) => {
                setContactInformation((old) => ({
                  ...old,
                  phoneNo: e.target.value,
                }));
              }}
              value={personalInformation.phoneNo}
            />
          </div>
        </div>

        <div className=" w-1/3 ">
          <label className="label line1">Linkedin Profile</label>
          <input
            type="url"
            className="h-10 input input-bordered w-full"
            id="text"
            name="linkedin profile"
            autoComplete="on"
            placeholder="linkedin.com/Humza-Sajid"
            onChange={(e) => {
              setContactInformation((old) => ({
                ...old,
                linkedinProfile: e.target.value,
              }));
            }}
            value={personalInformation.linkedinProfile}
          />
        </div>

        <div className=" w-1/3 ml-10 ">
          <label className="label line1">GitHub Profile </label>
          <input
            type="url"
            className="h-10 input input-bordered w-full"
            id="text"
            name="linkedin profile"
            autoComplete="on"
            placeholder="github.com/META"
            onChange={(e) => {
              setContactInformation((old) => ({
                ...old,
                gitHubProfile: e.target.value,
              }));
            }}
            value={personalInformation.gitHubProfile}
          />
        </div>

        <div className="mt-4 flex justify-center m-auto p-4 items-center bg-transparent shadow-md cursor-pointer h-1/2 rounded-md">
          <div
            className="border bg-transparent border-gray-400 border-dashed rounded-md p-4 flex flex-col items-center justify-center
            hover:bg-gray-100
          "
          >
            <FcDocument className="text-4xl block" />
            <h3 className="mt-2 line1">Upload Your Resume(Pdf)</h3>
            <input
              type="file"
              name="resume"
              onChange={handleResumeUpload}
              id=""
              alt="select resume  pdf"
              accept="application/pdf"
              style={{
                position: "relative",
                top: "5px",
                background: "white",
                color: "white",
                display: "block",
                margin: "auto",
                width: "6.5em",
                border: "1.5px solid black",
                boxShadow: "2px 2px 2px 1px white",
                borderRadius: "12px",
              }}
            />
          </div>
        </div>
        <div className="flex w-full justify-center mt-12">
          <button
            style={{ textTransform: "capitalize" }}
            className="btn bg-blue-600 border-none w-40 text-lg line1"
            onClick={submit}
          >
            Submit
          </button>
        </div>
      </div>

      <footer className="bg-gray-700 h-12 flex justify-center items-center">
        <h3 className="text-white line1">Powerd By Smart Cruiter </h3>
      </footer>
    </div>
  );
}

export default PostedJobApplyForm;
