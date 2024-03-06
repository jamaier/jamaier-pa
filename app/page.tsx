"use client";
import React, { useState } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

// Components
import Navbar from "./components/navigation/Navbar";
import AboutMe from "./pages/AboutMe";
import MyServices from "./pages/myServices";
import Projects from "./pages/projects";
import Resume from "./pages/resume";
import Footer from "./components/footer/Footer";

export default function Home({ Component, pageProps }: AppProps) {
  const AboutData = { Component: AboutMe, id: "aboutMe" };
  const ComponentData = [
    { Component: MyServices, id: "myServices" },
    { Component: Resume, id: "resume" },
    { Component: Projects, id: "projects" },
  ];
  return (
    <ThemeProvider attribute="class">
      <div className="min-w-full fixed z-10 bg-gradient-to-tr from-gray-400 to-gray-100 dark:from-black-100 dark:to-black-300">
        <Navbar />
      </div>
      <div className="flex flex-col justify-center items-center pt-24">
        <div className="max-w-[1000px]">
          <main id={AboutData.id}>
            <AboutMe />
          </main>
          {ComponentData.map(({ Component, id }, i) => (
            <div key={i} id={id} className="my-3 px-6 rounded-md bg-gray-200 dark:bg-black-200">
              <Component />
            </div>
          ))}
        </div>
        <div className="min-w-full px-11 flex justify-end bg-gradient-to-tr from-gray-400 to-gray-100 dark:from-black-100 dark:to-black-300">
          <Footer />
        </div>
      </div>
    </ThemeProvider>
  );
}
