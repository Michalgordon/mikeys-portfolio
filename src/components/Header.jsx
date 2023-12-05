import { Link } from "react-router-dom";

import Icon from "./Icon";
const Header = () => {
  const pages = [
    { title: "About Me", path: "about" },
    { title: "My Experience", path: "experience" },
    { title: "My Projects", path: "projects" },
    { title: "Contact me", path: "contact" },
  ];

  return (
    <ul className="w-full flex items-center px-10  min-h-[96px] border-b-2 border-teal shadow-xl">
      <Link className="mr-auto" to="/">
        <Icon className="w-8 h-8" name="home-solid"></Icon>
      </Link>
      {pages.map((page, index) => (
        <Link
          key={index}
          className="uppercase font-medium text-base border-r-2 border-teal px-6 hover:[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] last:border-none"
          to={page.path}
        >
          {page.title}
        </Link>
      ))}
    </ul>
  );
};

export default Header;
