import PropTypes from "prop-types";

const ProgressCircle = ({ title, progress }) => {
  return (
    <div className="inline-flex flex-shrink flex-col items-center">
      <div className=" flex justify-center items-center  w-14 aspect-square rounded-full border-darkGray border-8">
        {progress}%
      </div>
      <h1 className="capitalize">{title}</h1>
    </div>
  );
};

export default ProgressCircle;

ProgressCircle.propTypes = {
  title: PropTypes.string.isRequired,
  progress: PropTypes.number.isRequired,
};
