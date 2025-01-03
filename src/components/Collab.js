import React from "react";
import collob from "../assets/img/collab.jpg";

const Collab = () => {
  return (
    <div id="collab">
      <div className="collab flex h-full m-5">
        <div className="container mt-5 flex flex-row-reverse">
          <div className="row">
            <div className="col-md-6">
              <div className="collab-text px-8 py-4">
                <h1 className="text-4xl font-bold mb-4">
                  Code-Collab
                </h1>
                <p className="text-lg">
                  Code collaboration involves multiple programmers working together using version control systems, branching, merging, code reviews, and communication platforms to develop software collaboratively and efficiently.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src={collob}
                alt="background"
                className="object-cover h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Collab;
