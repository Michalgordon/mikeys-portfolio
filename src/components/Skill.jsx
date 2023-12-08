import PropTypes from "prop-types";
import Icon from "./Icon";
//todo add rotation to bolts or some animation?
const Skill = ({ title, level }) => {
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
