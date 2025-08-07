import React, { useState } from "react";

const personaPrincipal = {
  nombre: "Fco Fco",
  foto: "/images/persona.png",
  descripcion: "Fundador y gerente general. Apasionado por la innovación y la excelencia en el servicio.",
  email: "fcofco@gmail.com",
  telefono: "123456789",
};

const colaboradores = [
  {
    nombre: "Juan Pérez",
    foto: "/images/colaborador_1.png",
    descripcion: "Vendedor de autos con más de 10 años de experiencia.",
    email: "asasas@gmail.com",
    telefono: "123456789",
  },
  {
    nombre: "María López",
    foto: "/images/colaborador_2.jpg",
    descripcion: "Consultora de ventas especializada en vehículos de lujo.",
    email: "dede@gmail.com",
    telefono: "123456789",
  },
  {
    nombre: "Marcelo mamo",
    foto: "/images/colaborador_3.jpg",
    descripcion: "Administradora de ventas con un enfoque en la satisfacción del cliente.",
    email: "frfr@gmail.com",
    telefono: "123456789",
  },
  // Agrega más colaboradores aquí
];

const SobreNosotros = () => {
  const [modal, setModal] = useState(null);

  return (
    // Contenedor principal con posición relativa para el contexto de apilamiento
    <section className="relative flex flex-col items-center justify-center min-h-screen py-20 bg-center bg-cover overflow-hidden">
      
      {/* 1. CAPA DE FONDO: No se toca, se queda en z-0 */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/patagual_1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.225,
          filter: "brightness(0.4)",
        }}
      />

      {/* 2. CAPA DE CONTENIDO: La envolvemos y la subimos a z-10 👈 */}
      <div className="relative z-10 flex flex-col items-center w-full px-4">
        
        {/* Sección principal */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl box-border  bg-gray-200 rounded-lg shadow-lg p-8 mb-12">
          {/* Imagen a la izquierda */}
          <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
            <img
              src={personaPrincipal.foto}
              alt={personaPrincipal.nombre}
              className="w-64 h-64 object-cover rounded-full shadow-md cursor-pointer border-2 border-black border-solid hover:scale-105 transition-transform duration-300"
              onClick={() => setModal(personaPrincipal)}
            />
          </div>
          {/* Texto a la derecha */}
          <div className="w-full md:w-1/2 md:pl-10">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-700 mb-6">
              Sobre Nosotros
            </h1>
            <p className="text-lg md:text-xl text-gray-700 text-justify">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut laoreet dictum, 
              urna erat ultricies risus, ac porta enim urna eu augue. Pellentesque habitant morbi tristique 
              senectus et netus et malesuada fames ac turpis egestas.
            </p>
          </div>
        </div>

        {/* Colaboradores */}
        <h2 className="text-3xl font-bold text-gray mb-8">Colaboradores</h2> {/* 👈 Cambié a text-white para que sea legible sobre el fondo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8 max-w-4xl">
          {colaboradores.map((colaborador, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center cursor-pointer text-center"
              onClick={() => setModal(colaborador)}
            >
              <img
                src={colaborador.foto}
                alt={colaborador.nombre}
                className="w-32 h-32 object-cover rounded-full shadow-lg mb-4 border-2 border-black border-solid hover:scale-110 transition-transform duration-300"
              />
              <span className="font-semibold text-lg text-gray">{colaborador.nombre}</span> {/* 👈 Cambié a text-white */}
            </div>
          ))}
        </div>

      </div> {/* 👈 Fin del div de contenido z-10 */}


      {/* 3. CAPA DEL MODAL: Se mantiene igual, con z-50 para estar por encima de todo */}
      {modal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full relative text-gray-800">
            <button
              className="absolute top-2 right-3 text-gray-500 hover:text-red-500 text-3xl leading-none"
              onClick={() => setModal(null)}
            >
              &times;
            </button>
            <img
              src={modal.foto}
              alt={modal.nombre}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4 border-4 border-gray-200"
            />
            <h3 className="text-2xl font-bold text-center mb-2">{modal.nombre}</h3>
            <p className="text-gray-700 text-center mb-2">{modal.descripcion}</p>
            <p className="text-gray-600 text-center text-sm mt-4">Email: {modal.email}</p>

            <p className="text-gray-600 text-center text-sm">Teléfono: {modal.telefono}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default SobreNosotros;