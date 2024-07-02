import React from "react";
import Body3top from "./Body3top";
import Body3btm from "./Body3btm";
function Body3() {
    return <div className="body3 sm:w-4/5 md:w-3/5 mx-auto p-8 flex flex-col gap-8 sm:gap-16">
        <Body3top />
        <Body3btm />
    </div>;
}

export default Body3;