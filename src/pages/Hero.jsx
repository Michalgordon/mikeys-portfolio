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
              <Icon className="w-10" name="js"></Icon>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex justify-center flex-col">
        <div>
          <img
            className="z-40 -rotate-20 relative self-end w-[400px] aspect-square object-scale-down object-center
            rounded-[70%] border-teal border-2 p-1"
            src="./mikey-profile.png"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default Hero;
