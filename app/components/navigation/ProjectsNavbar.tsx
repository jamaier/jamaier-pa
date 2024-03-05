import { FunctionComponent } from "react";

// Types
import { Category } from "../projects/ProjectData";

const NavItem: FunctionComponent<{
  value: Category | "all";
  active: string;
  handleFilterCategory: Function;
}> = ({ value, active, handleFilterCategory }) => {
  var className = "capitalize cursor-pointer hover:text-green-600";
  if (active === value) className += " text-green";

  return (
    <li className={className} onClick={() => handleFilterCategory(value)}>
      {value}
    </li>
  );
};

const ProjectsNavbar: FunctionComponent<{
  handleFilterCategory: Function;
  active: string;
}> = props => {
  return (
    <nav className="flex px-3 py-2 space-x-3 overflow-x-auto list-none">
      <NavItem value="all" {...props} />
      <NavItem value="nextjs" {...props} />
      <NavItem value="react-native" {...props} />
      <NavItem value="javascript/typescript" {...props} />
      <NavItem value=".NET" {...props} />
    </nav>
  );
};

export default ProjectsNavbar;
