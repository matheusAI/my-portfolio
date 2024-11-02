"use client";

import {
  useGitHubAutomatedRepos,
  StackIcons,
  ProjectIcons,
} from "github-automated-repos";

export default function Projetos() {
  const data = useGitHubAutomatedRepos("matheusAI", "exibir"); // Adicione uma palavra-chave se necessário

  return (
    <div>
      <h2 className="text-4xl text-[#ff0000] font-bold text-center mb-20">
        Projetos
      </h2>
      <div className="flex flex-wrap gap-10 justify-center m-10">
        {data.map((item) => (
          <div
            key={item.id}
            className="relative flex w-80 flex-col rounded-xl bg-[#121215] bg-clip-border text-white shadow-lg hover:shadow-gray-500/40"
          >
            <div className="flex justify-center relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg hover:shadow-gray-500/40 bg-gradient-to-r from-red-500 to-red-600">
              {item.topics.map((icon) => {
                return (
                  <ProjectIcons
                    key={icon}
                    className="project_Icon h-40"
                    itemTopics={icon}
                  />
                );
              })}
            </div>
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                {item.name}
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                {item.description}
              </p>
            </div>
            <div className="p-6 pt-0 flex gap-10">
              <a
                href={item.html_url}
                target="_blank"
                rel="noopener noreferrer"
                className="select-none rounded-lg bg-background py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40"
              >
                Repositorio
              </a>
              {item.homepage && (
                <a
                  href={item.homepage}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="select-none rounded-lg bg-background py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40"
                >
                  Demo
                </a>
              )}
            </div>
            {/* Ícones de Stack */}
            <div className=" flex gap-1 ml-4 mb-2">
              {item.topics.map((icon) => (
                <div
                  key={icon}
                  style={{ display: "flex", alignItems: "center" }}
                >
                  <StackIcons className="stack_Icon" itemTopics={icon} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
