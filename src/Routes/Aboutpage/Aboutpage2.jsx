const Aboutpage2 = () => {
  return (
    <div className="flex my-8 gap-4 w-full mx-auto">
      <div className="flex flex-col justify-center gap-12 text-greyText w-[43%]">
        <p>Hello, i'm Nishan!</p>
        <p>
          I'm a full-stack developer with a passion for creating beautiful and
          functional websites. I have experience in both front-end and back-end
          development as well as mobile app development, and I'm always looking
          to learn new technologies and improve my skills.
        </p>
        <p>
          I'm currently looking for new opportunities to work on exciting
          projects and collaborate with other developers. If you're interested
          in working with me, please don't hesitate to get in touch!
        </p>
      </div>
      <div className="flex w-[55%]">
        <img
          src="home.jpeg"
          alt="Nishan"
          className="w-[23vw] h-[25vw] object-cover"
        />
      </div>
    </div>
  );
};

export default Aboutpage2;
