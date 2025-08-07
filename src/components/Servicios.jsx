const Servicios = () => (
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
      Servicios
    </h1>
    <p className="text-lg md:text-2xl font-bold text-gray-700 max-w-2xl text-center">
     esta es la pagina de inicio  
     esta es la pagina de inicio  
     esta es la pagina de inicio  
     esta es la pagina de inicio  
     esta es la pagina de inicio  
     esta es la pagina de inicio  
     esta es la pagina de inicio  
     esta es la pagina de inicio  
    </p>
  </section>
);

export default Servicios;