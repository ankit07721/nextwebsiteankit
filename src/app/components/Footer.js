"use client";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";

export default function Footer() {
  const year = new Date().getFullYear();

  const socialLinks = [
    {
      icon: <FaGithub />,
      link: "https://github.com/ankit07721",
      color: "hover:text-cyan-400",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/ankit-gyanwali-4949a3284/",
      color: "hover:text-blue-500",
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/ankit07721/",
      color: "hover:text-pink-500",
    },
    {
      icon: <FaFacebook />,
      link: "https://www.facebook.com/ankit.gyanwali.3",
      color: "hover:text-blue-500",
    },
  ];

  return (
    <footer className="relative overflow-hidden mt-20">
      {/* Background gradient + subtle glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#1e1b4b] to-[#0f172a]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(56,189,248,0.15),_transparent_70%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,_rgba(192,132,252,0.15),_transparent_70%)]"></div>

      {/* Main Content */}
      <div className="relative z-10 text-center py-12 px-6 flex flex-col items-center justify-center text-gray-300">
        {/* Floating Glow Line */}
        <div className="h-[2px] mb-8 w-4/5 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full shadow-[0_0_20px_rgba(56,189,248,0.6)]"></div>

        {/* Logo or Name */}
        <h3 className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mb-4">
          Ankit Gyanwali
        </h3>

        {/* Tagline */}
        <p className="text-sm md:text-base text-gray-400 mb-6">
          Designed & Developed by{" "}
          <span className="text-cyan-400 font-medium">Ankit Gyanwali</span>
        </p>

        {/* Social Icons */}
        <div className="flex gap-6 text-2xl mb-8">
          {socialLinks.map((item, idx) => (
            <a
              key={idx}
              href={item.link}
              target="_blank"
              className={`text-gray-400 transition duration-300 ${item.color}`}
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs md:text-sm text-gray-500">
          © {year} Ankit Gyanwali. All Rights Reserved.
        </p>
      </div>

      {/* Bottom Neon Glow Border */}
      <div className="absolute bottom-0 left-0 h-[3px] w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 shadow-[0_0_25px_rgba(56,189,248,0.6)]"></div>
    </footer>
  );
}
