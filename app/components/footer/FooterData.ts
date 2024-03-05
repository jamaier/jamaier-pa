import { IconType } from "react-icons";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

export interface FooterContactLink {
  Icon: IconType;
  url: string;
}

export const FooterContactLinks: FooterContactLink[] = [
  {
    Icon: AiFillGithub,
    url: "https://github.com/jamaier",
  },
  {
    Icon: AiFillLinkedin,
    url: "https://www.linkedin.com/in/jacobamaier",
  },
  {
    Icon: SiGmail,
    url: "mailto: jacobamaier@gmail.com",
  },
];
