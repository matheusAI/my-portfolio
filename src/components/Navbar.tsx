"use client";

import React, { useState } from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full h-20 bg-[#121215] z-50">
      <div className="container mx-auto flex justify-between items-center h-full">
        {/* Logo */}
        <div className="text-[#ff0000] text-4xl font-bold pl-8">
          <Link href="/">MyPortfolio</Link>
        </div>

        {/* Menu hamburguer para telas pequenas */}
        <div className="lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-white text-3xl mr-8"
          >
            &#9776;
          </button>
        </div>

        {/* Links */}
        <ul
          className={`${
            isOpen ? "left-0" : "left-full"
          } items-center lg:left-auto lg:static fixed top-20 lg:top-auto flex flex-col lg:flex-row lg:space-x-4 bg-[#121215] lg:bg-transparent w-full lg:w-auto h-auto lg:h-full lg:mr-8 transition-all duration-500 ease-in-out`}
        >
          <li className="block lg:inline-block my-6 lg:my-0">
            <Link href="#sobre" className="text-[#ff0000] uppercase px-4 py-2 hover:bg-[#ff0000] hover:text-white rounded-2xl">sobre</Link>
          </li>
          <li className="block lg:inline-block my-6 lg:my-0">
            <Link href="#projetos" className="text-[#ff0000] uppercase px-4 py-2 hover:bg-[#ff0000] hover:text-white rounded-2xl">Projetos</Link>
          </li>
          <li className="block lg:inline-block my-6 lg:my-0">
            <Link href="#skills" className="text-[#ff0000] uppercase px-4 py-2 hover:bg-[#ff0000] hover:text-white rounded-2xl">skills</Link>
          </li>
          <li className="block lg:inline-block my-6 lg:my-0">
            <Link href="#contato" className="text-[#ff0000] uppercase px-4 py-2 hover:bg-[#ff0000] hover:text-white rounded-2xl">Contato</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;