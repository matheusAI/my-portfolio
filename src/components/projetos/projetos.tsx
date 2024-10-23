"use client";

{/*import Image from 'next/image';*/}
import { Suspense, useEffect, useState } from 'react';

interface Projeto {
  id: number;
  titulo: string;
  conteudo: string;
  url: string;
  UrlProducao: string;
  imag: string;
}

function Projetos() {
  const [projetos, setProjetos] = useState<Projeto[]>([]);

  useEffect(() => {
    async function fetchProjetos() {
      try {
        const response = await fetch('/api/projetos');
        if (!response.ok) {
          throw new Error('Erro ao buscar os projetos');
        }
        const data: Projeto[] = await response.json();
        setProjetos(data);
      } catch (error) {
        console.error('Erro ao buscar os projetos:', error);
      }
    }

    fetchProjetos();
  }, []);

  return (
    <div className="flex flex-wrap gap-10 justify-center m-10">
      {projetos.map((projeto) => (
        <div
          key={projeto.id}
          className="relative flex w-80 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md"
        >
          <div
            className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-red-500 to-red-600"
          >
            {/* <Image src={projeto.imag} alt=''/> */}
          </div>
          <div className="p-6">
            <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
              {projeto.titulo}
            </h5>
            <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
              {projeto.conteudo}
            </p>
          </div>
          <div className="p-6 pt-0 flex gap-10">
            <a
              href={projeto.url}
              target="_blank"
              rel="noopener noreferrer"
              className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Repositorio
            </a>
            <a
              href={projeto.UrlProducao}
              target="_blank"
              rel="noopener noreferrer"
              className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              demo
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function ProjetosWithSuspense() {
  return (
    <Suspense fallback={<div>Carregando...</div>}>
      <Projetos />
    </Suspense>
  );
}
