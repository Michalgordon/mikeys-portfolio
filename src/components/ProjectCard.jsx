import { Icon } from "../components";
import PropTypes from "prop-types";

const ProjectCard = ({ title, info, links, imgSrc }) => {
  return (
    <div className="flex flex-col w-80 border-teal border-2 rounded-md p-4 pb-2 justify-center items-center gap-4 bg-white shadow-md ">
      <h1 className=" text-xl uppercase font-thin ">- {title} -</h1>
      <div
        style={{ "--image-url": `url(${imgSrc})` }}
        className={`w-[316px] -mx-4 h-20 bg-[image:var(--image-url)] bg-cover border-y-2 border-teal `}
      ></div>
      <p className="flex text-center text-sm font-thin px-2 h-16 items-center">
        {info}
      </p>
      <ul className="w-full flex justify-center items-center">
        {links.map((footerItem, index) => (
          <a
            key={index}
            href={footerItem.href}
            target="_blank"
            rel="noopener noreferrer"
            download={footerItem.download}
            className="group flex flex-col justify-center items-center uppercase text-xs border-r-2 border-teal cursor-pointer px-6 hover:[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] last:border-none"
          >
            <Icon
              name={footerItem.iconName}
              className="w-5 group-hover:[filter:drop-shadow(3px_5px_2px_rgb(0_0_0_/_0.2))]"
            ></Icon>
            <h1>{footerItem.title}</h1>
          </a>
        ))}
      </ul>
    </div>
  );
};

ProjectCard.propTypes = {
  title: PropTypes.string,
  info: PropTypes.string,
  links: PropTypes.array,
  imgSrc: PropTypes.string,
};
export default ProjectCard;
