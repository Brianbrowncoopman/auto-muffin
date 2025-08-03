import React from "react";

const Footer = () => (
  <footer className="bg-gray-300 text-blue py-4 mt-auto">
    <div className="container mx-auto text-center">
      © {new Date().getFullYear()} Mi Sitio Web. Todos los derechos reservados. Desarrollado por Brian Brown
    </div>
  </footer>
);

export default Footer;