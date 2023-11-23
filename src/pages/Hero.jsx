import { Icon } from "../components";
const Hero = () => {
  return (
    <div className="flex flex-grow p-20">
      <div className="flex flex-grow justify-center flex-col gap-24">
        <div className="flex flex-col gap-3">
          <h1 className="text-6xl font-thin">Hi, I'm Mikey!</h1>
          <div className="flex flex-col w-fit pl-20 gap-20">
            <h2 className="text-4xl font-semibold ">
              A Nomadic Frontend Developer
            </h2>
            <div className="flex gap-5 self-center">
              <Icon className="w-10" name="vuejs"></Icon>
              <Icon className="w-10" name="react"></Icon>
              <Icon className="w-10" name="css3-alt"></Icon>
              <Icon className="w-10" name="html5"></Icon>
              <Icon className="w-10" name="node-js"></Icon>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex justify-center flex-col">
        <div>
          <img
            className="z-40 relative self-end w-[400px] rounded-[70%]"
            src="./mikey-animated-profile-cold.png"
          ></img>
          <div className="absolute top-[10%] z-10 text-gray-400 animate-typing overflow-hidden whitespace-nowrap">
            {"<div className='flex flex-grow p-20'></div>"}
            {"<div className='flex flex-grow justify-center flex-col gap-24'>"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
