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
        <MenubarTrigger>Jornada</MenubarTrigger>
        <MenubarTrigger>Projetos</MenubarTrigger>
        <MenubarTrigger>Contato</MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  )
}
