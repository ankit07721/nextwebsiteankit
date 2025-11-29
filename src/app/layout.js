import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata = {
  title: "Ankit Gyanwali | Front-End Developer",
  description: "Portfolio built with Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
     <head>
        {/* Google AdSense */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8186780306652029"
          crossOrigin="anonymous"
        ></script>
      </head>
      <body className="bg-gray-50 text-gray-800 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
