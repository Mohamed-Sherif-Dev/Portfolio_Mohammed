import { useState, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useTheme } from "../../context/ThemeContext";
import { containerVariants, itemVariants } from "../../utils/helper";
import { Send } from "lucide-react";
import { SOCIAL_LINKS, CONTACT_INFO } from "../../utils/data";
import TexlInput from "../Input/TexlInput";
import SuccessModal from "../SuccessModal";
import { GiD4 } from "react-icons/gi";

const ContactSection = () => {
  const { isDarkMode } = useTheme();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["50", "-50"]);

  const handleInputChange = (key, value) => {
    setFormData({
      ...formData,
      [key]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API Call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setShowSuccess(true);
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    // Auto hide success message after 3 seconds
    setTimeout(() => setShowSuccess(false), 3000);
  };
  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`py-24 px-6 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-white text-gray-900"
      } relative overflow-hidden`}
    >
      {/* Background Elements */}
      <motion.div style={{ y }} className="absolute inset-0 overflow-hidden">
        <div
          className={`absolute top-20 left-1/4 w-72 h-72 rounded-full blur-3xl opacity-5 ${
            isDarkMode ? "bg-blue-500" : "bg-blue-400"
          }`}
        />
        <div
          className={`absolute bottom-40 right-1/4 w-80 h-80 rounded-full blur-3xl opacity-5 ${
            isDarkMode ? "bg-purple-500" : "bg-purple-400"
          }`}
        />
      </motion.div>

      <div className="amax-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
          className="text-center mb-20"
        >
          <motion.div
            variants={itemVariants}
            className={`text-sm uppercase trqacking-widest ${
              isDarkMode ? "text-gray-500" : "text-gray-600"
            }`}
          >
            Let`s Connect
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl md:text-5xl font-light mb-6"
          >
            Get in
            <span className="text-blue-600 font-medium ml-2">Touch</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className={`text-xl max-w-2xl mx-auto ${
              isDarkMode ? "text-gray-400" : "text-gray-700"
            }`}
          >
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions. Feel free to reach out
            using the form below or through my social media channels.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info & Form */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div
              variants={itemVariants}
              className={`p-8 rounded-2xl border ${
                isDarkMode
                  ? "bg-gray-800/50 border-gray-700 backdrop-blur-sm"
                  : "bg-white/80 border-gray-200 backdrop-blur-sm"
              }`}
            >
              <h3 className="text-2xl font-medium mb-6">Send me a message</h3>
              <div className="space-y-6">
                <div className="grid md:grid-cols-1 gap-6">
                  <TexlInput
                    isDarkMode={isDarkMode}
                    value={formData.name}
                    handleInputChange={(text) =>
                      handleInputChange("name", text)
                    }
                    label="Your Name"
                  />

                  <TexlInput
                    isDarkMode={isDarkMode}
                    value={formData.email}
                    handleInputChange={(text) =>
                      handleInputChange("email", text)
                    }
                    label="Your Email"
                  />

                  <TexlInput
                    isDarkMode={isDarkMode}
                    value={formData.message}
                    handleInputChange={(text) =>
                      handleInputChange("message", text)
                    }
                    label="Your Message"
                    textarea
                  />

                  <motion.button
                    disabled={isSubmitting}
                    whileHover={{ y: -2, scale: 1.02 }}
                    whileTap={{ y: 0, scale: 0.98 }}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded-lg flex items-center justify-center  disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                    onClick={handleSubmit}
                  >
                    {isSubmitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                          className="w-4 h-4 border-2 border-t-transparent border-white rounded-full"
                        />
                        <span className="ml-2">Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span className="ml-2">Send Message</span>
                      </>
                    )}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>


          {/* Contact Info & Socali Links */}
          <motion.div
          initial="hidden"
          animate={isInView ? "visible" : "hidden" }
          variants={containerVariants}
          className="space-y-8"
          >
            {/* Contact Informain */}
            <motion.div variants={itemVariants}>
                <h3 className="text-2xl font-medium mb-6">Contact Information</h3>
                <div className=" space-y-4 ">
                    {CONTACT_INFO.map((info , index)=>(
                        <motion.div
                        key={info.label}
                        variants={itemVariants}
                        whileHover={{x : 4}}
                        className={`flex items-center space-x-4 p-4 rounded-xl ${
                            isDarkMode
                            ? "bg-gray-800/30 hover:bg-gray-800/50"
                            : "bg-gray-500/50 hover:bg-gray-100/50"
                        } transition-all duration-300`}
                        >
                            <div 
                            className={`p-3 rounded-lg ${
                                isDarkMode ? "bg-gray-700" : "bg-white"
                            }`}
                            >
                                <info.icon size={20} className="text-blue-500" />
                            </div>
                            <div className="">
                                <div className={`text-sm ${
                                    isDarkMode ? "text-gray-500" : "text-gray-600"
                                }`}>
                                    {info.label}
                                </div>
                                <div className="font-medium">{info.value}</div>
                                </div>              
                        </motion.div>
                    ))}
                </div>
            </motion.div>

            {/* Socail Links */}
            <motion.div variants={itemVariants}>
                <h3 className="text-xl font-medium mb-6">Follw Me</h3>
                <div className="grid grid-cols-2 gap-4">
                    {SOCIAL_LINKS.map((socail)=>(
                        <motion.a
                        key={socail.name}
                        href={socail.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{scale : 1.05 , y:-2}}
                        whileTap={{scale: 0.95}}
                        className={`flex items-center space-x-3 p-4 rounded-xl border transition-all duration-300 ${
                            isDarkMode
                            ? "bg-gray-800/50 border-gray-700 hover:border-gray-600"
                            : 'bg-white/80 border-gray-200 hover:bg-gray-300'
                        } ${socail.bgColor} ${socail.color}`}
                        >
                            <socail.icon size={20} />
                            <span className="font-medium">{socail.name}</span>
                        </motion.a>
                    ))}
                </div>
            </motion.div>

            {/* Availabity Stuts */}
            <motion.div
            variants={itemVariants}
            className={`p-6 rounded-xl border ${
                isDarkMode
                ? "bg-green-500/10 border-green-500/20"
                : "bg-green-50 border-green-200"
            }`}
            >
                <div className="flex items-center space-x-3 mb-2">
                   <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse" />
                   <span className="font-medium text-green-500">
                    Availiable for work
                   </span>
                </div>
                <p 
                className={`text-sm ${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                }`}
                >
                   I’m currently available for freelance projects and full-time opportunities
                </p>
            </motion.div>
          </motion.div>
        </div>


        {/* Bottom CtA */}
        <motion.div 
        initial="hidden"
        animate={isInView ? "visible" : "hidden" }
        variants={containerVariants}
        className="text-center mt-20"
        >
            <motion.div
            variants={itemVariants}
            className={`max-w-2xl mx-auto p-8 rounded-2xl border ${
                isDarkMode 
                ? "bg-gray-800/30 hover:bg-gray-800/50"
                : "bg-gray-50/50 border-gray-200"
            }`}
            >
                <h3 className="text-xl font-medium mb-4">Prefer a Quick call?</h3>
                <p 
                className={`${
                    isDarkMode ? "text-gray-400" : "text-gray-600"
                }mb-6`}
                >
                    Sometimes a single conversation can save countless messages. Let's connect on a
                     quick call to exchange ideas and explore how I can help bring your project to life.
                </p>

                <motion.button 
                whileHover={{y : -2 , scale: 1.05}}
                whileTap={{scale: 0.98}}
                className={`px-6 py-3 rounded-full border font-medium transition-all duration-300 mt-6 ${
                    isDarkMode 
                    ? "border-gray-600 hover:border-blue-500 hover:text-blue-400"
                    : "border-gray-300 hover:border-blue-500 hover:text-blue-600"
                }`}
                >Schedule a Call
                </motion.button>
            </motion.div>
        </motion.div>
      </div>

      <SuccessModal
        showSuccess={showSuccess}
        setShowSuccess={setShowSuccess}
        isDarkMode={isDarkMode}
      />
    </section>
  );
};

export default ContactSection;
