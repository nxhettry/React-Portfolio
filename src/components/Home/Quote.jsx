import React from "react";

function Quote() {
    return <>
        <div className="flex flex-col justify-center items-end md:ml-6 md:w-[75%] w-[70%] text-white text-xl md:text-2xl" style={{ fontWeight: 300 }}>
            <p className="border border-white p-4 md:p-8 quote">With great power comes great electricity bill.</p>
            <span className="border border-white p-4 quote">- Dr. Who</span>
        </div>
    </>
}

export default Quote;
