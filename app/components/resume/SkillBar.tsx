import { FunctionComponent } from "react";

// Types
import { Skill } from "./ResumeData";

const SkillBar: FunctionComponent<{ value: Skill }> = ({ value: { Icon, level, name } }) => {
  const bar_width = `${level}%`;
  return (
    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-black-400">
      <div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-green to-blue-500 dark:bg-gradient-to-r dark:from-black-100 dark:to-black-500 dark:text-white"
        style={{
          width: bar_width,
        }}
      >
        <Icon className="mr-3" /> {name}
      </div>
    </div>
  );
};

export default SkillBar;
