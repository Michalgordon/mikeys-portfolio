import { ExperienceCard, Icon } from "../components";
const MyExperience = () => {
  //TODO change paradox icon to enzo
  //TODO find correct images
  //TODO edit all copy
  //add last timeline element
  //TODO add some kind of gradient effect to timeline to create movement

  const experience = [
    {
      timeLine: "2022 - now",
      location: "USA",
      company: "#vanlife",
      title: "doing my own thing",
      info: "working on my portfolio, learning react and looking for a job!",
      imgSrc: "public/vanlife-2.jpg",
      iconName: "shuttle-van-solid",
    },
    {
      timeLine: "2020 - 2022",
      location: "Tel Aviv, Israel",
      company: "Spetz / Paradox",
      title: "Full Stack developer",
      info: "I started as employee number 7 at Spetz, a small start up in tel aviv. A year later, we were acquired by Paradox! ",
      imgSrc: "public/paradox.jpeg",
      iconName: "laptop-code-solid",
    },
    {
      timeLine: "2017 - 2020",
      location: "Jerusalem, Israel",
      company: "Hebrew University",
      title: "B.A in Internet and Society",
      info: "Alumni of the pioneering class of the honors program: ‘Internet and Society,’ which combined computer science with social sciences.",
      imgSrc: "",
      iconName: "scroll-solid",
    },
    {
      timeLine: "2019 - 2020",
      location: "Jerusalem, Israel",
      company: "The Digital starter",
      title: "Volunteering",
      info: "A web designer for a cooperative initiative between “Atidim”, Google and Wix for the development of peripheral businesses in the Jerusalem area.",
      imgSrc: "",
      iconName: "wix",
    },
    {
      timeLine: "2010 - 2013",
      location: "IDF",
      company: "Air Defense command",
      title: "Combat Solider",
      info: "",
      iconName: "rocket-solid",
    },
    {
      timeLine: "2004 - 2010",
      location: "Kibutz Ein Shemer, Israel",
      company: "Mevo'ot Iron",
      title: "high school",
      info: "school was a blast! I majored in computer science and film, and was on the volleyball team",
      iconName: "book-solid",
    },
  ];
  const getOrientation = (index) => {
    return (index + 1) % 2 == 0 ? "right" : "right";
  };
  return (
    <div className="flex flex-col flex-grow gap-5 px-10 py-16 overflow-auto">
      <div className="flex pl-10 justify-start">
        <h1 className="text-5xl font-thin">What I've been up to</h1>
      </div>

      <div className="timeline">
        {experience.map((experienceItem, index) => (
          <div key={index} className="flex py-4">
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
  );
};

export default MyExperience;
