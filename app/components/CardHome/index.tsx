import Image from 'next/image'
import avatar from '../../assets/avatar_dev_ms.png'

export function CardHome() {
  return (
    <div className="relative h-screen w-full animate-gradient bg-gradient-to-b from-blue-400 via-blue-600 to-blue-950 bg-[length:200%_200%]">
      <section  className="relative z-10 h-full w-full flex flex-col items-center justify-center px-4 text-white text-center md:text-left">
        <div className="max-w-3xl">
          <h1 className="text-xl md:text-2xl xl:text-5xl  font-bold uppercase">
            Olá!<br />
            <span className="uppercase text-4xl md:text-7xl leading-none block">
              Me chame de <br />Tigger
            </span>
          </h1>
          <span className="text-lg md:text-2xl font-normal normal-case leading-none block mt-4">
            Seu desenvolvedor competente.
          </span>
        </div>
      </section>

      <div className="mb-8 md:mb-0 md:ml-8 flex justify-center">
        <Image
          src={avatar}
          alt="avatar Marcos Sales"
          className="absolute bottom-0 right-auto sm:right-0 lg:right-10 w-[300px] sm:w-[400px] md:w-[390px] lg:w-[500px] xl:w-[600px] h-auto object-contain pointer-events-none z-0"
          priority
        />
      </div>
    </div>
  )
}
