import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Inicio', to: '/' },
    { name: 'Servicios', to: '/servicios' },
    { name: 'Proyectos', to: '/proyectos' },
    { name: 'Sobre Nosotros', to: '/sobre-nosotros' },
    { name: 'Galeria', to: '/galeria' },
    { name: 'Contacto', to: '/contacto' },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300
      ${scrolled ? 'bg-gray-200 shadow-md py-2' : 'bg py-4'}
      md:border-b-2 md:border-gray-700
    `}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-20 flex items-center">
            <img
              src="/images/patagual_1.png"
              alt="Logo"
              className="w-10 h-10 rounded-lg object-contain"
            />
            <span
              className={`ml-3 font-bold text-xl ${scrolled ? 'text-gray-800' : 'text-gray-800'
                }`}
            >
              Patagual Autos
            </span>
          </div>

          {/* Menú para desktop */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              {navItems.map((item) =>
                item.to ? (
                  <Link
                    key={item.name}
                    to={item.to}
                    className={`font-medium transition-colors duration-300 hover:text-indigo-600 ${scrolled ? 'text-gray-700' : 'text-black'
                      }`}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    className={`font-medium transition-colors duration-300 hover:text-indigo-600 ${scrolled ? 'text-gray-700' : 'text-gray-400'
                      }`}
                  >
                    {item.name}
                  </a>
                )
              )}
            </div>
          </div>

          {/* Botón para móvil */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md bg-black focus:outline-none ${scrolled ? 'text-gray-700' : 'text-white'
                }`}
            >
              <svg
                className={`h-6 w-6 transition-transform duration-300 ${isOpen ? 'transform rotate-180' : ''
                  }`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Menú móvil */}
      <div
        className={`md:hidden absolute top-full left-0 w-full transition-all duration-500 bg-gray-200 shadow-lg border-b-2 border-gray-300 z-40 ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'
          }`}
        style={{ transitionProperty: 'max-height, opacity' }}
      >
        <div className="px-2 pt-2 pb-2 space-y-1">
          {navItems.map((item) =>
            item.to ? (
              <Link
                key={item.name}
                to={item.to}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-100"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            )
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;