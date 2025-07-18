// components/Hero.jsx
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaChevronDown,
  FaMapPin,
} from "react-icons/fa";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { MdWork } from "react-icons/md";
import { resume_preview, resume_view } from "@/data/resume";

export default function Hero() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden flex items-center justify-center px-6 z-10">
        <div className="z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl"
          >
            <div className=" p-2 z-12  bg-green-600 mb-4 w-fit  rounded-full text-sm gap-2 rounded-full px-4 shadow-md">
              <p className="">OPEN TO WORK</p>
            </div>
            <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4 " data-tooltip-id="my-tooltip-1" variant="info">
              &lt; Abhinav Naman /&gt;
            </h1>

            <ReactTooltip
        id="my-tooltip-1"
        place="top"
        content="Abhi_Nav"
      />

            <p className="text-xl md:text-2xl text-gray-400 mb-6">
              Full Stack Developer & DevOps Enthusiast
            </p>

            <p className="text-xl md:text-2xl text-gray-400 mb-6 flex justify-center items-center gap-2">
            <FaMapPin /> Bengaluru
            </p>

            

            <p className="text-gray-400 text-md md:text-lg mb-6">
              Passionate about building scalable apps and automating
              infrastructure.
            </p>

            <div className="flex items-center justify-center gap-6 mb-6 text-2xl text-white">
              <a
                href="https://github.com/AbhinavNaman"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/abhinav-naman-912789111/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin />
              </a>
              <a href="mailto:abhinavnaman3@gmail.com">
                <FaEnvelope />
              </a>
            </div>
<div className="flex gap-6 justify-center align-middle">
            <a
              href="/Abhinav-Naman.pdf"
              className="inline-block bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Resume
            </a>
            <a
              href="/Abhinav-Naman.pdf"
              download
              className="inline-block bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
            </div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="mt-28 text-white text-2xl flex justify-center flex flex-col justify-center items-center gap-6"
            >
              Scroll down
              <FaChevronDown className="animate-bounce" />
            </motion.div>
          </motion.div>
        </div>
        <div className="hero-bg" />
        <div className="hero-bg hero-bg2" />
        <div className="hero-bg hero-bg3" />
      </section>
    </>
  );
}
