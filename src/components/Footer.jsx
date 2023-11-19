const Footer = () => {
  const links = [{ title: "LinkedIn" }, { title: "Git" }, { title: "Resume" }];

  return (
    <div className="w-full flex justify-center items-center h-24 border-t-2 border-teal shadow-[25px_0_50px_-12px_rgba(0,0,0,0.3)]">
      {links.map((footerItem, index) => (
        <button
          key={index}
          className="flex justify-center items-center uppercase font-medium text-base border-r-2 border-teal px-6 hover:font-semibold last:border-none"
        >
          {footerItem.title}
        </button>
      ))}{" "}
    </div>
  );
};

export default Footer;
