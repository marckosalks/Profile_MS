import Image from 'next/image'
import avatar from '../../assets/avatar_dev_ms.png'

export default function CardHome() {
  return (
    <div className="h-screen w-full flex animate-gradient bg-gradient-to-b from-blue-400 via-blue-600 to-blue-950 bg-[length:200%_200%]">
      <section className="h-screen w-full flex flex-col md:flex-row items-center justify-center px-4">
        {/* Texto */}
        <div className="text-white uppercase text-center md:text-left">
          <h1 className="text-xl md:text-2xl font-bold">
            Olá!<br />
            <span className="text-4xl md:text-6xl leading-none block">
              Me chame de <br />Tigger
            </span>
          </h1>
          <span className="text-lg md:text-2xl font-normal normal-case leading-none block mt-4">
            Seu desenvolvedor competente.
          </span>
        </div>

        {/* Imagem */}
        <div className="mb-8 md:mb-0 md:ml-8 flex justify-center">
          <Image
            src={avatar}
            alt="avatar Marcos Sales"
            className="w-52 sm:w-72 md:w-96 lg:w-[500px] h-auto"
            priority
          />
        </div>
      </section>
    </div>
  );
}
