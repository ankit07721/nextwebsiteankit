"use client";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiC,
  SiCplusplus,
} from "react-icons/si";

export default function Skills() {
  const skills = [
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss3 /> },
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "React.js", icon: <SiReact /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "C", icon: <SiC /> },
    { name: "C++", icon: <SiCplusplus /> },
  ];

  return (
    <section className="relative max-w-6xl mx-auto py-24 px-6 min-h-screen flex flex-col justify-center items-center text-gray-200 overflow-hidden">
      {/* Background Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-cyan-800/30 blur-3xl -z-10"></div>

      <h2 className="text-5xl font-extrabold mb-12 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
        Skills
      </h2>

      <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 w-full">
        {skills.map((skill) => (
          <li
            key={skill.name}
            className="relative flex flex-col justify-center items-center gap-2 py-6 rounded-xl text-lg font-semibold cursor-pointer shadow-lg overflow-hidden"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,230,255,0.2), rgba(255,0,255,0.2))",
              backdropFilter: "blur(8px)",
            }}
          >
            <div className="text-4xl text-white z-10">{skill.icon}</div>
            <span className="text-white z-10">{skill.name}</span>
            <div className="absolute inset-0 rounded-xl blur-xl opacity-50 bg-gradient-to-br from-cyan-400 via-blue-400 to-purple-500"></div>
          </li>
        ))}
      </ul>
    </section>
  );
}
