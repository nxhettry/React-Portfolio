import React from "react";

function Randombox(props) {
    return <>
    <div className="h-{props.height} w-20 border border-white absolute left-0 top-40">&nbsp;</div>
    <div className="h-{props.height} w-20 border border-white absolute right-8 top-[29rem]">&nbsp;</div>
    <div className="h-{props.height} w-20 border border-white absolute right-0 top-[30rem] bg-white">&nbsp;</div>
    </>;
}

export default Randombox;