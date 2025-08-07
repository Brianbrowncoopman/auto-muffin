import React from "react";

const Home = () => (
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

    {/* Contenido por delante del fondo */}
    <div className="relative z-10 px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
        Bienvenido a Mi Sitio Web
      </h1>
      <p className="text-lg md:text-2xl font-bold text-gray-700 max-w-2xl text-center">
        Esta es la página de inicio.<br />
        Esta es la página de inicio.<br />
        Esta es la página de inicio.<br />
        Esta es la página de inicio.<br />
        Esta es la página de inicio.<br />
        Esta es la página de inicio.<br />
        Esta es la página de inicio.<br />
        Esta es la página de inicio.
      </p>
    </div>
  </section>
);

export default Home;