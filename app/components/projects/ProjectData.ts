import { StaticImageData } from "next/image";
// Assets
import devSocImg from "/public/assets/DevSoc.png";
import starFighterImg from "/public/assets/starFighter.png";
import sweetsAndTreats from "/public/assets/sweetsandtreats.png";
import spaceJelly from "/public/assets/spaceJelly.png";
import uber from "/public/assets/uberClone.png";

// TODO create types and add project info

export type Category =
  | "nextjs"
  | "react-native"
  | "javascript/typescript"
  | ".NET"
  | "dotnet"
  | "node"
  | "threejs"
  | "tailwindcss"
  | "typescript"
  | "nextjs";

export interface IProject {
  id: number;
  name: string;
  description: string;
  image_path: StaticImageData;
  deployed_url: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
}

export const projects: IProject[] = [
  {
    id: 0,
    name: "Dev Soc",
    description: "Next.js, MongoDB, Prisma so on and so on",
    image_path: devSocImg,
    deployed_url: "https://dev-soc.vercel.app/",
    github_url: "https://github.com/jamaier/dev-soc",
    category: ["nextjs"],
    key_techs: ["TypeScript", "Next.js", "MongoDB", "Prisma", "TailwindCSS", "NextAUTH"],
  },
  {
    id: 1,
    name: "Uber Clone",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    image_path: uber,
    deployed_url: "https://github.com/jamaier/RN-Uber",
    github_url: "N/A",
    category: ["react-native"],
    key_techs: ["JavaScript", "ThreeJS", "Node.js", "Webpack"],
  },
  {
    id: 2,
    name: "ThreeJS Animation",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    image_path: spaceJelly,
    deployed_url: "https://jamaier.github.io/SpaceJelly/",
    github_url: "https://github.com/jamaier/SpaceJelly",
    category: ["javascript/typescript"],
    key_techs: ["JavaScript", "ThreeJS", "Node.js", "Webpack"],
  },
  {
    id: 3,
    name: "Space VSCode Star Fighter",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    image_path: starFighterImg,
    deployed_url: "https://mgantz22.github.io/the-event-handlers/",
    github_url: "https://github.com/jamaier/the-event-handlers",
    category: ["javascript/typescript"],
    key_techs: ["JavaScript", "Node.js", "Webpack"],
  },
  {
    id: 4,
    name: "Pierre's Sweet and Savory Treats",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    image_path: sweetsAndTreats,
    deployed_url: "https://github.com/jamaier/SweetsAndTreats.Solution",
    github_url: "https://github.com/jamaier/SweetsAndTreats.Solution",
    category: [".NET"],
    key_techs: ["C#", ".NET", "SQL"],
  },
];
