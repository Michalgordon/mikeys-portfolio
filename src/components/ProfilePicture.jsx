import PropTypes from "prop-types";

const ProfilePicture = ({ className }) => {
  return (
    <img
      className={` ${className} rounded-full aspect-square object-scale-down object-center shadow-lg
      bg-russian-blue`}
      src="./mikey-profile.png"
    ></img>
  );
};

export default ProfilePicture;

ProfilePicture.propTypes = {
  className: PropTypes.string,
};
