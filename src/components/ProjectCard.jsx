import { motion } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import { FiGithub } from 'react-icons/fi'

const ProjectCard = ({project ,isDarkMode , index }) => {
    const cardVariants = {
    hidden : {opacity : 0 , y : 20},
    visible : {
        opacity : 1,
        y : 0,
        transition : {
            duration : 0.6,
            ease : "easeOut"
        }
    }
}
  return <motion.div
    variants={cardVariants}
    whileHover={{
        y : -8,
        transition : {duration : 0.3 , ease : "easeOut"},
    }}
    className='group relative'
    >
        <div 
        className={`rounded-2xl overflow-hidden border transition-all duration-500 ${
            isDarkMode 
            ? "bg-gray-900/50 border-gray-800 hover:border-gray-700 hover:shadow-2xl hover:shadow-blue-500/15"
            : "bg-white/80 border-gray-200 hover:border-gray-300 hover:shadow-2xl hover:shadow-blue-500/15"
        } backdrop-blur-sm`}
        >
            {/* Project Image */}
            <div className="relative overflow-hidden">
                <img
                src={project.image}
                alt={project.title}
                className='w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105'
                />

                {/* Featured Badge */}
                {project.featured && (
                    <div className="absolute top-4 left-3 text-white px-2 py-1 rounded-full flex items-center gap-1">
                        <span className="bg-blue-500 rounded-full text-white px-3 py-1 text-xs font-medium">
                            Featured
                        </span>
                    </div>
                )}

                {/* Category Badeg */}
                <div className="absolute top-4 right-3">
                    <span
                    className={`text-xs font-medium px-3 py-1 rounded-full ${
                        isDarkMode 
                        ? "bg-blue-800/80 text-blue-300" 
                        : "bg-white/80 text-gray-700"
                    }backdrop-blur-sm`}
                    >
                        {project.category}
                    </span>
                </div>

                {/* Hover with Links CTA Links */}
                <motion.div
                initial={{opacity : 0}}
                whileHover={{opacity : 1}}
                transition={{duration : 0.3 , ease : "easeInOut"}}
                className='absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col justify-center items-center gap-4 space-x-2 opacity-0'
                >
                    <motion.a
                    href={project.liveUrl}
                    initial={{y: 20 , opacity: 0.5}}
                    whileHover={{y: 0 , opacity: 1 , scale: 1.1}}
                    transition={{duration : 0.3 , ease : "easeOut" , delay : 0.1}}
                    className='bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-full flex items-center gap-2 font-medium space-x-2 text-sm transition-colors'
                    >
                        <ExternalLink size={16} className=''/>
                        <span className=''>Live Demo</span>
                    </motion.a>

                    <motion.a
                    href={project.githubUrl}
                    initial={{y: 20 , opacity: 0.5}}
                    whileHover={{y: 0 , opacity: 1 , scale: 1.1}}
                    transition={{duration : 0.3 , ease : "easeOut" , delay : 0.2}}
                    className={`border-2 border-white text-white hover:bg-white hover:text-gray-900 px-4 py-2 rounded-full flex items-center gap-2 font-medium space-x-2 text-sm transition-all `}
                    >
                        <FiGithub size={16} className=''/>
                        <span className=''>Github </span>
                    </motion.a>
                </motion.div>
            </div>

            {/* Project Details content */}
            <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 group-hover:text-blue-500 transition-colors">
                    {project.title}
                    </h3>

                    <p className={`text-sm leading-relaxed mt-4 ${
                        isDarkMode ? "text-gray-400" : "text-gray-600"
                    } `}>
                        {project.description}
                    </p>

                    {/* Tch Stack Tags */}
                    <div className="flex flex-wrap mt-4 gap-2">
                        {project.tags.map((tags , tagIndex)=>(
                            <span
                            key={tagIndex}
                            className={`text-xs font-medium mr-2 mt-4 inline-block px-3 py-1 rounded-full ${
                                isDarkMode
                                ? "bg-gray-800 text-gray-300"
                                : "bg-gray-200 text-gray-700"
                            }`}
                            >
                                {tags}
                            </span>
                        ))}
                    </div>
            </div>


            
        </div>
    </motion.div>

}

export default ProjectCard