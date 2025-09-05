import React, { useState } from "react";

const personaPrincipal = {
  nombre: "Francisco Duhalde",
  foto: "/images/persona.png",
  descripcion: "Fundador y gerente general. Apasionado por la innovación y la excelencia en el servicio.",
  email: "fcofco@gmail.com",
  telefono: "+56945411076",
};

const colaboradores = [
  {
    nombre: "Juan Pérez",
    foto: "/images/colaborador_1.png",
    descripcion: "Vendedor de autos con más de 10 años de experiencia.",
    email: "asasas@gmail.com",
    telefono: "+56951397667",
  },
  {
    nombre: "María López",
    foto: "/images/colaborador_2.jpg",
    descripcion: "Consultora de ventas especializada en vehículos de lujo.",
    email: "dede@gmail.com ",
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

                  {/* Ícono de WhatsApp funcional */}
            <div className="flex justify-center">
              <a
                href={`https://wa.me/${modal.telefono}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-lg transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.37 0 .01 5.37.01 12c0 2.11.55 4.17 1.6 5.99L0 24l6.26-1.64a11.94 11.94 0 005.74 1.46c6.63 0 12-5.37 12-12 0-3.2-1.25-6.21-3.48-8.52zM12 22c-1.78 0-3.52-.47-5.05-1.36l-.36-.21-3.72.97.99-3.63-.23-.37A9.93 9.93 0 012.01 12C2.01 6.48 6.48 2 12 2s9.99 4.48 9.99 10-4.47 10-9.99 10zm5.27-7.56l-1.49-.75c-.2-.1-.43-.05-.58.12l-.7.86a.43.43 0 01-.58.1c-.61-.3-2.15-1.17-3.17-2.8a.43.43 0 01.06-.57l.77-.77a.43.43 0 00.1-.46l-.7-1.49a.43.43 0 00-.5-.24c-.56.14-1.2.38-1.84.7a.43.43 0 00-.22.53c.27.84.84 2.04 2.03 3.23 1.19 1.19 2.39 1.76 3.23 2.03a.43.43 0 00.53-.22c.32-.64.56-1.28.7-1.84a.43.43 0 00-.24-.5z" />
                </svg>
                Contactar por WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default SobreNosotros;