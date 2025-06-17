import Link from "next/link";
import { useState, useEffect } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { resume_preview, resume_view } from "@/data/resume";

export default function Header() {
//   const [dark, setDark] = useState(true);

//   useEffect(() => {
//     if (dark) document.documentElement.classList.add("dark");
//     else document.documentElement.classList.remove("dark");
//   }, [dark]);

  return (
    <header className="sticky top-0 border-b z-50 bg-[#0d1117]  border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <Link href="/" className="text-white font-bold text-lg">
         &lt; Abhinav Naman /&gt;
        </Link>

        <nav className="hidden sm:flex gap-6 text-gray-300 text-sm">
          <Link href="/" className="hover:underline">Home</Link>
          <Link href="/projects" className="hover:underline">Projects</Link>
          <Link href="/experience" className="hover:underline">Experience</Link>
          <Link href="/blog" className="hover:underline">Blog</Link>
          <Link href="/contact" className="hover:underline">Contact</Link>
          <Link href="/resume" className="hover:scale-105 border px-2 rounded bg-white text-black">Resume</Link>
        </nav>

        <div className="flex items-center gap-4">
          <a
            href={resume_view}
            download
            className="hidden sm:inline text-xs bg-white text-black font-semibold px-3 py-1 rounded hover:bg-gray-200 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Download CV
          </a>
        </div>
      </div>
    </header>
  );
}
