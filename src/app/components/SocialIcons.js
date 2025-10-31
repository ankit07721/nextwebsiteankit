"use client";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function SocialIcons() {
  const icons = [
    {
      icon: <FaGithub />,
      link: "https://github.com/ankit07721",
      color: "from-gray-400 to-gray-100",
      hoverGlow: "shadow-[0_0_25px_rgba(255,255,255,0.5)]",
    },
    {
      icon: <FaLinkedin />,
      link: "https://www.linkedin.com/in/ankit-gyanwali-4949a3284/",
      color: "from-blue-400 to-cyan-400",
      hoverGlow: "shadow-[0_0_25px_rgba(0,150,255,0.6)]",
    },
    {
      icon: <FaInstagram />,
      link: "https://www.instagram.com/ankit07721/",
      color: "from-pink-500 to-yellow-400",
      hoverGlow: "shadow-[0_0_25px_rgba(255,100,150,0.6)]",
    },
    {
      icon: <MdEmail />,
      link: "mailto:ankitgyanwal001@gmail.com",
      color: "from-green-400 to-cyan-300",
      hoverGlow: "shadow-[0_0_25px_rgba(0,255,200,0.5)]",
    },
  ];

  return (
    <div className="fixed left-6 top-1/3 flex flex-col gap-6 z-50">
      {icons.map((item, index) => (
        <a
          key={index}
          href={item.link}
          target="_blank"
          className={`group relative flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${item.color} p-[2px] transition-transform duration-300 hover:scale-110`}
        >
          {/* Glow effect */}
          <div
            className={`absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 ${item.hoverGlow}`}
          ></div>

          {/* Icon container */}
          <div className="flex items-center justify-center w-full h-full bg-[#0B1120] rounded-full text-2xl text-gray-300 group-hover:text-white transition-colors duration-300">
            {item.icon}
          </div>
        </a>
      ))}
    </div>
  );
}
