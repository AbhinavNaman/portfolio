// components/About.jsx
import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="px-6 py-20 bg-[#0d1117] text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
          About Me
        </h2>

        <p className="text-gray-300 text-lg leading-relaxed">
          I'm a Full Stack Developer and DevOps Enthusiast with experience building scalable web apps and automating infrastructure using modern tools like React, SvelteKit, Node.js, Docker, and Terraform. <br /><br />
          I’ve contributed to high-performance systems at <strong>Profile.fyi</strong> and streamlined CI/CD pipelines at <strong>Pluralsight</strong>. Currently, I’m exploring cloud-native architectures and integrating AI into real-world products through RAG-based systems.
        </p>
      </motion.div>
    </section>
  );
}
