import React from "react";

const Page2top = () => {
  return (
    <div className="flex justify-between w-[70%] border-b pb-4 border-white">
      <div className="text-3xl">
        <p>
          <span className="text-purpleText">#</span>complete-apps
        </p>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="400"
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
  );
};

export default Page2top;
