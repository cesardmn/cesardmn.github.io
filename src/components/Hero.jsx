import { BsFillPersonFill } from 'react-icons/bs'
import profile from '../assets/img/cesar_dimi_full_stack_developer.webp'
const Hero = () => {
  return (
    <section
      id="hero"
      className="bg-bk-2 flex flex-col-reverse md:flex-row items-center justify-between px-4 sm:px-6 lg:px-12 py-16 gap-12 relative overflow-hidden pt-24 mt-10"
    >
      {/* Text Section */}
      <div className="flex flex-col gap-4 w-full md:w-2/3 text-center md:text-left">
        <h2 className="text-lg sm:text-xl text-gray-300 font-medium">
          Olá! Meu nome é:
        </h2>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight bg-gradient-to-r from-amber-700 to-amber-200 bg-clip-text text-transparent">
          Cesar Dimi
        </h1>

        <p className="text-gray-300 text-base sm:text-lg md:text-lg max-w-prose mx-auto md:mx-0 leading-relaxed">
          Desenvolvedor com experiência em automação de processos, criação de
          dashboards e integração de dados via APIs. Atuo com foco em eficiência
          operacional, utilizando Python, App Script, Excel e ferramentas de BI.
        </p>

        <a
          href="./docs/CESAR_NETO_curriculo.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center  justify-center gap-7 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white text-sm px-4 py-1.5 rounded font-medium shadow hover:opacity-90 transition max-w-44"
        >
          curriculo <BsFillPersonFill />
        </a>
      </div>

      {/* Profile Image */}
      <div
        className="bg-gradient-to-r from-amber-700 via-orange-600 to-amber-500  rounded-full p-3 sm:p-6 shadow-inner flex items-center justify-center w-[70vw] sm:w-[60vw] md:w-[320px] aspect-square overflow-hidden shrink-0"
        aria-hidden="true"
      >
        <img
          src={profile}
          alt="Foto de perfil de Cesar Neto"
          className="w-full h-full object-cover rounded-full shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
        />
      </div>
    </section>
  )
}

export default Hero
