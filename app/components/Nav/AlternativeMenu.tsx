import {
  Menubar,

  MenubarMenu,

  MenubarTrigger,
} from "@/components/ui/menubar"

export function AlternativeMenu() {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>Sobre Mim</MenubarTrigger>
        <MenubarTrigger>Jornada</MenubarTrigger>
        <MenubarTrigger>Projetos</MenubarTrigger>
        <MenubarTrigger>Contato</MenubarTrigger>
      </MenubarMenu>
    </Menubar>
  )
}
