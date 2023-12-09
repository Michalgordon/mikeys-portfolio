import PropTypes from "prop-types";
import Icon from "./Icon";
const Skill = ({ title, level }) => {
  const renderIcon = (index) => {
    const rotateRules = {
      1: ["rotate-0"],
      2: ["-rotate-20 mb-1", "rotate-20 mb-1"],
      3: ["-rotate-35", "rotate-0 mb-1", "rotate-35"],
    };
    const rotateAccordingToIndex = rotateRules[level][index];
    return (
      <Icon
        key={index}
        className={` w-2 ${rotateAccordingToIndex}`}
        fill="orange"
        name="bolt"
      />
    );
  };

  return (
    <div className="inline-flex items-center gap-1 mx-4">
      <div className="flex items-center justify-center">
        {[...Array(level).keys()].map((index) => {
          return renderIcon(index);
        })}
      </div>
      <h1 className="capitalize font-medium text-sm whitespace-nowrap	">
        {title}
      </h1>
    </div>
  );
};

export default Skill;

Skill.propTypes = {
  title: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
};
