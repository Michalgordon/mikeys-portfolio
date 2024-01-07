export const SKILLS = [
    { title: "Vue", iconName: "vuejs", info: 'my comfort zone!' },
    { title: "React", iconName: "react", info: "Cant wait to dive deeper!" },
    { title: "HTML", iconName: "html5" ,info: 'A major building block' },
    { title: "CSS", iconName: "css3-alt" , info: 'Love making things look beautiful'},
    { title: "JavaScript", iconName: "js-square", info: "I mean...what can i say?" },
    { title: "Node", iconName: "node-js" , info: "For backend & frontend services" },
    { title: "REST api", iconName: "cog-solid", info: "implemented and consumed" },
    { title: "Python", iconName: "python", info: 'For backend, automation, and many school projects' },
    { title: "AWS", iconName: "aws", info: "DynamoDB, S3, EC2 and AWS Lambda" },
    { title: "Jest", iconName: "jest-js", info: "Investing in testing" },
    { title: "GitHub", iconName: "github", info: "as a part of a team & individually" },
    { title: "Figma", iconName: "figma", info: 'where UI components are born' },
    { title: "Jira", iconName: "jira", info: 'As a part of an agile team that moves FAST' },
    { title: "Tailwind", iconName: "tailwindcss", info: 'Lets go Utility classes!' },
    { title: "Framer Motion", iconName: "framer-logo", info: "Check out my websites page transitions!" },
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
    // {
    //   timeLine: "2022 - now",
    //   location: "USA",
    //   company: "#vanlife",
    //   title: "doing my own thing",
    //   info: "working on my portfolio, learning react and looking for a job!",
    //   imgSrc: "/vanlife-2.jpg",
    //   iconName: "shuttle-van-solid",
    // },
    {
      timeLine: "2023 - present",
      location: "Remote",
      company: "SafeHeart",
      title: "Volunteering",
      info: "A web designer for a cooperative initiative between “Atidim”, Google and Wix for the development of peripheral businesses in the Jerusalem area.",
      imgSrc: "",
      iconName: "heartbeat-solid",
    },
    {
      timeLine: "2020 - 2022",
      location: "Tel Aviv, Israel",
      company: "Spetz / Paradox",
      title: "Full Stack developer",
      info: "I started as employee number 7 at Spetz, a small start up in tel aviv. A year later, we were acquired by Paradox! ",
      imgSrc: "paradox.jpeg",
      iconName: "laptop-code-solid",
    },
    {
      timeLine: "2019 - 2020",
      location: "Jerusalem, Israel",
      company: "The Digital starter",
      title: "Volunteering",
      info: "A web designer for a cooperative initiative between “Atidim”, Google and Wix for the development of peripheral businesses in the Jerusalem area.",
      imgSrc: "",
      iconName: "wix",
    },
    {
      timeLine: "2017 - 2020",
      location: "Jerusalem, Israel",
      company: "Hebrew University",
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
      title: "high school",
      info: "school was a blast! I majored in computer science and film, and was on the volleyball team",
      iconName: "book-solid",
    },
  ];
  export const EXPERIENCE_BLURB = {
    title: "what i've been up to",
    timeLine: "2022 - PRESENT",
    location: "USA",
    iconName: "shuttle-van-solid",
    content: [
    `I'm a nomadic full stack developer with over 3 years of experience. I used to work for a successful startup in Tel Aviv but quit my job in 2022 to try out a different lifestyle in the States. My partner and I live in a van and we're slowly making our way around the country, trying to climb as many rocks as we can.`,
    `My experience in a small startup made me a fast and independent learner. I gained a lot of experience with Vue.js, JavaScript, CSS and HTML. Since moving to the States, I've turned my attention to new frameworks, like React, that will make me a stronger and more well-rounded developer.` , 
    `Learning on my own and living on the road has been awesome but I'm ready for the next step in my career and look forward to working on cool products and being part of a team again!`, 
  ]}
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
        { iconName: "css3-alt", tooltip: "css" },
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
        { iconName: "css3-alt", tooltip: "css" },
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