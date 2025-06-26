import React from "react";
import { motion } from "framer-motion";

export default function Register() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">Register</h2>
      <form className="space-y-4">
        <input type="text" placeholder="Name" className="w-full px-4 py-2 border rounded" />
        <input type="email" placeholder="Email" className="w-full px-4 py-2 border rounded" />
        <input type="password" placeholder="Password" className="w-full px-4 py-2 border rounded" />
        <button className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">Register</button>
      </form>
    </motion.div>
  );
}
