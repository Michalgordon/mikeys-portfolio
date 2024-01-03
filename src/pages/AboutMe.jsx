import { ExperienceCard, Icon, ProfilePicture } from "../components";
import { EXPERIENCE_BLURB, EXPERIENCE_LIST } from "../constants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const AboutMe = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { amount: 1 });

  return (
    <div className=" w-full flex flex-col flex-grow px-20">
      <div
        ref={ref}
        className={`relative flex flex-col justify-center box-content min-h-full `}
      >
        <motion.h2
          className="flex justify-end text-5xl font-semibold h-0"
          initial={{ y: -200 }}
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
            className="flex-col "
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
          className="relative -bottom-10 self-center "
          initial={{ y: "200%" }}
          animate={{ y: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.5 }}
          style={{
            opacity: isInView ? 1 : 0,
            transition: "opacity 0.5s",
          }}
        >
          <Icon
            className="w-14"
            name="angle-double-down-solid"
            fill="#97A79C" //TODO
          ></Icon>
        </motion.div>
      </div>
      <div className="timeline w-full">
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
                className={`timeline-icon w-fit border-2 border-teal rounded-full aspect-square bg-white p-1 top-[20px]
${(index + 1) % 2 == 0 ? "timeline-icon--left" : "timeline-icon--right"}`}
              >
                <Icon
                  className="w-[var(--icon-w)]"
                  name={experienceItem.iconName}
                  fill="#97A79C" //TODO
                ></Icon>
              </div>

              <ExperienceCard
                {...experienceItem}
                className={`relative border-2 border-teal ${
                  (index + 1) % 2 == 0
                    ? "border-arrow--left"
                    : "border-arrow--right"
                }`}
              ></ExperienceCard>
            </div>
          </div>
        ))}
        <div className="relative timeline-icon z-10 left-1/2 -translate-x-1/2 w-40 aspect-square rounded-full border-2 border-teal bg-white mt-20 "></div>
      </div>
    </div>
  );
};

export default AboutMe;
