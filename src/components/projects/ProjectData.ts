import React from "react";

// TODO create types and add project info

export type Category =
  | "react"
  | "react-native"
  | "javascript"
  | "csharp"
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
  image_path: string;
  deployed_url: string;
  github_url: string;
  category: Category[];
  key_techs: string[];
}

export const projects: IProject[] = [
  {
    id: 0,
    name: "ThreeJS Animation",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    image_path: "/images/threejs.png",
    deployed_url: "https://jamaier.github.io/SpaceJelly/",
    github_url: "https://github.com/jamaier/SpaceJelly",
    category: ["javascript"],
    key_techs: ["JavaScript", "ThreeJS", "node", "webpack"],
  },
  {
    id: 1,
    name: "Space VSCode Star Fighter",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    image_path: "/images/eventHandlers.png",
    deployed_url: "https://mgantz22.github.io/the-event-handlers/",
    github_url: "https://github.com/jamaier/the-event-handlers",
    category: ["javascript"],
    key_techs: ["JavaScript", "node", "webpack"],
  },
  {
    id: 2,
    name: "Pierre's Sweet and Savory Treats",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.",
    image_path: "/images/sweetsandtreats.png",
    deployed_url: "https://mgantz22.github.io/the-event-handlers/",
    github_url: "https://github.com/jamaier/the-event-handlers",
    category: ["csharp"],
    key_techs: ["C#", ".NET", "SQL"],
  },
  {
    id: 3,
    name: "Dev Soc",
    description: "Next.js, MongoDB, Prisma so on and so on",
    image_path: "/images/sweetsandtreats.png",
    deployed_url: "https://mgantz22.github.io/the-event-handlers/",
    github_url: "https://github.com/jamaier/the-event-handlers",
    category: ["csharp"],
    key_techs: ["TypeScript", "Next.js", "MongoDB", "Prisma"],
  },
];
