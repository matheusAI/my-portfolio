"use client";

import React from "react";
import Image from "next/image";

const About: React.FC = () => {
  return (
    <section id="#sobre" className=" text-gray-300 py-16 px-8">
      <div className="container grid md:grid-cols-2 grid-cols-1 gap-4 mx-auto justify-center items-center">
        <div className=" flex flex-col items-center justify-center py-3 gap-2">
            <Image src="/image/perfil.jpg" alt="" width={320} height={320} className=" rounded-full"/>
            <div className=" w-80 h-16 bg-[#121215] rounded-full"></div>
        </div>
        <div className="container">
          <h2 className="text-4xl font-bold text-white mb-6">sobre mim</h2>
          <p className="text-lg leading-relaxed mb-4">
          sou Desenvolvedor de software especializado em criar soluções web dinâmicas e escaláveis 
          com tecnologias como Nest.js, Next.js com Node.js. 
          Focado na construção de aplicações eficientes e centradas na experiência do usuário.
          </p>
          <p className="text-lg leading-relaxed">
          Ao longo da minha carreira, venho aperfeiçoando minhas habilidades em TypeScript, Tailwind CSS e
          outras ferramentas essenciais para entregar produtos robustos e de alto desempenho. 
          Estou constantemente em busca de inovações tecnológicas para criar soluções eficazes que atendam às necessidades do cliente.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
