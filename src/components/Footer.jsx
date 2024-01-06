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
      href: "/Resume - Michal Gordon.pdf",
      download: true,
    },
  ];

  return (
    <div className="w-full flex flex-col justify-center items-center min-h-[80px] border-t-2 border-russian-blue shadow-[25px_0_50px_-12px_rgba(0,0,0,0.3)]">
      <div className="flex">
        {links.map((footerItem, index) => (
          <a
            key={index}
            href={footerItem.href}
            target="_blank"
            rel="noopener noreferrer"
            download={footerItem.download}
            className="group flex flex-col justify-center items-center uppercase text-xs border-r-2 border-russian-blue cursor-pointer px-6 hover:[text-shadow:_0_1px_0_rgb(0_0_0_/_40%)] last:border-none"
          >
            <Icon
              name={footerItem.iconName}
              className="w-6 group-hover:[filter:drop-shadow(3px_5px_2px_rgb(0_0_0_/_0.2))]"
            ></Icon>
            <h1>{footerItem.title}</h1>
          </a>
        ))}
      </div>
      <div className="h-0 flex text-[10px] items-center ml-auto pr-3 gap-[2px]">
        <p> Michal Gordon </p>
        <Icon name="copyright" className={"w-4"}></Icon> <p> 2023</p>
      </div>
    </div>
  );
};

export default Footer;
