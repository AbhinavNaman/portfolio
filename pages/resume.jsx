// pages/resume.jsx
import SEO from "@/components/SEO";
import { FaDownload, FaExternalLinkAlt } from "react-icons/fa";
import dynamic from "next/dynamic";

import "@react-pdf-viewer/core/lib/styles/index.css";

// Dynamically import Viewer to prevent SSR issues

import { Worker } from "@react-pdf-viewer/core";
const Viewer = dynamic(
  () => import("@react-pdf-viewer/core").then((mod) => mod.Viewer),
  { ssr: false }
);


export default function Resume() {
  return (
    <main className="bg-[#0d1117] text-white min-h-screen px-6 py-20">
      <SEO />
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-center mb-8">My Resume</h1>

        {/* Action Buttons */}
        <div className="flex gap-4 justify-center mb-6">
          <a
            href="/Abhinav-Naman.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 bg-white text-black rounded font-semibold hover:bg-gray-200 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaDownload /> Download PDF
          </a>
          <a
            href="/Abhinav-Naman.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition"
          >
            <FaExternalLinkAlt /> Open in New Tab
          </a>
        </div>

        {/* PDF Viewer */}
        <div className="border border-gray-700 rounded overflow-hidden shadow-lg bg-white text-black">
          <div style={{ height: "85vh" }} className="overflow-auto">
            <Worker workerUrl={`https://unpkg.com/pdfjs-dist@3.11.174/build/pdf.worker.min.js`}>
  <Viewer fileUrl="/Abhinav-Naman.pdf" />
</Worker>

          </div>
        </div>
      </div>
    </main>
  );
}
