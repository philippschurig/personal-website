import {
  javascript,
  html,
  reactjs,
  tailwind,
  thinksurance,
  missyrockz,
  meta,
  shopify,
} from "../assets";

export const navLinks = [
  {
    id: "home",
    title: "Startseite",
  },
  {
    id: "about",
    title: "Über mich",
  },
  {
    id: "experience",
    title: "Erfahrung",
  },
  {
    id: "skills",
    title: "Skills",
  },
  {
    id: "contact",
    title: "Kontakt",
  },
];

const technologies = [
  {
    name: "PHP 7/8",
    icon: html,
    percent: 79,
    color: "#8993be",
  },
  {
    name: "Laravel",
    icon: html,
    percent: 71,
    color: "#fb503b",
  },
  {
    name: "JavaScript",
    icon: javascript,
    percent: 65,
    color: "#f0db4f",
  },
  {
    name: "Vue 2/3",
    icon: reactjs,
    percent: 62,
    color: "#42b883",
  },
  {
    name: "React JS",
    icon: reactjs,
    percent: 35,
    color: "#1c84bc",
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
    percent: 57,
    color: "#71c4f5",
  },
];

const experiences = [
  {
    title: "Junior PHP-Entwickler",
    company_name: "Thinksurance GmbH",
    icon: thinksurance,
    iconBg: "#E6DEDD",
    date: "März 2019 - August 2019",
    points: [
      "Weiterentwicklung der REST Api für die Berechnungen der Versicherungen auf Basis von Symfony",
      "Unit-Tests von neuen Versicherungsrechnern",
      "REST-API erweitern für verschiedene Use-Cases"
    ],
  },
  {
    title: "Web-Entwickler",
    company_name: "MissyRockz",
    icon: missyrockz,
    iconBg: "#E6DEDD",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Web Developer",
    company_name: "Shopify",
    icon: shopify,
    iconBg: "#383E56",
    date: "Jan 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Full stack Developer",
    company_name: "Meta",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2023 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export { technologies, experiences };