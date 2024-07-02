import React from "react";
import Button from "../Utils/Button";

function Homeleft() {
    return <>
        <div className="w-full text-2xl sm:text-4xl" style={{ fontWeight: 500 }}><span className="text-white">Nishan is a</span><span className="text-purpleText"> web designer</span><span className="text-white"> and </span><span className="text-purpleText">full stack developer</span></div>
        <div className="w-full text-md sm:text-lg text-greyText">He crafts responsive websites where technologies meet creativity</div>
        <Button text="Contact me !!" w="10rem" p="16px 8px" link="/contact" />
    </>
}

export default Homeleft;