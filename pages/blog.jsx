import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("/api/medium")
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) setPosts(data);
        else console.error("Invalid feed format");
      })
      .catch((err) => console.error("Failed to fetch blog posts:", err));
  }, []);

  return (
    <main className="bg-[#0d1117] text-white min-h-screen px-6 py-20">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-12 text-center">Blog Posts</h1>

        {posts.length === 0 && (
          <p className="text-center text-gray-400">No blog posts found or failed to fetch.</p>
        )}

        <div className="grid sm:grid-cols-2 gap-8">
          {posts.map((post, index) => (
            <motion.a
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="block bg-[#161b22] border border-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <img
                src={post.thumbnail || "/default-thumbnail.jpg"}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-sm text-gray-400 mb-4">{post.contentSnippet}</p>
                <span className="text-xs text-gray-500">{post.date}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </main>
  );
}


//service_04siqre