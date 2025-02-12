import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section
      id="contact"
      className="bg-gradient-to-r from-gray-700 via-gray-500 to-gray-800 text-white py-20 px-6 md:px-20 flex flex-col items-center text-center"
    >
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        🚀 Siap Bekerja Sama?
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-lg md:text-xl max-w-3xl text-gray-300 leading-relaxed"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        Mari wujudkan visi dan tujuan Anda bersama saya! Jangan ragu untuk
        menghubungi saya dan kita bisa berdiskusi lebih lanjut. Saya siap
        memberikan solusi terbaik untuk Anda! 💡✨
      </motion.p>

      {/* Call to Action Buttons */}
      <motion.div
        className="mt-8 flex flex-col md:flex-row gap-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <motion.a
          href="https://wa.me/yourphonenumber"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-yellow-400 text-gray-900 font-bold text-lg rounded-xl shadow-lg hover:bg-yellow-500 transition-all transform hover:scale-110 flex items-center gap-2"
          whileHover={{ scale: 1.1 }}
        >
          📞 Hubungi Saya
        </motion.a>

        <motion.a
          href="mailto:youremail@example.com"
          className="px-8 py-4 bg-transparent border-2 border-yellow-400 text-yellow-400 font-bold text-lg rounded-xl shadow-lg hover:bg-yellow-500 hover:text-gray-900 transition-all transform hover:scale-110 flex items-center gap-2"
          whileHover={{ scale: 1.1 }}
        >
          📩 Kirim Email
        </motion.a>
      </motion.div>
    </section>
  );
};

export default CTASection;
