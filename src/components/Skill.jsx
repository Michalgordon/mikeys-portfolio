import PropTypes from "prop-types";
import Icon from "./Icon";
const Skill = ({ title, iconName, size = "regular" }) => {
  return (
    <div
      className={`inline-flex items-center gap-1 ${
        size === "small" ? "mx-1" : size === "large" ? "" : " mx-4"
      }`}
    >
      <h1
        className={`capitalize font-medium text-sm whitespace-nowrap ${
          size === "small" ? "text-xs" : size === "large" ? "" : "text-sm"
        } ${title ? "" : "hidden"}`}
      >
        {title}
      </h1>
      <Icon
        name={iconName}
        className={`${iconName ? "" : "hidden"} 
          ${size === "small" ? "w-5" : size === "large" ? "w-8" : "w-6"}`}
      ></Icon>
    </div>
  );
};

export default Skill;

Skill.propTypes = {
  title: PropTypes.string,
  iconName: PropTypes.string,
  size: PropTypes.string,
};
