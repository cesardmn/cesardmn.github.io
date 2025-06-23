import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

const Footer = () => {
  return (
    <footer
      id="contact"
      className="px-6 sm:px-8 lg:px-16 py-12 bg-bk-3 text-gray-200"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-white">
          Vamos conversar?
          <span className="block h-1 w-16 bg-amber-500 mt-3"></span>
        </h2>

        <p className="mb-8 max-w-md text-gray-400">
          Interessado em trabalhar juntos ou tem algum projeto em mente? Entre
          em contato!
        </p>

        <div className="flex gap-4 mb-10">
          {[
            {
              icon: <FaGithub />,
              label: 'GitHub',
              url: 'https://github.com/cesardmn',
            },
            {
              icon: <FaLinkedinIn />,
              label: 'LinkedIn',
              url: 'https://linkedin.com/in/cesardmn',
            },
            {
              icon: <HiOutlineMail />,
              label: 'Email',
              url: 'cesardmn@gmail.com',
            },
          ].map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white/10 rounded-full hover:bg-amber-500 transition-all duration-300 text-xl"
              aria-label={item.label}
            >
              {item.icon}
            </a>
          ))}
        </div>

        <div className="text-xs text-gr-3 pt-6 border-t border-white/10">
          &copy; {new Date().getFullYear()} Cesar Dimi. Todos os direitos
          reservados.
        </div>
      </div>
    </footer>
  )
}

export default Footer
