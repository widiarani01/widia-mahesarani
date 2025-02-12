import { motion } from "framer-motion";
import { FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-700 via-gray-500 to-gray-800 text-white py-10 px-6 md:px-20 text-center">
      {/* Footer Title */}
      <motion.h2
        className="text-3xl md:text-4xl font-extrabold text-yellow-400 mb-4"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        🌟 Tetap Terhubung!
      </motion.h2>

      {/* Footer Description */}
      <motion.p
        className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300 leading-relaxed"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        Jangan ragu untuk menghubungi saya melalui platform favorit Anda! Saya
        selalu terbuka untuk diskusi, kolaborasi, atau sekadar berbagi ide. 🚀
      </motion.p>

      {/* Social Media Icons */}
      <motion.div
        className="mt-6 flex justify-center gap-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <a
          href="https://linkedin.com/in/widia-mahesarani"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-400 text-3xl hover:text-yellow-500 transition-all transform hover:scale-110"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://wa.me/089630773398"
          target="_blank"
          rel="noopener noreferrer"
          className="text-yellow-400 text-3xl hover:text-yellow-500 transition-all transform hover:scale-110"
        >
          <FaWhatsapp />
        </a>

        <a
          href="mailto:widiarani06@gmail.com"
          className="text-yellow-400 text-3xl hover:text-yellow-500 transition-all transform hover:scale-110"
        >
          <FaEnvelope />
        </a>
      </motion.div>

      {/* Copyright Section */}
      <motion.div
        className="mt-8 text-gray-400 text-sm"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        &copy; {new Date().getFullYear()} Your Name. All Rights Reserved.
      </motion.div>
    </footer>
  );
};

export default Footer;
