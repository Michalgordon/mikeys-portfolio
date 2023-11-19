const Header = () => {
  const pages = [
    { title: "About Me" },
    { title: "My Experience" },
    { title: "My Projects" },
    { title: "Contact me" },
  ];

  return (
    <div className="w-full flex justify-center items-center h-24 border-b-2 border-teal shadow-xl">
      {pages.map((footerItem, index) => (
        <button
          key={index}
          className="uppercase font-medium text-base border-r-2 border-teal px-6 hover:font-semibold last:border-none"
        >
          {footerItem.title}
        </button>
      ))}
    </div>
  );
};

export default Header;
