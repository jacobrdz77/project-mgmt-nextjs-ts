import React from "react";

const NoProjects = () => {
  return (
    <div className="flex align-middle justify-center text-center">
      <div className="flex flex-col p-3">
        <div className="flex flex-col">
          <h1 className="text-2xl">No Projects</h1>
          <p className="mt-1 text-gray-400">
            There are currently no projects set up yet
          </p>
        </div>
        <div>
          <button
            className="mt-5 bg-button
           text-white p-4 rounded-lg hover:bg-buttonHover"
          >
            Add a Project
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoProjects;
