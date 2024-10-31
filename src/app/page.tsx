import About from "@/components/about/about";
import Projetos from "@/components/projetos/projetos";
import Skills from "@/components/skill/skill";

export default function Home() {
  return (
    <main className=" flex flex-col gap-10 items-center ">
      <section id="sobre">
        <About />
      </section>
      <div className="p-1 w-[90%] bg-[#121215]"></div>
      <section id="projetos">
        <Projetos />
      </section>
      <div className="p-1 w-[90%] bg-[#121215]"></div>
      <section id="skills">
        <Skills />
      </section>
    </main>
  );
}
