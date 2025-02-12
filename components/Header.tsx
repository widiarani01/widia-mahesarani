import { useState } from "react";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false); // State for menu toggle

  return (
    <motion.header
      className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 text-white py-4 px-6 md:px-16 fixed w-full top-0 z-50 shadow-lg"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="flex justify-between items-center">
        {/* Logo */}
        <motion.h1
          className="text-2xl md:text-3xl font-extrabold text-yellow-400 tracking-wide"
          whileHover={{ scale: 1.1 }}
        >
          🚀 MyPortfolio
        </motion.h1>

        {/* Navigation Menu (Desktop) */}
        <nav className="hidden md:flex gap-6 text-lg">
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="#about"
            className="hover:text-yellow-400 transition-all duration-300"
          >
            Tentang Saya
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="#contact"
            className="hover:text-yellow-400 transition-all duration-300"
          >
            Kontak
          </motion.a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <motion.button
            className="text-yellow-400 text-2xl"
            whileHover={{ rotate: 90 }}
            onClick={() => setIsOpen(!isOpen)} // Toggle menu visibility
          >
            ☰
          </motion.button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.nav
          className="md:hidden flex flex-col bg-gray-800 text-white py-4 px-6 absolute w-full left-0 top-16 shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="#about"
            className="py-2 border-b border-gray-700 hover:text-yellow-400"
            onClick={() => setIsOpen(false)}
          >
            Tentang Saya
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="#contact"
            className="py-2 hover:text-yellow-400"
            onClick={() => setIsOpen(false)}
          >
            Kontak
          </motion.a>
        </motion.nav>
      )}
    </motion.header>
  );
};

export default Header;
