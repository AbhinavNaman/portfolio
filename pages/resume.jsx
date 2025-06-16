import SEO from "@/components/SEO";
import { FaDownload, FaExternalLinkAlt } from "react-icons/fa";
import {resume_preview, resume_view} from "../data/resume"

export default function Resume() {
  return (
    <main className="bg-[#0d1117] text-white min-h-screen px-6 py-20">
        <SEO/>
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">My Resume</h1>
                {/* Action Buttons */}
        <div className="flex gap-4 justify-center mb-4">
          <a
            href={resume_view}
            download
            className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded font-semibold hover:bg-gray-200 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDownload /> Download PDF
          </a>

          <a
            href={resume_view}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
          >
            <FaExternalLinkAlt /> Open in New Tab
          </a>
        </div>

        {/* Resume Viewer */}
        <div className="w-full h-[100vh] border border-gray-700 rounded overflow-hidden mb-6">
          <iframe
            src={resume_preview}
            title="Abhinav Resume"
            className="w-full h-full"
          />
        </div>


      </div>
    </main>
  );
}
