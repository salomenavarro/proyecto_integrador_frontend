// app/(content)/nosotros/page.tsx

"use client";
import React from 'react';
import { motion, Variants } from 'framer-motion';
import TeamCard from '@/components/footer/TeamCard';
// Asegúrate de ajustar la ruta

export default function NosotrosPage() {
  const equipo = [
    {
      nombre: "Stefany Yulieth Mosquera Palacios",
      rol: "Desarrollo del Footer, Estilos y Páginas Informativas (UX/Legal)",
      img: "/avatar/stefany.jpeg",
    },
    {
      nombre: "Jheison Steven Londoño Cruz",
      rol: "Arquitectura de Rutas, Conexión a MockAPI y Componentes de F1",
      img: "/avatar/jheison.jpeg",
    },
    {
      nombre: "Salomé Navarro Pineda",
      rol: "Diseño Front-end de Clasificaciones, Maquetación y Soporte Visual",
      img: "/avatar/salome.jpeg",
    },
  ];

  const F1_RED = 'text-red-500'; 
  const PRIMARY_BG = 'bg-gray-950'; // Negro más intenso
  const CARD_BG = 'bg-gray-800'; 
  const TEXT_LIGHT = 'text-gray-300';
  
  // Variantes de Framer Motion para el efecto Staggering (aparición secuencial)
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Retraso de 0.2s entre cada hijo
      },
    },
  };
  
  const itemVariants: Variants = { // <-- Forzamos el tipo Variants
    hidden: { opacity: 0, y: 30 },
    show: { 
        opacity: 1, 
        y: 0, 
        // TypeScript ahora reconocerá esto como una Transition válida
        transition: { 
            type: "spring", 
            stiffness: 100,
            damping: 10 // Opcional, pero ayuda a definir mejor el spring
        } 
    },
};

  return (
    // Fondo negro puro para máximo contraste
    <div className={`min-h-screen ${PRIMARY_BG} font-mono p-4 md:p-12 relative overflow-hidden`}>
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* ENCABEZADO CON ANIMACIÓN DE ENTRADA */}
        <motion.header 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="text-center pt-10 pb-16 border-b border-red-600/50 mb-16"
        >
            <motion.p variants={itemVariants} className="text-sm uppercase tracking-widest text-gray-500">
                // PROYECTO ACADÉMICO //
            </motion.p>
            <motion.h1 variants={itemVariants} className={`text-7xl font-extrabold mt-2 mb-4 ${F1_RED} tracking-wider`}>
                FORMULA 1
            </motion.h1>
            <motion.p variants={itemVariants} className="text-xl font-light text-gray-400 max-w-4xl mx-auto">
                <span className="text-green-400"></span> Inicializando Módulo de Desarrollo...
            </motion.p>
        </motion.header>

        {/* SECCIÓN 1: ARQUITECTURA TÉCNICA */}
        <motion.section 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className={`p-8 md:p-12 rounded-lg ${CARD_BG} mb-16 border-l-4 border-red-500`}
        >
          <motion.h2 variants={itemVariants} className="text-3xl font-bold mb-8 text-white border-b border-gray-700 pb-3">
            <span className={F1_RED}>$</span> ARQUITECTURA TÉCNICA
          </motion.h2>

          <motion.div variants={itemVariants} className={`text-lg leading-relaxed ${TEXT_LIGHT} space-y-6`}>
            <p>
              Nuestro proyecto simula un entorno de desarrollo profesional, centrado en el manejo eficiente de datos y la implementación de estructuras escalables.
            </p>
            
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
                {["Integración de Datos", "Rutas Dinámicas", "Componentización", "Estructura de Carpetas"].map((item, index) => (
                    <motion.li variants={itemVariants} key={index} className="flex items-start">
                        <span className={`mr-3 ${F1_RED} font-bold text-xl leading-none`}>//</span>
                        <p>
                            <strong className="block text-xl font-semibold mb-1 text-white">{item}</strong> 
                            <span className="text-gray-400 text-sm">
                                {index === 0 && 'Consumo de datos simulados (MockAPI) para resultados de carrera y clasificaciones.'}
                                {index === 1 && 'Implementación de rutas dinámicas ([slug]) para vistas detalladas de entidades.'}
                                {index === 2 && 'Uso de un sistema de componentes modular para una interfaz coherente.'}
                                {index === 3 && 'Adherencia estricta a la plantilla de Next.js App Router para organización.'}
                            </span>
                        </p>
                    </motion.li>
                ))}
            </ul>
          </motion.div>
        </motion.section>

        {/* SECCIÓN 2: EQUIPO DE DESARROLLO */}
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, type: 'spring' }}
          className="text-center text-4xl font-bold mb-12 text-white pt-8"
        >
          EQUIPO DE BOX 
        </motion.h2>

        {/* GRID DE TARJETAS (Usando el componente TeamCard con animación 3D) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 p-2">
          {equipo.map((persona, index) => (
            // TeamCard tiene su propia animación de entrada y el efecto 3D
            <TeamCard key={index} {...persona} />
          ))}
        </div>
        
      </div>
    </div>
  );
}