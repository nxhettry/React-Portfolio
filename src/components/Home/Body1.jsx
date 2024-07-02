import React from "react";
import Homeright from "./Homeright";
import Homeleft from "./Homeleft";
import Quote from "./Quote";
import Randombox from "./Randombox";

const Body1 = () => {
  return (
    <div className="body1 relative sm:w-[80%] md:w-[75%] h-100 mx-auto mt-12 sm:mt-28 flex flex-col items-center sm:gap-4 md:gap-12 font-mainText">
      <div className="w-full flex md:gap-20">
        <div className="md:w-[60%] lg:w-[55%] h-full flex flex-col gap-12 p-8">
          <Homeleft />
        </div>
        <div className=" md:w-[40%]">
          <Homeright />
        </div>
      </div>
      <Quote />
      <Randombox height="8" />
    </div>
  );
};

export default Body1;
