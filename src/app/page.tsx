import About from "@/components/about/about";
import Projetos from "@/components/projetos/projetos";

export default function Home() {
  return (
    <main className=" flex flex-col gap-10">
      <section id="sobre">
        <About />
      </section>
      <section id="projetos">
        <Projetos />
      </section>
    </main>
  );
}
