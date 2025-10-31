"use client";
import { Divide } from "lucide-react";
import SocialIcons from "./components/SocialIcons";
import Homepage from "./Home-page/page";
import Navbar from "./components/Navbar";
import About from "./about/page";
import Skills from "./skills/page";
import Contact from "./contact/page";
import { useState, useEffect } from "react";
export default function Home() {
  return (
    // <section className="max-w-5xl mx-auto text-center h-screen justify-center bg-[#212730]  flex flex-col py-20">
    //   {/* <h1 className="text-4xl font-bold mb-4">Hi, I'm Ankit Gyanwali</h1>
    //   <p className="text-lg text-gray-700">
    //     A passionate Front-End Developer creating visually appealing, responsive,
    //     and user-friendly web interfaces using React.js and Next.js.
    //   </p> */}
    //   <h1>Hey, I'm <span className="text-[#C1D7F0]">Ankit Gyanwali</span></h1>
    //   <p> A passionate Front-End Developer creating visually appealing, responsive,
    //     and user-friendly web interfaces using React.js and Next.js.</p>
    //   <SocialIcons/>
    // </section>
    <div>
      <Homepage />
      <About />
      <Skills />
      <Contact />
    </div>
  );
}
