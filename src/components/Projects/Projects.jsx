import Button from "../Utils/Button";
import "../../App.css"

function Projects(props) {
    return <>
        <div style={{height: props.height}} className="project-container sm:w-[32%] md:w-[30%] border border-white font-mainText">
            <img src="project.jpg" alt="project1" className="h-[39%] w-full border border-grey" />
            <div className="h-[16%]  px-[8px] border border-white flex items-center justify-center text-sm sm:text-md text-greyText">{props.stack}</div>
            <div className="h-[45%] px-[8px] gap-2 sm:gap-4 flex justify-center items-start sm:items-center py-1 sm:py-3 text-md text-greyText flex-col">
                <div className="text-white text-xl sm:text-2xl">App Name</div>
                <p className="text-sm sm:text-md">Purpose of the app</p>
                <Button p="4px" text="Live &lt;~&gt;" />
            </div>
        </div>
    </>;
}

export default Projects;