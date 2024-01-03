import { Icon, ProfilePicture } from "../components";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex flex-grow justify-center px-20">
      <motion.div
        className="flex flex-grow justify-center flex-col gap-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        exit={{ opacity: 0 }}
        transition={{ ease: "easeOut", duration: 2 }}
      >
        <div className="flex flex-col gap-3">
          <h1 className="text-6xl font-thin">Hi, I'm Mikey!</h1>
          <div className="flex flex-col w-fit pl-20 gap-20">
            <div className="text-4xl font-semibold ">
              A <span className="italic ">Nomadic</span>{" "}
              <span className="text-5xl font-semibold">
                Frontend Developer.{" "}
              </span>
            </div>
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
      </motion.div>
      <motion.div
        className="flex flex-col justify-center"
        initial={{ x: "200%" }}
        animate={{ x: "0" }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        <ProfilePicture></ProfilePicture>
      </motion.div>
    </div>
  );
};

export default Hero;
