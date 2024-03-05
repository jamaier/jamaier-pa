import { useTheme } from "next-themes";
import { FunctionComponent } from "react";

// Data
import { FooterContactLinks } from "./FooterData";

const Footer: FunctionComponent = () => {
  return (
    <div className="flex flex-row w-64 my-12">
      {FooterContactLinks.map((footerContactLink, i) => (
        <div key={i} className="hover:scale-120 focus:outline-none flex justify-around px-4">
          <a href={footerContactLink.url} target="_blank" rel="noopener noreferrer">
            <footerContactLink.Icon size={30} />
          </a>
        </div>
      ))}
    </div>
  );
};

export default Footer;
