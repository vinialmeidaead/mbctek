"use client";
import React, { useState } from "react";
import { motion, AnimatePresence, MotionValue } from "framer-motion";

const CourseModule = ({ title, topics, isOpen, toggleOpen }: any) => {
  return (
    <div className="mb-4">
      <motion.button
        className="w-full text-left bg-gray-800 p-4 rounded-lg flex justify-between items-center"
        onClick={toggleOpen}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <h3 className="text-xl font-semibold text-green-400">{title}</h3>
        <svg
          className={`w-6 h-6 transform transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </motion.button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-gray-700 p-4 rounded-b-lg mt-1"
          >
            <ol className="list-decimal list-inside space-y-2">
              {topics.map(
                (
                  topic:
                    | string
                    | number
                    | bigint
                    | boolean
                    | React.ReactElement<
                        any,
                        string | React.JSXElementConstructor<any>
                      >
                    | Iterable<React.ReactNode>
                    | React.ReactPortal
                    | Promise<React.AwaitedReactNode>
                    | MotionValue<number>
                    | MotionValue<string>
                    | null
                    | undefined,
                  index: React.Key | null | undefined
                ) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-gray-300"
                  >
                    {topic}
                  </motion.li>
                )
              )}
            </ol>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const CourseCurriculumSection = () => {
  const [openModule, setOpenModule] = useState<any>(null);

  const modules = [
    {
      title: "Módulo 01: Começando a falar da ferramenta IBM Cognos Analytics",
      topics: [
        "Apresentação das funcionalidades do Portal IBM Cognos",
        "Criação de Relatório Lista com tabelas e utilização de templates",
        "Criação de Relatório Tabela Cruzada com tabelas e utilização de templates",
        "Criação de DashBoard através de Relatório Lista e Tabela Cruzada",
        "Criação de Página de Prompt",
        "Criação de Relatório com Página de Prompt",
        "Implementação de funções MDX para tratamento de dados e de-paras",
        "Como definir relacionamentos entre vários armazéns de dados (pacotes)",
        "Criação de Relatório utilizando Queries (Consultas) Associação, União, Intersecção",
        "Melhores práticas de construção de Relatórios (Nomes, Variáveis, Objetos)",
      ],
    },
    {
      title: "Módulo 02: Importação de dados externos",
      topics: [
        "Importação de dados externos através de um Módulo de Dados",
        "Importação de dados externos através do portal IBM Cognos Analytics",
      ],
    },
    {
      title: "Módulo 03: Módulo de dados",
      topics: ["Criação de Módulo de Dados"],
    },
    {
      title: "Módulo 04: Painéis (Dashboards)",
      topics: ["Criação de Painéis", "Melhores Práticas"],
    },
    {
      title: "Módulo 05: Relatório Ativo (Active Report)",
      topics: [
        "Criação de Relatório Ativo (Active Report)",
        "Vantagens de Criação de Relatório Ativo – Arquivo .MHT (offline)",
      ],
    },
    {
      title: "Módulo 06: Drill-Down, Drill-Through e Granularidade de dados",
      topics: [
        "Apresentação da funcionalidade Drill-Down",
        "Apresentação da funcionalidade Drill- Through",
        "Sobre Granularidade de Informações",
      ],
    },
    {
      title:
        "Módulo 07: Melhores Práticas, Performance, Governança e Sustentação",
      topics: [
        "Apresentação de melhores práticas de desenvolvimento de Relatórios",
        "Padronização e nomenclaturas",
        "Governança",
        "Dicionário de dados",
        "Sustentação",
      ],
    },
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
            Veja Tudo o Que Você Vai Aprender
          </h2>
          <p className="text-xl text-gray-300">
            Um currículo completo para dominar o IBM Cognos Analytics
          </p>
        </motion.div>

        <div className="space-y-6">
          {modules.map((module, index) => (
            <CourseModule
              key={index}
              title={module.title}
              topics={module.topics}
              isOpen={openModule === index}
              toggleOpen={() =>
                setOpenModule(openModule === index ? null : index)
              }
            />
          ))}
        </div>
        <p className="text-xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 mt-2 text-center">
          Você que já atua com a plataforma IBM Cognos Analytics na sua empresa
          poderá acessar a ferramenta e realizar o curso. Para você que não tem
          acesso à ferramenta, basta contratá-la no site da IBM que possibilita
          a utilização por 30 dias de forma gratuita (Free), envie-nos mensagem
          para contato@mbctek.com.br que enviaremos o link para download da
          ferramenta.
        </p>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.a
            className="bg-gradient-to-r from-green-500 to-blue-500 text-white font-bold py-3 px-8 rounded-full text-lg shadow-lg transform transition duration-300 hover:from-green-600 hover:to-blue-600"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#oferta"
          >
            GARANTIR MINHA MATRÍCULA
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default CourseCurriculumSection;
