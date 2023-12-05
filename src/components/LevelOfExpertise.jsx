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
    <div className="inline-flex items-center gap-1">
      <div className="flex items-center justify-center">
        {[...Array(level).keys()].map((index) => {
          let rotate = "[45deg]";
          return (
            <Icon
              key={index}
              className={`relative w-2 rotate-${rotate}`}
              fill="orange"
              name="bolt"
            ></Icon>
          );
        })}
      </div>
      <h1 className="capitalize font-thin text-sm">{title}</h1>
    </div>
  );
};

export default LevelOfExpertise;

LevelOfExpertise.propTypes = {
  title: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
};
