import { NavLink } from "react-router-dom";

import Icon from "./Icon";
const Header = () => {
  const pages = [
    { title: "About Me", path: "about" },
    { title: "My Projects", path: "projects" },
    { title: "Contact me", path: "contact" },
  ];

  return (
    <nav className="w-full flex items-center px-10  min-h-[80px] border-b-2 border-russian-blue shadow-xl">
      <NavLink
        className={` mr-auto uppercase font-medium text-base  px-6 hover:[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]`}
        to=""
      >
        {/* <Icon
          className={`w-8 h-8 hover:[filter:drop-shadow(3px_5px_2px_rgb(0_0_0_/_0.2))]`}
          name="home-solid"
        ></Icon> */}
        Home
      </NavLink>
      {pages.map((page, index) => (
        <NavLink
          key={index}
          className={`uppercase font-medium text-base border-r-2 border-russian-blue px-6 hover:[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] last:border-none ${({
            isActive,
          }) => (isActive ? "active" : "")}`}
          to={page.path}
        >
          {page.title}
        </NavLink>
      ))}
    </nav>
  );
};

export default Header;
