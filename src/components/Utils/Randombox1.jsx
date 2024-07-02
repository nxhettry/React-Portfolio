import "../../App.css";

function Randombox1 (props) {


    return (
        <div style={{height: props.h , marginLeft: props.ml, top: props.t, left: props.l, right: props.r, bottom: props.b, width:props.w}} className="randomBox hidden md:flex sm:absolute border border-white">
            &nbsp;
        </div>
    );
}

export default Randombox1;