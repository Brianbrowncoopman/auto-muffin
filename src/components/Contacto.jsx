import React from "react";
import { useLocation } from "react-router-dom";

const Contacto = () => {
  const location = useLocation();
  const foto = location.state?.foto;

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-200 py-20">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-600 mb-6">
        Contacto
      </h1>
      <p className="text-lg md:text-2xl text-gray-700 max-w-2xl text-center mb-8">
        Esta es la página de Contactos
      </p>
      <form className="box-border border-2 border-black border-solid  bg-gray-300  p-8 rounded-md shadow-md w-full max-w-md">
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="nombre">
            Nombre
          </label>
          <input
            className="w-full px-3 py-2 border rounded"
            type="text"
            id="nombre"
            name="nombre"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-3 py-2 border rounded"
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        {/* Imagen y datos de la foto seleccionada */}
        {foto && (
          <div className="mb-4 bg-gray-100 p-4 rounded shadow">
            <img src={foto.src} alt={foto.titulo} className="rounded mb-2 w-full h-40 object-cover" />
            <h2 className="text-xl font-bold">{foto.titulo}</h2>
            <h2 className="text-lg text-gray-700 mb-2">{foto.valor}</h2>
            <p className="text-gray-700">{foto.descripcion}</p>
          </div>
        )}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="mensaje">
            Mensaje
          </label>
          <textarea
            className="w-full px-3 py-2 border rounded"
            id="mensaje"
            name="mensaje"
            rows="4"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-gray-500 text-white py-2 rounded hover:bg-gray-400 text-black-300 transition"
        >
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Contacto;