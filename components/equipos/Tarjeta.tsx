import React from "react";

interface Piloto {
  nombre: string;
  imagen: string;
}

interface TarjetaProps {
  equipo: string;
  logoEquipo: string;
  carro: string;
  pilotos: Piloto[];
}

export default function Tarjeta({ equipo, logoEquipo, carro, pilotos }: TarjetaProps) {
  return (
    <div className="rounded-xl overflow-hidden shadow-xl w-full max-w-4xl mx-auto bg-neutral-900">

      {/* Parte superior */}
      <div className="relative bg-gradient-to-r from-blue-800 to-blue-600 p-6 text-white flex items-center justify-between">
        
        {/* Info equipo */}
        <div>
          <h2 className="text-2xl font-bold mb-2">{equipo}</h2>
          
          {/* Pilotos en fila */}
          <div className="flex items-center gap-4">
            {pilotos.map((p, i) => (
              <div key={i} className="flex items-center gap-2">
                <img src={p.imagen} className="w-6 h-6 rounded-full" />
                <p className="text-sm font-semibold">{p.nombre}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Logo superior derecho */}
        <img
          src={logoEquipo}
          className="w-14 opacity-90 absolute top-4 right-4"
        />

      </div>

      {/* Parte inferior con otro degradado */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-500 flex justify-center p-4">
        <img src={carro} className="w-[90%] max-w-3xl" />
      </div>

    </div>
  );
}
