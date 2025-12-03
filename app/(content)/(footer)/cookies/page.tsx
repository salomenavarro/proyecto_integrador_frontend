// app/(content)/cookies/page.tsx

"use client";
import React from 'react';

export default function CookiesPage() {
    const F1_RED = 'text-red-500'; 
    const PRIMARY_BG = 'bg-gray-950'; 
    const TEXT_LIGHT = 'text-gray-300';
    const CARD_BG = 'bg-gray-800';
    const BORDER_RED = 'border-red-600';

    // Función para renderizar el contenido con formato coherente
    const ContentSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
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
                        // POLÍTICA DE DATOS Y COOKIES //
                    </h1>
                    <p className={`text-xl font-light text-gray-500 max-w-2xl mx-auto border-b ${BORDER_RED}/50 pb-4`}>
                        <span className="text-green-400">$</span> Definiciones de Seguimiento y Almacenamiento Local
                    </p>
                </header>

                <div className="cookies-content space-y-8">
                    
                    <ContentSection title="Declaración General">
                        <p>
                            Este **proyecto de demostración académico** utiliza cookies y tecnologías de almacenamiento local para garantizar el correcto funcionamiento de la interfaz y para fines analíticos básicos. Al utilizar esta aplicación, usted acepta el uso de estas tecnologías según lo descrito a continuación.
                        </p>
                        <p>
                            Dado que esta es una aplicación no comercial, los datos recopilados por las cookies son estrictamente **anónimos** y se utilizan únicamente para la **optimización de la experiencia de usuario (UX)** y para el **diagnóstico técnico de la aplicación (Debugging)**.
                        </p>
                    </ContentSection>

                    <ContentSection title="1. Acerca de las Cookies">
                        <p>
                            Una cookie es un pequeño archivo de texto que un sitio web guarda en su dispositivo. En el contexto de esta aplicación, se utilizan para recordar el estado de la sesión, las preferencias de visualización (por ejemplo, el tema oscuro/claro si estuviera implementado) y para ayudar a la navegación entre las diferentes rutas del proyecto.
                        </p>
                    </ContentSection>

                    <ContentSection title="2. Tipos de Cookies Utilizadas">
                        <h4 className="font-bold text-lg mt-4 text-red-300">Cookies Estrictamente Necesarias (Técnicas)</h4>
                        <p>
                            Son esenciales para la prestación de los servicios básicos y para que la aplicación Next.js pueda funcionar correctamente (por ejemplo, mantener el estado del usuario o la sesión de Next.Auth, si estuviera implementada).
                        </p>
                        <h4 className="font-bold text-lg mt-4 text-red-300">Cookies de Rendimiento y Análisis</h4>
                        <p>
                            Recopilan información anónima sobre el uso de la aplicación (ej. qué páginas se visitan, tiempo de carga). Utilizamos esta información para evaluar el rendimiento de nuestra arquitectura de código y para fines de evaluación académica. **No se recopilan datos personales.**
                        </p>
                        <h4 className="font-bold text-lg mt-4 text-red-300">Cookies de Funcionalidad</h4>
                        <p>
                            Permiten que la aplicación recuerde las preferencias específicas que usted haya configurado (por ejemplo, la última clasificación vista) para mejorar la experiencia de uso en el dashboard.
                        </p>
                    </ContentSection>

                    <ContentSection title="3. Cookies de Terceros y Enlaces">
                        <p>
                            Esta aplicación puede contener enlaces a sitios web externos (ej. la página oficial de F1 para referencia). No controlamos las cookies o políticas de privacidad de estos sitios externos. Al hacer clic en un enlace de terceros, estará sujeto a las políticas de ese sitio.
                        </p>
                    </ContentSection>

                    <ContentSection title="4. Control de Cookies">
                        <p>
                            Usted puede controlar, eliminar o bloquear las cookies a través de la configuración de su navegador web (Chrome, Firefox, Safari, etc.). Sin embargo, si deshabilita las cookies estrictamente necesarias, la funcionalidad de navegación de este sitio web podría verse afectada.
                        </p>
                    </ContentSection>

                    <ContentSection title="5. Cambios en la Política">
                        <p>
                            Cualquier cambio a esta Política será publicado en esta página y entrará en vigor inmediatamente tras su publicación. Esta política fue actualizada por última vez en [Fecha de Hoy: Diciembre 2025].
                        </p>
                    </ContentSection>
                </div>
            </div>
        </div>
    );
}