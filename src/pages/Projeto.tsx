import { useEffect, useState } from 'react';

const sectionsColors = [
  "#3B81F6",
  "#3B81F6",
  "#91d8f0",
  "#76d9a9",
  "#d1ef91",
  "#f8ee9c",
  "#f7c495",
  "#FD6A65",
  "#f68dcc",
  "#de9ffb"
];

export default function Projeto() {
  const [currentColor, setCurrentColor] = useState(sectionsColors[0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight; // Posição do scroll

      sectionsColors.forEach((color, index) => {
        const section = document.getElementById(`section-${index}`);
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionBottom = sectionTop + section.clientHeight;

          // Verifica se a seção está visível na viewport
          if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
            setCurrentColor(color); // Muda a cor atual
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <section className="flex flex-col gap-20 justify-center items-center min-h-screen bg-white min-w-screen">
        
        <div className="flex flex-col items-start text-start">
            <div className='flex'>
                <div className="w-0.5 bg-blue-500 h-72 mr-6 p-3 rounded-sm bar-highlight"></div>
                <div className='p-3 ml-10'>
                    <h1 className="relative flex flex-col text-8xl leading-[88px] text-start">
                    <span className="relative inline-block overflow-hidden p-2">
                        <span className="relative z-10 text-primeira font-jakarta">Delfos Machine</span>
                        <span className="absolute inset-0 bg-blue-300 opacity-30 animate-highlight"></span>
                    </span>

                    <span className="relative inline-block overflow-hidden p-2">
                        <span className="relative z-10 text-primeira font-jakarta">Segurança e Rentabilidade</span>
                        <span className="absolute inset-0 bg-blue-300 opacity-30 animate-highlight"></span>
                    </span>
                    </h1>

                    <div className="text-start">
                        <h2 className="text-4xl mt-4 font-jakarta text-primeira">
                            Prevenir é CUIDAR: Cliente SEGURO, Parceiro RENTÁVEL.
                        </h2>
                    </div>
                </div>
            </div>
        </div>

        <div className='w-[60%]'>
          <img src="/assets/FluxoCompleto/napkin-selection.png" alt="" />
        </div>

      </section>

      {/* Seções com cores de fundo */}
      <section
            style={{ backgroundColor: currentColor }}
            id="section-0"
            className="flex flex-col justify-start items-center min-h-screen"
        >
            <div className="relative text-start"> 
            {/* Contêiner para centralizar o texto e a linha */}
                <h3 className="pt-20 text-[80px] font-plus font-jakarta text-[#484848]">
                    Como funciona
                </h3>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 180 20"
                    width="180" // Ajuste a largura conforme necessário
                    height="20"
                    preserveAspectRatio="xMidYMid meet"
                    className="mx-auto" // Centraliza a linha
                    style={{ stroke: '#484848', strokeWidth: '10', marginTop: '-10px' }} // Define a cor e largura da linha
                >
                    <defs>
                        <clipPath id="__lottie_element_719">
                            <rect width="180" height="20" x="0" y="0" />
                        </clipPath>
                    </defs>
                    <g clipPath="url(#__lottie_element_719)">
                        <g style={{ display: 'block' }} opacity="1">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="miter"
                                fillOpacity="0"
                                strokeMiterlimit="4"
                                strokeDasharray="200 200"
                                strokeDashoffset="1.1246752738952637"
                                d="M5.863999843597412,12.588000297546387 C44.10300064086914,4.190000057220459 121.85700225830078,1.722000002861023 174.0679931640625,12.588000297546387"
                            />
                        </g>
                    </g>
                </svg>
            </div>

            <div className="flex flex-col md:flex-row w-full max-w-6xl p-4 justify-between items-center space-x-4 mt-20">
                {/* Container do texto à esquerda */}
                <div className="flex-1 md:flex-none  md:w-1/3 text-start flex flex-col justify-center">
                    <div className="flex items-center justify-center mb-4">
                        <div className="w-5 h-10 rounded-full bg-gray-800 flex items-center justify-center text-white font-bold text-xl">
                            1
                        </div>
                        <h3 className="ml-3 text-2xl text-[#484848]">
                            <span>Start com</span>
                            <span className="text-white"> Cliente</span> em ação
                        </h3>
                    </div>
                    <p className="text-lg text-[#484848]">
                        Fazendo cadastro, inserindo sua preferência
                    </p>
                </div>

                {/* Imagem grande à direita */}
                <div className="flex-1 md:flex-none w-full md:w-2/3">
                    <img
                        src="/assets/fluxo_usuario/napkin-selection.png"
                        alt="Descrição da imagem"
                        className="w-full h-auto rounded-lg"
                    />
                </div>
            </div>

      </section>





      <section style={{ backgroundColor: currentColor }} id="section-1" className="flex flex-col justify-center items-center min-h-screen">
        <h3>Processo cliente</h3>
      </section>
      
      <section style={{ backgroundColor: currentColor }} id="section-2" className="flex flex-col justify-center items-center min-h-screen">
        <h3>Processo clínica</h3>
      </section>
      <section style={{ backgroundColor: currentColor }} id="section-3" className="flex flex-col justify-center items-center min-h-screen">
        <h3>Sugestão da consulta</h3>
      </section>
      <section style={{ backgroundColor: currentColor }} id="section-4" className="flex flex-col justify-center items-center min-h-screen">
        <h3>Processo agendamento</h3>
      </section>
      <section style={{ backgroundColor: currentColor }} id="section-5" className="flex flex-col justify-center items-center min-h-screen">
        <h3>Processo consulta</h3>
      </section>
      <section style={{ backgroundColor: currentColor }} id="section-6" className="flex flex-col justify-center items-center min-h-screen">
        <h3>Processo especialista</h3>
      </section>
      <section style={{ backgroundColor: currentColor }} id="section-7" className="flex flex-col justify-center items-center min-h-screen">
        <h3>Processo bonificação</h3>
      </section>
      <section style={{ backgroundColor: currentColor }} id="section-8" className="flex flex-col justify-center items-center min-h-screen">
        <h3>Processo feedback</h3>
      </section>
    </>
  );
}
