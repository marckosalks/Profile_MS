import Image from "next/image";
import perfil from "../../assets/perfil.jpg";

import "./styles.css"

export function Contact() {
  return (
    <div id="contact" className="flex w-full h-96 justify-center bg-blue-400 flex-col items-center text-white font-bold gap-4">
      <div className=" justify-center items-center flex">
        <Image width={100} src={perfil} alt="perfil" className="perfil border-4 border-e-blue-50 [border-radius: 50%;]" />
      </div>

      <p>@todos os diretos reservados</p>

      <div className="flex gap-4 items-center justify-center p-6 rounded">
        <a
          href="https://wa.me/11984410717"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:scale-110 transition"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
            alt="WhatsApp"
            className="w-4 h-4 filter "
          />
        </a>

        <a
          href="https://instagram.com/seuusuario"
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 border border-white rounded-full flex items-center justify-center hover:scale-110 transition"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2111/2111463.png"
            alt="Instagram"
            className="w-4 h-4 filter "
          />
        </a>
      </div>



    </div>
  )
}
