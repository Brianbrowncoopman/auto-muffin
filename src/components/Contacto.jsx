import React, { useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import emailjs from "@emailjs/browser";

const Contacto = () => {
  const location = useLocation();
  const foto = location.state?.foto;
  const form = useRef();

  // Construir URL completa de la imagen si existe
  const baseURL = window.location.origin;
  const fotoURL = foto?.src ? `${baseURL}${foto.src}` : "";

  const [errores, setErrores] = useState({
    nombre: "",
    rut: "",
    telefono: "",
    email: "",
  });


  // Validaciones en tiempo real
  const validarNombre = (e) => {
    const valor = e.target.value;
    const regex = /^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]{2,}$/;
    setErrores((prev) => ({
      ...prev,
      nombre: regex.test(valor) ? "" : "Solo letras y espacios. Mínimo 2 caracteres.",
    }));
  };

  const validarRut = (e) => {
    const valor = e.target.value;
    const regex = /^[0-9]{7,8}-[0-9kK]{1}$/;
    setErrores((prev) => ({
      ...prev,
      rut: regex.test(valor) ? "" : "Formato válido: 12345678-9 o 12345678-K",
    }));
  };

  const validarTelefono = (e) => {
    const valor = e.target.value;
    const regex = /^\+?[0-9\s]{7,15}$/;
    setErrores((prev) => ({
      ...prev,
      telefono: regex.test(valor) ? "" : "Solo números y símbolo +. Ej: +56912345678",
    }));
  };

  const validarEmail = (e) => {
    const valor = e.target.value;
    const regex = /^[^\s@]+@[^\s@]+\.[a-zA-Z]{2,}$/;
    setErrores((prev) => ({
      ...prev,
      email: regex.test(valor) ? "" : "Correo inválido. Ej: ejemplo@dominio.cl",
    }));
  };



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
     <div className="relative z-10 flex flex-col items-center w-full px-4">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
        Contacto
      </h1>
      <p className="text-lg md:text-2xl font-bold text-gray-700 max-w-2xl text-center">
        Por favor déjanos tus datos aca y nos pondremos en contacto a la brevedad.
      </p>
      <br/>
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="box-border border-2 border-black border-solid bg-gray-400 solid p-4 sm:p-8 rounded-md shadow-md w-full max-w-xs sm:max-w-md"
      >
        <input type="hidden" name="title" value="Nuevo mensaje de contacto" />
        
        {/* Nombre */}
          <div className="mb-4">
            <label htmlFor="name" className="block font-bold text-gray-900 mb-2">Nombre</label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={validarNombre}
              required
              className={`w-full px-3 py-2 border-2 rounded font-bold bg-gray-200 text-gray-900 ${
                errores.nombre ? "border-red-900 bg-red-100" : "border-black"
              }`}
            />
            {errores.nombre && <p className="text-red-800 font-bold text-base mt-2 bg-red-200 border-l-4 border-red-600 p-3 rounded">{errores.nombre}</p>}
          </div>


        {/* RUT */}
          <div className="mb-4">
            <label htmlFor="rut" className="block font-bold text-gray-900 mb-2">RUT</label>
            <input
              type="text"
              id="rut"
              name="rut"
              onChange={validarRut}
              required
              className={`w-full px-3 py-2 border-2 rounded font-bold bg-gray-200 text-gray-900 ${
                errores.rut ? "border-red-500 bg-red-100" : "border-black"
              }`}
            />
            {errores.rut && <p className="text-red-800 font-bold text-base mt-2 bg-red-200 border-l-4 border-red-600 p-3 rounded">{errores.rut}</p>}
          </div>


        {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block font-bold text-gray-900 mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={validarEmail}
              required
              className={`w-full px-3 py-2 border-2 rounded font-bold bg-gray-200 text-gray-900 ${
                errores.email ? "border-red-500 bg-red-100" : "border-black"
              }`}
            />
            {errores.email && <p className="text-red-800 font-bold text-base mt-2 bg-red-200 border-l-4 border-red-600 p-3 rounded">{errores.email}</p>}
          </div>


        {/* Teléfono */}
          <div className="mb-4">
            <label htmlFor="phone" className="block font-bold text-gray-900 mb-2">Teléfono</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              onChange={validarTelefono}
              required
              className={`w-full px-3 py-2 border-2 rounded font-bold bg-gray-200 text-gray-900 ${
                errores.telefono ? "border-red-500 bg-red-100" : "border-black"
              }`}
            />
            {errores.telefono && <p className="text-red-800 font-bold text-base mt-2 bg-red-200 border-l-4 border-red-600 p-3 rounded">{errores.telefono}</p>}
          </div>

        <div className="mb-4">
          <label
            className="block font-bold text-gray-900 mb-2 text-sm sm:text-base"
            htmlFor="horario"
          >
            Horario de contacto
          </label>
          <select
            id="horario"
            name="horario"
            required
            className="w-full px-3 py-2 box-border border-2 bg-gray-200 border-black rounded font-bold text-gray-900 text-sm sm:text-base"
          >
            <option value="">Selecciona un horario...</option>
            <option value="Mañana (08:00 - 12:00)">Mañana (08:00 - 12:00)</option>
            <option value="Mediodía (12:00 - 14:00)">Mediodía (12:00 - 14:00)</option>
            <option value="Tarde (14:00 - 18:00)">Tarde (14:00 - 18:00)</option>
            <option value="Noche (18:00 - 21:00)">Noche (18:00 - 21:00)</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="preferencia" className="block font-bold text-gray-900 mb-2 text-sm sm:text-base">
            ¿Cómo prefieres que te contactemos?
          </label>
          <select
            id="preferencia"
            name="preferencia"
            required
            className="w-full px-3 py-2 box-border border-2 bg-gray-200 border-black rounded font-bold text-gray-900 text-sm sm:text-base"
          >
            <option value="">Selecciona una opción...</option>
            <option value="Email">Email</option>
            <option value="Teléfono">Teléfono</option>
            <option value="WhatsApp">WhatsApp</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="motivo" className="block font-bold text-gray-900 mb-2 text-sm sm:text-base">
            Motivo del contacto
          </label>
          <select
            id="motivo"
            name="motivo"
            required
            className="w-full px-3 py-2 box-border border-2 bg-gray-200 border-black rounded font-bold text-gray-900 text-sm sm:text-base"
          >
            <option value="">Selecciona un motivo...</option>
            <option value="Consulta general">Consulta general</option>
            <option value="Interés en producto">Interés en producto</option>
            <option value="Soporte técnico">Soporte técnico</option>
            <option value="Post venta">Post venta</option>
            <option value="Otro">Otro</option>
          </select>
        </div>
        <div className="mb-4">
          <label htmlFor="ubicacion" className="block font-bold text-gray-900 mb-2 text-sm sm:text-base">
            Ciudad o comuna
          </label>
          <input
            type="text"
            id="ubicacion"
            name="ubicacion"
            placeholder="Ej. Maipú, Santiago"
            className="w-full px-3 py-2 box-border border-2 bg-gray-200 border-black rounded font-bold text-gray-900 text-sm sm:text-base"
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
            className="w-full px-3 py-2 box-border border-2 bg-gray-200 border-black rounded font-bold text-gray-900 text-sm sm:text-base "
            placeholder="Escribe tu mensaje aquí..."
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
      </div>
    </section>
  );
};

export default Contacto;