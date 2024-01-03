export const SKILLS = [
    { title: "Vue", level: 3 },
    { title: "HTML", level: 3 },
    { title: "CSS", level: 3 },
    { title: "Node", level: 3 },
    { title: "Tailwind", level: 2 },
    { title: "React", level: 1 },
    { title: "Git", level: 2 },
    { title: "REST api", level: 2 },
    { title: "Python", level: 3 },
    { title: "Figma", level: 2 },
    { title: "AWS", level: 1 },
  ];
  export const EXPERIENCE_LIST = [
    // {
    //   timeLine: "2022 - now",
    //   location: "USA",
    //   company: "#vanlife",
    //   title: "doing my own thing",
    //   info: "working on my portfolio, learning react and looking for a job!",
    //   imgSrc: "public/vanlife-2.jpg",
    //   iconName: "shuttle-van-solid",
    // },
    {
      timeLine: "2020 - 2022",
      location: "Tel Aviv, Israel",
      company: "Spetz / Paradox",
      title: "Full Stack developer",
      info: "I started as employee number 7 at Spetz, a small start up in tel aviv. A year later, we were acquired by Paradox! ",
      imgSrc: "public/paradox.jpeg",
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