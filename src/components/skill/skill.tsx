import React from "react";
import {
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiDocker,
  SiMongodb,
  SiJsonwebtokens,
  SiNestjs,
  SiJest,
  SiExpress,
  SiPython,
} from "react-icons/si";

const skills = [
  { name: "TypeScript", icon: <SiTypescript /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "React", icon: <SiReact /> },
  { name: "Next.js", icon: <SiNextdotjs /> },
  { name: "Nest.js", icon: <SiNestjs /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Express.js", icon: <SiExpress/> },
  { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  { name: "HTML5", icon: <SiHtml5 /> },
  { name: "CSS3", icon: <SiCss3 /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "JWT", icon: <SiJsonwebtokens /> },
  { name: "Jest", icon: <SiJest /> },
  { name: "Python", icon: <SiPython/> }
  /*{ name: "", icon: }*/
];

const Skills: React.FC = () => {
  return (
    <section id="skills" className="text-gray-300 py-16 px-8">
      <h2 className="text-4xl text-[#ff0000] font-bold text-center mb-20">Habilidades</h2>
      <div className="container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 mx-auto text-center">
        {skills.map((skill, index) => (
          <div key={index} className="flex flex-col items-center">
            <div className="text-5xl text-[#ff0000] mb-4">{skill.icon}</div>
            <p className="text-lg">{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
