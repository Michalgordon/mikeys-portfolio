import ProgressCircle from "../components/ProgressCircle";

const Hero = () => {
  const skills = [
    { title: "Vue", progress: 90 },
    { title: "HTML", progress: 90 },
    { title: "CSS", progress: 90 },
    { title: "React", progress: 30 },
  ];
  return (
    <div className="flex flex-grow p-20">
      <div className="flex flex-grow justify-center flex-col gap-24">
        <div className="flex flex-col gap-3">
          <h1 className="text-6xl font-thin">Hi, I'm Mikey!</h1>
          <h2 className="text-4xl font-semibold pl-20">
            A Nomadic Frontend Developer
          </h2>
        </div>
        <div className="flex flex-col self-center gap-5">
          <h1 className="-ml-16 text-xl">I like plaqying around with:</h1>
          <div className="flex gap-3">
            {skills.map((skill, index) => (
              <ProgressCircle
                key={index}
                title={skill.title}
                progress={skill.progress}
              ></ProgressCircle>
            ))}
          </div>
        </div>
      </div>
      <div className="flex justify-center flex-col">
        <img
          className="self-end w-[400px] rounded-[70%]"
          src="./mikey-animated-profile.png"
        ></img>
      </div>
    </div>
  );
};

export default Hero;
