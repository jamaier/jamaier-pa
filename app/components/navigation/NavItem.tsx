"use client";
import Link from "next/link";
import React from "react";

interface NavItemProps {
  active: string;
  setActive: (name: string) => void;
  name: string;
  href: string;
  isScrollLink?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({
  active,
  setActive,
  name,
  href,
  isScrollLink = false,
}) => {
  const isActive = active === name;

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (isScrollLink) {
      e.preventDefault();
      setActive(name);

      const element = document.getElementById(href);
      if (element) {
        const headerOffset = 120; // Adjust this value based on the height of your fixed header
        const elementPosition = element.getBoundingClientRect().top + window.scrollY - headerOffset;

        window.scrollTo({
          top: elementPosition,
          behavior: "smooth",
        });
      }
    } else {
      setActive(name);
    }
  };

  return (
    <Link href={href} passHref legacyBehavior>
      <a
        onClick={handleClick}
        className={`text-xl font-bold mx-2 cursor-pointer ${
          isActive ? "border-b-4 md:text-2xl border-green" : "hover:border-b-4 hover:text-green"
        }`}
      >
        {name}
      </a>
    </Link>
  );
};

export default NavItem;
