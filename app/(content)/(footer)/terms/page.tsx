// app/(content)/terms/page.tsx

"use client";
import React from 'react';

export default function TermsPage() {
    const F1_RED = 'text-red-500'; 
    const PRIMARY_BG = 'bg-gray-950'; 
    const TEXT_LIGHT = 'text-gray-300';
    const CARD_BG = 'bg-gray-800';
    const BORDER_RED = 'border-red-600';
    
    // Componente reutilizable para las secciones
    const TermsSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
        <section className={`mb-10 p-6 rounded-lg ${CARD_BG} border-l-4 ${BORDER_RED}`}>
            <h2 className="text-2xl font-bold mb-4 text-white border-b border-gray-700 pb-2">
                <span className={F1_RED}>//</span> {title}
            </h2>
            <div className={`text-base leading-relaxed ${TEXT_LIGHT} space-y-4`}>
                {children}
            </div>
        </section>
    );

    return (
        // Contenedor principal con fondo negro puro y fuente mono
        <div className={`min-h-screen ${PRIMARY_BG} font-mono p-4 md:p-12 relative text-gray-200`}>
            <div className="max-w-4xl mx-auto">
                
                {/* TÍTULO PRINCIPAL */}
                <header className="text-center pt-10 pb-12">
                    <h1 className={`text-4xl font-extrabold mb-3 text-white tracking-widest`}>
                        // TÉRMINOS DE USO DEL SISTEMA //
                    </h1>
                    <p className={`text-xl font-light text-gray-500 max-w-2xl mx-auto border-b ${BORDER_RED}/50 pb-4`}>
                        <span className="text-green-400">$</span> Reglas para el uso de la Aplicación de Demostración
                    </p>
                </header>

                <div className="terms-content space-y-8">
                    
                    <TermsSection title="Propósito y Acuerdo">
                        <p>
                            Este documento establece los **Términos de Uso** para la aplicación **F1-DATA SYSTEM** (el "Proyecto"). Al acceder y utilizar este Proyecto, usted acepta estar sujeto a estos Términos.
                        </p>
                        <p className="font-bold text-lg text-red-300">
                            El Proyecto es una demostración académica y no una plataforma comercial. No hay venta de productos, entradas, ni servicios reales involucrados.
                        </p>
                    </TermsSection>

                    <TermsSection title="1. Datos y Exactitud">
                        <p>
                            Los datos presentados en las clasificaciones, calendarios y perfiles de Pilotos/Equipos provienen de una fuente **simulada (MockAPI)**. Estos datos están diseñados únicamente para demostrar la arquitectura de la aplicación y la integración del *frontend*.
                        </p>
                        <p>
                            <span className="font-semibold">Renuncia de Exactitud:</span> No garantizamos que los datos, estadísticas o resultados mostrados sean exactos, actualizados o que correspondan a la temporada actual o pasada de la Fórmula 1.
                        </p>
                    </TermsSection>

                    <TermsSection title="2. Propiedad Intelectual y Marcas">
                        <p>
                            La aplicación es un trabajo académico. Sin embargo, todos los logotipos, nombres de equipos, nombres de pilotos, y las marcas F1, FIA y GRAND PRIX son propiedad intelectual de sus respectivos dueños (Formula One Licensing BV).
                        </p>
                        <p>
                            Este Proyecto utiliza las marcas con fines **ilustrativos y de referencia temática** para el trabajo académico, y no tiene fines de lucro o comercialización.
                        </p>
                    </TermsSection>

                    <TermsSection title="3. Limitación de Responsabilidad">
                        <p>
                            El Proyecto se proporciona "tal cual". Dado que no existe una relación comercial y el Proyecto es gratuito y para fines de estudio, el equipo de desarrollo no será responsable por ningún daño directo o indirecto resultante del uso o la incapacidad de usar esta aplicación.
                        </p>
                    </TermsSection>

                    <TermsSection title="4. Uso del Sitio Web">
                        <p>
                            Usted se compromete a utilizar el Proyecto de manera legal y ética. No está permitido intentar comprometer la seguridad o la arquitectura del sitio, ni intentar realizar ingeniería inversa del código.
                        </p>
                    </TermsSection>

                    <TermsSection title="5. Ley Aplicable">
                        <p>
                            Estos Términos se regirán e interpretarán de acuerdo con las leyes [Añadir el país o jurisdicción relevante para el proyecto académico, ej: "de su país académico"].
                        </p>
                    </TermsSection>
                    
                    <TermsSection title="Aviso de Copyright">
                        <p>
                            © {new Date().getFullYear()} [Nombre de tu Proyecto o Universidad]. Todos los derechos reservados sobre el código fuente de la aplicación.
                        </p>
                    </TermsSection>
                </div>
            </div>
        </div>
    );
}