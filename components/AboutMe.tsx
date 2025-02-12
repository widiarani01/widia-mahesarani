import { motion } from "framer-motion";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="bg-gradient-to-r from-gray-700 via-gray-500 to-gray-800 text-white py-16 px-6 md:px-20 flex flex-col items-center text-center"
    >
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-yellow-400 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Tentang Saya
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-5x1 md:text-xl max-w-2xl text-gray-300 leading-relaxed"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        Saya adalah mahasiswa Manajemen di Universitas Terbuka dan penerima
       beasiswa Masa Depan Jakarta dari Baznas Bazis DKI Jakarta. Berpengalaman
        di dunia retail & food and beverage, saya memiliki keahlian dalam
        manajemen bisnis, komunikasi, dan teamwork. Saya siap berkontribusi
        dengan jujur, bertanggung jawab, dan tekun.
      </motion.p>

      {/* Animated Highlight Elements */}
      <motion.div
        className="mt-8 flex space-x-4"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        <motion.span
          className="px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-lg"
          whileHover={{ scale: 1.1 }}
        >
          Manajemen
        </motion.span>
        <motion.span
          className="px-4 py-2 bg-gray-300 text-gray-900 font-semibold rounded-lg shadow-lg"
          whileHover={{ scale: 1.1 }}
        >
          Leadership
        </motion.span>
        <motion.span
          className="px-4 py-2 bg-gray-800 text-yellow-400 font-semibold rounded-lg shadow-lg"
          whileHover={{ scale: 1.1 }}
        >
          Teamwork
        </motion.span>
      </motion.div>
    </section>
  );
};

export default AboutMe;
