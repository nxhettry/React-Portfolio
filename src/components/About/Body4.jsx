import Body4top from "./Body4top";
import Body4btm from "./Body4btm";

function Body4() {
  return (
    <div className="body4 w-4/5 sm:w-3/5 mx-auto my-28 sm:my-48 sm:p-8 flex flex-col gap-12 sm:gap-16">
      <Body4top />
      <Body4btm />
    </div>
  );
}

export default Body4;
