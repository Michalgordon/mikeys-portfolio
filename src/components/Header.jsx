import { NavLink } from "react-router-dom";

const Header = () => {
  const pages = [
    { title: "Home", path: "" },
    { title: "About Me", path: "about" },
    { title: "My Projects", path: "projects" },
    { title: "Contact me", path: "contact" },
  ];

  return (
    <nav className="w-full flex items-center px-10  min-h-[80px] border-b-2 border-russian-blue shadow-xl">
      {pages.map((page, index) => (
        <NavLink
          key={index}
          className={`uppercase font-medium text-base border-r-2 border-russian-blue px-6 hover:[text-shadow:_1px_1px_0_rgb(154_174_187_/_50%)] last:border-none 
          ${({ isActive }) => (isActive ? `active` : ``)}
          ${index == 0 ? "mr-auto border-none" : ""} `}
          to={page.path}
        >
          {page.title}
        </NavLink>
      ))}
    </nav>
  );
};

export default Header;
