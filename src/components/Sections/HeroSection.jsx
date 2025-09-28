
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Mail } from "lucide-react";
import { FiGithub, FiLinkedin } from "react-icons/fi";
import { useTheme } from "../../context/ThemeContext";
import PROFILE_PIC from "../../assets/images/project-1.jpeg";
import { containerVariants, itemVariants } from "../../utils/helper";

const HeroSection = () => {
  const { isDarkMode } = useTheme();

  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, -100]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };



  const textVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1, ease: "easeOut", delay: 0.5 } },
  };

  return (
    <div
      className={`min-h-screen transition-all duration-500 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <motion.section
        id="home"
        style={{ y: heroY }}
        className="min-h-screen flex items-center justify-center relative px-6 pt-10"
      >

        <div className="absolute inset-0 overflow-hidden hidden" />

        <div className="max-w-7xl mx-auto w-full z-10 mt-20">
          {/* ========== Mobile ========== */}
          <div className="block lg:hidden">
            <motion.div initial="hidden" animate="visible" variants={containerVariants}>
              {/* Image */}
              <motion.div variants={imageVariants} className="mb-8">
                <div className="w-32 h-32 mx-auto relative">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className={`relative w-full h-full rounded-2xl overflow-hidden border-4 shadow-2xl ${
                      isDarkMode ? "border-gray-800" : "border-gray-400"
                    }`}
                  >
                    <img src={PROFILE_PIC} alt="Profile" className="w-full h-full object-cover" loading="lazy" />
                  </motion.div>
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="pointer-events-none absolute -inset-2 rounded-3xl border border-blue-500/20"
                  />
                </div>
              </motion.div>

              {/* Text */}
              <motion.div
                variants={textVariants}
                className={`text-sm uppercase tracking-widest text-center ${
                  isDarkMode ? "text-gray-500" : "text-gray-600"
                } mb-4`}
              >
                Full Stack Developer
              </motion.div>

              <motion.h1 variants={itemVariants} className="text-3xl md:text-5xl font-extrabold leading-tight text-center mb-4">
                <span className={isDarkMode ? "text-white" : "text-gray-900"}>Building digital</span>{" "}
                <span className="text-blue-500 font-medium ml-2">experiences</span>
                <br />
                <span className={isDarkMode ? "text-white" : "text-gray-900"}>that matter</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className={`text-base md:text-lg ${
                  isDarkMode ? "text-gray-400" : "text-gray-600"
                } mb-8 max-w-xl mx-auto font-light leading-relaxed text-center`}
              >
                I craft beautiful, functional web applications with modern technologies and thoughtful user experiences.
              </motion.p>

              {/* CTA */}
              <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-6">
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("work")}
                  className={`px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300 ${
                    isDarkMode ? "bg-white text-gray-900 hover:bg-gray-200" : "bg-gray-900 text-white hover:bg-gray-800"
                  }`}
                >
                  View Work
                </motion.button>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("contact")}
                  className={`border ${
                    isDarkMode ? "border-gray-700 hover:border-gray-600 text-gray-300" : "border-gray-300 hover:border-gray-400 text-gray-700"
                  } px-8 py-3 rounded-full text-sm uppercase tracking-wider font-medium transition-all duration-300`}
                >
                  Get in Touch
                </motion.button>
              </motion.div>

              {/* Social */}
              <motion.div variants={itemVariants} className="flex items-center space-x-6 justify-center gap-2">
                {[{ icon: FiGithub, href: "#", label: "GitHub" }, { icon: FiLinkedin, href: "#", label: "LinkedIn" }, { icon: Mail, href: "#", label: "Email" }].map(
                  (social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      whileHover={{ y: -3, scale: 1.1 }}
                      className={`p-3 rounded-full transition-colors ${
                        isDarkMode ? "text-gray-400 hover:text-white hover:bg-gray-800" : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                      }`}
                    >
                      <social.icon size={20} />
                    </motion.a>
                  )
                )}
              </motion.div>

              {/* Tech */}
              <motion.div variants={itemVariants} className="flex items-center space-x-6 flex-wrap justify-center gap-2 mt-6">
                <span className={isDarkMode ? "text-gray-600" : "text-gray-500"}>React</span>
                <span className={isDarkMode ? "text-gray-700" : "text-gray-400"}>•</span>
                <span className={isDarkMode ? "text-gray-600" : "text-gray-500"}>Node.js</span>
                <span className={isDarkMode ? "text-gray-700" : "text-gray-400"}>•</span>
                <span className={isDarkMode ? "text-gray-600" : "text-gray-500"}>JavaScript</span>
                <span className={isDarkMode ? "text-gray-700" : "text-gray-400"}>•</span>
                <span className={isDarkMode ? "text-gray-600" : "text-gray-500"}>MongoDB</span>
              </motion.div>
            </motion.div>
          </div>

          {/* ========== Desktop (two columns) ========== */}
          <div className="hidden lg:grid lg:grid-cols-2 lg:gap-16 lg:items-center">
            {/* Left: content */}
            <motion.div initial="hidden" animate="visible" variants={containerVariants} className="text-lg">
              <motion.div
                variants={textVariants}
                className={`text-sm uppercase tracking-wider ${isDarkMode ? "text-gray-500" : "text-gray-600"} mb-6`}
              >
                Full Stack Developer
              </motion.div>

              <motion.h1 variants={itemVariants} className="text-5xl xl:text-7xl font-light mb-8 leading-tight">
                <span className={isDarkMode ? "text-white" : "text-gray-900"}>Building digital</span>
                <br />
                <span className="text-blue-500 font-medium">experiences</span>
                <br />
                <span className={isDarkMode ? "text-white" : "text-gray-900"}>that matter</span>
              </motion.h1>

              <motion.p
                variants={itemVariants}
                className={`text-base md:text-lg ${isDarkMode ? "text-gray-400" : "text-gray-600"} mb-12 max-w-lg font-light leading-relaxed`}
              >
                I craft beautiful, functional web applications with modern technologies and thoughtful user experiences.
              </motion.p>

              {/* CTA */}
              <motion.div variants={itemVariants} className="flex space-x-6 mb-8">
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("work")}
                  className={`px-10 py-4 rounded-full text-base uppercase tracking-wider font-semibold transition-all duration-300 ${
                    isDarkMode ? "bg-white text-gray-900 hover:bg-gray-200" : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  View Work
                </motion.button>
                <motion.button
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => scrollToSection("contact")}
                  className={`border ${
                    isDarkMode ? "border-gray-700 hover:border-gray-600 text-gray-300" : "border-gray-300 hover:border-gray-400 text-gray-700"
                  } px-10 py-4 rounded-full text-base uppercase tracking-wider font-semibold transition-all duration-300`}
                >
                  Get in Touch
                </motion.button>
              </motion.div>

              {/* Social */}
              <motion.div variants={itemVariants} className="flex space-x-6 mb-12">
                {[{ icon: FiGithub, href: "#", label: "GitHub" }, { icon: FiLinkedin, href: "#", label: "LinkedIn" }, { icon: Mail, href: "#", label: "Email" }].map(
                  (social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      aria-label={social.label}
                      whileHover={{ y: -3, scale: 1.1 }}
                      className={`p-4 rounded-full transition-colors ${
                        isDarkMode ? "text-gray-400 hover:text-white hover:bg-gray-800" : "text-gray-600 hover:text-gray-900 hover:bg-gray-200"
                      }`}
                    >
                      <social.icon size={24} />
                    </motion.a>
                  )
                )}
              </motion.div>
            </motion.div>

            {/* Right: image + decorations */}
            <motion.div variants={imageVariants} className="relative flex items-center justify-end">
              {/* صورة وبوردر */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className={`relative w-80 h-96 rounded-3xl overflow-hidden border-4 shadow-2xl ${
                  isDarkMode ? "border-gray-800" : "border-gray-300"
                }`}
              >
                <img src={PROFILE_PIC} alt="Profile" className="w-full h-full object-cover" />
              </motion.div>

              {/* دوائر زخرفية داخل نفس العمود */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-3xl border border-blue-500/20"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className=" absolute -inset-4 rounded-3xl border border-purple-500/10"
              />

              {/* شريط الـTech فوق يمين الصورة */}
              <motion.div
                variants={itemVariants}
                className="flex items-center space-x-8 text-xs uppercase tracking-wider absolute -top-16 right-0"
              >
                <span className={isDarkMode ? "text-gray-600" : "text-gray-500"}>React</span>
                <span className={isDarkMode ? "text-gray-700" : "text-gray-400"}>•</span>
                <span className={isDarkMode ? "text-gray-600" : "text-gray-500"}>Node.js</span>
                <span className={isDarkMode ? "text-gray-700" : "text-gray-400"}>•</span>
                <span className={isDarkMode ? "text-gray-600" : "text-gray-500"}>JavaScript</span>
                <span className={isDarkMode ? "text-gray-700" : "text-gray-400"}>•</span>
                <span className={isDarkMode ? "text-gray-600" : "text-gray-500"}>MongoDB</span>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ArrowDown size={20} className={isDarkMode ? "text-gray-600" : "text-gray-400"} />
        </motion.div>
      </motion.section>
    </div>
  );
};

export default HeroSection;