import Image from 'next/image'
import icomM from '../../assets/icon_logo.svg'
import { AlternativeMenu } from '../Nav/AlternativeMenu'
import Link from 'next/link'


export function Header() {
  return (
    <header className="w-full h-20 bg-[#489aff] fixed flex items-center sm:justify-between justify-center px-4 z-20  text-amber-50" >
      <div id="caixa-magem" className="flex w-1/5">
        <div className=' flex w-full justify-center align-middle'>
          <Link href="/" className="scroll-smooth">
            <Image src={icomM} alt="Icone da Letra M" className='w-20 sm:block hidden' />
          </Link>
        </div>
      </div>
      <AlternativeMenu />
    </header>
  )
}
