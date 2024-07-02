import React from "react";
import Dotgrid from "../Utils/Dotgrid";
import "../../App.css";

function Homeright() {
    return (
        <div className="relative pt-8 sm:p-0">
            <img draggable="false" src="myphoto1.png" alt="photo" className="sm:ml-8 h-[40vw] w-[100vw] md:w-[20vw] md:h-[25vw] z-10" />
            <img src="emptylogo.svg" alt="logo" className="h-[8vw] w-[8vw] absolute sm:top-0 top-6 left-0 logo-hover" />
            <Dotgrid h="9vw" w="9vw" t="16rem" r="5rem" />
        </div>

    );
}

export default Homeright;