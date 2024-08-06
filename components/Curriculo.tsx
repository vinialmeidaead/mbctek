import React from 'react';
import { motion } from 'framer-motion';

const CurriculumSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const achievements = [
    "Mais de 30 anos atuando com a plataforma IBM Cognos",
    "Consultor especialista em Business Intelligence desde 1991",
    "Conhecedor de todas as versões lançadas pela COGNOS Software e IBM",
    "Atuação em diversas consultorias de TI em São Paulo, Curitiba, Ceará e Brasília",
    "Experiência em vários segmentos de negócios",
    "Diversas certificações IBM Cognos",
    "Desenvolvimento de projetos apoiando equipe IBM",
    "Atuação em grandes empresas como Itaú, Bradesco, Santander, e muitas outras",
    "Experiência em consultorias como SOFTTEK, RESOURCE, UNIPLACE, e outras"
  ];

  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Conheça seu Professor
          </h2>
          <p className="text-xl text-gray-300">Alessandro Moraes</p>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-8 ">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="w-[350px] h-[350px] rounded-full overflow-hidden shadow-xl md:ml-20"
          >
            <img src="prof.png" alt="Professor Alessandro Moraes" className="w-full h-full object-bottom" />
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="flex-1"
          >
            <motion.h3 
              variants={itemVariants}
              className="text-2xl font-bold mb-4 text-green-400"
            >
              Experiência e Expertise
            </motion.h3>
            <motion.ul variants={containerVariants} className="space-y-3">
              {achievements.map((achievement, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  className="flex items-start"
                >
                  <svg className="w-6 h-6 text-green-500 mr-2 flex-shrink-0 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span className="text-gray-300">{achievement}</span>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <p className="text-xl text-gray-300 mb-6">
            Aprenda com um dos maiores especialistas em IBM Cognos do Brasil!
          </p>
          <motion.a 
            className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform transition duration-300 hover:from-green-600 hover:to-blue-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#oferta"
          >
            COMECE SUA JORNADA AGORA
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default CurriculumSection;