import Dotgrid from "../Utils/Dotgrid";
import Button from "../Utils/Button";

function Body4btm() {
  return (
    <div className="flex items-center flex-col-reverse lg:flex-row gap-4 sm:gap-16 sm:mb-8">
      <div className="flex flex-col gap-4 sm:gap-16 w-full sm:w-4/5">
        <div className="text-greyText flex flex-col gap-8">
          <p className="sm:text-left text-center">Hello, i'm Nishan!</p>
          <p>
            I'm a full-stack developer with a passion for creating beautiful and
            functional websites. I have experience in both front-end and
            back-end development as well as mobile app development, and I'm
            always looking to learn new technologies and improve my skills.
          </p>
          <p>
            I'm currently looking for new opportunities to work on exciting
            projects and collaborate with other developers. If you're interested
            in working with me, please don't hesitate to get in touch!
          </p>
        </div>

        <Button text="Read more -&gt;" p="4px 8px" w="10rem" link="/about" />
      </div>
      <div className="w-[65%] sm:w-[80] sm:h-[80] md:w-[40%] md:h-[25vw] relative">
        <img
          src="myphoto1.png"
          alt="my_photo"
          className="h-full w-full md:h-[25vw] md:w-[20vw]"
        />
        <Dotgrid h="6rem" w="6rem" t="4rem" l="2rem" />
      </div>
    </div>
  );
}

export default Body4btm;
