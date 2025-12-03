// components/TeamCard.tsx

'use client';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import React from 'react';

interface TeamCardProps {
  nombre: string;
  rol: string;
}

const F1_BORDER = 'border-red-600';
const F1_RED = 'text-red-600';
const CARD_BG = 'bg-gray-800';

const TeamCard: React.FC<TeamCardProps> = ({ nombre, rol}) => {
  // 1. Definición de valores de Motion para el tilt 3D
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [20, -20]);
  const rotateY = useTransform(x, [-100, 100], [-20, 20]);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = event.clientX - rect.left;
    const mouseY = event.clientY - rect.top;

    // Normaliza las coordenadas del mouse a un rango de -100 a 100
    x.set(mouseX / width * 200 - 100);
    y.set(mouseY / height * 200 - 100);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    // 2. Aplicar motion.div con las propiedades de Framer Motion
    <motion.div
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`rounded-xl p-6 text-center shadow-2xl ${CARD_BG} text-white
                  transition duration-300 hover:shadow-red-900/70 cursor-pointer`}
      // Animación de entrada
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ type: 'spring', stiffness: 100, duration: 0.5 }}
    >
      <div style={{ transform: 'translateZ(50px)' }}> {/* Mueve el contenido hacia adelante en 3D */}
        
        <h3 className="text-2xl font-extrabold mb-1 text-white">
          {nombre}
        </h3>
        <p className={`text-base ${F1_RED} font-semibold leading-snug`}>
          {rol}
        </p>
      </div>
    </motion.div>
  );
};

export default TeamCard;