import React from 'react'
import { useRef } from 'react'
import { motion, stagger, useInView , useScroll , useTransform } from "framer-motion"
import { useTheme } from '../../context/ThemeContext'
import {JOURNEY_STEPS , PASSIONS} from '../../utils/data'
import SIGNATURE from "../../assets/images/singature.jpeg"
import {containerVariants , itemVariants} from "../../utils/helper"

const AboutSection = () => {
    const {isDarkMode} = useTheme()
    const sectionRef = useRef(null)
    const timelineRef = useRef(null)
    const isInView = useInView(sectionRef , {once : true , margin : "-100px"})
    const timelineInView = useInView(timelineRef ,{
        once : true,
        margin : "-50px"
    } )

        const {scrollYProgress} = useScroll({
        target : sectionRef,
        offset : ["start end" , "end start"],
    })

    const y = useTransform(scrollYProgress , [0 , 1] , ["50" , "-50"])

    const timelineVariants ={
        hidden : { opacity : 0},
        visible : {
            opacity : 1,
            transition : {
                staggerChildren : 0.2,
                delayChildren : 0.3,
            }
        }
    }

    const stepVariants = {
        hidden: {x: -50 , opacity : 0},
        visible : {
            x : 0,
            opacity : 1,
            transition : {duration : 0.6 , ease : "easeOut"}
        }
    }



  return <section
    ref={sectionRef}
    id="about"
    className={`px-6 py-24 ${
        isDarkMode ? "bg-gray-950 text-white" : "bg-gray-100 text-gray-900"
    } relative overflow-hidden`}
    >
        {/* Background Elements */}
        <motion.div style={{y}} className="absolute inset-0 overflow-hidden">
            <div
            className={`absolute top-40 right-1/3 w-80 h-80 rounded-full blur-3xl opacity-5 ${
                isDarkMode ? "bg-blue-500" : "bg-blue-400"
            }`}
            />
            <div
            className={`absolute bottom-20 left-1/3 w-96 h-96 rounded-full blur-3xl opacity-5 ${
                isDarkMode ? "bg-purple-500" : "bg-purple-400"
            }`}
            />
        </motion.div>

        <div className="max-w-6xl mx-auto relative z-10">

            {/* Section Header */}
            <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className='text-center mb-20'
            >

                <motion.div
                variants={itemVariants}
                className={`text-sm uppercase tracking-widest ${
                    isDarkMode ? "text-gray-500" : "text-gray-600"
                } mb-4 text-center`}
                >
                    Get to know me
               </motion.div>     

                <motion.h2
                variants={itemVariants}
                className='text-4xl md:text-5xl font-light mb-6'
                >
                    About
                    <span className="text-blue-500 font-medium"> Me</span>
                </motion.h2>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-16 items-start">
                {/* Personal Story  */}
                <motion.div
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
                className='space-y-10'
                >
                    <motion.div
                    variants={itemVariants}
                    className={`p-8 rounded-2xl border ${
                        isDarkMode
                        ? "bg-gray-800/50 border-gray-700 backdrop-blur-sm"
                        : "bg-gray-50/80 border-gray-200 backdrop-blur-sm"
                    } `}
                    >
                        <h3 className="text-2xl font-medium mb-6">
                            My Mission
                        </h3>
                        <p className={`mt-4 text-lg leading-relaxed ${
                            isDarkMode ? "text-gray-300" : "text-gray-700"
                        }`}>
                            I am passionate about creating impactful digital experiences that
                            solve real-world problems. My mission is to leverage technology to
                            drive innovation and make a positive difference in people's lives
                            accessible and user-friendly solutions that empower users and
                        </p>
                        <p className={`mt-4 text-base leading-relaxed ${
                            isDarkMode ? "text-gray-300" : "text-gray-700"
                        }`}>
                            I believe in continuous learning and growth, and I am committed to
                            staying at the forefront of industry trends and best practices. I
                            thrive in collaborative environments where I can contribute my
                            skills and learn from others to achieve shared goals.
                        </p>
                    </motion.div>

                    {/* What I Love Bulding */}
                    <motion.div
                    variants={itemVariants}
                    className='space-y-6'
                    >
                        <h3 className="text-xl font-medium mb-6">What I Love Building</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                            {PASSIONS.map((passion , index)=>(
                                <motion.div
                                key={passion.title}
                                variants={stepVariants}
                                whileHover={{x: 4}}
                                className={`flex items-center space-x-2 p-4 rounded-xl ${
                                    isDarkMode
                                    ? "bg-gray-800/30 border-gray-700 hover:bg-gray-800/50"
                                    : "bg-gray-50/50  border-gray-200 hover:bg-gray-100/50"
                                } transition-all duration-300`}
                                >
                                    <div className={`p-3 rounded-lg ${
                                        isDarkMode ? "bg-gray-700" : "bg-white"
                                    }`}
                                    >
                                        <passion.icon size={24} className="text-blue-500"/>
                                    </div>
                                    <div>
                                        <h4 className="font-medium">{passion.title}</h4>
                                        <p className={`text-sm ${
                                            isDarkMode ? "text-gray-400" : "text-gray-600"
                                        }`}>
                                            {passion.description}
                                        </p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Digital Singnatuture */}
                    <motion.div
                    variants={itemVariants}
                    className='text-center py-8'
                    >
                        <div
                        className={`text-sm ${
                            isDarkMode ? "text-gray-400" : "text-gray-600"
                        }`}
                        >
                            Crafted With passion by
                        </div>

                        {/* DigitSignature */}
                        <div className="flex justify-center">
                            <img 
                            src={SIGNATURE}
                             alt="Signature"
                             className='w-32  h-32 object-cover rounded-full border-4 border-blue-500 mt-3'
                              />
                        </div>

                        <div className="text-lg font-semibold text-blue-400 mt-2">
                            Mohammed Sharif
                        </div>
                    </motion.div>
                </motion.div>

                {/* Developer Jounrey Timline */}
                <motion.div
                ref={timelineRef}
                initial="hidden"
                animate={timelineInView ? "visible" : "hidden"}
                variants={timelineVariants}
                className='relative'
                >
                    <h3 className="text-2xl font-medium mb-8 text-center lg:text-left">
                        My Journey as a Developer
                    </h3>

                    {/* Timeline Line */}
                    <div
                    className={`absolute left-8 top-16  bottom-0 w-px ${
                        isDarkMode ? "bg-gray-700" : "bg-gray-300"
                    }`}
                    />

                    <div className='space-y-8 '>
                        {JOURNEY_STEPS.map((srep , index)=>(
                            <motion.div
                            key={srep.year}
                            variants={stepVariants}
                            whileHover={{x: 4}}
                            className='relative flex items-start space-x-6 group'
                            >
                                {/* Timeline Dot */}
                                <div 
                                className={`relative z-10 flex-shrink-0 w-16 h-16 rounded-full ${srep.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                                >
                                    <srep.icon size={24} className="text-white"/>
                                </div>

                                {/* Step Content */}
                                <div
                                className={`flex-grow p-6 rounded-2xl border transition-all duration-300 ${
                                    isDarkMode
                                    ? "bg-gray-800/50 border-gray-700 hover:bg-gray-800/70"
                                    : "bg-gray-50/80 border-gray-200 hover:bg-gray-100/80"
                                } backdrop-blur-sm `}
                                >
                                    <div className='flex items-center justify-between mb-2'>
                                        <h4 className="text-xl font-medium">{srep.title}</h4>
                                        <span className={`text-sm px-3 py-1 rounded-full ${
                                            isDarkMode
                                            ? "bg-gray-700 text-gray-300"
                                            : "bg-gray-100 text-gray-700"
                                        }`}>
                                            {srep.year}
                                        </span>
                                    </div>

                                    <div 
                                    className={`text-sm font-medium ${
                                        isDarkMode ? "text-blue-400" : "text-blue-600"
                                    } mt-3`}
                                >
                                    {srep.company}
                                </div>
                                    <p className={`mt-2 text-sm leading-relaxed ${
                                        isDarkMode ? "text-gray-400" : "text-gray-600"
                                    }`}>
                                        {srep.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Call to Action */}
            <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={containerVariants}
            className='text-center mt-20'
            >
                <motion.div
                variants={itemVariants}
                className='flex flex-col items-center space-y-6'
                >
                    <p
                    className={`text-lg ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                    }`}
                    >
                        Interested in collaborating or have a project in mind?
                    </p>

                    <motion.button
                    whileHover={{y: -2 , scale : 1.05}}
                    whileTap={{scale : 0.95}}
                    className='bg-blue-500 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-medium flex items-center space-x-2 transition-all duration-300 cursor-pointer'
                    >
                        Let`s Work Together
                    </motion.button>
                </motion.div>
            </motion.div>
        </div>
</section>
}

export default AboutSection