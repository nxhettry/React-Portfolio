import { useState } from "react";
import Contactinfo from "../../components/Contacts/Contactinfo";
import SendEmail from "./SendEmail";

const Contactpage2 = () => {
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(current => !current);
  };

  return (
    <div className="flex flex-col gap-8 sm:gap-20 w-full">
      {clicked && <SendEmail hideForm={handleClick} />}
      <p className="w-3/5">
        I'm interested in freelance opportunities. However, if you have anything
        else, do not hesitate to contact me.
      </p>
      <div className="flex text-greyText gap-20">
        <div className="w-60 flex flex-col gap-4">
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-12 md:gap-28 w-full">
            <Contactinfo />
            <p className="text-3xl text-greyText">OR</p>
            <button
              onClick={handleClick}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className="border text-nowrap border-purpleText p-3 h-12 w-40 text-white font-mainText"
              style={{
                display: clicked ? "none" : "block",
                backgroundColor: hover ? "#4B5563" : "initial",
                transform: hover ? "scale(1.1)" : "scale(1)",
                transition:
                  "background-color 0.3s ease-in-out, transform 0.3s ease-in-out",
              }}
            >
              Send an Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contactpage2;
