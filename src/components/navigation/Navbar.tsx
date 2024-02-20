"use client";
import React, { FunctionComponent } from "react";
import Link from "next/link";

const NavItem: FunctionComponent<{
  active: string;
  setActive: Function;
  name: string;
  route: string;
}> = ({ active, setActive, name, route }) => {
  return active !== name ? (
    <Link href={route}>
      <a
        className="mx-2 cursor-pointer hover:border-b-4 hover:text-green"
        onClick={() => {
          setActive(name);
          const element = document.getElementById(name);
          if (element) element.scrollIntoView({ behavior: "smooth" });
        }}
      >
        {name}
      </a>
    </Link>
  ) : null;
};
