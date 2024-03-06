import React, { useState } from "react";
import { useTheme } from "next-themes";
import { MdClose, MdDarkMode, MdLightMode, MdMenu } from "react-icons/md";
import NavItem from "./NavItem";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [active, setActive] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const { theme, setTheme } = useTheme();

  const changeMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex items-end justify-between px-24 py-3 my-3">
      <Link href="/" scroll={true}>
        <h3 className="flex w-32 my-1 text-3xl font-medium tracking-wider font-kaushan">
          Jacob
          <span className="pl-2 text-green-600">Maier</span>
        </h3>
      </Link>

      <div className="text-base font-normal md:text-xl flex flex-row items-center relative">
        <button
          onClick={changeMode}
          className="flex text-white transition duration-200 ease-in-out rounded-full cursor-pointer dark:text-white px-3"
        >
          {theme === "light" ? <MdLightMode size={25} /> : <MdDarkMode size={25} />}
        </button>
        <button onClick={toggleMenu} className="md:hidden text-2xl focus:outline-none">
          {menuOpen ? <MdClose /> : <MdMenu />}
        </button>

        <div className="absolute top-full left-0 right-0 bg-white z-10 flex flex-col items-center md:flex-row md:top-auto md:left-auto md:right-auto md:static md:bg-transparent md:space-x-4 md:items-center md:justify-center md:flex-grow">
          {menuOpen && (
            <>
              <NavItem
                active={active}
                setActive={setActive}
                name="My Services"
                href="myServices"
                isScrollLink={true}
              />
              <NavItem
                active={active}
                setActive={setActive}
                name="Resume"
                href="resume"
                isScrollLink={true}
              />
              <NavItem
                active={active}
                setActive={setActive}
                name="Projects"
                href="projects"
                isScrollLink={true}
              />
            </>
          )}
        </div>

        <div className="hidden md:flex flex-row items-center">
          <NavItem
            active={active}
            setActive={setActive}
            name="My Services"
            href="myServices"
            isScrollLink={true}
          />
          <NavItem
            active={active}
            setActive={setActive}
            name="Resume"
            href="resume"
            isScrollLink={true}
          />
          <NavItem
            active={active}
            setActive={setActive}
            name="Projects"
            href="projects"
            isScrollLink={true}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
