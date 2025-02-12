import { motion } from "framer-motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-gray-700 via-gray-500 to-gray-800 text-white min-h-screen flex flex-col md:flex-row justify-center items-center text-center md:text-left px-6 md:px-20">
      
      <motion.div
        className="md:w-1/2"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold leading-tight">
          Halo, Saya
          <motion.span 
            className="block text-yellow-400"
            whileHover={{ scale: 1.1 }}
          >
            Widia Mahesarani
          </motion.span>
        </h1>
        
        <p className="text-lg md:text-xl mt-4 text-gray-300">
          Manajemen & Retail Expert | Siap Berkontribusi 🚀
        </p>

        <motion.a
          href="#contact"
          className="mt-6 inline-block px-6 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-lg hover:bg-yellow-500 transition duration-300"
          whileHover={{ scale: 1.1 }}
        >
          Hubungi Saya 🔥
        </motion.a>
      </motion.div>

      <motion.div
        className="md:w-1/2 flex justify-center relative"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full border-4 border-yellow-400 shadow-xl overflow-hidden">
          <Image src="/widiaalmet.jpeg" alt="Widia Profile" layout="fill" objectFit="cover" />
        </div>

        <motion.div
          className="absolute top-5 left-5 w-12 h-12 bg-yellow-400 rounded-full shadow-lg"
          animate={{ y: [0, -10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        />
        <motion.div
          className="absolute bottom-5 right-5 w-16 h-16 bg-white opacity-20 rounded-lg"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 6, ease: "linear" }}
        />
      </motion.div>

    </section>
  );
};

export default Hero;
