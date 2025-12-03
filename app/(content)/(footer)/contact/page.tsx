// app/(content)/contact/page.tsx

"use client";
import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';

export default function ContactPage() {
    const F1_RED = 'text-red-500'; 
    const PRIMARY_BG = 'bg-gray-950'; 
    const TEXT_LIGHT = 'text-gray-300';
    const CARD_BG = 'bg-gray-800';
    const BORDER_RED = 'border-red-600';

    // Estado del formulario (solo para demostración de manejo de estado)
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Lógica de envío simulada (en un proyecto real, esto iría a un API/Email Service)
        console.log("Datos del formulario enviados:", formData);
        alert('Mensaje enviado (simulación). ¡Gracias por tu feedback!');
    };
    
    // Variantes para animación de entrada de Framer Motion
    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };
    
    const itemVariants: Variants = {
        hidden: { opacity: 0, y: 15 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } },
    };


    return (
        // Contenedor principal con fondo negro puro y fuente mono
        <div className={`min-h-screen ${PRIMARY_BG} font-mono p-4 md:p-12 relative text-gray-200`}>
            <div className="max-w-6xl mx-auto">
                
                {/* TÍTULO PRINCIPAL */}
                <header className="text-center pt-10 pb-12">
                    <h1 className={`text-4xl font-extrabold mb-3 text-white tracking-widest`}>
                        // CONTACTO Y DEBUG //
                    </h1>
                    <p className={`text-xl font-light text-gray-500 max-w-2xl mx-auto border-b ${BORDER_RED}/50 pb-4`}>
                        <span className="text-green-400">$</span> Envíanos un informe de error o feedback
                    </p>
                </header>

                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    
                    {/* COLUMNA 1: FORMULARIO DINÁMICO */}
                    <motion.div 
                        className={`lg:w-2/3 p-8 rounded-lg ${CARD_BG} border-2 border-gray-700`}
                        variants={containerVariants}
                        initial="hidden"
                        animate="show"
                    >
                        <h2 className={`text-3xl font-bold mb-6 text-white`}>
                            <span className={F1_RED}>//</span> Módulo de Reporte
                        </h2>
                        
                        <form onSubmit={handleSubmit} className="space-y-4">
                            
                            {/* Input: Nombre */}
                            <motion.input 
                                variants={itemVariants}
                                type="text" 
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Nombre completo" 
                                required
                                className={`w-full p-3 rounded bg-gray-900 ${TEXT_LIGHT} border border-gray-700 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition duration-200`}
                            />
                            
                            {/* Input: Correo Electrónico */}
                            <motion.input 
                                variants={itemVariants}
                                type="email" 
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email (ej. para seguimiento)" 
                                required
                                className={`w-full p-3 rounded bg-gray-900 ${TEXT_LIGHT} border border-gray-700 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition duration-200`}
                            />

                            {/* Input: Asunto (Modificado de Teléfono y Evento) */}
                            <motion.input 
                                variants={itemVariants}
                                type="text" 
                                name="subject"
                                value={formData.subject}
                                onChange={handleChange}
                                placeholder="Asunto (Ej: Error en datos, Sugerencia de diseño)" 
                                required
                                className={`w-full p-3 rounded bg-gray-900 ${TEXT_LIGHT} border border-gray-700 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition duration-200`}
                            />
                            
                            {/* Textarea: Mensaje */}
                            <motion.textarea 
                                variants={itemVariants}
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                placeholder="Describe tu feedback o el error encontrado..." 
                                required
                                rows={5}
                                className={`w-full p-3 rounded bg-gray-900 ${TEXT_LIGHT} border border-gray-700 focus:border-red-500 focus:ring-1 focus:ring-red-500 transition duration-200 resize-none`}
                            ></motion.textarea>

                            {/* Checkbox (Simulación de reCAPTCHA) */}
                            <motion.div variants={itemVariants} className="flex items-center space-x-2 pt-2">
                                <input type="checkbox" required className={`h-4 w-4 text-red-600 bg-gray-700 border-gray-600 rounded focus:ring-red-500`} />
                                <span className="text-sm text-gray-400">Confirmo que es feedback relacionado al proyecto académico.</span>
                            </motion.div>

                            {/* Botón de Envío */}
                            <motion.button 
                                variants={itemVariants}
                                type="submit" 
                                className={`w-full py-3 mt-4 text-lg font-bold uppercase tracking-wider rounded bg-red-600 text-white 
                                            hover:bg-red-700 transition duration-300 shadow-lg shadow-red-500/50`}
                            >
                                ENVIAR INFORME
                            </motion.button>
                        </form>
                    </motion.div>
                    
                    {/* COLUMNA 2: INFORMACIÓN DE CONTACTO Y CONTEXTO */}
                    <div className="lg:w-1/3 p-8 rounded-lg border-2 border-red-500 bg-red-900/10 h-fit">
                        <h2 className="text-3xl font-bold mb-6 text-white">
                            <span className={F1_RED}>//</span> Canal de Soporte
                        </h2>
                        
                        <div className={`space-y-6 ${TEXT_LIGHT}`}>
                            <p>
                                Este canal está diseñado para recibir **feedback técnico** y **consultas sobre la arquitectura** del proyecto, no para soporte comercial.
                            </p>
                            
                            <p className="text-lg font-semibold text-white">
                                <span className={F1_RED}>Email Directo:</span>
                                <br/>
                                <a href="mailto:tu.email@ejemplo.com" className="text-red-400 hover:text-red-300 transition duration-200">
                                    tu.email@ejemplo.com
                                </a>
                            </p>

                            <p className="text-sm text-gray-400 border-t border-gray-700 pt-4">
                                **Alcance del Soporte:** Enfocado en errores de la MockAPI, fallas de renderizado, y consultas sobre la implementación de Next.js, Framer Motion o Tailwind CSS.
                            </p>
                            
                            {/* Reemplazamos "Llámame de nuevo" por un CTA al código */}
                            <a 
                                href="/nosotros" 
                                className={`block w-full text-center py-3 mt-4 text-sm font-bold uppercase tracking-wider rounded bg-gray-700 text-white 
                                            hover:bg-gray-600 transition duration-300`}
                            >
                                VER EQUIPO DE DESARROLLO
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
