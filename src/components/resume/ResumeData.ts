import { IconType } from "react-icons";
import { BsCircleFill } from "react-icons/bs";

export interface ResumeInfo {
  jobNumber: number;
  bulletPoint: string[];
}

export interface Skill {
  Icon: IconType;
  name: string;
  level: string;
}

export const ResumeData: ResumeInfo[] = [
  {
    jobNumber: 1,
    bulletPoint: [
      "• Implemented In-App Purchasing increasing revenue 3x in the first month.",
      "• Overhauled wallet UI to show dynamic stamp count for each businesses stamp card to track overall count from a high level.",
      "• Overhauled wallet UI to show dynamic stamp count for each businesses stamp card to track overall count from a high level.",
      "• Overhauled wallet UI to show dynamic stamp count for each businesses stamp card to track overall count from a high level.",
      "• Overhauled wallet UI to show dynamic stamp count for each businesses stamp card to track overall count from a high level.",
    ],
  },
  {
    jobNumber: 2,
    bulletPoint: [
      "• Keep adding new info...",
      "• Keep adding new info...",
      "• Keep adding new info...",
      "• Keep adding new info...",
      "• Keep adding new info...",
    ],
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
