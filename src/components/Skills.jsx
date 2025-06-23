import { FaRobot, FaPlug, FaRegClock } from 'react-icons/fa'
import { BsBarChartLine } from 'react-icons/bs'

const Skills = () => {
  const skills = [
    {
      title: 'Automação de Tarefas',
      description:
        'Crio soluções que reduzem retrabalho e aumentam a eficiência com scripts e integrações.',
      icon: <FaRobot className="text-amber-500 text-3xl mb-3" />,
    },
    {
      title: 'Dashboards e Relatórios',
      description:
        'Desenvolvo painéis dinâmicos e relatórios automatizados para apoio à tomada de decisões.',
      icon: <BsBarChartLine className="text-amber-500 text-3xl mb-3" />,
    },
    {
      title: 'Integração com APIs',
      description:
        'Conecto sistemas e organizo dados de forma inteligente para fluxos de trabalho mais ágeis.',
      icon: <FaPlug className="text-amber-500 text-3xl mb-3" />,
    },
    {
      title: 'Otimização de Processos',
      description:
        'Analiso e redesenho rotinas para torná-las mais simples, rápidas e eficazes.',
      icon: <FaRegClock className="text-amber-500 text-3xl mb-3" />,
    },
  ]

  return (
    <section
      id="skills"
      className="px-4 sm:px-6 lg:px-12 py-8 bg-[#131313] text-gray-200 pt-24"
    >
      <h2 className="text-2xl sm:text-3xl font-bold border-l-4 border-white pl-4 mb-6">
        Habilidades:
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-[#1e1e1e] border border-white/10 rounded-md p-6 shadow hover:shadow-lg transition duration-300 text-center"
          >
            <div className="flex justify-center">{skill.icon}</div>
            <h3 className="text-lg font-semibold text-white mb-2">
              {skill.title}
            </h3>
            <p className="text-sm text-gray-400">{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Skills
