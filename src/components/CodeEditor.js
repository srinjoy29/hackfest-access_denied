import React from "react";
import codedit from "../assets/img/code edit.jpg";

const CodeEditor= () => {
  return (
    <div id="CodeEditor">
      <div className="collab flex h-full m-5">
        <div className="container mt-5 flex flex-row-reverse">
          <div className="row">
            <div className="col-md-6">
              <div className="collab-text px-8 py-4">
                <h1 className="text-4xl font-bold mb-4">Code Editor</h1>
                <p className="text-lg">
                  A code editor is a software tool that enables programmers to
                  write, edit, and manage source code for software development
                  projects efficiently, often providing syntax highlighting and
                  debugging features.
                </p>
              </div>
            </div>
            <div className="col-md-6">
              <img
                src={codedit}
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

export default CodeEditor;
