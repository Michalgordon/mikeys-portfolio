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
      className={`flex flex-col p-4 rounded-xl text-sm shadow-md gap-2 ${className} `}
    >
      <div className="flex justify-between">
        <div className="basis-2/3 capitalize">
          <h1 className="text-xl font-thin">{title}</h1>
          <div className="text-sm font-semibold">{company}</div>
        </div>
        <div className="text-xs">
          <div>{timeLine}</div>
          <div>{location}</div>
        </div>
      </div>
      <div>
        <div className="text-base">{info}</div>
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
