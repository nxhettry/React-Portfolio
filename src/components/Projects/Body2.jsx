import React from "react";
import Body2top from "./Body2top";
import Body2btm from "./Body2btm";

function Body2() {
    return <>
        <div className="body2 font-mainText text-white sm:w-4/5 md:w-3/5 mx-auto my-40 sm:my-48 flex flex-col gap-20 p-8">
            <Body2top />
            <Body2btm />
        </div>
    </>
}

export default Body2;