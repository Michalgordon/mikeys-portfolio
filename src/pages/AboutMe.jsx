import { Skill, ScrollingBanner, ExperienceCard, Icon } from "../components";
import { SKILLS, EXPERIENCE } from "../constants";
const AboutMe = () => {
  return (
    <div className="relative flex flex-col flex-grow gap-8 px-10 py-12">
      <ScrollingBanner
        containerStyle={"h-[500px] w-1/3"}
        bannerStyle={"h-12 flex bg-teal-300"}
      >
        {SKILLS.map((skill, index) => (
          <Skill key={index} title={skill.title} level={skill.level}></Skill>
        ))}
      </ScrollingBanner>
      <h1
        className="pl-10 text-5xl 
       font-thin"
      >
        About me
      </h1>
      {/* <div className="grid grid-cols-2 h-full	">
        <div className="bg-red row-auto">
          {" "}
          <p>
            I'm a nomadic full stack developer with over 3 years of experience.
            I used to work for a successful startup in Tel Aviv but quit my job
            in 2022 to try out a different lifestyle in the States. My partner
            and I live in a van and we're slowly making our way around the
            country, trying to climb as many rocks as we can.
          </p>
          <p>
            My experience in a small startup made me a fast and independent
            learner. I gained a lot of experience with Vue.js, JavaScript, CSS
            and HTML. Since moving to the States, I've turned my attention to
            new frameworks, like React, that will make me a stronger and more
            well-rounded developer.
          </p>
          <p>
            Learning on my own and living on the road has been awesome but I'm
            ready for the step in my career and look forward to working on cool
            products and being part of a team again!
          </p>
        </div>
        <div className="bg-black col-start-2  row-span-full"></div>
        <div> more content</div>
      </div> */}

      <div className=" w-full ">
        <div className="flex flex-col justify-center items-center text-justify text-base">
          <div className="flex flex-col rounded-xl w-1/2 border-teal border-2 p-4 gap-4">
            <p>
              I'm a nomadic full stack developer with over 3 years of
              experience. I used to work for a successful startup in Tel Aviv
              but quit my job in 2022 to try out a different lifestyle in the
              States. My partner and I live in a van and we're slowly making our
              way around the country, trying to climb as many rocks as we can.
            </p>

            <p>
              My experience in a small startup made me a fast and independent
              learner. I gained a lot of experience with Vue.js, JavaScript, CSS
              and HTML. Since moving to the States, I've turned my attention to
              new frameworks, like React, that will make me a stronger and more
              well-rounded developer.
            </p>
            <p>
              Learning on my own and living on the road has been awesome but I'm
              ready for the step in my career and look forward to working on
              cool products and being part of a team again!
            </p>
          </div>

          <div className="flex flex-col w-full flex-grow gap-5 pb-16 overflow-auto">
            <div className="timeline">
              {EXPERIENCE.map((experienceItem, index) => (
                <div key={index} className="flex py-2">
                  <div
                    className={`timeline-container ${
                      (index + 1) % 2 == 0
                        ? "timeline-container--left"
                        : "timeline-container--right"
                    }`}
                  >
                    <Icon
                      className={`timeline-icon w-[var(--icon-w)]  ${
                        (index + 1) % 2 == 0
                          ? "timeline-icon--left"
                          : "timeline-icon--right"
                      }`}
                      name={experienceItem.iconName}
                      fill="#97A79C" //TODO
                    ></Icon>
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
