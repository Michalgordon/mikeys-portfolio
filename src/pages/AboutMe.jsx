import {
  Icon,
  ProfilePicture,
  RandomFacts,
  MyExperience,
  Skills,
} from "../components";
import { EXPERIENCE_BLURB } from "../constants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 1 });

  return (
    <div className="w-full flex flex-col flex-grow ">
      <div
        ref={ref}
        className={`relative flex flex-col justify-center box-content px-20 min-h-full shadow-xl`}
      >
        <motion.h2
          className="section-header"
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.5 }}
        >
          About Me.
        </motion.h2>
        <div className="flex gap-10 justify-center items-center">
          <motion.div
            initial={{ x: "200%" }}
            animate={{ x: "0" }}
            transition={{ duration: 0.7, type: "spring" }}
          >
            <ProfilePicture></ProfilePicture>
          </motion.div>
          <motion.div
            className="flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: "100%" }}
            transition={{ delay: 0.2, ease: "easeOut", duration: 1 }}
          >
            {EXPERIENCE_BLURB.content.map((paragraph, index) => (
              <p
                className="pt-2 px-8 text-xs md:text-base text-justify"
                key={index}
              >
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>
        <motion.div
          className="relative -bottom-10 self-center h-0"
          initial={{ y: 200 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, bounce: 0.5 }}
          style={{
            opacity: isInView ? 1 : 0,
            transition: "opacity 0.5s",
          }}
        >
          <Icon
            className="w-14 animate-bounce"
            name="angle-double-down-solid"
            fill="#9AAEBB" //TODO
          ></Icon>
        </motion.div>
      </div>
      <div className="flex flex-grow flex-col p-20 shadow-xl">
        <h2 className="section-header">Skills.</h2>
        <div className="flex justify-center items-center pt-20"></div>
        <Skills></Skills>
      </div>
      <div className="flex flex-grow flex-col p-20 shadow-xl">
        <h2 className="section-header">Random Facts.</h2>
        <div className="flex flex-grow flex-col justify-center items-center gap-4 pt-20">
          <RandomFacts></RandomFacts>
        </div>
      </div>

      <div className="flex flex-col gap-12 p-20">
        <h2 className="section-header">My Experience.</h2>
        <MyExperience></MyExperience>
      </div>
    </div>
  );
};

export default AboutMe;
