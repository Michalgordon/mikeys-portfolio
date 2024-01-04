import { Icon, ProfilePicture } from "../components";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="flex flex-grow justify-center px-20">
      <div className="flex flex-grow justify-center flex-col gap-24">
        <div className="flex flex-col gap-3">
          <motion.h1
            className="text-6xl font-thin"
            initial={{ opacity: 0 }}
            animate={{ opacity: "100%" }}
            transition={{ delay: 0.2, ease: "easeOut", duration: 1 }}
          >
            Hi, I'm Mikey!
          </motion.h1>
          <div className="flex flex-col w-fit pl-20 gap-20">
            <motion.h2
              className="text-4xl font-semibold"
              initial={{ x: "-200%" }}
              animate={{ x: 0 }}
              transition={{ duration: 0.7, type: "spring" }}
            >
              A <span className="italic ">Nomadic</span>{" "}
              <span className="text-5xl font-semibold">
                Frontend Developer.{" "}
              </span>
            </motion.h2>
            <motion.div
              className="flex gap-5 self-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: "100%" }}
              transition={{ delay: 0.2, ease: "easeOut", duration: 1 }}
            >
              <Icon className="w-10" name="vuejs"></Icon>
              <Icon className="w-10" name="react"></Icon>
              <Icon className="w-10" name="css3-alt"></Icon>
              <Icon className="w-10" name="html5"></Icon>
              <Icon className="w-10" name="node-js"></Icon>
              <Icon className="w-10" name="js"></Icon>
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div
        className="flex flex-col justify-center"
        initial={{ x: "200%" }}
        animate={{ x: "0" }}
        transition={{ duration: 0.7, type: "spring" }}
      >
        <ProfilePicture></ProfilePicture>
      </motion.div>
    </div>
  );
};

export default Hero;
