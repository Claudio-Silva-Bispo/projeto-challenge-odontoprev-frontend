import Image from "next/image"
// Instalar npm install react-icons
import { FaFacebookF, FaInstagram, FaEnvelope, FaWhatsapp } from 'react-icons/fa';
import imagem from '../../public/assets/Team/claudio.jpeg'

const people = [
  {
    name: 'Claudio Silva Bispo',
    role: 'Front-end & Dados',
    imageUrl: '/assets/Team/claudio.jpeg',
    socials: [
      { icon: FaFacebookF, href: 'https://facebook.com' },
      { icon: FaInstagram, href: 'https://instagram.com' },
      { icon: FaEnvelope, href: 'mailto:claudio@example.com' },
      { icon: FaWhatsapp, href: 'https://wa.me/5511999999999' },
    ],
  },
  {
    name: 'Patricia Naomi',
    role: 'Back-end Java',
    imageUrl: '/assets/Team/patricia.jpeg',
    socials: [
      { icon: FaFacebookF, href: 'https://facebook.com' },
      { icon: FaInstagram, href: 'https://instagram.com' },
      { icon: FaEnvelope, href: 'mailto:patricia@example.com' },
      { icon: FaWhatsapp, href: 'https://wa.me/5511999999999' },
    ],
  }
]

export default function Team() {
  return (
    <section className="bg-[#DEE8FE] py-24 sm:py-32 min-h-[80vh] flex justify-center items-center">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-6xl font-bold tracking-tight text-gray-700 sm:text-5xl">Conheça nosso time</h2>
          <p className="mt-6 text-xl leading-8 text-gray-700">
            Uma dupla dedicada que se esforça incansavelmente para entregar um trabalho de excelência, unindo habilidades e determinação em cada detalhe.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <Image width={800} height={400} alt="" src={person.imageUrl} className="h-32 w-32 rounded-full" />
                <div>
                  <h3 className="text-xl font-semibold leading-7 tracking-tight text-gray-700">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-quinta">{person.role}</p>
                  <div className="mt-2 flex space-x-4">
                    {person.socials.map((social, index) => (
                      <a key={index} href={social.href} target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-900">
                        <social.icon />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
