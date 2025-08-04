import React, { useState } from "react";
import { useHistory } from "react-router-dom"; // Importa useHistory

const fotos = [
  {
    src: "/images/auto_1.jpg",
    titulo: "Foto 1",
    descripcion: "Descripción de la foto 1",
    valor: "$1.000.000",
  },
  {
    src: "/images/auto_2.jpg",
    titulo: "Foto 2",
    descripcion: "Descripción de la foto 2",
    valor: "$2.000.000",
  },
  {
    src: "/images/auto_3.jpg",
    titulo: "Foto 3",
    descripcion: "Descripción de la foto 3",
    valor: "$3.000.000",
  },
  {
    src: "/images/auto_4.jpg",
    titulo: "Foto 4",
    descripcion: "Descripción de la foto 4",
    valor: "$4.000.000",
  },
  {
    src: "/images/auto_5.jpg",
    titulo: "Foto 4",
    descripcion: "Descripción de la foto 4",
    valor: "$5.000.000",
  },
  {
    src: "/images/auto_6.jpg",
    titulo: "Foto 4",
    descripcion: "Descripción de la foto 4",
    valor: "$6.000.000",
  },
  {
    src: "/images/auto_7.jpg",
    titulo: "Foto 7",
    descripcion: "Descripción de la foto 4",
    valor: "$7.000.000",
  },
  {
    src: "/images/auto_8.jpg",
    titulo: "Foto 8",
    descripcion: "Descripción de la foto 4",
    valor: "$8.000.000",
  },
];

const fotosCarrusel = [
  "/images/auto_6.jpg",
  "/images/auto_5.jpg",
  "/images/auto_4.jpg",
  "/images/auto_3.jpg",
  "/images/auto_2.jpg",
  "/images/auto_1.jpg",
  "/images/auto_7.jpg",
  "/images/auto_8.jpg",
];

const Galeria = () => {
  const [modal, setModal] = useState(null);
  const [carruselIdx, setCarruselIdx] = useState(0);
  const history = useHistory(); // Inicializa useHistory

  const handlePrev = () => setCarruselIdx((carruselIdx - 1 + fotosCarrusel.length) % fotosCarrusel.length);
  const handleNext = () => setCarruselIdx((carruselIdx + 1) % fotosCarrusel.length);
  
  // esto es para cotizar desde la imagen
  const handleCotizar = () => {
    history.push({
      pathname: "/contacto",
      state: { foto: modal }
    });
    setModal(null);
  };  

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-200  py-20">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-600 mb-6">
        Galería de Fotos
      </h1>
      <p className="text-lg md:text-2xl text-gray-700 max-w-2xl text-center mb-8">
        
      </p>

      {/* Carrusel */}
      <div className="w-full max-w-2xl mb-10 relative">
        <img
          src={fotosCarrusel[carruselIdx]}
          alt={`Carrusel ${carruselIdx + 1}`}
          className="rounded-lg shadow-lg w-full h-64 object-cover"
        />
        <button
          onClick={handlePrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow"
        >
          &#8592;
        </button>
        <button
          onClick={handleNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white bg-opacity-70 hover:bg-opacity-100 rounded-full p-2 shadow"
        >
          &#8594;
        </button>
      </div>

      {/* Galería */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {fotos.map((foto, idx) => (
          <div
            key={idx}
            className="relative cursor-pointer transform transition-transform duration-300 hover:scale-110"
            onClick={() => setModal(foto)}
          >
            <img
              src={foto.src}
              alt={foto.titulo}
              className="rounded-lg shadow-lg w-full h-48 object-cover"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-40 text-white text-center py-2 rounded-b-lg">
              {foto.titulo}
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {modal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full relative">
            <button
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500 text-2xl"
              onClick={() => setModal(null)}
            >
              &times;
            </button>
            <img src={modal.src} alt={modal.titulo} className="rounded-lg mb-4 w-full h-56 object-cover" />
            <h2 className="text-2xl font-bold mb-2">{modal.titulo}</h2>
            <h2 className="text-xl text-gray-700 mb-4">{modal.valor}</h2>
            <p className="text-gray-700">{modal.descripcion}</p>
            <button
              className="w-full bg-gray-300 text-white py-2 rounded hover:bg-gray-200 transition"
              onClick={handleCotizar}
            >
              Cotizar
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Galeria;