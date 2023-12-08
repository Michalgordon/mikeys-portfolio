import Skill from "../components";

const AboutMe = () => {
  const skills = [
    { title: "Vue", level: 3 },
    { title: "HTML", level: 3 },
    { title: "CSS", level: 3 },
    { title: "Node", level: 3 },
    { title: "Tailwind", level: 2 },
    { title: "React", level: 1 },
    { title: "Git", level: 2 },
    { title: "REST api", level: 2 },
    { title: "Python", level: 3 },
    { title: "Figma", level: 2 },
    { title: "AWS", level: 1 },
  ];

  return (
    <div className="flex flex-col flex-grow gap-16 px-10 py-16">
      <div className="absolute overflow-hidden  right-0 top-[96px] w-1/3 h-[500px]">
        <div className="rotate-45 w-full inline-flex flex-nowrap gap-7">
          <div className="bg-teal-300 h-12 flex gap-7 animate-scroll translate-y-[300%]">
            {skills.map((skill, index) => (
              <Skill
                key={index}
                title={skill.title}
                level={skill.level}
              ></Skill>
            ))}
          </div>
          <div className="bg-teal-300 h-12 flex gap-7 animate-scroll translate-y-[300%]">
            {skills.map((skill, index) => (
              <Skill
                key={index}
                title={skill.title}
                level={skill.level}
              ></Skill>
            ))}
          </div>
        </div>
      </div>
      <h1
        className="pl-10 text-5xl 
       font-thin"
      >
        About me
      </h1>
      <div className="flex flex-col justify-center text-justify text-base px-52 gap-4">
        <p>
          I’m a full stack developer with over 3 years of experience. I used to
          work for a successful startup in Tel Aviv that was acquired by
          Paradox, Inc. I quit my beloved job just over a year ago to move to
          the US and try out a different lifestyle. My partner and I are both
          rock climbers and we love the outdoors. We live in a van, in nature
          and on the road, slowly moving around the country and climbing as many
          rocks as we can. Vanlife has been awesome but I miss coding and am now
          looking for the next step in my career.
        </p>

        <p>
          My experience in a small startup made me a fast and independent
          learner. I gained a lot of experience with Vue.js, JavaScript, CSS and
          HTML and feel confident using these tools in complex ways. Since
          leaving my job I have turned my attention to new frameworks. I have
          mainly focused on React and am trying to familiarize myself with other
          tools that will make me a stronger and more well-rounded developer.
          Learning on my own and expanding my skill set has been exciting but I
          am looking forward to working on cool products and being part of a
          team once again.
        </p>
      </div>
      {/* to do: move banner to right corner, add loop */}
    </div>
  );
};

export default AboutMe;
