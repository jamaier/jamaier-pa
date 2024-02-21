import React, { FunctionComponent, useState } from "react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { MdDarkMode, MdLightMode, MdMenu, MdClose } from "react-icons/md";

const NavItem: FunctionComponent<{
  active: string;
  setActive: Function;
  name: string;
  route: string;
}> = ({ active, setActive, name, route }) => {
  const isActive = active === name;

  return (
    <Link legacyBehavior href={route}>
      <a
        className={`text-xl font-bold mx-2 cursor-pointer ${
          isActive ? "border-b-4 md:text-2xl border-green" : "hover:border-b-4 hover:text-green"
        }`}
        onClick={() => {
          setActive(name);
          const element = document.getElementById(name);
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }}
      >
        {name}
      </a>
    </Link>
  );
};

const Navbar: FunctionComponent = () => {
  const [active, setActive] = useState<string>("");
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  const changeMode = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex items-end justify-between px-12 py-3 my-3">
      <h3 className="flex w-32 my-1 text-3xl font-medium tracking-wider font-kaushan">
        Jacob
        <span className="pl-2 text-green-600">Maier</span>
      </h3>

      <div className="text-base font-normal md:text-xl flex flex-row items-center relative">
        <button onClick={toggleMenu} className="md:hidden text-2xl focus:outline-none">
          {menuOpen ? <MdClose /> : <MdMenu />}
        </button>

        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 right-0 bg-white z-10 flex flex-col items-center md:flex-row md:top-auto md:left-auto md:right-auto md:static md:bg-transparent md:space-x-4 md:items-center md:justify-center md:flex-grow"
            >
              <NavItem active={active} setActive={setActive} name="About" route="/" />
              <NavItem active={active} setActive={setActive} name="Resume" route="/" />
              <NavItem active={active} setActive={setActive} name="Projects" route="/" />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="hidden md:flex flex-row items-center">
          <NavItem active={active} setActive={setActive} name="About" route="/" />
          <NavItem active={active} setActive={setActive} name="Resume" route="/" />
          <NavItem active={active} setActive={setActive} name="Projects" route="/" />
        </div>
        <button
          onClick={changeMode}
          className="flex text-white transition duration-200 ease-in-out rounded-full cursor-pointer bg-gradient-to-r from-green to-blue-500 focus:outline-none hover:scale-105 dark:bg-gradient-to-r dark:from-black-100 dark:to-black-300 dark:text-white"
        >
          {theme === "light" ? <MdLightMode size={30} /> : <MdDarkMode size={30} />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
