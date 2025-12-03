// app/(content)/privacy/page.tsx

"use client";
import React from 'react';

export default function PrivacyPage() {
    const F1_RED = 'text-red-500'; 
    const PRIMARY_BG = 'bg-gray-950'; 
    const TEXT_LIGHT = 'text-gray-300';
    const CARD_BG = 'bg-gray-800';
    const BORDER_RED = 'border-red-600';

    // Componente reutilizable para las secciones
    const PrivacySection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
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
                        // POLÍTICA DE PRIVACIDAD //
                    </h1>
                    <p className={`text-xl font-light text-gray-500 max-w-2xl mx-auto border-b ${BORDER_RED}/50 pb-4`}>
                        <span className="text-green-400">$</span> Manejo y Alcance de los Datos Recopilados
                    </p>
                </header>

                <div className="page-content space-y-8">
                    
                    <PrivacySection title="Declaración de Alcance del Proyecto">
                        <p>
                            Este es un **proyecto de demostración académica** no comercial. Nuestro compromiso es la transparencia y el cumplimiento de las normativas de privacidad, incluso en un entorno simulado. 
                        </p>
                        <p className="font-bold text-lg text-red-300">
                            IMPORTANTE: Esta aplicación **NO recopila Información de Identificación Personal (PII)** de los usuarios. Cualquier dato recopilado es anónimo y de naturaleza técnica.
                        </p>
                    </PrivacySection>

                    <PrivacySection title="1. Recopilación y Procesamiento de Datos">
                        <p>
                            Solo recopilamos información de uso no identificable (datos de navegación, rendimiento de la aplicación, errores) necesaria para el diagnóstico técnico, la optimización de la interfaz y la evaluación del proyecto.
                        </p>
                        <p>
                            Dado que no se procesan datos personales, esta sección se simplifica para reflejar el enfoque académico y técnico de la aplicación.
                        </p>
                    </PrivacySection>

                    <PrivacySection title="2. Retención de Datos y Almacenamiento">
                        <p>
                            Los datos de uso anónimos (si fueran capturados por un servicio de análisis externo, como Vercel Analytics) se almacenan de forma segura por el proveedor de alojamiento y solo se conservan durante el tiempo necesario para la evaluación del rendimiento del proyecto.
                        </p>
                    </PrivacySection>

                    <PrivacySection title="3. Intercambio de Información con Terceros">
                        <p>
                            No compartimos datos anónimos o técnicos con terceros comerciales. Si se utiliza alguna herramienta de análisis externa (ej., Google Analytics), la información compartida es agregada y anónima.
                        </p>
                    </PrivacySection>

                    <PrivacySection title="4. Derechos del Usuario (Contexto Demo)">
                        <p>
                            Aunque esta aplicación no almacena sus datos personales, si tuviera preguntas sobre cómo manejamos la información técnica, tiene derecho a contactarnos. En un proyecto comercial real, aquí se especificarían los derechos de acceso, rectificación y eliminación de datos.
                        </p>
                    </PrivacySection>

                    <PrivacySection title="5. Cookies">
                        <p>
                            Las cookies utilizadas tienen fines exclusivamente funcionales y de rendimiento técnico. Para obtener detalles completos, consulte nuestra **Política de Cookies**.
                        </p>
                    </PrivacySection>

                    <PrivacySection title="Contacto y Dudas">
                        <p>
                            Si tiene alguna pregunta sobre esta Política o el manejo de los datos técnicos de la aplicación, por favor utilice la sección de contacto del proyecto.
                        </p>
                        <p className={`text-white font-bold`}>Email: [Tu Email Académico o de Contacto]</p>
                    </PrivacySection>

                </div>
            </div>
        </div>
    );
}