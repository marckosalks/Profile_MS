import Image from "next/image";
import Link from "next/link";

export function Projects() {
  const projects = [
    {
      name: "Quadro pendências suporte",
      description: "Quadro de pendências para o time de suporte",
      link: "https://quadro-de-assuntos-suporte.vercel.app/",
      image: "/images/quado_pendencias.png",
    },
    {
      name: "Geladinho do Pix",
      description: "Trabalho como freelancer para empresa Geladinho do Pix",
      link: "https://geladinho-do-pix-pedidos.vercel.app/",
      image: "/images/geladinhodopix.png",
    },
    {
      name: "ImobCoin",
      description:
        "Projeto de um site para compra e venda de imóveis digital, com integração de NFTs",
      link: "https://www.imobcoin.com/",
      image: "/images/imobcoin.png",
    },
    {
      name: "Aldeia do Futuro",
      description:
        "Projeto de um site de ong para ajudar crianças carentes, sem fins lucrativos",
      link: "https://aldeiadofuturo.org.br/",
      image: "/images/aldeia.png",
    },
  ];

  return (

    <div id="projects" className="pt-20 pb-20">
      <div className="text-center mt-14 ">
        <h2 className="text-3xl font-medium text-blue-800">PROJETOS</h2>
        <p className="text-gray-400 mt-2 text-xl font-normal">
          Aqui estão alguns dos meus projetos mais recentes. <br />
        </p>
      </div>

      <div className="min-h-screen  flex items-center justify-center px-4 py-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 w-full max-w-7xl">
          {projects.map((project) => (
            <div
              key={project.name}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-transform duration-300"
            >
              <Image
                width={500}
                height={300}
                src={project.image}
                alt={`Preview de ${project.name}`}
                className="w-full h-60 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{project.name}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <Link
                  href={project.link}
                  target="_blank"
                  className="inline-block text-blue-600 hover:underline font-medium"
                >
                  Visitar projeto →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
