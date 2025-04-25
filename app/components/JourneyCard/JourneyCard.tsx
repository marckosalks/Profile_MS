"use client";
import { useRef } from "react";
import "./Journey.css";

export function JourneyCard() {
  const eventos = [
    {
      ano: "2018 - 2019",
      texto:
        "Início meus estudos na programação. Desde novo tenho interesse na área e finalmente decido arriscar, fazendo meus primeiros cursos de lógica de programação e algoritmos!",
      position: "top",
    },
    {
      ano: "2020 - 2021",
      texto:
        "Ingresso no curso de Análise e Desenvolvimento de Sistemas e conclusão de curso. Novos horizontes se abrindo, relacionamento direto com TI, análise de dados, abstração, lógica e conceitos que carrego comigo até hoje!",
      position: "bottom",
    },
    {
      ano: "2022 - 2023",
      texto:
        "Início minha jornada como Desenvolvedor Júnior e avanço como Dev Pleno. Flexibilidade e desafios se misturam nessa fase da minha vida! Aprendendo a trabalhar em equipe, lidar com prazos e desenvolver soluções criativas para problemas complexos.",
      position: "top",
    },
    {
      ano: "2024 - 2025",
      texto:
        "Sonhada vaga como Desenvolvedor Sênior. Após anos de dedicação e aprendizado, chego ao meu objetivo de me tornar um desenvolvedor sênior, pronto para enfrentar novos desafios e contribuir com projetos inovadores.",
      position: "bottom",
    },
  ];

  const scrollRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollRef.current) return;
    isDragging.current = true;
    startX.current = e.pageX - scrollRef.current.offsetLeft;
    scrollLeft.current = scrollRef.current.scrollLeft;
  };

  const handleMouseLeave = () => {
    isDragging.current = false;
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startX.current) * 1; // velocidade do scroll
    scrollRef.current.scrollLeft = scrollLeft.current - walk;
  };

  return (
    <div className="pt-10">
      <div className="text-center mt-14">
        <h2 className="text-3xl font-medium text-blue-800">JORNADA</h2>
        <p className="text-gray-400 mt-2 text-xl font-normal pb-10">
          Conheça um pouco mais sobre minha jornada!
        </p>
      </div>

      <div className="flex justify-center">
        <div
          id="img01"
          className="rounded-4xl w-full max-w-7xl h-[400px] sm:h-[500px] flex items-center justify-center overflow-hidden"
        >
          <div
            ref={scrollRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="relative flex items-center gap-20 px-10 overflow-x-auto scrollbar-hide cursor-grab active:cursor-grabbing h-full disabled:overflow-x-auto"
          >


            {eventos.map((evento) => (
              <div
                key={evento.ano}
                className="flex flex-col items-center min-w-[16rem] sm:min-w-[20rem] relative z-10"
              >
                <div
                  className={`bg-blue-900 text-white rounded-xl shadow-lg p-4 text-sm ${
                    evento.position === "top" ? "mt-20" : "mb-20"
                  }`}
                >
                  {evento.texto}
                </div>

                <div className="w-5 h-5 bg-blue-500 rounded-full border-4 border-white z-10" />

                <div className="mt-3 text-white font-bold bg-blue-700 px-3 py-1 rounded-full shadow">
                  {evento.ano}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default JourneyCard;