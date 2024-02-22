"use client";
import React, { useState } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

// Components
import Navbar from "@/components/navigation/Navbar";
import AboutMe from "./AboutMe";
import MyServices from "./myServices";
import Projects from "./projects";

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <div className="flex flex-col justify-center items-center px-6">
        <div className="max-w-[1200px]">
          <div className="min-w-full">
            <Navbar />
          </div>
          <main>
            <AboutMe />
          </main>
          <MyServices />
          <div>
            <Projects />
          </div>
          <div>
            <h1>contact</h1>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
