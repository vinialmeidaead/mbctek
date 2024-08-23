"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const EnhancedCourseInfoSection = () => {
  const [activeTab, setActiveTab] = useState('what');

  const tabVariants = {
    inactive: { y: 10, opacity: 0 },
    active: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
          Descubra o Poder do IBM Cognos Analytics
          </h2>
          <p className="text-xl text-gray-300">Transforme sua carreira em Business Intelligence</p>
        </motion.div>

        <div className="flex justify-center mb-8">
          <motion.button
            className={`px-6 py-3 rounded-l-lg ${activeTab === 'what' ? 'bg-green-600' : 'bg-gray-700'} text-white font-semibold`}
            onClick={() => setActiveTab('what')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            O Que é o Curso?
          </motion.button>
          <motion.button
            className={`px-6 py-3 rounded-r-lg ${activeTab === 'who' ? 'bg-green-600' : 'bg-gray-700'} text-white font-semibold`}
            onClick={() => setActiveTab('who')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Para Quem é o Curso?
          </motion.button>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={contentVariants}
            className="bg-gray-800 p-8 rounded-lg shadow-2xl"
          >
            {activeTab === 'what' ? (
              <div>
                <h3 className="text-2xl font-bold mb-4 text-green-400">O Curso Definitivo de IBM Cognos Analytics</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Mergulhe no mundo do <span className="font-bold text-yellow-400">IBM Cognos Analytics (Analítico)</span>, 
                  dominando desde os fundamentos teóricos até as aplicações práticas mais avançadas. Transforme dados brutos 
                  em insights estratégicos que impulsionarão decisões de negócios revolucionárias.
                </p>
                <ul className="space-y-4 mb-6">
                  {['Abordagem hands-on', 'Exploração completa das funcionalidades', 'Capacitação para liderança em BI'].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <svg className="w-6 h-6 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                      </svg>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ) : (
              <div>
                <h3 className="text-2xl font-bold mb-4 text-green-400">Ideal para Profissionais Ambiciosos</h3>
                <p className="text-lg leading-relaxed mb-6">
                  Este curso é perfeito para quem busca se destacar no competitivo mundo do Business Intelligence. 
                  Se você almeja elevar sua carreira e se tornar um especialista reconhecido, este é o seu caminho para o sucesso.
                </p>
                <ul className="space-y-4 mb-6">
                  {['Analistas de BI', 'Gestores de dados', 'Analistas de negócios', 'Profissionais de TI'].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-center"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <svg className="w-6 h-6 text-yellow-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                      </svg>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            )}
            <motion.div 
              className="text-center"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <a href="#oferta" className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform transition duration-300 hover:from-green-600 hover:to-blue-600">
                GARANTIR MINHA MATRÍCULA
              </a>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default EnhancedCourseInfoSection;