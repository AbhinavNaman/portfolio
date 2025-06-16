import Link from "next/link";
import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

export default function Header() {
//   const [dark, setDark] = useState(true);

//   useEffect(() => {
//     if (dark) document.documentElement.classList.add("dark");
//     else document.documentElement.classList.remove("dark");
//   }, [dark]);

  return (
    <header className="sticky top-0 z-50 bg-[#0d1117] border-b border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-white font-bold text-lg">
          Abhinav Naman
        </Link>

        <nav className="hidden sm:flex gap-6 text-gray-300 text-sm">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/projects" className="hover:underline">Projects</Link>
          <Link href="/experience" className="hover:underline">Experience</Link>
          <Link href="/blog" className="hover:underline">Blog</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <Link href="/resume" className="hover:underline">Resume</Link>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="/Abhinav_Naman_Resume.pdf"
            download
            className="hidden sm:inline text-xs bg-white text-black font-semibold px-3 py-1 rounded hover:bg-gray-200 transition"
          >
            Download CV
          </a>

          {/* <button
            onClick={() => setDark(!dark)}
            className="text-white text-lg hover:text-gray-300"
            aria-label="Toggle dark mode"
          >
            {dark ? <FaSun /> : <FaMoon />}
          </button> */}
        </div>
      </div>
    </header>
  );
}
