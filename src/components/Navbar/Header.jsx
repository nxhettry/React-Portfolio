import React from "react";
import Navlinks from "./NavLinks";

const Header = () => {
  return <nav className="relative h-24 mx-auto w-[70%] flex justify-between items-center">
    <div className="flex headFont gap-4 text-white">
      <img src="Logo.svg" alt="logo" className="h-[1.5rem] w-[1.5rem]"/>Nxhettry
    </div>
    <Navlinks />
  </nav>;
}

export default Header;