import React from "react";
import Profile from "./Profile";
import Details from "./Details";

const LandingPage = () => {
  return (
    <div>
      <div className=" grid grid-flow-col col-span-12">
        <div className="col-span-5 sticky top-0 h-screen">
          <Profile />
        </div>
        <div className="col-span-7 overflow-y-auto">
          <Details />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
