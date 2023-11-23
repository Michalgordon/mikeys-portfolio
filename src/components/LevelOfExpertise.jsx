import PropTypes from "prop-types";
import Icon from "./Icon";
const LevelOfExpertise = ({ title, level }) => {
  // const skills = [
  //   { title: "Vue", level: 3 },
  //   { title: "HTML", level: 3 },
  //   { title: "CSS", level: 3 },
  //   { title: "Node", level: 3 },
  //   { title: "Tailwind", level: 2 },

  //   { title: "React", level: 1 },
  // ];
  // <div className="flex gap-7">
  //           {skills.map((skill, index) => (
  //             <LevelOfExpertise
  //               key={index}
  //               title={skill.title}
  //               level={skill.level}
  //             ></LevelOfExpertise>
  //           ))}
  //         </div>

  return (
    <div className="inline-flex flex-col items-center">
      <h1 className="capitalize font-semibold text-xl">{title}</h1>

      <div className="flex items-center justify-center">
        {[...Array(level).keys()].map((index) => {
          return (
            <Icon
              key={index}
              className="relative w-3 color-yellow-500"
              name="bolt"
            ></Icon>
          );
        })}
      </div>
    </div>
  );
};

export default LevelOfExpertise;

LevelOfExpertise.propTypes = {
  title: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
};
