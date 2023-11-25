import { ExperienceCard } from "../components";
const MyExperience = () => {
  const experience = [
    {
      timeLine: "2022 - now",
      location: "USA",
      title: "doing my own thing",
      info: "working on my portfolio, learning react and looking for a job!",
      imgSrc: "",
    },
    {
      timeLine: "2020 - 2022",
      location: "Tel Aviv, Israel",
      company: "Spetz / Paradox",
      title: "Full Stack developer",
      info: "I started as employee number 7 at Spetz, a small start up in tel aviv. A year later, we were acquired by Paradox! ",
      imgSrc: "",
    },
    {
      timeLine: "2017 - 2020",
      location: "Jerusalem, Israel",
      company: "Hebrew University",
      title: "Getting my B.A in Internet and Society",
      info: "Alumni of the pioneering class of the honors program: ‘Internet and Society,’ which combined computer science with social sciences.",
      imgSrc: "",
    },
  ];
  return (
    <div className="flex py-10 overflow-auto">
      <div className="timeline">
        {experience.map((experienceItem, index) => (
          <div
            className={`timeline-container ${
              (index + 1) % 2 == 0
                ? "timeline-container--left"
                : "timeline-container--right"
            }`}
            key={index}
          >
            <ExperienceCard
              {...experienceItem}
              className={`relative border-2 border-teal ${
                (index + 1) % 2 == 0
                  ? "border-arrow--left"
                  : "border-arrow--right"
              }`}
            ></ExperienceCard>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyExperience;
