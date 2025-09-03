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

//export default Contacto;






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

//export default SobreNosotros;