import { useState } from "react";
import Contactinfo from "../../components/Contacts/Contactinfo";
import SendEmail from "./SendEmail";

const Contactpage2 = () => {
  const [hover, setHover] = useState(false);
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };

  return (
    <div className="flex flex-col gap-20 w-full ">
      {clicked && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={() => setClicked(false)} 
        >
          <div
            className="bg-white p-6 h-[40rem] w-[60vw] mx-auto rounded-lg shadow-lg z-10"
            onClick={(e) => e.stopPropagation()}
          >
            <form action={SendEmail} className="text-black flex flex-col gap-[3.2rem]">
                <h1 className="text-3xl font-bold text-black">Contact me</h1>
                <p>Write a message below or shoot me at <b>nishan.gtsn@gmail.com</b></p>
                <div className="flex w-full items-start justify-center"><p className="w-[15%] text-xl">Name : </p><input name="query" className="border w-[85%] p-4 rounded" /></div>
                <div className="flex w-full items-start justify-center"><p className="w-[15%] text-xl">Email Id :</p> <input name="query" className="border w-[85%] p-4 rounded" /></div>
                <div className="flex w-full items-start justify-center"><p className="w-[15%] text-xl">Message :</p> <textarea name="query" className="border w-[85%] p-4 rounded" /></div>
             
              <button
                type="submit"
                className="px-4 py-2 bg-background text-white rounded quote transition duration-300"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}

      <p className="w-3/5">
        I'm interested in freelance opportunities. However, if you have anything
        else, do not hesitate to contact me.
      </p>
      <div className="flex text-greyText gap-20">
        <div className="w-60 flex flex-col gap-4">
          <div className="flex gap-28 w-full">
            <Contactinfo />
            <p className="text-3xl text-greyText">OR</p>
            <button
              onClick={handleClick}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
              className="border text-nowrap border-purpleText p-3 h-12 w-40 text-white font-mainText"
              style={{
                display: clicked ? "none" : "initial",
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
