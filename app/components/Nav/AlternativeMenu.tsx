import {
  Menubar,

  MenubarMenu,

  MenubarTrigger,
} from "@/components/ui/menubar"
import Link from "next/link"

export function AlternativeMenu() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger asChild>
          <Link href="#about">
            Sobre Mim
          </Link>
        </MenubarTrigger>
        <MenubarTrigger asChild>
          <Link href="#journey">
            Jornada
          </Link>
        </MenubarTrigger>
        <MenubarTrigger asChild>
          <Link href="#projects">
            Projetos
          </Link>
        </MenubarTrigger>
        <MenubarTrigger asChild>
          <Link href="#contact">
            Contato
          </Link>
        </MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  )
}
