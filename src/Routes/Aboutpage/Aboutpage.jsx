import Aboutpage1 from "./Aboutpage1";
import Aboutpage2 from "./Aboutpage2";
import Aboutpage3 from "./Aboutpage3";

function Aboutpage () {
    return (
        <div className="w-3/5 flex flex-col items-center gap-16 mx-auto">
            <Aboutpage1 />
            <Aboutpage2 />
            <Aboutpage3 />
        </div>
    );
}

export default Aboutpage;