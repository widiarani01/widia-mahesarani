import { useState, useEffect } from "react";
import { Link as ScrollLink } from "react-scroll";
import { motion } from "framer-motion";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolling ? "bg-gray-900 shadow-md py-3" : "bg-transparent py-5"
      }`}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto flex justify-between items-center px-6 md:px-16">
        {/* Logo */}
        <h1 className="text-2xl md:text-3xl font-bold text-yellow-400">
          Widia Mahesarani
        </h1>

        {/* Navigation */}
        <nav>
          <ul className="flex gap-6 text-white text-lg">
            <li>
              <ScrollLink
                to="hero"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-yellow-400 transition-all"
              >
                Beranda
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="about"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-yellow-400 transition-all"
              >
                Tentang Saya
              </ScrollLink>
            </li>
            
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer hover:text-yellow-400 transition-all"
              >
                Kontak
              </ScrollLink>
            </li>
          </ul>
        </nav>
      </div>
    </motion.header>
  );
};

export default Header;
