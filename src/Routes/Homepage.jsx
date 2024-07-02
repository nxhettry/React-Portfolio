import Body1 from "../components/Home/Body1";
import Body2 from "../components/Projects/Body2";
import Body3 from "../components/Skills/Body3";
import Body4 from "../components/About/Body4";
import Body5 from "../components/Contacts/Body5";
import Dotgrid from "../components/Utils/Dotgrid";
import Randombox1 from "../components/Utils/Randombox1";

function Homepage() {
  return (
    <>
      <div id="body1">
        <Body1 />
      </div>
      <div id="body2">
        <Body2 />
      </div>
      <div id="body3">
        <Body3 />
      </div>
      <div id="body4">
        <Body4 />
      </div>
      <Body5 />
      <Dotgrid t="200rem" l="0" h="100px" w="140px" />
      <Randombox1 t="180rem" r="0" h="100px" w="140px" />
      <Randombox1 t="230rem" l="0" h="170px" w="80px" />
      <Randombox1 t="200rem" r="10rem" h="170px" w="80px" />
      <Randombox1 t="220rem" r="10rem" h="170px" w="150px" />
    </>
  );
}

export default Homepage;
