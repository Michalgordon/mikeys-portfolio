import { Icon } from "../components";

const Footer = () => {
  const links = [
    { title: "LinkedIn", iconName: "linkedin" },
    { title: "GitHub", iconName: "github" },
    { title: "Resume", iconName: "file-download-solid" },
  ];

  return (
    <div className="w-full flex justify-center items-center h-24 border-t-2 border-teal shadow-[25px_0_50px_-12px_rgba(0,0,0,0.3)]">
      {links.map((footerItem, index) => (
        <div
          key={index}
          className="flex flex-col justify-center items-center uppercase text-sm border-r-2 border-teal cursor-pointer px-6 hover:font-semibold last:border-none"
        >
          <Icon name={footerItem.iconName} className="w-8"></Icon>
          <a>{footerItem.title}</a>
        </div>
      ))}
    </div>
  );
};

export default Footer;
