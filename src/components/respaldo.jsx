import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Contacto = () => {
  const location = useLocation();
  const foto = location.state?.foto;
  const form = useRef();

  // Construir URL completa de la imagen si existe
  const baseURL = window.location.origin;
  const fotoURL = foto?.src ? `${baseURL}${foto.src}` : "";

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_0jo2oyt",
      "template_8sb4q84",
      form.current,
      "sUz9-DK0efEzD9HSS"
    )
    .then(() => {
      alert("Mensaje enviado correctamente");
      form.current.reset();
    }, () => {
      alert("Error al enviar el mensaje");
    });
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen py-20 bg-center bg-cover text-white overflow-hidden">
    {/* Pseudo-elemento para fondo con opacidad */}
    <div
      className="absolute inset-0 z-0"
      style={{
        backgroundImage: "url('/images/patagual_1.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        opacity: 0.225, // 👈 nivel de transparencia de la imagen
        filter: "brightness(0.6)", // opcional: para oscurecer un poco
      }}
    />
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
        Contacto
      </h1>
      <p className="text-lg md:text-2xl font-bold text-gray-700 max-w-2xl text-center">
        Esta es la página de Contactos
      </p>
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="box-border border-2 border-black border-solid bg-gray-500 solid p-4 sm:p-8 rounded-md shadow-md w-full max-w-xs sm:max-w-md"
      >
        <input type="hidden" name="title" value="Nuevo mensaje de contacto" />

        <div className="mb-4">
          <label className="block font-bold text-gray-900 mb-2 text-sm sm:text-base" htmlFor="name">
            Nombre
          </label>
          <input
            className="w-full px-3 py-2 border rounded text-sm sm:text-base"
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-bold text-gray-900 mb-2 text-sm sm:text-base" htmlFor="email">
            Email
          </label>
          <input
            className="w-full px-3 py-2 border rounded text-sm sm:text-base"
            type="email"
            id="email"
            name="email"
            required
          />
        </div>

        {foto && (
          <div className="mb-4 bg-gray-100 p-2 sm:p-4 rounded shadow">
            <img src={foto.src} alt={foto.titulo} className="rounded mb-2 w-full h-32 sm:h-40 object-cover" />
            <h2 className="text-base sm:text-xl font-bold">{foto.titulo}</h2>
            <h2 className="text-sm sm:text-lg text-gray-700 mb-2">{foto.valor}</h2>
            <p className="text-gray-700 text-sm sm:text-base">{foto.descripcion}</p>
            <input type="hidden" name="foto_titulo" value={foto.titulo} />
            <input type="hidden" name="foto_valor" value={foto.valor} />
            <input type="hidden" name="foto_descripcion" value={foto.descripcion} />
            <input type="hidden" name="foto_src" value={fotoURL} />
          </div>
        )}

        <input type="hidden" name="time" value={new Date().toLocaleString()} />

        <div className="mb-4">
          <label className="block font-bold text-gray-900 mb-2 text-sm sm:text-base" htmlFor="message">
            Mensaje
          </label>
          <textarea
            className="w-full px-3 py-2 border rounded text-sm sm:text-base"
            id="message"
            name="message"
            rows="4"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gray-500 font-bold text-gray-900 py-2 rounded hover:bg-gray-400 transition text-base sm:text-lg"
        >
          Enviar
        </button>
      </form>
    </section>
  );
};

export default Contacto;