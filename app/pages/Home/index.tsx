import Image from 'next/image'
import avatar from '../../assets/avatar_dev_ms.png'
import Header from '@/app/components/Header'

export default function HomePage() {
  return (

    <div>
      <Header />

      <div className="h-screen w-full flex  bg-blue-500">

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

    </div>
  )
}
