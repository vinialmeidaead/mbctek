import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CombinedOffersBanner = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: { clientX: any; clientY: any }) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center text-white w-full relative overflow-hidden"
      id="oferta"
      style={{
        background:
          "linear-gradient(45deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
      }}
    >
      {[...Array(5)].map((_, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full opacity-10"
          style={{
            background:
              "radial-gradient(circle, rgba(46,125,50,0.8) 0%, rgba(46,125,50,0) 70%)",
            width: `${Math.random() * 300 + 100}px`,
            height: `${Math.random() * 300 + 100}px`,
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
          }}
          transition={{
            duration: Math.random() * 10 + 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      ))}
      <div className="max-w-6xl w-full text-center p-6 relative">
        <motion.h1 className="text-5xl font-bold mb-16 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500 ">
          Oferta Especial <br /> Curso Prático IBM Cognos Analytics
        </motion.h1>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Oferta Geral */}
          <motion.div
            className="flex-1 bg-gray-900 bg-opacity-75 rounded-lg p-8 shadow-lg"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-green-400">
              Oferta Geral
            </h2>
            <p className="text-xl text-gray-300 mb-4">
              R$ 3.999,00 por apenas R$ 2.999,00 à vista para as primeiras 50
              vagas. Acesso contínuo às atualizações pelo período de 12 meses.<br/>
              Ou parcelado em 12x R$ 249,91
            </p>
            <motion.a
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg text-lg shadow-lg transform hover:scale-105 transition duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://mbctek.eadplataforma.app/checkout/offer/course/11/8aanrjirlk5j"
            >
              GARANTIR MINHA MATRÍCULA
            </motion.a>
          </motion.div>

          {/* Oferta para Líderes */}
          <motion.div
            className="flex-1 bg-gray-900 bg-opacity-75 rounded-lg p-8 shadow-lg"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4 text-blue-400">
              Oferta para Líderes e Gestores
            </h2>
            <p className="text-lg text-gray-300 mb-4">
              Você que é Líder de Equipe, Coordenador, Gerente e Diretor de
              Centrais ou Cooperativas ou que estejam no CCS:
            </p>
            <ul className="text-md text-gray-300 mb-4 list-disc list-inside">
              <li>Solicite um cupom de desconto para sua equipe</li>
              <li>Ofereça aos seus colaboradores no ato do cadastro</li>
              <li>Grupos de Usuários terão descontos especiais!</li>
            </ul>
            <motion.p
              className="text-lg text-gray-300"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              Entre em contato com nossa equipe comercial: contato@mbctek.com.br
            </motion.p>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="hidden sm:block absolute w-64 h-64 rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(253,216,53,0.1) 0%, rgba(253,216,53,0) 70%)",
          x: mousePosition.x - 128,
          y: mousePosition.y - 128,
        }}
      />
    </div>
  );
};

export default CombinedOffersBanner;
