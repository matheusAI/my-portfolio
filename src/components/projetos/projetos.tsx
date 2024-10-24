{/* import Image from "next/image"; */}

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  homepage: string;
}

interface Projeto {
  id: number;
  titulo: string;
  conteudo: string;
  url: string;
  UrlProducao: string;
  imag: string;
}

const favoritos = ["Relogio_digital", "DEVLINKS", "jogo-da-cobra", "server-ts"];

async function fetchProjetos(): Promise<Projeto[]> {
  try {
    const response = await fetch('https://api.github.com/users/matheusAI/repos', {
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
      next: { revalidate: 300 },
    });
    
    if (!response.ok) {
      throw new Error('Erro ao buscar os repositórios do GitHub');
    }

    const repos: Repo[] = await response.json();

    const projetosFavoritos: Projeto[] = repos
      .filter((repo) => favoritos.includes(repo.name))
      .map((repo) => ({
        id: repo.id,
        titulo: repo.name,
        conteudo: repo.description || "Sem descrição",
        url: repo.html_url,
        UrlProducao: repo.homepage || '#',
        imag: "/default-image.png",
      }));

    return projetosFavoritos;
  } catch (error) {
    console.error(error);
    return [];
  }
}

// Server Component para exibir os projetos
export default async function Projetos() {
  const projetos = await fetchProjetos(); // Faz a requisição diretamente

  return (
    <div className="flex flex-wrap gap-10 justify-center m-10">
      {projetos.map((projeto) => (
        <div
          key={projeto.id}
          className="relative flex w-80 flex-col rounded-xl bg-[#121215] bg-clip-border text-white shadow-md"
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
              className="select-none rounded-lg bg-background py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Repositorio
            </a>
            {projeto.UrlProducao && projeto.UrlProducao !== '#' && (
              <a
                href={projeto.UrlProducao}
                target="_blank"
                rel="noopener noreferrer"
                className="select-none rounded-lg bg-background py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Demo
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
