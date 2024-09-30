import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Ethical Hacker",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Full Stack Developer & Ethical Hacker",
    company_name: "Freelance",
    icon: starbucks,
    iconBg: "#383E56",
    date: "June 2021 - Present",
    points: [
      "Developing and maintaining web applications using Next.js, React, and Tailwind CSS.",
      "Specializing in ethical hacking and penetration testing to ensure security in web and system applications.",
      "Collaborating with clients to design secure, scalable, and efficient solutions for their business needs.",
      "Conducting vulnerability assessments and implementing cybersecurity measures to protect client systems.",
    ],
  },
  {
    title: "Ethical Hacker",
    company_name: "Freelance",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "Jan 2022 - Present",
    points: [
      "Performing penetration tests to identify and resolve vulnerabilities in web and network systems.",
      "Ensuring compliance with security standards and protecting sensitive data from unauthorized access.",
      "Collaborating with legal and technical teams to balance cybersecurity and regulatory requirements.",
      "Writing detailed reports outlining security issues and providing recommendations for improvement.",
    ],
  },
  {
    title: "Full Stack Web Developer",
    company_name: "Freelance",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2023 - Present",
    points: [
      "Building user-friendly, responsive web applications using modern technologies like React and Next.js.",
      "Collaborating with cross-functional teams to implement end-to-end solutions that meet client needs.",
      "Ensuring cross-browser compatibility and optimal performance for all web applications.",
      "Conducting code reviews and providing guidance to junior developers on best practices.",
    ],
  },
  {
    title: "Law Student",
    company_name: "University",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "July 2023 - Present",
    points: [
      "Studying the intersection of law and technology, with a focus on cybersecurity regulations.",
      "Researching legal frameworks governing data privacy, intellectual property, and ethical hacking.",
      "Developing a deep understanding of how law can support ethical technological innovations.",
      "Applying legal principles to real-world tech scenarios, ensuring compliance and security.",
    ],
  },
];


const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as this, but Soulstar proved me wrong.",
    name: "Tony Stark",
    designation: "Leader",
    company: "Stark Group",
    image: "https://i.pinimg.com/originals/65/86/29/658629741c142895ebc98ee925198d3d.jpg",
  },
  {
    testimonial:
      "236 Machines Needs to be Pwned ? Youre the Right Person Bro",
    name: "xAditya",
    designation: "TeamHackeZ",
    company: "Member",
    image: "https://img.freepik.com/premium-vector/hacker-mascot-esport-logo-design-premium-vector_135814-152.jpg",
  },
  {
    testimonial:
      "The Chilling Effect of Soulstar's Code is Unmatched. All it takes for him is 8 Hours Job !",
    name: "Lisa Wang",
    designation: "Alpha User",
    company: "Team Lulzec IN",
    image: "https://pbs.twimg.com/profile_images/966707805137780736/BCwcBa9V_400x400.jpg",
  },
];

const projects = [
  {
    name: "Self Drive Storage",
    description:
      "Developed a secure, scalable self-drive storage platform for seamless file management and real-time access.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Web3 Card Game",
    description:
      "An Self-Built Web3 Card Game With Stunning  UI/UX, Built With React, Next.js, Tailwind CSS, and Solidity. Check it out Live and Enjoy the First Web3 Card Game on MetaVerse !.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "AI ImageX",
    description:
      "Yet Another Ai Image Generator and Editor with advanced feautes built using NextJs. Powered By Open AI Api and Cloudinary.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
