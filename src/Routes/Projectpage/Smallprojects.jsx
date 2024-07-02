import Button from "../../components/Utils/Button";

const Smallprojects = (props) => {
  return (
    <div style={{height: props.h}} className="project-container flex flex-col items-center w-4/5 sm:w-[30%] border border-white">
      <div className="flex text-greyText border-white border w-full justify-center">
        HTML CSS JS
      </div>
      <div className="flex flex-col items-center gap-3 justify-between py-4 w-full">
        <div className="text-white text-xl sm:text-2xl">App Name</div>
        <p className="text-sm sm:text-md">Purpose of the app</p>
        <Button p="4px" w="7rem" text="Live &lt;~&gt;" />
      </div>
    </div>
  );
};

export default Smallprojects;
