const Header = () => {
  const pages = [
    { title: "About Me", path: "/about" },
    { title: "My Experience", path: "/experience" },
    { title: "My Projects", path: "/projects" },
    { title: "Contact me", path: "/contact" },
  ];

  return (
    <ul className="w-full flex justify-center items-center h-24 border-b-2 border-teal shadow-xl">
      {pages.map((page, index) => (
        <li
          key={index}
          className="uppercase font-medium text-base border-r-2 border-teal px-6 hover:font-semibold last:border-none"
        >
          <a href={page.path}> {page.title}</a>
        </li>
      ))}
    </ul>
  );
};

export default Header;
