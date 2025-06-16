// components/Experience.jsx
import { motion } from "framer-motion";
import { experiences } from "@/data/experience";

export default function Experience() {
  return (
    <section className="bg-[#0d1117] text-white px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Experience</h2>

        <div className="relative border-l-2 border-gray-700 pl-10">
          {experiences.map((exp, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="mb-12 relative"
            >
              {/* Date label to the left */}
              <div className="absolute left-[-12rem] top-1 text-sm text-gray-400 hidden sm:block w-32 text-right pr-4">
                {exp.date}
              </div>

              {/* Timeline dot */}
              <div className="absolute left-[-48px] top-1.5 w-4 h-4 bg-white rounded-full border-2 border-[#0d1117]" />

              {/* Main card */}
              <div className="bg-[#161b22] p-5 rounded-lg shadow-md border border-gray-800">
                <div className="flex items-center gap-3 mb-2">
                  <img src={exp.logo} alt={exp.company} className="w-12 h-12 object-contain rounded-full" />
                  <h3 className="text-lg font-semibold">
                    {exp.role} @ {exp.company}
                  </h3>
                </div>

                <p className="text-sm text-gray-400 mb-2">
                  {exp.location} • <span className="sm:hidden">{exp.date}</span>
                </p>

                <ul className="list-disc list-inside text-gray-300 text-sm space-y-1 mb-3">
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {exp.stack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-gray-800 text-gray-300 px-2 py-1 rounded text-xs font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
