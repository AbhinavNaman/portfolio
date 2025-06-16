import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Ecom Price Tracking App",
    desc: "Automated price tracker scraping 500+ e-commerce products with real-time alerts.",
    tech: ["Next.js", "MongoDB", "Tailwind", "Node.js", "Cheerio"],
    github: "https://github.com/AbhinavNaman/Ecom_price_tracker",
    live: "https://ecom-price-tracker.vercel.app/"
  },
  {
    title: "Terraform Metrics Collector",
    desc: "Extracts & visualizes Terraform CI run metrics using Node.js + Grafana.",
    tech: ["Terraform", "GitHub Actions", "Node.js", "PostgreSQL", "Grafana"],
    github: "https://github.com/AbhinavNaman/Terraform-Metrics-Collection"
  },
  {
    title: "Memories Social Media App",
    desc: "Photo-sharing MERN app with Google Auth, tagging, and filtering.",
    tech: ["React", "Node.js", "MongoDB", "Express", "Google OAuth"],
    github: "https://github.com/AbhinavNaman/Memories"
  },
  {
    title: "Kubernetes Best Practice Monitor",
    desc: "CI pipeline script to enforce K8s best practices from Helm templates.",
    tech: ["Python", "GitLab CI", "Kubernetes", "Helm"],
    github: "https://github.com/AbhinavNaman/Automating-Kubernetes-Best-Practice-Check"
  },
  {
    title: "EC2 Cost Optimization Script",
    desc: "Automates EC2 cleanup and switches deployments to reduce AWS billing by 30%.",
    tech: ["Boto3", "Python", "CRON", "AWS"],
    github:"https://github.com/AbhinavNaman/ec2-cost-optimizer"
  },
  {
    title: "Aora Video sharing platform",
    desc: "App built using React Native and Expo Go, used to share and see videos of other poeple",
    tech: ["React Native", "javascript", "expo"],
    github:"https://github.com/AbhinavNaman/Aora-Video_sharing_platform"
  },
  {
    title: "EcoGather",
    desc: "A meet up app for eco related events",
    tech: ["React.js", "javascript", "Node.js", "Express.js", "MongoDB"],
    github:"https://github.com/AbhinavNaman/EcoGather"
  }
];

export default function Projects() {
  return (
    <main className="bg-[#0d1117] text-white min-h-screen px-6 py-20">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">Projects</h1>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-[#161b22] border border-gray-800 p-6 rounded-lg shadow-md"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
              <p className="text-sm text-gray-400 mb-4">{project.desc}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((t, i) => (
                  <span key={i} className="text-xs bg-gray-800 px-2 py-1 rounded text-gray-300 font-mono">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-white"
                  >
                    <FaGithub /> GitHub
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-white"
                  >
                    <FaExternalLinkAlt /> Live
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
