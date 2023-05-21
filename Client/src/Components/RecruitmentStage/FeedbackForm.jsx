import axios from "axios";
import React, { useState } from "react";
import { Rating, RoundedStar } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import { useEffect } from "react";
import { Alert, AlertIcon, AlertTitle } from "@chakra-ui/react";
function FeedbackForm({ id, rating }) {
  const [startRating, setStartRating] = useState({
    first: 0,
    second: 0,
    third: 0,
    fourth: 0,
    fifth: 0,
  });

  useEffect(() => {
    const fetchAllInterviewingCanidate = () => {
      // axios POST request
      const options = {
        url: "http://localhost:3000/details/active/interviewing/details",
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
        data: { id },
      };

      axios(options)
        .then((response) => {
          setStartRating(() => ({
            first: response.data.candidate_details.feedback_form[0],
            second: response.data.candidate_details.feedback_form[1],
            third: response.data.candidate_details.feedback_form[2],
            fourth: response.data.candidate_details.feedback_form[3],
            fifth: response.data.candidate_details.feedback_form[4],
          }));
          // console.log(response.data.candidate_details.feedback_form);
        })
        .catch((e) => {
          console.log(e);
        });
    };

    fetchAllInterviewingCanidate();
  }, [0]);

  const handleFeebackForm = () => {
    // axios POST request
    const options = {
      url: "http://localhost:3000/details/active/interviewing/details/savefeedback",
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      data: {
        id,
        startRating,
      },
    };

    axios(options)
      .then((response) => {
        if (response.status == 200) {
          alert("Submited");
        } else {
          alert("something went wrong , refresh and try again");
        }
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const Star = (
    <path d="M62 25.154H39.082L32 3l-7.082 22.154H2l18.541 13.693L13.459 61L32 47.309L50.541 61l-7.082-22.152L62 25.154z" />
  );
  const myStyles = {
    itemShapes: RoundedStar,
    boxBorderWidth: 1,
    gap: 2,
    activeFillColor: [
      "#ffc107    ",
      "#ffc107",
      "#ffc107",
      "#ffc107",
      "#ffc107",
    ],

    // activeBoxColor: ["white", "#db711a", "#dcb000", "#61bb00", "#009664"],
    // activeBoxBorderColor: ["white", "#d05e00", "#cca300", "#39bdff", "#0eff41"],

    inactiveFillColor: "white",
    inactiveBoxColor: "#E8eae8",
    inactiveBoxBorderColor: "white",
  };
  return (
    <div>
      <h2 className="heading2b text-center">Feedback Form</h2>

      <div className="shadow-lg bg-white p-6 w-4/5 m-auto rounded-md mt-4">
        <h3 className="heading4">
          1- How effectively did the candidate communicate during the interview
          process?
        </h3>
        <div
          className="flex justify-center  mt-2
        w-44 m-auto text-white
        "
        >
          <Rating
            value={startRating.first}
            onChange={(e) => {
              setStartRating((oldValues) => ({
                ...oldValues,
                first: e,
              }));
            }}
            itemStyles={myStyles}
          />
        </div>

        <h3 className="heading4 mt-4">
          2- Did the candidate demonstrate a good understanding of the job
          requirements and responsibilities?
        </h3>
        <div
          className="flex justify-center  mt-2
        w-44 m-auto text-white
        "
        >
          <Rating
            value={startRating.second}
            itemStyles={myStyles}
            onChange={(e) => {
              setStartRating((oldValues) => ({
                ...oldValues,
                second: e,
              }));
            }}
          />
        </div>

        <h3 className="heading4 mt-4">
          3-How well did the candidate present their skills and experience
          relevant to the job position?
        </h3>
        <div
          className="flex justify-center  mt-2
        w-44 m-auto text-white
        "
        >
          <Rating
            // filled={rating[2]}
            value={startRating.third}
            itemStyles={myStyles}
            onChange={(e) => {
              setStartRating((oldValues) => ({
                ...oldValues,
                third: e,
              }));
            }}
          />
          {/* {rating[2]} */}
        </div>

        <h3 className="heading4 mt-4">
          4-How did the candidate perform during any skill-based assessments or
          tests administered during the interview process?
        </h3>
        <div
          className="flex justify-center  mt-2
        w-44 m-auto text-white
        "
        >
          <Rating
            value={startRating.fourth}
            itemStyles={myStyles}
            onChange={(e) => {
              setStartRating((oldValues) => ({
                ...oldValues,
                fourth: e,
              }));
            }}
          />
        </div>

        <h3 className="heading4 mt-4">
          5- Rate your overall experience with this candidate.
        </h3>
        <div
          className="flex justify-center  mt-2
        w-44 m-auto text-white
        "
        >
          <Rating
            value={startRating.fifth}
            itemStyles={myStyles}
            onChange={(e) =>
              setStartRating((oldValues) => ({
                ...oldValues,
                fifth: e,
              }))
            }
          />
        </div>

        <button
          onClick={handleFeebackForm}
          className="btn bg-primary text-center block m-auto mt-8 border-none w-36"
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default FeedbackForm;
