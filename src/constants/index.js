import {
  parkhotel,
  missyrockz,
  schlaf,
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
    percent: 79,
    color: "#8993be",
  },
  {
    name: "Laravel",
    percent: 71,
    color: "#fb503b",
  },
  {
    name: "JavaScript",
    percent: 65,
    color: "#f0db4f",
  },
  {
    name: "Vue 2/3",
    percent: 62,
    color: "#42b883",
  },
  {
    name: "React JS",
    percent: 35,
    color: "#1c84bc",
  },
  {
    name: "Tailwind CSS",
    percent: 57,
    color: "#71c4f5",
  },
];

const experiences = [
  {
    title: "Web-Entwickler",
    company_name: "Parkhotel Dresden",
    icon: parkhotel,
    iconBg: "#E6DEDD",
    date: "Juni 2021 - August 2021",
    points: [
      "Entwicklung von Wordpress Plugins",
      "Aufbau von Wordpress Webseiten",
      "Planung von neuen Projekten"
    ],
  },
  {
    title: "Web-Entwickler",
    company_name: "MissyRockz",
    icon: missyrockz,
    iconBg: "#E6DEDD",
    date: "September 2021 - Juli 2022",
    points: [
      "Weiterentwicklung des Online-Shops auf Basis von Plentymarkets.",
      "Koordinierung mit externen Dienstleistern und Entwicklern.",
      "Entwicklung einer Headless Web-App auf Basis von Laravel und Vue zur Anbindung von externen Services mit Aufbau eines Zero Downtime Systems.",
      "Entwicklung der Web-App mit REST Services an Plentymarkets und Mailchimp mit eigener Auswertungs Matrix",
    ],
  },
  {
    title: "Krankheitsbedingte Auszeit",
    company_name: "",
    icon: schlaf,
    iconBg: "#E6DEDD",
    date: "September 2022 - Bis jetzt",
    points: [
      "Entwicklung eines Headless CMS Systems mit Laravel und Jetstream",
      "Aufbau einer Webseite in React",
      "Weiterbildung in Vue Composition API",
    ],
  },
];

export { technologies, experiences };