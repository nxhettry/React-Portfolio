import React from "react";
import Onedot from "./Onedot";
import "../../App.css";

function Dotgrid(props) {
    return (
        <div className="z-20 absolute grid grid-cols-5 grid-rows-5" style={{height: props.h, width: props.w, bottom: props.b, top:props.t, right: props.r, left:props.l}}>
        <Onedot />
        <Onedot />
        <Onedot />
        <Onedot />
        <Onedot />
        <Onedot />
        <Onedot />
        <Onedot />
        <Onedot />
        <Onedot />
        <Onedot />
        <Onedot />
        <Onedot />
        <Onedot />
        <Onedot />
        <Onedot />
        <Onedot />
        <Onedot />
        <Onedot />
        <Onedot />
        <Onedot />
        <Onedot />
        <Onedot />
        <Onedot />
        <Onedot />
        </div>
    );
}

export default Dotgrid;