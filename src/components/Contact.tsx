import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section className="min-h-screen bg-gray-900 flex items-center justify-center py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-gray-800/80 backdrop-blur-lg rounded-xl p-8"
      >
        <h2 className="text-2xl font-bold text-neon mb-6 text-center">Contact</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full p-3 bg-gray-700 rounded text-white focus:ring-2 focus:ring-neon outline-none"
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full p-3 bg-gray-700 rounded text-white focus:ring-2 focus:ring-neon outline-none"
            required
          />
          <textarea
            placeholder="Message"
            rows={4}
            className="w-full p-3 bg-gray-700 rounded text-white focus:ring-2 focus:ring-neon outline-none"
            required
          />
          <button
            type="submit"
            className="w-full p-3 bg-neon text-black font-bold rounded hover:bg-neon/80 transition"
          >
            {sent ? "Sent!" : "Send"}
          </button>
        </form>
        <a
          href="/resume.pdf"
          target="_blank"
          className="block mt-4 text-center text-neon text-sm hover:underline"
        >
          Download CV
        </a>
      </motion.div>
    </section>
  );
}