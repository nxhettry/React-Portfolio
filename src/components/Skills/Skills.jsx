import "../../App.css";

function Skills(props) {

  return (
    <div id="skills">
      <div  className="border border-white px-2 py-1 font-bolder">
        {props.title}
      </div>
      <div
        
        className="border border-white px-2 py-1 text-greyText"
        style={{ height: props.h }}
      >
        {props.skills}
      </div>
    </div>
  );
}

export default Skills;
