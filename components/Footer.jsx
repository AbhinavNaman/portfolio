export default function Footer() {
  return (
    <footer className="bg-[#0d1117] border-t border-gray-800 text-gray-400 text-sm py-6 text-center">
      <p>© {new Date().getFullYear()} Abhinav Naman. All rights reserved.</p>
      <p className="text-xs mt-1">
        Built with ❤️ using Next.js & Tailwind CSS
      </p>
    </footer>
  );
}
