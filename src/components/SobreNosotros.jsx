import React, { useState } from "react";

const personaPrincipal = {
  nombre: "Fco Fco",
  foto: "/images/persona.png",
  descripcion: "Fundador y gerente general. Apasionado por la innovación y la excelencia en el servicio.",
  email:"fcofco@gmail.com",
  telefono: "123456789",
};

const colaboradores = [
  {
    nombre: "Juan Pérez",
    foto: "/images/colaborador_1.png",
    descripcion: "Vendedor de autos con más de 10 años de experiencia.",
    email:"asasas@gmail.com",
    telefono: "123456789",
  },
  {
    nombre: "María López",
    foto: "/images/colaborador_2.jpg",
    descripcion: "Consultora de ventas especializada en vehículos de lujo.",
    email:"dede@gmail.com",
    telefono: "123456789",
  },
  {
    nombre: "Marcelo mamo",
    foto: "/images/colaborador_3.jpg",
    descripcion: "Administradora de ventas con un enfoque en la satisfacción del cliente.",
    email:"frfr@gmail.com",
    telefono: "123456789",
  },
  // Agrega más colaboradores aquí
];

const SobreNosotros = () => {
  const [modal, setModal] = useState(null);

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-200 py-20">
      {/* Sección principal */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-4xl bg-white rounded-lg shadow-lg p-8 mb-12">
        {/* Imagen a la izquierda */}
        <div className="w-full md:w-1/2 flex justify-center mb-8 md:mb-0">
          <img
            src={personaPrincipal.foto}
            alt={personaPrincipal.nombre}
            className="w-64 h-64 object-cover rounded-full shadow-md cursor-pointer hover:scale-105 transition-transform duration-300"
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
            senectus et netus et malesuada fames ac turpis egestas. Suspendisse potenti. Etiam nec eros 
            vitae urna dictum placerat. Nullam euismod, nisi vel consectetur cursus, nisl erat dictum 
            massa, nec laoreet enim urna eu augue.
          </p>
        </div>
      </div>

      {/* Colaboradores */}
      <h2 className="text-3xl font-bold text-gray-700 mb-8">Colaboradores</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-8">
        {colaboradores.map((colaborador, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center cursor-pointer"
            onClick={() => setModal(colaborador)}
          >
            <img
              src={colaborador.foto}
              alt={colaborador.nombre}
              className="w-32 h-32 object-cover rounded-full shadow-lg mb-4 hover:scale-110 transition-transform duration-300"
            />
            <span className="font-semibold text-lg text-gray-800">{colaborador.nombre}</span>
          </div>
        ))}
      </div>

      {/* Modal de persona principal o colaborador */}
      {modal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl"
              onClick={() => setModal(null)}
            >
              &times;
            </button>
            <img
              src={modal.foto}
              alt={modal.nombre}
              className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
            />
            <h3 className="text-2xl font-bold text-center mb-2">{modal.nombre}</h3>
            <p className="text-gray-700 text-center">{modal.descripcion}</p>
            <p className="text-gray-700 text-center mt-2">Email: {modal.email}</p>
            <p className="text-gray-700 text-center">Teléfono: {modal.telefono}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default SobreNosotros;