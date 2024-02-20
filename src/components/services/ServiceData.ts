import { IconType } from "react-icons";
import { RiComputerLine } from "react-icons/ri";
import { FaServer } from "react-icons/fa";
import { AiFillGithub, AiOutlineAntDesign, AiOutlineApi, AiFillLinkedin } from "react-icons/ai";
import { MdDeveloperMode } from "react-icons/md";
import { BsCircleFill } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

export interface Service {
  Icon: IconType;
  title: string;
  about: string;
}

export interface Skill {
  Icon: IconType;
  name: string;
  level: string;
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

export const languages: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "JavaScript",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "TypeScript",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "React",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "React Native",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Tailwind CSS",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: "C#",
    level: "80",
  },
];

export const tools: Skill[] = [
  {
    Icon: BsCircleFill,
    name: "AWS Amplify",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "Node.js",
    level: "85",
  },
  {
    Icon: BsCircleFill,
    name: "ThreeJS",
    level: "65",
  },
  {
    Icon: BsCircleFill,
    name: ".Net Core",
    level: "70",
  },
  {
    Icon: BsCircleFill,
    name: "MySql",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "MSTest",
    level: "45",
  },
  {
    Icon: BsCircleFill,
    name: "Jest",
    level: "65",
  },
];
