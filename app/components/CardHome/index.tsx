import Image from 'next/image'
import avatar from '../../assets/avatar_dev_ms.png'

export default function CardHome() {
  return (
    <div className="h-screen w-full flex animate-gradient bg-gradient-to-b from-blue-400 via-blue-600 to-blue-950 bg-[length:200%_200%]">

    <section className="h-screen w-full flex items-center justify-center">
      <div className=" text-white uppercase ">
        <h1 className="text-[1.5rem] font-bold block ">Olá!<br />
          <span className="text-[5rem] ">Me chame de <br />Tigger</span>
          <span className="text-2xl font-normal normal-case"><br />Seu desenvolvedor compentente.</span>
        </h1>
      </div>

      <Image src={avatar} alt="avatar Marcos Sales" className='w-lg scale-150 pt-[74]' />
    </section>
  </div>

  )
}
