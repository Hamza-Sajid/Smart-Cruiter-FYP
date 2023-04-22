import React, { useState } from "react";
import Rating from "react-animated-rating";

function FeedbackForm() {
  return (
    <div>
      <h2 className="heading2b text-center">Feedback Form</h2>

      <div className="shadow-lg bg-white p-6 w-4/5 m-auto rounded-md mt-4">
        <h3 className="heading4">
          1- How effectively did the candidate communicate during the interview
          process?
        </h3>
        <div className="flex justify-center  mt-2">
          <Rating />
        </div>

        <h3 className="heading4 mt-4">
          2- Did the candidate demonstrate a good understanding of the job
          requirements and responsibilities?
        </h3>
        <div className="flex justify-center  mt-2">
          <Rating />
        </div>

        <h3 className="heading4 mt-4">
          3-How well did the candidate present their skills and experience
          relevant to the job position?
        </h3>
        <div className="flex justify-center  mt-2">
          <Rating />
        </div>

        <h3 className="heading4 mt-4">
          4-How did the candidate perform during any skill-based assessments or
          tests administered during the interview process?
        </h3>
        <div className="flex justify-center  mt-2">
          <Rating />
        </div>

        <h3 className="heading4 mt-4">
          5- Rate your overall experience with this candidate.
        </h3>
        <div className="flex justify-center mt-2">
          <Rating />
        </div>

        <button className="btn bg-primary text-center block m-auto mt-8 border-none w-36">
          Done
        </button>
      </div>
    </div>
  );
}

export default FeedbackForm;
