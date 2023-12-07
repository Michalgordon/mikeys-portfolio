import { Icon } from "../components";

const Footer = () => {
  const links = [
    {
      title: "LinkedIn",
      iconName: "linkedin",
      href: "https://www.linkedin.com/in/michalgordon/",
      download: false,
    },
    {
      title: "GitHub",
      iconName: "github",
      href: "https://github.com/Michalgordon",
      download: false,
    },
    {
      title: "Resume",
      iconName: "file-download-solid",
      href: "public/Resume - Michal Gordon.pdf",
      download: true,
    },
  ];

  return (
    <div className="w-full flex justify-center items-center min-h-[96px] border-t-2 border-teal shadow-[25px_0_50px_-12px_rgba(0,0,0,0.3)]">
      {links.map((footerItem, index) => (
        <a
          key={index}
          href={footerItem.href}
          target="_blank"
          rel="noopener noreferrer"
          download={footerItem.download}
          className="group flex flex-col justify-center items-center uppercase text-sm border-r-2 border-teal cursor-pointer px-6 hover:[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] last:border-none"
        >
          <Icon
            name={footerItem.iconName}
            className="w-8 group-hover:[filter:drop-shadow(3px_5px_2px_rgb(0_0_0_/_0.2))]"
          ></Icon>
          <h1>{footerItem.title}</h1>
        </a>
      ))}
    </div>
  );
};

export default Footer;
