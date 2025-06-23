import { FaCode } from 'react-icons/fa'
import mdSplash from '../assets/img/mala_direta.webp'
import smtSplash from '../assets/img/smt.webp'
import vfipeSplash from '../assets/img/vfipe.webp'

const Projects = () => {
  const projects = [
    {
      name: 'V Fipe',
      description:
        'O V FIPE é uma aplicação web que simplifica a consulta de valores de veículos utilizando os dados oficiais da Tabela FIPE.',
      image: vfipeSplash,
      liveUrl: 'https://vfipe.com.br',
      githubUrl: 'https://github.com/cesardmn/vfipe ',
    },
    {
      name: 'Mala Direta',
      description:
        'Geração de documentos personalizados em massa a partir de modelos .docx e planilhas .xlsx. Ideal para envios em larga escala como certificados, cartas, recibos e outros.',
      image: mdSplash,
      liveUrl: 'https://autoflux.app.br/maladireta',
      githubUrl: 'https://github.com/cesardmn/maladireta',
    },
    {
      name: 'SMT Formater',
      description:
        'Ferramenta que auxilía na preparação de arquivos para envio de telegramas no sistema dos Correios.',
      image: smtSplash,
      liveUrl: 'https://autoflux.app.br/smt',
      githubUrl: 'https://github.com/cesardmn/smt',
    },
  ]

  return (
    <section
      id="projects"
      className="px-4 sm:px-6 lg:px-12 py-8 bg-black text-gray-200 pt-24"
    >
      <h2 className="text-2xl sm:text-3xl font-bold border-l-4 border-white pl-4 mb-6">
        Projetos:
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1f1f1f] border border-white/10 rounded-md overflow-hidden shadow transition duration-300 flex flex-col hover:shadow-amber-700/30"
          >
            <div className="w-full h-20 bg-black flex items-center justify-center p-4 ">
              <img
                src={project.image}
                alt={project.name}
                className="h-30 object-contain  rounded-md  mt-20 shadow transition duration-300 flex flex-col hover:shadow-amber-700/30"
              />
            </div>

            <div className="p-4 flex flex-col flex-grow ">
              <h3 className="text-lg font-semibold text-white mb-2 mt-16">
                {project.name}
              </h3>
              <p className="text-sm text-gray-400 mb-4 flex-grow">
                {project.description}
              </p>
              <div className="flex justify-between items-center mt-auto ">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-white text-sm px-4 py-1.5 rounded font-medium shadow hover:opacity-90 transition"
                >
                  Ver Projeto
                </a>
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-amber-600 hover:text-amber-5900 transition text-xl"
                  aria-label="Ver código fonte"
                  title="Ver código fonte"
                >
                  <FaCode />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
