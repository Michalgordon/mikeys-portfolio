import { ExperienceCard, Icon, ProfilePicture } from "../components";
import { EXPERIENCE_BLURB, EXPERIENCE_LIST } from "../constants";
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
          className="flex justify-end text-5xl font-semibold h-0"
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
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, type: "spring" }}
          >
            <ProfilePicture></ProfilePicture>
          </motion.div>
          <motion.div
            className="flex-col"
            initial={{ opacity: 0 }}
            animate={{ opacity: "100%" }}
            exit={{ opacity: 0, duration: 2 }}
            transition={{ delay: 0.2, ease: "easeOut", duration: 1 }}
          >
            {EXPERIENCE_BLURB.content.map((paragraph, index) => (
              <p className="pt-2 px-8 text-base text-justify" key={index}>
                {paragraph}
              </p>
            ))}
          </motion.div>
        </div>
        <motion.div
          className="relative -bottom-10 self-center h-0 "
          initial={{ y: "200%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.5 }}
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
      {/* <div className="flex flex-grow flex-col  h-[60vh] min-h-[60vh] p-20 shadow-xl">
        <h2 className="flex justify-end text-5xl font-semibold h-0">Skills.</h2>
      </div>
      <div className="flex flex-grow flex-col h-[60vh] min-h-[60vh] p-20 shadow-xl">
        <h2 className="flex justify-end text-5xl font-semibold h-0">
          Random Facts.
        </h2>
      </div> */}

      <div className="flex flex-col gap-12 p-20">
        <h2 className="flex justify-end text-5xl font-semibold">
          My Experience.
        </h2>
        <div className="timeline">
          <img
            className="relative timeline-icon z-10 left-1/2 -translate-x-1/2 w-40 aspect-square object-scale-down object-center rounded-full border-2 border-russian-blue bg-russian-blue shadow-lg mb-20"
            src="./mikey-profile.png"
          ></img>

          {EXPERIENCE_LIST.map((experienceItem, index) => (
            <div key={index} className="flex">
              <div
                className={`timeline-container ${
                  (index + 1) % 2 == 0
                    ? "timeline-container--left"
                    : "timeline-container--right"
                }`}
              >
                <div
                  className={`timeline-icon w-fit border-2 border-russian-blue rounded-full aspect-square bg-white p-1 top-[20px]
${(index + 1) % 2 == 0 ? "timeline-icon--left" : "timeline-icon--right"}`}
                >
                  <Icon
                    className="w-[var(--icon-w)]"
                    name={experienceItem.iconName}
                    fill="#9AAEBB" //TODO
                  ></Icon>
                </div>

                <ExperienceCard
                  {...experienceItem}
                  className={`relative border-2 border-russian-blue ${
                    (index + 1) % 2 == 0
                      ? "border-arrow--left"
                      : "border-arrow--right"
                  }`}
                ></ExperienceCard>
              </div>
            </div>
          ))}
          <img
            className="relative timeline-icon z-10 left-1/2 -translate-x-1/2 w-40 aspect-square rounded-full border-2 border-russian-blue bg-russian-blue mt-20 shadow-lg"
            src="./mikey-highschool.png"
          ></img>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
