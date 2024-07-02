import React from "react";
import Projects from "./Projects";
import Randombox1 from "../Utils/Randombox1";

function Body2btm() {
    return <div className="flex justify-center sm:px-3 gap-1 sm:gap-4 h-96 sm:h-[28rem]">
        <Projects height="83%" stack="Html Css Js" />
        <Projects height="90%" stack="React Tailwind Node" />
        <Projects height="87%" stack="Postgres Node Js" />
        <Randombox1 h="100px" w="10rem" ml="10rem" t="45rem" l="-13rem" />
        <Randombox1 h="180px" w="5rem" t="70rem" r="0" />
        <Randombox1 h="60px" w="10rem" ml="10rem" t="85rem" l="-11rem" />
    </div>;
}

export default Body2btm;