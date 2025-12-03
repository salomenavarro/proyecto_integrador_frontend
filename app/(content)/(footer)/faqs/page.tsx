// app/(content)/faqs/page.tsx

"use client";
import React, { useState } from "react";

// (Pegar aquí el objeto `faqsData` y `INITIAL_ACTIVE_CATEGORY` definido arriba)

// --- DATOS Y CONFIGURACIÓN ---
const faqsData = [
    {
      category: "General del Proyecto",
      questions: [
        { q: "¿Cuál es el objetivo principal de F1-DATA SYSTEM?", a: "El proyecto fue desarrollado como trabajo final académico para demostrar la capacidad de integración de tecnologías web modernas (Next.js, Framer Motion) con datos simulados (MockAPI) en un tema de alto interés como la Fórmula 1." },
        { q: "¿Es esta una aplicación oficial de la Fórmula 1 o la FIA?", a: "No. Este es un proyecto no oficial (o para fines académicos) y no está afiliado ni respaldado por Formula 1, Liberty Media, o la FIA. Los datos y el diseño son representaciones conceptuales." },
        { q: "¿Qué tecnologías se utilizaron para construir este proyecto?", a: "El stack principal incluye Next.js 14 (App Router), React, TypeScript y Tailwind CSS para el diseño. Se utilizó Framer Motion para animaciones avanzadas en ciertas secciones." },
        { q: "¿Cómo puedo contactar al equipo de desarrollo?", a: "Por favor, visita la sección 'Contacto' en el footer para enviar un mensaje con tus dudas o comentarios técnicos sobre la aplicación." },
      ],
    },
    {
      category: "Datos y Actualización",
      questions: [
        { q: "¿De dónde provienen los datos de Pilotos, Equipos y Carreras?", a: "Los datos son consumidos de una fuente simulada (MockAPI). Estos representan información hipotética o estática de la temporada para fines de demostración de arquitectura de datos. No se actualizan en tiempo real." },
        { q: "¿Por qué no se muestran datos de la carrera más reciente?", a: "Debido a que los datos son simulados, el calendario de carreras y los resultados están congelados en un punto específico. La aplicación se enfoca en la presentación de la arquitectura, no en la actualización constante de datos en vivo." },
        { q: "¿Cómo puedo acceder a los detalles de un Piloto o un Equipo específico?", a: "Puedes usar las rutas dinámicas /pilotos/[slug] y /equipos/[slug] accediendo desde las páginas de clasificación. La aplicación demuestra cómo se manejan las peticiones GET individuales a la API simulada." },
      ],
    },
    {
      category: "Soporte Técnico y UX",
      questions: [
        { q: "¿Cómo se implementó la navegación entre Pilotos y Equipos?", a: "La clasificación principal utiliza una ruta /clasificacion que puede alternar entre las tablas de Pilotos y Constructores, ambas extrayendo datos de diferentes endpoints de la MockAPI." },
        { q: "¿Por qué las páginas Pilotos/Equipos tienen una animación 3D?", a: "Esa característica fue implementada utilizando la librería Framer Motion para demostrar capacidades avanzadas de animación e interacción, simulando una interfaz de usuario 'premium'." },
        { q: "¿Dónde puedo encontrar el código fuente?", a: "El repositorio completo del código fuente está disponible para el profesor/evaluador. (Si fuera un proyecto real, se colocaría el enlace a GitHub aquí)." },
      ],
    },
];

const INITIAL_ACTIVE_CATEGORY = "General del Proyecto"; 
// --- COMPONENTE ---

const F1_RED = 'text-red-500'; 
const PRIMARY_BG = 'bg-gray-950'; 
const ACCENT_COLOR = 'text-red-500';

export default function FAQspage() {
    const [activeCategory, setActiveCategory] = useState(INITIAL_ACTIVE_CATEGORY);

    const activeFaqs = faqsData.find(faq => faq.category === activeCategory);
    
    return (
        // Contenedor principal con fondo negro puro y fuente mono
        <div className={`min-h-screen ${PRIMARY_BG} font-mono p-4 md:p-12 relative text-gray-200`}>
            <div className="max-w-6xl mx-auto">
                
                {/* TÍTULO PRINCIPAL */}
                <header className="text-center pt-10 pb-16">
                    <h1 className={`text-5xl font-extrabold mb-3 text-white tracking-widest`}>
                        // FAQ //
                    </h1>
                    <p className={`text-xl font-light text-gray-500 max-w-4xl mx-auto border-b border-red-600/50 pb-4`}>
                        {ACCENT_COLOR}$ INFORME: Preguntas Frecuentes 
                    </p>
                </header>

                {/* NAVEGACIÓN DE PESTAÑAS (TABS) */}
                <div className="flex justify-center flex-wrap gap-4 mb-12">
                    {faqsData.map((faq) => (
                        <button
                            key={faq.category}
                            onClick={() => setActiveCategory(faq.category)}
                            className={`px-6 py-2 text-sm font-semibold uppercase tracking-wider rounded-md transition duration-300
                                ${faq.category === activeCategory
                                    ? 'bg-red-600 text-white shadow-lg shadow-red-500/50' // Pestaña activa
                                    : 'bg-gray-800 text-gray-400 hover:bg-red-800 hover:text-white border border-gray-700' // Pestaña inactiva
                                }
                            `}
                        >
                            {faq.category}
                        </button>
                    ))}
                </div>

                {/* CONTENIDO DE FAQS */}
                <h2 className="text-3xl font-bold mb-8 text-white border-b border-gray-700 pb-3">
                    <span className={ACCENT_COLOR}>&gt;</span> {activeCategory}
                </h2>
                
                <div className="space-y-4">
                    {activeFaqs && activeFaqs.questions.map((item, index) => (
                        <details 
                            key={index} 
                            className={`bg-gray-800 rounded-lg p-5 cursor-pointer border-l-4 border-transparent 
                                        transition duration-300 ease-in-out hover:border-red-500 hover:bg-gray-700`}
                        >
                            <summary className="flex items-center justify-between font-semibold text-lg text-white">
                                <span className="flex items-center">
                                    <span className={`${ACCENT_COLOR} mr-3 text-2xl leading-none font-bold`}>+</span>
                                    {item.q}
                                </span>
                            </summary>
                            <div className="pt-4 pl-8 text-gray-400 text-base leading-relaxed border-t border-gray-700 mt-4">
                                {item.a}
                            </div>
                        </details>
                    ))}
                </div>

            </div>
        </div>
    );
}