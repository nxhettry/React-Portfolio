import Skills from "../../components/Skills/Skills";

const Aboutpage3 = () => {
  return (
    <div className="w-3/5 md:w-[60vw]">
      <div className="flex w-full pb-4 border-b border-white">
        <div className="text-3xl">
          <span className="text-purpleText">#</span>
          <span>skills</span>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="400"
          height="2"
          viewBox="0 0 511 2"
          fill="none"
          className="m-4 "
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M511 1.5H0V0.5H511V1.5Z"
            fill="#C778DD"
          />
        </svg>
      </div>

      <div className="w-full h-[28rem] sm:gap-16 md:gap-8 flex justify-center items-center">
        <div className="w-[55%]">
          <div className="w-full flex justify-center gap-2 mt-8">
            <div className="w-[150px]">
              <Skills
                h="5rem"
                title="Languages"
                skills="C C++ JavaScript Dart"
              />
            </div>
            <div className="w-[150px] flex flex-col gap-4">
              <Skills h="4rem" title="Databases" skills="PostgresSQL MongoDB" />
              <Skills
                h="6.5rem"
                title="Other"
                skills="HTML CSS SASS Tailwind EJS"
              />
            </div>
            <div className="w-[150px] flex flex-col gap-4">
              <Skills
                h="6.5rem"
                title="Tools"
                skills="VSCode Figma Canva Git NodeJS"
              />
              <Skills
                h="7.7rem"
                title="Frameworks"
                skills="React Next.JS Express.JS jQuery Flutter"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutpage3;
