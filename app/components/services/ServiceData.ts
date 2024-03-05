import { IconType } from "react-icons";
import { AiOutlineAntDesign, AiOutlineApi } from "react-icons/ai";
import { FaServer } from "react-icons/fa";
import { MdDeveloperMode } from "react-icons/md";
import { RiComputerLine } from "react-icons/ri";

export interface Service {
  Icon: IconType;
  title: string;
  about: string;
}

export const services: Service[] = [
  {
    Icon: RiComputerLine,
    title: "Frontend Development",
    about:
      "I can build scalable SPA using <b> HTML</b>,<b>CSS</b><b> javascript</b>,<b>TypeScript</b>   and <b>React.js/Next.js</b> ",
  },
  {
    Icon: FaServer,
    title: "Backend  Development",
    about:
      "handle database, server, api using <b>Entity Framework Core </b> & other popular frameworks",
  },
  {
    Icon: AiOutlineApi,
    title: "API Development",
    about: "I can develop robust REST API using <b>.Net Entity </b>  & <b>Node API</b> ",
  },
  {
    Icon: MdDeveloperMode,
    title: "Competitive Coder",
    about: "a daily problem solver in <b>CodeWars</b>  and <b>Leet Code</b> ",
  },
  {
    Icon: AiOutlineAntDesign,
    title: "UI/UX design",
    about: "lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
  },
  {
    Icon: RiComputerLine,
    title: "Whatever",
    about: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis minima autem!",
  },
];
