import { NextResponse } from 'next/server';

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

export async function GET() {
  try {
    const response = await fetch('https://api.github.com/users/matheusAI/repos', {
      next: { revalidate: 120 },
    });
    const repos: Repo[] = await response.json();

    const projetosFavoritos: Projeto[] = repos.filter((repo) =>
      favoritos.includes(repo.name)
    ).map((repo) => ({
      id: repo.id,
      titulo: repo.name,
      conteudo: repo.description || "Sem descrição",
      url: repo.html_url,
      UrlProducao: repo.homepage,
      imag: "/default-image.png",
    }));

    return NextResponse.json(projetosFavoritos);
  } catch (error) {
    return NextResponse.json({ message: 'Erro ao buscar os repositórios do GitHub', error }, { status: 500 });
  }
}

