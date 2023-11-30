import PropTypes from "prop-types";

const ExperienceCard = ({
  timeLine,
  location,
  company,
  title,
  info,
  imgSrc,
  className,
}) => {
  return (
    <div
      className={`group flex flex-col justify-center p-4 rounded-xl text-sm shadow-md ${className} `}
    >
      <div className="relative overflow-hidden capitalize flex flex-col ">
        <div className="">
          <div className="text-xs">{timeLine}</div>
          <h1 className="text-xl uppercase font-thin">{title}</h1>
          <div className="text-sm font-semibold">{company}</div>
          <div className="text-xs">{location}</div>
        </div>
      </div>
      <div>
        <div className=" text-base whitespace-normal">{info}</div>
      </div>
    </div>
  );
};

ExperienceCard.propTypes = {
  timeLine: PropTypes.string,
  location: PropTypes.string,
  company: PropTypes.string,
  title: PropTypes.string,
  info: PropTypes.string,
  className: PropTypes.string,
};
export default ExperienceCard;
