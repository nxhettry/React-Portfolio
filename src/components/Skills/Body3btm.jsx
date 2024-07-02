import React from "react";
import Dotgrid from "../Utils/Dotgrid";
import Randombox1 from "../Utils/Randombox1";
import Skills from "../Skills/Skills";

function Body3btm() {
    return <div className="w-full h-[28rem] sm:gap-16 md:gap-8 flex justify-center items-center">
        <div className="hidden sm:relative sm:flex sm:w-[45%]">
            <Dotgrid h="6rem" w="6rem" t="4rem" l="2rem" />
            <Dotgrid h="6rem" w="6rem" t="12rem" r="7rem" />
            <Randombox1 h="7rem" w="7rem" t="0" r="2rem" />
            <Randombox1 h="5rem" w="5rem" t="18rem" r="0" />
            <img src="emptylogo.svg" alt="logo" className="absolute bottom-12 left-16 logo-hover" />
        </div>
        <div className="w-[55%]">
            <div className="w-full flex justify-center gap-2 mt-8">
                <div className="w-[150px]"><Skills h="5rem" title="Languages" skills="C C++ JavaScript Dart" /></div>
                <div className="w-[150px] flex flex-col gap-4">
                    <Skills h="4rem" title="Databases" skills="PostgresSQL MongoDB" />
                    <Skills h="6.5rem" title="Other" skills="HTML CSS SASS Tailwind EJS" />
                </div>
                <div className="w-[150px] flex flex-col gap-4">
                    <Skills h="6.5rem" title="Tools" skills="VSCode Figma Canva Git NodeJS" />
                    <Skills h="7.7rem" title="Frameworks" skills="React Next.JS Express.JS jQuery Flutter" />
                </div>
            </div>
        </div>
    </div>;
}

export default Body3btm;