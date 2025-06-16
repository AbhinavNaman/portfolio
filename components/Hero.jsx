// components/Hero.jsx
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaChevronDown,
} from "react-icons/fa";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-2xl"
      >
        <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-4">
          Abhinav Naman
        </h1>

        <p className="text-xl md:text-2xl text-gray-400 mb-6">
          Full Stack Developer & DevOps Enthusiast
        </p>

        <p className="text-gray-400 text-md md:text-lg mb-6">
          Passionate about building scalable apps and automating infrastructure.
          Currently diving deep into AI and RAG.
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
            href="https://linkedin.com/in/abhinav-naman"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:abhinavnaman3@gmail.com">
            <FaEnvelope />
          </a>
        </div>

        <a
          href="/Abhinav_Naman_Resume.pdf"
          download
          className="inline-block bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition"
        >
          Download Resume
        </a>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="mt-28 text-white text-2xl flex justify-center flex flex-col justify-center items-center gap-6"
        >
          Scroll down
          <FaChevronDown className="animate-bounce" />
        </motion.div>
      </motion.div>
    </section>
  );
}
