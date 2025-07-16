export const Bio = {
  name: "Shresthkumar Karnani",
  roles: [
    "Backend Developer",
    "Data Engineer",
    "AI + Automation Enthusiast"
  ],
  description:
    "I am a motivated and versatile individual, always eager to take on new challenges. With a passion for learning I am dedicated to delivering high-quality results. With a positive attitude and a growth mindset, I am ready to make a meaningful contribution and achieve great things.",
  github: "https://github.com/2006-sk",
  resume:
    "https://drive.google.com/file/d/1KCkWRRND_wrZBHF8AGyfNDjB1PKGciUF/view?usp=sharing",
  linkedin: "https://www.linkedin.com/in/shresthkumarkarnani/",
  insta: "https://www.instagram.com/shresth5096/"
};

export const skills = [
  {
    title: "Languages",
    skills: [
      { name: "Python" },
      { name: "Java" },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "REST API" },
      { name: "OAuth 2.0" },
      { name: "Cron Jobs" },
      { name: "WebSockets" },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MongoDB" },
      { name: "PostgreSQL" },
    ],
  },
  {
    title: "AI & Automation",
    skills: [
      { name: "OpenAI API" },
      { name: "Puppeteer" },
    ],
  },
  {
    title: "Data Science",
    skills: [
      { name: "Pandas" },
      { name: "Matplotlib" },
      { name: "Data Analysis" },
      { name: "Data Visualization" },
    ],
  },
  {
    title: "Tools & Platforms",
    skills: [
      { name: "Git" },
      { name: "GitHub" },
      { name: "VS Code" },
      { name: "Postman" },
    ],
  },
];

export const experiences = [
  {
    id: 1,
    img: "", // optional logo
    role: "Software Engineering Intern (Backend & Data)",
    company: "TaxNodes (via ML First Technologies)",
    date: "May 2023 - Aug 2024",
    desc: "Enhanced income and document verification workflows by integrating third-party APIs. Developed backend routes and dashboards for taxation record analysis using Node.js, Express, and Python.",
    skills: [
      "Node.js",
      "Express.js",
      "API Integration",
      "Python",
      "MongoDB",
      "Data Visualization",
    ],
    doc: "",
  },
  {
    id: 2,
    img: "",
    role: "Data Science Intern",
    company: "Infibeam Avenues Ltd",
    date: "Jun 2023 - Oct 2023",
    desc: "Cleaned, analyzed, and visualized event data to optimize planning and engagement. Delivered actionable insights using Pandas and Matplotlib, improving operational workflows.",
    skills: [
      "Python",
      "Pandas",
      "Data Analysis",
      "Matplotlib",
      "Insight Reporting",
    ],
    doc: "",
  },
];



export const projects = [
  {
    id: 1,
    title: "LoopLog",
    date: "Jul 2025",
    description:
      "AI-powered time logger that auto-tags user activity using OpenAI and cron-based tracking. Summarizes work sessions and generates weekly reports.",
    image: "", // Optional: add path to image if available
    tags: ["OpenAI", "Node.js", "MongoDB", "Cron Jobs", "Automation"],
    category: "web app",
    github: "https://github.com/shresthkarnani/looplog", // replace with actual if needed
    webapp: "https://looplog.app", // placeholder — update as needed
  },
  {
    id: 2,
    title: "BullionBot",
    date: "Jul 2025",
    description:
      "A live bullion price tracker and trading assistant. Fetches real-time gold/silver prices, stores trends, and assists in market analysis.",
    image: "",
    tags: ["Node.js", "Express", "APIs", "WebSocket", "MongoDB"],
    category: "web app",
    github: "https://github.com/shresthkarnani/bullionbot", // replace with actual
    webapp: "https://bullionbot.app", // placeholder — update as needed
  },
];

export const education = [
  {
    id: 1,
    img: "", // optional
    school: "San José State University",
    date: "Aug 2023 – May 2027 (expected)",
    grade: "",
    desc: "Pursuing B.S. in Computer Science with a focus on backend systems, automation, and AI applications.",
    degree: "Bachelor of Science, Computer Science",
  },
];
export const TimeLineData = [
  { year: 2023, text: "Started internships at TaxNodes and Infibeam Avenues" },
  { year: 2025, text: "Built and launched LoopLog and BullionBot" },
  { year: 2025, text: "Currently pursuing B.S. Computer Science at SJSU" },
];