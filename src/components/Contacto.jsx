import React, { useRef } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Contacto = () => {
  const location = useLocation();
  const foto = location.state?.foto;
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(
      "service_0jo2oyt",      // Tu Service ID
      "template_8sb4q84",     // Tu Template ID
      form.current,
      "sUz9-DK0efEzD9HSS" // Tu Public Key
    )
    .then(() => {
      alert("Mensaje enviado correctamente");
      form.current.reset();
    }, () => {
      alert("Error al enviar el mensaje");
    });
  };

  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-200 py-20">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-600 mb-6">
        Contacto
      </h1>
      <p className="text-lg md:text-2xl text-gray-700 max-w-2xl text-center mb-8">
        Esta es la página de Contactos
      </p>
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="box-border border-2 border-black border-solid bg-gray-300 p-8 rounded-md shadow-md w-full max-w-md"
      >
        {/* Campo oculto para el título del mensaje */}
        <input type="hidden" name="title" value="Nuevo mensaje de contacto" />

        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">
            Nombre
          </label>
          <input
            className="w-full px-3 py-2 border rounded"
            type="text"
            id="name"
            name="name"
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
        {foto && (
          <div className="mb-4 bg-gray-100 p-4 rounded shadow">
            <img src={foto.src} alt={foto.titulo} className="rounded mb-2 w-full h-40 object-cover" />
            <h2 className="text-xl font-bold">{foto.titulo}</h2>
            <h2 className="text-lg text-gray-700 mb-2">{foto.valor}</h2>
            <p className="text-gray-700">{foto.descripcion}</p>
            <input type="hidden" name="foto_titulo" value={foto.titulo} />
            <input type="hidden" name="foto_valor" value={foto.valor} />
            <input type="hidden" name="foto_descripcion" value={foto.descripcion} />
          </div>
        )}
        {/* Campo oculto para la hora actual */}
        <input type="hidden" name="time" value={new Date().toLocaleString()} />
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="message">
            Mensaje
          </label>
          <textarea
            className="w-full px-3 py-2 border rounded"
            id="message"
            name="message"
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