"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

const EnhancedDarkLandingPageHeader = () => {
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
      className="min-h-screen flex items-center justify-center text-white w-full relative overflow-hidden"
      style={{
        background:
          "linear-gradient(45deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
      }}
    >
      {/* Animated background elements */}
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
          className="mb-8"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <img
            className="h-36 mb-10 mx-auto"
            src="logo.png"
            alt="IT Solution & EAD Logo"
          />
        </motion.div>

        <motion.h1
          className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Curso Prático IBM Cognos Analysis Studio (Analítico): De Iniciante a
          Expert
        </motion.h1>
        <iframe
        className="mx-auto shadow-lg shadow-green-900"
          width="736"
          height="414"
          src="https://www.youtube.com/embed/JNQG7Nz6cW8"
          title="VÍDEO APRESENTAÇÃO CURSO IBM COGNOS ANALYTICS"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
        <motion.p
          className="text-xl mb-8 text-gray-300 mt-10"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Prepare-se para liderar projetos de Business Intelligence com um dos
          softwares mais poderosos do mercado mundial. Surpreenda-se com o poder
          analítico e de tomada de decisão que você receberá após a conclusão
          deste curso de capacitação. Voe mais alto!
        </motion.p>

        <motion.div
          className="mb-8"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-lg font-semibold text-yellow-400 animate-pulse">
            Inscrições abertas por tempo limitado! Garanta a sua vaga!
          </p>
        </motion.div>

        <motion.button
          className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg transform hover:scale-105 transition duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          GARANTIR MINHA MATRÍCULA
        </motion.button>
      </div>

      {/* Interactive mouse follower */}
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

export default EnhancedDarkLandingPageHeader;
