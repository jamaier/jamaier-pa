"use client";
import React, { useState } from "react";
import type { AppProps } from "next/app";
import { ThemeProvider } from "next-themes";

// components
import Navbar from "@/components/navigation/Navbar";
import AboutMe from "./AboutMe";

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <div className="flex flex-col justify-center items-center">
        <div className="max-w-[1200px]">
          <div className="min-w-full">
            <Navbar />
          </div>
          <main>
            <AboutMe />
          </main>
          <div>
            <h1>resume/skills</h1>
          </div>
          <div>
            <h1>Projects</h1>
          </div>
          <div>
            <h1>contact</h1>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}
