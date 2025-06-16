// components/TechStack.jsx
import { useEffect, useRef } from "react";
import gsap from "gsap";
import {logos} from "../data/techstack.js"

export default function TechStack() {
  const containerRef = useRef(null);

  useEffect(() => {
    const bubbles = containerRef.current.querySelectorAll(".bubble");
    const container = containerRef.current;
    const rect = container.getBoundingClientRect();
    const radius = 25;

    const objects = Array.from(bubbles).map((el) => {
      const x = Math.random() * (rect.width - 2 * radius);
      const y = Math.random() * (rect.height - 2 * radius);
      const vx = (Math.random() - 0.5) * 1.5;
      const vy = (Math.random() - 0.5) * 1.5;
      return { el, x, y, vx, vy };
    });

    function animate() {
      objects.forEach((obj, i) => {
        obj.x += obj.vx;
        obj.y += obj.vy;

        if (obj.x <= 0 || obj.x >= rect.width - 50) obj.vx *= -1;
        if (obj.y <= 0 || obj.y >= rect.height - 50) obj.vy *= -1;

        for (let j = i + 1; j < objects.length; j++) {
          const other = objects[j];
          const dx = obj.x - other.x;
          const dy = obj.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 50) {
            [obj.vx, other.vx] = [other.vx, obj.vx];
            [obj.vy, other.vy] = [other.vy, obj.vy];
          }
        }

        gsap.set(obj.el, { x: obj.x, y: obj.y });
      });

      requestAnimationFrame(animate);
    }

    animate();
  }, []);

  return (
    <section className="py-20 px-6 bg-[#0d1117] text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">Tech Stack</h2>

        <div className="flex flex-col md:flex-row gap-10 justify-center items-center">
          {/* Square bubble container */}
          <div
            ref={containerRef}
            className="relative hidden md:block w-140 h-160 bg-[#161b22] border border-gray-700 rounded-xl overflow-hidden"
          >
            {logos.slice(0, 22).map((logo, index) => (
              <img
                key={index}
                src={logo.src}
                alt={logo.name}
                className="bubble absolute w-16 h-16  bg-white rounded-full p-2"
              />
            ))}
          </div>

          {/* Grid stack */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {logos.map((logo, index) => (
              <div key={index} className="flex flex-col bg-white rounded-full items-center justify-center text-center w-24 h-24">
                <img src={logo.src} alt={logo.name} className="w-10 h-10 mb-2" />
                <p className="text-black text-sm">{logo.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
