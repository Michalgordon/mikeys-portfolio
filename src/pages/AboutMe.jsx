import { Skill, ScrollingBanner, ExperienceCard, Icon } from "../components";
import { SKILLS, EXPERIENCE_BLURB, EXPERIENCE_LIST } from "../constants";
const AboutMe = () => {
  return (
    <div className="relative flex flex-col flex-grow gap-8 px-10 py-12">
      {/* <ScrollingBanner
        containerStyle={"h-[500px] w-1/3"}
        bannerStyle={"h-12 flex bg-teal-300"}
      >
        {SKILLS.map((skill, index) => (
          <Skill key={index} title={skill.title} level={skill.level}></Skill>
        ))}
      </ScrollingBanner> */}

      <div className="w-full">
        <div className="flex flex-col justify-center items-center text-justify">
          {/* <div className="relative timeline-container-blurb border-arrow--bottom flex flex-col rounded-xl border-teal border-2 p-4">
            <h2 className="text-xs">{EXPERIENCE_BLURB.timeLine}</h2>
            <h1 className="text-xl uppercase font-thin">
              {EXPERIENCE_BLURB.title}
            </h1>
            <h2 className="text-xs">{EXPERIENCE_BLURB.location}</h2>

            {EXPERIENCE_BLURB.content.map((paragraph, index) => (
              <p className="pt-2 text-base" key={index}>
                {paragraph}
              </p>
            ))}
          </div> */}

          <div className="flex flex-col w-full flex-grow gap-5 pb-16 overflow-auto">
            <div className="timeline">
              <div className="timeline-container-blurb border-arrow--bottom flex flex-col rounded-xl border-teal border-2 p-4">
                <h2 className="text-xs">{EXPERIENCE_BLURB.timeLine}</h2>
                <h1 className="text-xl uppercase font-thin">
                  {EXPERIENCE_BLURB.title}
                </h1>
                <h2 className="text-xs">{EXPERIENCE_BLURB.location}</h2>

                {EXPERIENCE_BLURB.content.map((paragraph, index) => (
                  <p className="pt-2 text-base" key={index}>
                    {paragraph}
                  </p>
                ))}
              </div>

              <div className="relative timeline-icon left-1/2 -translate-x-1/2 w-fit border-2 border-teal rounded-full z-10 aspect-square bg-white p-2">
                <Icon
                  className="w-8"
                  name={EXPERIENCE_BLURB.iconName}
                  fill="#97A79C" //TODO
                ></Icon>
              </div>
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
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
