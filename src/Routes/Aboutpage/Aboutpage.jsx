import Aboutpage1 from "./Aboutpage1";
import Aboutpage2 from "./Aboutpage2";

function Aboutpage () {
    return (
        <div className="w-3/5 flex flex-col gap-16 mx-auto">
            <Aboutpage1 />
            <Aboutpage2 />
        </div>
    );
}

export default Aboutpage;