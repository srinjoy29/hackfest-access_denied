import React from "react";
import collob from "../assets/img/ai.jpg";

const Codewithai = () => {
  return (
    <div id="Codewithai">
    <div className="collab flex h-full m-5">
      <div className="container mt-5 flex justify-center">
        <div className="row">
          <div className="col-md-6">
            <img
              src={collob}
              alt="background"
              className="object-cover h-full w-full"
            />
          </div>
          <div className="col-md-6">
            <div className="collab-text px-8 py-4">
              <h1 className="text-4xl font-bold mb-4">Code with Ai</h1>
              <p className="text-lg">
                A code converter using AI translates programming code between
                different languages or formats, enabling interoperability and
                facilitating development across diverse technology stacks
                efficiently.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Codewithai;
