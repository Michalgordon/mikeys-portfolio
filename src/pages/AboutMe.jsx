import {
  Icon,
  ProfilePicture,
  RandomFacts,
  MyExperience,
  Skills,
} from "../components";
import { motion, useInView } from "framer-motion";
import { Fragment, useRef } from "react";

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 1 });

  const blurb = (
    <Fragment>
      <p>
        I'm a nomadic full stack developer with over
        <span className="font-bold uppercase"> 3 years of experience</span>. I
        used to work for a successful startup in Tel Aviv but quit my job to try
        out a different lifestyle in the States. My partner and I are living in
        a van and slowly making our way around the country while rock climbing,
        backpacking and absorbing the views.
      </p>
      <p>
        My experience in a small startup made me a{" "}
        <span className="font-bold uppercase">
          fast and independent learner
        </span>
        . I gained a lot of experience with Vue.js, JavaScript, CSS and HTML.
        Since moving to the States, I've turned my attention to new frameworks
        that will make me a stronger and more well-rounded developer.
      </p>
      <p>
        Learning on my own and living on the road has been awesome but I'm ready
        for the next step in my career and look forward to working on cool
        products and being{" "}
        <span className="font-bold uppercase"> part of a team </span> again!
      </p>
    </Fragment>
  );
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
            className="flex flex-col justify-center"
            initial={{ x: "200%" }}
            animate={{ x: "0" }}
            transition={{ duration: 0.7, type: "spring" }}
          >
            <ProfilePicture
              className={"min-w-[400px] w-[400px]"}
            ></ProfilePicture>
          </motion.div>
          <motion.div
            className="flex flex-col text-xs md:text-base text-justify px-8 gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: "100%" }}
            transition={{ delay: 0.2, ease: "easeOut", duration: 1 }}
          >
            {blurb}
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

      <div className="flex flex-col gap-12 p-20 shadow-xl">
        <h2 className="section-header">My Experience.</h2>
        <MyExperience></MyExperience>
      </div>
      <div className="flex flex-grow flex-col p-20 shadow-xl">
        <h2 className="section-header">Random Facts.</h2>
        <div className="flex flex-grow flex-col justify-center items-center gap-4 pt-20">
          <RandomFacts></RandomFacts>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
