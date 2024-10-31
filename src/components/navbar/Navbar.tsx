"use client";

import React, { useState } from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Função para alternar o estado de aberto/fechado do menu
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Quando o menu é clicado, fecha o menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full h-20 bg-[#121215] z-50">
      <div className="container mx-auto flex justify-between items-center h-full">
        {/* Logo */}
        <div className="text-[#ff0000] text-4xl font-bold pl-8">
          <Link href="/">MyPortfolio</Link>
        </div>

        {/* Menu hamburguer para telas pequenas */}
        <div className="checkbtn lg:hidden transition-all duration-500" onClick={toggleMenu}>
          {isOpen ? (
            <span className="text-4xl">&#x2716;</span> // Ícone X
          ) : (
            <span className="text-4xl">&#9776;</span> // Ícone de Hambúrguer
          )}
        </div>

        {/* Links */}
        <ul
          className={`${
            isOpen ? "left-0" : "left-full"
          } items-center lg:left-auto lg:static fixed top-20 lg:top-auto flex flex-col lg:flex-row lg:space-x-4 bg-[#121215] lg:bg-transparent w-full lg:w-auto h-auto lg:h-full lg:mr-8 transition-all duration-500 ease-in-out`}
          onClick={closeMenu}
        >
          <li className="block lg:inline-block my-6 lg:my-0 ">
            <Link
              href="#sobre"
              className="text-[#ff0000] bg-background uppercase px-4 py-2 shadow-lg hover:shadow-red-500/40 rounded-lg"
            >
              Sobre
            </Link>
          </li>
          <li className="block lg:inline-block my-6 lg:my-0">
            <Link
              href="#projetos"
              className="text-[#ff0000] bg-background uppercase px-4 py-2 shadow-lg hover:shadow-red-500/40 rounded-lg"
            >
              Projetos
            </Link>
          </li>
          <li className="block lg:inline-block my-6 lg:my-0">
            <Link
              href="#skills"
              className="text-[#ff0000] bg-background uppercase px-4 py-2 shadow-lg hover:shadow-red-500/40 rounded-lg"
            >
              Skills
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
