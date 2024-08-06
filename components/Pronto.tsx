"use client"
import React from 'react';
import { motion } from 'framer-motion';

const CourseOutcomesAndCTA = () => {
  const outcomes = [
    {
      title: "Analisar e Interpretar Dados Complexos",
      description: "Utilize o IBM Cognos Analysis Studio para transformar grandes volumes de dados em insights claros e acionáveis que suportem decisões estratégicas.",
      icon: "📊"
    },
    {
      title: "Criar Relatórios e Dashboards Avançados",
      description: "Desenvolva habilidades para construir relatórios interativos e dashboards dinâmicos que comunicam eficazmente os resultados das análises para stakeholders em todos os níveis da organização.",
      icon: "📈"
    },
    {
      title: "Gerenciar Projetos de BI",
      description: "Lidere iniciativas de Business Intelligence, desde a fase de planejamento e coleta de dados até a análise e apresentação dos resultados.",
      icon: "🚀"
    },
    {
      title: "Implementar Práticas de Governança de Dados",
      description: "Aplique as melhores práticas de governança e segurança para garantir a integridade, confiabilidade e segurança dos dados analisados.",
      icon: "🛡️"
    },
    {
      title: "Otimizar a Performance das Soluções de BI",
      description: "Melhore a eficiência e performance dos sistemas de BI através de técnicas avançadas e otimização contínua.",
      icon: "⚡"
    },
    {
      title: "Inovar com Integrações e Automações",
      description: "Integre o IBM Cognos com outras plataformas e automatize processos para expandir as capacidades analíticas e operacionais de sua organização.",
      icon: "🔗"
    }
  ];

  return (
    <div className=" text-white py-20">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold mb-12 text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Ao concluir o Curso Prático IBM Cognos Analysis Studio, você estará apto a:
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {outcomes.map((outcome, index) => (
            <motion.div 
              key={index}
              className="bg-gray-700 p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center mb-4">
                <span className="text-4xl mr-4">{outcome.icon}</span>
                <h3 className="text-xl font-bold text-green-400">{outcome.title}</h3>
              </div>
              <p className="text-gray-300">{outcome.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-bold mb-4 text-yellow-400">
            Pronto para se Tornar um Especialista em IBM Cognos Analysis Studio?
          </h3>
          <p className="text-xl mb-8">
            Inscreva-se agora e transforme sua carreira com um dos softwares de BI mais poderosos do mercado mundial. 
            Garanta seu lugar no futuro dos dados e torne-se um líder decisivo na era da informação.
          </p>
          <p className="text-2xl font-bold text-green-400 mb-8">
            Aproveite a oferta limitada e comece hoje mesmo!
          </p>
          <motion.a 
            className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg transform transition duration-300 hover:from-green-600 hover:to-blue-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#oferta"
          >
            GARANTIR MINHA MATRÍCULA
          </motion.a>
        </motion.div>

        <motion.div 
          className="text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="text-lg text-gray-400">
            Não perca esta oportunidade de elevar sua carreira a novos patamares. 
            Vagas limitadas – garanta a sua agora!
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default CourseOutcomesAndCTA;