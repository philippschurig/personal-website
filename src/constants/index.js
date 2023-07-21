import {
  parkhotel,
  missyrockz,
  schlaf,
  php,
  javascript,
  css,
  laravel,
  tailwindcss,
  vue,
  react
} from "../assets"

const navLinks = [
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
]

const aboutMe = {
  description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
  name: "Philipp Schurig",
  age: "30",
  email: "contact@philippschurig.de"
}

const socialMedia = [
  {
    name: "Twitter",
    icon: "fa-twitter",
    link: "https://twitter.com/philipp_schurig",
  },
  {
    name: "Instagram",
    icon: "fa-instagram",
    link: "https://www.instagram.com/philipp_schurig/",
  },
  {
    name: "Xing",
    icon: "fa-xing",
    link: "https://www.xing.com/profile/Philipp_Schurig",
  },
  {
    name: "LinkedIn",
    icon: "fa-linkedin",
    link: "https://www.linkedin.com/in/pschurig/",
  },
  {
    name: "Github",
    icon: "fa-github",
    link: "https://github.com/philippschurig",
  },
]

const technologies = [
  {
    name: "PHP",
    logo: php,
    color: "#8993be",
  },
  {
    name: "Javascript",
    logo: javascript,
    color: "#fb503b",
  },
  {
    name: "CSS",
    logo: css,
    color: "#f0db4f",
  },
  {
    name: "Laravel",
    logo: laravel,
    color: "#42b883",
  },
  {
    name: "Tailwind CSS",
    logo: tailwindcss,
    color: "#1c84bc",
  },
  {
    name: "Vue",
    logo: vue,
    color: "#71c4f5",
  },
  {
    name: "React",
    logo: react,
    color: "#71c4f5",
  },
]

const experiences = [
  {
    title: "Krankheitsbedingte Auszeit",
    company_name: "",
    icon: schlaf,
    iconBg: "#E6DEDD",
    date: "September 2022",
    points: [
      "Entwicklung eines Headless CMS Systems mit Laravel und Jetstream",
      "Aufbau einer Webseite in React",
      "Weiterbildung in Vue Composition API",
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
]

export {
  navLinks,
  aboutMe,
  experiences,
  technologies,
  socialMedia
}