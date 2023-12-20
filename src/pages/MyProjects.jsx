import { ProjectCard } from "../components";
const PROJECTS = [
  {
    title: "Personal Portfolio",
    imgSrc: "public/personal-website.png",
    links: [
      {
        title: "Github",
        iconName: "github",
        href: "https://github.com/Michalgordon/mikeys-portfolio",
        download: false,
      },
    ],
    skills: [
      { iconName: "react" },
      { iconName: "js-square" },
      { iconName: "html5" },
      { iconName: "css3-alt" },
      { iconName: "tailwindcss" },
    ],
    info: "My personal website that I designed and implemented",
  },
  {
    title: "botanica",
    imgSrc: "public/botanica.png",
    links: [
      {
        title: "GitHub",
        iconName: "github",
        href: "https://github.com/Michalgordon/Botanica",
        download: false,
      },
      {
        title: "Website",
        iconName: "external-link-alt-solid",
        href: "https://amazing-hotteok-99b058.netlify.app/",
        download: false,
      },
      {
        title: "Figma",
        iconName: "figma",
        href: "https://www.figma.com/file/aKhZMcWnrJaaVVJ7iCdm2D/Botanica---Confrence?type=design&mode=design&t=1cxyzr8mr8Z1fHlp-0",
        download: false,
      },
    ],
    skills: [
      { iconName: "react" },
      { iconName: "js-square" },
      { iconName: "html5" },
      { iconName: "css3-alt" },
      { iconName: "tailwindcss" },
    ],
    info: "A responsive website I developed using a friend's design!",
  },
  {
    title: "WhatsApp Extension",
    imgSrc: "public/whatsapp-extension.png",
    links: [
      {
        title: "Geektime",
        iconName: "external-link-alt-solid",
        href: "https://www.geektime.co.il/chrome-whatsapp-messages/?fbclid=IwAR01mMmlvUkjOMvnK0bSllA6PLHkm2dxmXuLoe3axdjPR-tBpmLqoLPOpKs",
        download: false,
      },
      {
        title: "Store",
        iconName: "chrome",
        href: "https://chromewebstore.google.com/detail/olivia-for-recruiters/ldcjdglgbpfldnfebjkejpppfiedkkec?hl=en-GB",
        download: false,
      },
    ],
    skills: [
      { iconName: "js-square" },
      { iconName: "extension-svgrepo-com" },
      { iconName: "whatsapp" },
    ],
    info: "A chrome extension using WhatsApp API written about in Geektime magazine!",
  },
];
const MyProjects = () => {
  return (
    <div className="flex flex-col flex-grow gap-16 px-10 py-16">
      <div className="flex pl-10 justify-start">
        <h1 className="text-5xl font-thin">My Projects</h1>
      </div>
      <div className="flex justify-center gap-8">
        {PROJECTS.map((project, index) => (
          <ProjectCard key={index} {...project}></ProjectCard>
        ))}
      </div>
    </div>
  );
};

//TODO add chrome extension here
// When I first started at Paradox (formerly Spetz), I was put in charge
// of a small side project that turned out to be a big deal. I designed
// and developed a chrome extension using WhatsApp API that was
// downloaded by thousands of users, written about in Geektime Magazine
// and became a lead generating tool for the company. Not only was this
// the first project I was in charge of, it was my first project EVER
// outside of school. The experience proved to both me and the company
// that I can turn an idea into a product, learn as I code and solve
// problems on the go.

export default MyProjects;
