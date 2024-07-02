import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Body2top() {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/projects");
  };

  return (
    <div className="flex">
      <div className="flex justify-between w-[70%]">
        <div className="text-3xl">
          <span className="text-purpleText">#</span>
          <span>projects</span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="500"
          height="2"
          viewBox="0 0 511 2"
          fill="none"
          className="m-4 "
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M511 1.5H0V0.5H511V1.5Z"
            fill="#C778DD"
          />
        </svg>
      </div>
      <button
        onClick={handleClick}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className="text-right w-[13%] cursor-pointer"
        style={{ borderBottom: hover ? "1px solid white" : "initial" }}
      >
        View all -&gt;
      </button>
    </div>
  );
}

export default Body2top;
