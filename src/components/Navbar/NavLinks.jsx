import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { Link } from 'react-scroll';
import { Link as RouterLink } from 'react-router-dom';

const Li = ({ text, to }) => (
  <Link to={to} smooth={true} duration={500} className="py-2 px-4 cursor-pointer hover:border-b hover:border-white">
    <span className="text-purpleText">#</span>
    <span className="text-greyText hover:text-white">{text}</span>
  </Link>
);

function Navlinks() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <ul className="hidden md:flex gap-4 text-md headFont">
        <Li text="home" to="/" />
        <Li text="projects" to="/projects" />
        <Li text="skills" to="/skills" />
        <Li text="about" to="/about" />
      </ul>
      <div className="md:hidden">
        <div onClick={toggleMenu} className="cursor-pointer">
          <MenuIcon />
        </div>
        {isOpen && (
          <div className="flex flex-col fixed bg-background inset-0 z-50">
            <div className="flex justify-between px-20 py-8">
              <div className="flex headFont gap-4 text-white">
                <img src="Logo.svg" alt="logo" className="h-[1.5rem] w-[1.5rem]" />Nxhettry
              </div>
              <div onClick={toggleMenu} className="cursor-pointer">
                <CloseIcon />
              </div>
            </div>
            <ul className="flex flex-col items-center placeholder-slate-200 gap-8 text-md headFont mt-8">
              <Li text="home" />
              <Li text="projects" />
              <Li text="skills" />
              <Li text="about" />
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navlinks;
