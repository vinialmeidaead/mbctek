"use client"
import React, { useState } from "react";
import { motion } from "framer-motion";

const FAQItem = ({ question, answer, isOpen, toggleOpen }:any) => {
  return (
    <div className="mb-4">
      <motion.button
        className="w-full text-left bg-gray-800 p-4 rounded-lg flex justify-between items-center"
        onClick={toggleOpen}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <h3 className="text-xl font-semibold text-green-400">{question}</h3>
        <svg
          className={`w-6 h-6 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </motion.button>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.01, ease: "easeInOut" }}
          className="bg-gray-700 p-4 rounded-b-lg mt-1"
        >
          <p className="text-gray-30 text-start">{answer}</p>
        </motion.div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const [openQuestion, setOpenQuestion] = useState<any>(null);

  const faqs = [
    {
      question: "Preciso ter conhecimentos prévios em Business Intelligence para fazer o curso?",
      answer: "Não é necessário ter conhecimento prévio em BI para se beneficiar deste curso. Nossos módulos são projetados para guiar os alunos desde os fundamentos até as práticas avançadas.",
    },
    {
      question: "Quais são os requisitos técnicos para participar do curso?",
      answer: "Você precisará de um computador com acesso à internet e capacidade para rodar o software IBM Cognos. Recomendamos um sistema operacional atualizado e um navegador web moderno.",
    },
    {
      question: "Como posso acessar o curso e por quanto tempo terei acesso ao material?",
      answer: "O acesso ao curso é feito via nossa plataforma de aprendizado online, onde você pode acessar vídeos, leituras e exercícios. Após a conclusão, você terá acesso ao material do curso por mais um ano para revisão.",
    },
    {
      question: "Há suporte individual disponível durante o curso?",
      answer: "Sim, oferecemos suporte individual através de sessões de tutoria programadas e fóruns de discussão onde você pode postar dúvidas a qualquer momento.",
    },
    {
      question: "O curso oferece certificado?",
      answer: "Sim, ao concluir o curso, você receberá um certificado digital de conclusão, validando suas habilidades e conhecimento adquirido para potenciais empregadores.",
    },
  ];

  return (
    <div className="bg-gradient-to-b from-gray-800 to-gray-900 text-white py-20 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-gray-300">
            Aqui estão algumas respostas para as perguntas mais comuns sobre o curso
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-center mb-12"
        >
          <div className="space-y-6">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openQuestion === index}
              toggleOpen={() =>
                setOpenQuestion(openQuestion === index ? null : index)
              }
            />
          ))}
        </div>
        </motion.div>

        

      </div>
    </div>
  );
};

export default FAQSection;
