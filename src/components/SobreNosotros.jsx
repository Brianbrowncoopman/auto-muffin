import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Contacto = () => {
  const location = useLocation();
  const foto = location.state?.foto;
  const form = useRef();

  const baseURL = window.location.origin;
  const fotoURL = foto?.src ? `${baseURL}${foto.src}` : "";

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes añadir un estado de "cargando" si quieres
    // setLoading(true);
    emailjs.sendForm(
      "service_0jo2oyt",       // Tu Service ID de EmailJS
      "template_8sb4q84",      // Tu Template ID de EmailJS
      form.current,
      "sUz9-DK0efEzD9HSS" // Tu Public Key de EmailJS
    )
    .then(() => {
      alert("Mensaje enviado correctamente 👍");
      form.current.reset();
    }, (error) => {
      console.error("Error de EmailJS:", error); // 👈 Es buena práctica mostrar el error en consola
      alert("Error al enviar el mensaje. Inténtalo de nuevo.");
    })
    .finally(() => {
      // setLoading(false);
    });
  };

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen py-20 bg-center bg-cover overflow-hidden">
      
      {/* CAPA 0: FONDO */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/images/patagual_1.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.25,
          filter: "brightness(0.6)",
        }}
      />

      {/* CAPA 10: CONTENIDO PRINCIPAL 👈 */}
      <div className="relative z-10 flex flex-col items-center w-full px-4">
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"> {/* 👈 Color cambiado a blanco */}
          Contacto
        </h1>
        <p className="text-lg md:text-2xl font-bold text-gray-200 max-w-2xl text-center mb-8"> {/* 👈 Color cambiado a gris claro */}
          Envíanos tu consulta y te responderemos a la brevedad.
        </p>

        <form
          ref={form}
          onSubmit={handleSubmit}
          className="bg-gray-800 bg-opacity-70 backdrop-blur-sm p-6 sm:p-8 rounded-lg shadow-2xl w-full max-w-md"
        >
          {/* Los inputs para EmailJS no necesitan label visible */}
          <input type="hidden" name="title" value="Nuevo mensaje de contacto" />
          <input type="hidden" name="time" value={new Date().toLocaleString()} />
          
          <div className="mb-4">
            <label className="block font-bold text-gray-100 mb-2 text-sm sm:text-base" htmlFor="name">
              Nombre
            </label>
            <input
              className="w-full px-3 py-2 border rounded text-gray-800 text-sm sm:text-base bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="text"
              id="name"
              name="name"
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block font-bold text-gray-100 mb-2 text-sm sm:text-base" htmlFor="email">
              Email
            </label>
            <input
              className="w-full px-3 py-2 border rounded text-gray-800 text-sm sm:text-base bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              type="email"
              id="email"
              name="email"
              required
            />
          </div>

          {/* Sección de la foto (si viene desde otra página) */}
          {foto && (
            <div className="mb-4 bg-gray-100 p-2 sm:p-4 rounded shadow-inner text-gray-800">
              <p className="text-sm font-bold text-gray-600 mb-2">Consultando por:</p>
              <img src={foto.src} alt={foto.titulo} className="rounded mb-2 w-full h-32 sm:h-40 object-cover" />
              <h2 className="text-base sm:text-xl font-bold">{foto.titulo}</h2>
              <h2 className="text-sm sm:text-lg text-gray-700 mb-2">{foto.valor}</h2>
              <p className="text-gray-700 text-sm sm:text-base">{foto.descripcion}</p>
              
              {/* Inputs ocultos para enviar la info de la foto por email */}
              <input type="hidden" name="foto_titulo" value={foto.titulo} />
              <input type="hidden" name="foto_valor" value={foto.valor} />
              <input type="hidden" name="foto_descripcion" value={foto.descripcion} />
              <input type="hidden" name="foto_src" value={fotoURL} />
            </div>
          )}

          <div className="mb-6">
            <label className="block font-bold text-gray-100 mb-2 text-sm sm:text-base" htmlFor="message">
              Mensaje
            </label>
            <textarea
              className="w-full px-3 py-2 border rounded text-gray-800 text-sm sm:text-base bg-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
              id="message"
              name="message"
              rows="4"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 font-bold text-white py-3 rounded-lg hover:bg-blue-700 transition-colors text-base sm:text-lg shadow-lg"
          >
            Enviar Consulta
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contacto;