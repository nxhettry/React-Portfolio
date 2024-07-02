import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Button(props) {
  const [hover, setHover] = useState(false);
  const navigate = useNavigate();

  const handleClick = (link) => {
    navigate(link);
  };

  return (
    <button
      onClick={() => {handleClick(props.link)}}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="border border-purpleText text-white font-mainText"
      style={{
        height: props.h,
        width: props.w,
        padding: props.p,
        backgroundColor: hover ? "#4B5563" : "initial",
        transform: hover ? "scale(1.1)" : "scale(1)",
        transition: "background-color 0.3s ease-in-out, transform 0.3s ease-in-out"
      }}
    >
      {props.text}
    </button>
  );
}

export default Button;