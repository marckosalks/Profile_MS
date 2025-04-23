import "./Journey.css"

export function JourneyCard() {
  return (
    <div className="pt-10 ">
      <div className="text-center mt-14">
        <h2 className="text-3xl font-medium text-blue-800">JORNADA</h2>
        <p className="text-gray-400 mt-2 text-xl font-normal pb-10">
          Conheça um pouco mais sobre minha jornada!
        </p>
      </div>

      <div className="flex justify-center items-center">
        <div id="img01" className="flex justify-center items-center rounded-4xl">
          <div className="bg-zinc-700 opacity-50">
            <p>incio da jornada</p>
          </div>
        </div>
      </div>
    </div>
  )
}
