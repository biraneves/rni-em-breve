import {
  faHouse,
  faPeopleGroup,
  faListCheck,
  faLocationDot,
  faPeopleRoof,
  faMessage,
  faEnvelopeOpen,
} from "@fortawesome/free-solid-svg-icons";

const siteSections = [
  {
    title: "Início",
    url: "#banner",
    icon: faHouse,
  },
  {
    title: "Quem somos",
    url: "#about-us",
    icon: faPeopleGroup,
  },
  {
    title: "Serviços",
    url: "#services",
    icon: faListCheck,
  },
  {
    title: "Molise",
    url: "#molise",
    icon: faLocationDot,
  },
  {
    title: "Acomodações",
    url: "#accommodations",
    icon: faPeopleRoof,
  },
  {
    title: "Depoimentos",
    url: "#testimonials",
    icon: faMessage,
  },
  {
    title: "Contato",
    url: "#contact",
    icon: faEnvelopeOpen,
  },
];

export default siteSections;
