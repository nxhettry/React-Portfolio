import React, { useState, useRef, useEffect } from 'react';
import "../../App.css";

const SendEmail = ({ onSubmit }) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch('https://formspree.io/f/xkndpvwl', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, message }),
    });

    if (response.ok) {
      console.log('Form successfully submitted');
      onSubmit();
    } else {
      console.error('Form submission failed');
    }
  };

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
      onSubmit();
    }
  };
  const isClicked = (e) => {
    onSubmit();
    handleSubmit(e);
  }

  const ref = useRef();

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <form ref={ref} className="flex flex-col gap-12 px-12 py-4 rounded-3xl bg-form h-4/6 w-3/5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg" onSubmit={handleSubmit}>
      <h1 className="text-3xl font-bold text-black">Contact me</h1>
      <div className='flex flex-col gap-8 overflow-hidden'>
        <Input type="name" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Name" required />
        <Input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required />
        <Input type="textarea" id="message" name="message" value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Message" required />
      </div>
      <button type="submit" onClick={isClicked} className="bg-black text-white w-40 h-16 font-bold text-md aBtn">
        Submit
      </button>
    </form>
  );
};

export default SendEmail;