import LevelOfExpertise from "../components/LevelOfExpertise";

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
    <div className="flex flex-col flex-grow px-10 pt-16">
      <h1 className="text-5xl font-thin"> about me</h1>
      <div className="flex flex-col justify-center text-xl w-1/2 gap-4">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
          nostrum tenetur placeat iste suscipit alias et voluptatem veniam omnis
          minima eius, odio maxime provident nisi eligendi dolores asperiores,
          doloribus earum?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
          nostrum tenetur placeat iste suscipit alias et voluptatem veniam omnis
          minima eius, odio maxime provident nisi eligendi dolores asperiores,
          doloribus earum?
        </p>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
          nostrum tenetur placeat iste suscipit alias et voluptatem veniam omnis
          minima eius, odio maxime provident nisi eligendi dolores asperiores,
          doloribus earum?
        </p>
      </div>
      <div className="flex mt-auto w-full justify-between p-4 gap-7">
        {skills.map((skill, index) => (
          <LevelOfExpertise
            key={index}
            title={skill.title}
            level={skill.level}
          ></LevelOfExpertise>
        ))}
      </div>
    </div>
  );
};

export default AboutMe;
