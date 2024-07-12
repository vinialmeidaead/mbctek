import React from "react";
import { motion } from "framer-motion";

const CallToActionSection = () => {
  return (
    <div className=" text-white py-20 ">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Decida Agora e Lidera Amanhã
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Não perca a oportunidade de transformar sua carreira e se tornar um especialista em uma das ferramentas mais poderosas de Business Intelligence no mercado. Inscreva-se agora para garantir seu lugar no futuro dos dados e dar um grande salto em sua carreira profissional.
          </p>
          <motion.button
            className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform transition duration-300 hover:from-green-600 hover:to-blue-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            GARANTIR MINHA MATRÍCULA
          </motion.button>
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Faça parte do futuro da análise de dados!
          </h3>
        </motion.div>
      </div>
    </div>
  );
};

export default CallToActionSection;
