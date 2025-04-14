import Link from "next/link";

export default function AbouteMe() {
  return (
    <div>
      <div id="conteudo texto">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Eaque dolor illo corporis explicabo eligendi repudiandae
        ullam fuga voluptates quasi at error praesentium nemo provident
        dignissimos suscipit, facere atque quia quis.
      </p>
        <img src="" alt="" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Eaque dolor illo corporis explicabo eligendi repudiandae
        ullam fuga voluptates quasi at error praesentium nemo provident
        dignissimos suscipit, facere atque quia quis.
      </p>
      </div>
      <div id="links">
      <Link href="https://www.linkedin.com/in/devmarcossales/">
        <img src="" alt="" />
        Linkedin    
      </Link>
      <Link href="https://github.com/marckosalks">
      <img src="" alt="" />
        Github
      </Link>
      </div>
    </div>

  )
}
