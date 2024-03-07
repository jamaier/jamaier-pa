import { FunctionComponent } from "react";

// Types
import { Skill } from "./ResumeData";

const SkillBar: FunctionComponent<{ value: Skill }> = ({ value: { Icon, level, name } }) => {
  const bar_width = `${level}%`;
  return (
    <div className="my-2 text-white bg-gray-300 rounded-full dark:bg-neutral-300">
      <div
        className="flex items-center px-4 py-1 rounded-full bg-gradient-to-r from-gray-200 to-gray-500 dark:bg-gradient-to-r dark:from-neutral-200 dark:to-neutral-400 dark:text-white"
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
