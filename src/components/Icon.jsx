import React from "react";
import { ReactSVG } from "react-svg";
import PropTypes from "prop-types";

const Icon = (props) => {
  return (
    <ReactSVG
      src={`src/assets/icons/${props.name}.svg`}
      {...props}
      className={props.className}
      style={{
        fill: props.fill,
        className: props.className,
      }}
    />
  );
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  fill: PropTypes.string,
  className: PropTypes.string,
};
export default Icon;
