// components/TechStack.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import {logos, language, frontend, backend_and_db, cloud_and_devops} from "../data/techstack.js"

export default function TechStack() {

  return (
    <section className="py-20 px-6 bg-[#0d1117] text-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Tech Stack</h2>

        <div className="flex flex-col justify-start md:flex-row gap-10 justify-center items-center mb-4 mt-4">
        <h4 className="w-64 text-gray-400">Language</h4>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
            {language.map((logo, index) => (
              <div key={index} className="flex flex-col bg-white rounded-xl items-center justify-center text-center w-24 h-24">
                <img src={logo.src} alt={logo.name} className="w-10 h-10 mb-2" />
                <p className="text-black text-sm">{logo.name}</p>
              </div>
            ))}
          </div>
        </div>
        <hr className="text-gray-200/50"/>

        <div className="flex flex-col justify-start md:flex-row gap-10 justify-center items-center mb-4 mt-4">
        <h4 className="w-64 text-gray-400">Frontend</h4>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
            {frontend.map((logo, index) => (
              <div key={index} className="flex flex-col bg-white rounded-xl items-center justify-center text-center w-24 h-24">
                <img src={logo.src} alt={logo.name} className="w-10 h-10 mb-2" />
                <p className="text-black text-sm">{logo.name}</p>
              </div>
            ))}
          </div>
        </div>
        <hr className="text-gray-200/50"/>

        <div className="flex flex-col justify-start md:flex-row gap-10 justify-center items-center mb-4 mt-4">
        <h4 className="w-64 text-gray-400">Backend and Database</h4>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
            {backend_and_db.map((logo, index) => (
              <div key={index} className="flex flex-col bg-white rounded-xl items-center justify-center text-center w-24 h-24">
                <img src={logo.src} alt={logo.name} className="w-10 h-10 mb-2" />
                <p className="text-black text-sm">{logo.name}</p>
              </div>
            ))}
          </div>
        </div>
        <hr className="text-gray-200/50"/>

        <div className="flex flex-col justify-start md:flex-row gap-10 justify-center items-center mb-4 mt-4">
        <h4 className="w-64 text-gray-400">Cloud and DevOps</h4>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
            {cloud_and_devops.map((logo, index) => (
              <div key={index} className="flex flex-col bg-white rounded-xl items-center justify-center text-center w-24 h-24">
                <img src={logo.src} alt={logo.name} className="w-10 h-10 mb-2" />
                <p className="text-black text-sm">{logo.name}</p>
              </div>
            ))}
          </div>
        </div>
        {/* <hr className="text-gray-200/50"/> */}

      </div>
    </section>
  );
}
