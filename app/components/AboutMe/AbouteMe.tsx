// src/components/AboutSection.jsx
import Image from "next/image";
import Link from "next/link";
import  Git  from "../../assets/git.webp" 
export  function AboutMe() {
  return (
    <section className="w-full px-4 py-10 flex flex-col items-center">

      <div className="flex flex-col md:flex-row justify-center text-center md:text-left max-w-5xl w-full gap-4 md:gap-12">
        <p className="md:w-1/2 border-r md:pr-6">
          Bem-vindo ao meu universo! Sou um desenvolvedor Full Stack especializado 
          em criar soluções inovadoras e funcionais. Com a capacidade de trabalhar em equipe
          e resolver problemas de forma eficiente, meu objetivo é transformar desafios em resultados impactantes,
        </p>
        <p className="md:w-1/2 md:pl-6">
          Desenvolvimento de APIs robustas com Node.js, Java e TypeScript, utilizando
          Prisma e Docker. Experiência com banco de dados MySQL e MongoDB, e aplicação de
          princípios como SOLID e Design Patterns. Criação de interfaces intuitivas e responsivas
          com React, Next.js, Angular e Tailwind CSS.
        </p>
      </div>

      <div className="flex gap-4 mt-6">
        <Link
          href="https://www.linkedin.com/in/devmarcossales/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-blue-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-blue-700 transition"
        >
          in Linkedin
        </Link>
        <Link
          href="https://github.com/marckosalks"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center gap-2 border border-blue-600 text-blue-600 px-6 py-2 rounded-md font-semibold hover:bg-blue-100 transition"
        >
          <Image src={Git} alt="icon git" className="w-5 h-5 "/>
          GitHub
        </Link>
      </div>

      <div className="text-center mt-14">
        <h2 className="text-3xl font-medium text-blue-800">TECNOLOGIAS</h2>
        <p className="text-gray-400 mt-2 text-xl font-normal">
          Abaixo estão algumas das tecnologias que utilizo. <br />
          Clique nos ícones e descubra um pouco mais!
        </p>
      </div>
    </section>
  );
}
