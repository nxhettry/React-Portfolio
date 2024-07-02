import Contactpage1 from "./Contactpage1";
import Contactpage2 from "./Contactpage2";

function Contactpage () {
    return (
        <div className="w-3/5 mx-auto flex flex-col mb-20 gap-16">
            <Contactpage1 />
            <Contactpage2 />
        </div>
    );
}

export default Contactpage;