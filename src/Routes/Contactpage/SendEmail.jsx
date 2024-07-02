import React, { useState, useRef, useEffect } from "react";
import "../../App.css";
import Input from "../../components/Utils/Input";

const SendEmail = ({ onSubmit, hideForm }) => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isVisible, setIsVisible] = useState(true);
  const ref = useRef(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.clear();

    const response = await fetch("https://formspree.io/f/xkndpvwl", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, name, message }),
    });

    if (response.ok) {
      console.log("Form successfully submitted");
      hideForm();
      setIsVisible(false); 
    } else {
      console.error("Form submission failed");
      alert("Form submission failed. Please try again.");
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsVisible(false);
        hideForm();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [ref]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center">
      <form
        ref={ref}
        className="flex flex-col gap-12 px-12 py-4 rounded-3xl bg-white h-4/6 w-3/5 shadow-lg"
        onSubmit={handleSubmit}
      >
        <h1 className="text-3xl font-bold text-black">Contact me</h1>
        <div className="flex flex-col gap-8 overflow-hidden">
          <Input
            type="name"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
          <Input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <Input
            type="textarea"
            id="message"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-black text-white w-40 h-16 font-bold text-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SendEmail;
