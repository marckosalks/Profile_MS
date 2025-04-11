import Image from 'next/image'
import icomM from '../../assets/icon_logo.svg'
import { AlternativeMenu } from '../Nav/AlternativeMenu'


export default function Header() {
  return (
    <header className="w-full h-20 bg-blue-500 fixed flex items-center justify-between px-4 z-20  text-amber-50" >
      <div id="caixa-magem" className="flex w-1/5">
        <div className=' flex w-full justify-center align-middle'>
          <Image src={icomM} alt="Icone da Letra M" className='w-20' />
        </div>
      </div>
    <AlternativeMenu/>
    </header>
  )
}
