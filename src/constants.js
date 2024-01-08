export const SKILLS = [
    { title: "Vue", iconName: "vuejs", info: "my comfort zone!" },
    { title: "React", iconName: "react", info: "Can't wait to dive deeper!" },
    { title: "HTML", iconName: "html5" ,info: "A major building block" },
    { title: "CSS", iconName: "css3-alt" , info: "I love making things look beautiful"},
    { title: "JavaScript", iconName: "js-square", info: "I mean... what can I say?" },
    { title: "Node", iconName: "node-js" , info: "Backend and frontend services" },
    { title: "REST api", iconName: "cog-solid", info: "implemented and consumed" },
    { title: "Python", iconName: "python", info: "Backend, automation, and many school projects" },
    { title: "AWS", iconName: "aws", info: "DynamoDB, S3, EC2 and AWS Lambda" },
    { title: "Jest", iconName: "jest-js", info: "Investing in testing" },
    { title: "GitHub", iconName: "github", info: "as part of a team and for my own projects" },
    { title: "Figma", iconName: "figma", info: "where UI components are born" },
    { title: "Jira", iconName: "jira", info: "for an agile team that moves FAST" },
    { title: "Tailwind", iconName: "tailwindcss", info: "Let's go Utility classes!" },
    { title: "Framer Motion", iconName: "framer-logo", info: "Check out my website's page transitions!" },
    { title: "Make", iconName: "framer-logo", info: "Automated complex workflows" },
  ];
  export const SOFT_SKILLS =[
    { title: "Part of the ship, part of the crew", iconName: "ship-solid", info: "I love being a part of something, and thrive when i work with others" },

  ]
  export const RANDOM_FACTS = [
    {title: "I drink black tea with milk and honey", iconName: "mug-hot-solid"},
    {title: "Cilantro is my favorite", iconName: "pagelines"},
    {title: "Nature is my happy place", iconName:"mountain-solid"},
    {title: "I'm a loud sneezer", iconName: "volume-up-solid"},
    {title: "Spaceships, mag-boots and anything sci-fi are my jam" , iconName: "robot-solid" },
    {title: "I always eat too many cookies", iconName: "cookie-bite-solid"},
    {title: "Going to a museum is a fun activity for me", iconName: "portrait-solid"},
    {title: "My Phone battery is always low", iconName: "battery-empty-solid"},
    {title: "I love taking baths", iconName: "bath-solid"},


  ]
  export const EXPERIENCE_LIST = [
    {
      timeLine: "2023 - present",
      location: "Remote",
      company: "SafeHeart",
      href: "https://www.safeheartil.com/en",
      title: "Volunteering",
      info: "A web designer for a cooperative initiative between “Atidim”, Google and Wix for the development of peripheral businesses in the Jerusalem area.",
      imgSrc: "",
      iconName: "heartbeat-solid",
    },
    {
      timeLine: "2020 - 2022",
      location: "Tel Aviv, Israel",
      company: "Spetz / Paradox",
      href: "https://www.paradox.ai/",
      title: "Full Stack developer",
      info: "I started as employee number 7 at Spetz, a small start up in tel aviv. A year later, we were acquired by Paradox! ",
      imgSrc: "paradox.jpeg",
      iconName: "laptop-code-solid",
    },
    {
      timeLine: "2019 - 2020",
      location: "Jerusalem, Israel",
      company: "The Digital starter",
      href: "https://www.linkedin.com/company/starter-digital-israel",
      title: "Volunteering",
      info: "A web designer for a cooperative initiative between “Atidim”, Google and Wix for the development of peripheral businesses in the Jerusalem area.",
      imgSrc: "",
      iconName: "wix",
    },
    {
      timeLine: "2017 - 2020",
      location: "Jerusalem, Israel",
      company: "Hebrew University",
      href: "https://matar.cs.huji.ac.il/he/",
      title: "Internet and Society (B.A.)",
      info: "Alumni of the pioneering class of the honors program: ‘Internet and Society,’ which combined computer science with social sciences.",
      imgSrc: "",
      iconName: "scroll-solid",
    },
    {
      timeLine: "2010 - 2013",
      location: "IDF",
      company: "Air Defense command",
      title: "Combat Solider",
      info: "",
      iconName: "rocket-solid",
    },
    {
      timeLine: "2004 - 2010",
      location: "Kibutz Ein Shemer, Israel",
      company: "Mevo'ot Iron",
      href: "https://www.mevoot-eron.com/",
      title: "high school",
      info: "school was a blast! I majored in computer science and film, and was on the volleyball team",
      iconName: "book-solid",
    },
  ];
  export const PROJECTS = [
    {
      title: "Personal Portfolio",
      imgSrc: "/personal-website.png",
      links: [
        {
          title: "Github",
          iconName: "github",
          href: "https://github.com/Michalgordon/mikeys-portfolio",
          download: false,
        },
      ],
      skills: [
        { iconName: "react", tooltip: "react" },
        { iconName: "js-square", tooltip: "Javascript"  },
        { iconName: "html5", tooltip: "HTML" },
        { iconName: "css3-alt", tooltip: "CSS" },
        {iconName: "framer-logo", tooltip: "Framer Motion"},
        { iconName: "tailwindcss", tooltip: "tailwind" },
      ],
      info: "My personal website that I designed and implemented",
    },
    {
      title: "botanica",
      imgSrc: "botanica.png",
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
        { iconName: "react", tooltip: "react" },
        { iconName: "js-square", tooltip: "Javascript"  },
        { iconName: "html5", tooltip: "HTML" },
        { iconName: "css3-alt", tooltip: "CSS" },
        { iconName: "tailwindcss", tooltip: "tailwind" },
      ],
      info: "A responsive website I developed using a friend's design!",
    },
    {
      title: "WhatsApp Extension",
      imgSrc: "/whatsapp-extension.png",
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
        { iconName: "js-square", tooltip: "Javascript"  },
        { iconName: "puzzle-piece-solid", tooltip: "Chrome Extension" },
        { iconName: "whatsapp", tooltip: "Whatsapp API" },
      ],
      info: "A chrome extension using WhatsApp API written about in Geektime magazine!",
    },
  ];