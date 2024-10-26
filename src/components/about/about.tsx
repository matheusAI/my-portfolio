import React from "react";
import Image from "next/image";
import { FaEnvelope, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

const About: React.FC = () => {
  return (
    <section id="#sobre" className=" py-16 px-8">
      <div className="container grid md:grid-cols-2 grid-cols-1 gap-4 mx-auto justify-center items-center">
        <div className=" flex flex-col items-center justify-center py-3 gap-2">
          <Image
            src="/image/perfil.jpg"
            alt=""
            width={320}
            height={320}
            className=" rounded-full p-2 bg-gradient-to-b from-red-600 to-red-950 shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          />
          <div className=" w-96 h-16 bg-[#121215] rounded-full flex items-center justify-around shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
            {/* Gmail */}
            <a href="mailto:ms2279584@gmail.com" aria-label="Gmail">
              <FaEnvelope size={40} />
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/matheus-santos-434ab0200/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={40} />
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/matheusAI"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub size={40} />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/matheus_3341/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram size={40} />
            </a>
          </div>
        </div>
        <div className="container p-2">
          <h2 className="text-4xl font-bold text-[#ff0000] mb-6">sobre mim</h2>
          <p className="text-lg leading-relaxed mb-4">
            sou Desenvolvedor de software especializado em criar soluções web
            dinâmicas e escaláveis com tecnologias como Nest.js, Next.js com
            Node.js. Focado na construção de aplicações eficientes e centradas
            na experiência do usuário.
          </p>
          <p className="text-lg leading-relaxed">
            Ao longo da minha carreira, venho aperfeiçoando minhas habilidades
            em TypeScript, Tailwind CSS e outras ferramentas essenciais para
            entregar produtos robustos e de alto desempenho. Estou
            constantemente em busca de inovações tecnológicas para criar
            soluções eficazes que atendam às necessidades do cliente.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
