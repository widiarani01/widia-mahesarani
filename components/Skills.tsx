import { motion } from "framer-motion";


const skills = [
  { name: "Manajemen Bisnis", emoji: "📈" },
  { name: "Komunikasi Efektif", emoji: "🗣️" },
  { name: "Teamwork", emoji: "🤝" },
  { name: "Leadership", emoji: "👨‍💼" },
  { name: "Sales & Marketing", emoji: "📊" },
  { name: "Administrasi", emoji: "💻" },
  { name: "Accounting", emoji: "💲" },
  { name: "Customer Service", emoji: "💬" },
];

const MainSection = () => {
  return (
    <section
      id="main"
      className="bg-gradient-to-r from-gray-700 via-gray-500 to-gray-800 text-white py-20 px-6 md:px-20 flex flex-col items-center text-center"
    >
      {/* Title */}
      <motion.h2
        className="text-4xl md:text-5xl font-extrabold text-yellow-400 mb-6"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        🚀 Kenapa Memilih Saya?
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-lg md:text-xl max-w-3xl text-gray-300 leading-relaxed"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        Dengan pengalaman di **manajemen bisnis, komunikasi, dan teamwork**, saya
        siap membantu bisnis Anda berkembang. Saya memiliki dedikasi tinggi, 
        keterampilan multitasking, dan etos kerja yang kuat dalam setiap proyek yang saya jalankan.
      </motion.p>

      {/* Highlighted Skills */}
      <motion.div
        className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
      >
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center justify-center px-6 py-4 bg-gray-800 text-yellow-400 font-semibold rounded-2xl shadow-lg hover:bg-yellow-500 hover:text-gray-900 transition-all transform hover:scale-110"
            whileHover={{ scale: 1.1 }}
          >
            <span className="text-3xl">{skill.emoji}</span>
            <span className="mt-2 text-lg">{skill.name}</span>
          </motion.div>
        ))}
      </motion.div>

      {/* Call to Action Button */}
      <motion.a
        href="#contact"
        className="mt-10 px-8 py-4 bg-yellow-400 text-gray-900 font-bold text-lg rounded-xl shadow-lg hover:bg-yellow-500 transition-all transform hover:scale-110"
        whileHover={{ scale: 1.1 }}
      >
        🔥 Hubungi Saya Sekarang!
      </motion.a>
    </section>
  );
};

export default MainSection;
