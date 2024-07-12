"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const SpecialOfferBanner = () => {
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
      className="min-h-[70vh] flex items-center justify-center text-white w-full relative overflow-hidden"
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

      <div className="max-w-4xl text-center p-6 relative z-10">
        <motion.div
          className="bg-gray-900 bg-opacity-75 rounded-lg p-8 shadow-lg mb-8"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <motion.h2
            className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Oferta irresistível e por tempo limitado
          </motion.h2>
          <motion.p
            className="text-xl text-gray-300 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            R$2.999,00 por apenas R$2.499,00 para as primeiras 50 vagas
            <br />
            Garanta o seu acesso contínuo às atualizações do{" "}
            <b>Curso Prático IBM Cognos Analysis Studio (Analítico) </b>pelo
            período de 12 meses
            <br />
            12x R$ 262,98
          </motion.p>
          <motion.button
            className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg transform hover:scale-105 transition duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            GARANTIR MINHA MATRÍCULA
          </motion.button>
        </motion.div>
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

export default SpecialOfferBanner;
