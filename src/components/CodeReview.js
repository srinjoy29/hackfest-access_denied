import React from "react";
import codere from "../assets/img/code review.jpg";

const CodeReview = () => {
  return (
    <div id="CodeReview">
    <div className="collab flex h-full m-5">
      <div className="container mt-5 flex justify-center">
        <div className="row">
          <div className="col-md-6">
            <img
              src={codere}
              alt="background"
              className="object-cover h-full w-full"
            />
          </div>
          <div className="col-md-6">
            <div className="collab-text px-8 py-4">
              <h1 className="text-4xl font-bold mb-4">Code Review Assistant</h1>
              <p className="text-lg">
                A Code Review Assistant is a tool or system that aids developers
                in conducting thorough and efficient code reviews, facilitating
                collaboration, identifying issues, and ensuring code quality.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default CodeReview;
