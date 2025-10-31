"use client";

export default function About() {
  return (
    <section className="relative max-w-6xl mx-auto py-24 px-6 min-h-screen flex flex-col justify-center items-center text-gray-200 overflow-hidden">
      {/* Background Gradient Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-cyan-800/30 blur-3xl -z-10"></div>

      {/* Title */}
      <h2 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500">
        ABOUT ME
      </h2>

      {/* Subtitle */}
      <p className="text-lg text-gray-300 max-w-2xl text-center mb-12">
        Discover my journey in crafting modern, interactive, and user-focused
        web experiences powered by creativity and precision.
      </p>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between w-full bg-[#0B1120]/70 backdrop-blur-md rounded-2xl shadow-[0_0_30px_rgba(0,0,0,0.4)] overflow-hidden border border-gray-700">
        {/* Image Section */}
        <div className="flex-1 flex justify-center p-8">
          <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-cyan-400 shadow-[0_0_40px_rgba(0,255,255,0.3)]">
            <img
              src="/Ankitwebsitephoto.png"
              alt="Ankit Gyanwali"
              className="w-full h-full object-cover"
            />
            {/* Glowing border ring */}
            <div
              className="absolute inset-0 rounded-full border-4 border-transparent"
              style={{
                background:
                  "linear-gradient(90deg, rgba(0,255,255,0.3), rgba(255,0,255,0.3))",
              }}
            />
          </div>
        </div>

        {/* Text Section */}
        <div className="flex-1 flex flex-col justify-center text-center lg:text-left p-8">
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
            A Glimpse Into My Journey
          </h3>

          <p className="text-gray-300 leading-relaxed mb-6">
            I'm{" "}
            <span className="text-cyan-400 font-semibold">Ankit Gyanwali</span>,
            a passionate Front-End Developer dedicated to turning ideas into
            engaging, responsive, and visually refined web experiences. I focus
            on blending clean design, modern technologies, and efficient code to
            create interfaces that connect seamlessly with users. My goal is
            simple — to build digital products that are not only functional but
            also unforgettable.
          </p>

          <a
            href="/contact"
            className="bg-gradient-to-r flex justify-center from-cyan-500 to-blue-600 text-white font-semibold px-8 py-3 rounded-full shadow-[0_0_20px_rgba(0,255,255,0.4)] hover:shadow-[0_0_35px_rgba(0,255,255,0.7)] transition duration-300 mx-auto lg:mx-0"
          >
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}
