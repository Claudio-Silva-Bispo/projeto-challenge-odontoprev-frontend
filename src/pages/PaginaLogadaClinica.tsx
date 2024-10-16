'use client'
import Link from 'next/link';
import { Button } from 'primereact/button';

export default function PaginaLogadaClinica() {

return (
    <div className="grid">
        <div className="col-12">
            <div className="card">
                <h5 className='text-5xl'>Gestão das Clínicas</h5>
                <div className='flex justify-center gap-10'>

                    <div className="flex justify-center mt-10">
                        <Link href="/ServicosPendentes">
                            <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm">
                                <img
                                    alt="Card"
                                    src="/assets/PaginaLogadaClinica/imagem.avif"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-2">Serviços pendentes</h3>
                                    <p className="text-gray-700 mb-4">
                                        Nesta workspace, você encontrará informações relacionados aos serviços que estão pendentes de agendamento.
                                    </p>
                                    <Link href="/Automovel">
                                    <Button label="clique aqui" icon="pi pi-arrow-right" className="w-full"></Button></Link>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="flex justify-center mt-10">
                        <Link href="/Agenda">
                            <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm">
                                <img
                                    alt="Card"
                                    src="/assets/PaginaLogadaClinica/agenda.avif"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-2">Agenda</h3>
                                    <p className="text-gray-700 mb-4">
                                        Nesta workspace, você encontrará informações específicas para os serviços que já foram confirmados.
                                    </p>
                                    <Link href="/Sinistro">
                                    <Button label="clique aqui" icon="pi pi-arrow-right" className="w-full" />
                                    </Link>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="flex justify-center mt-10">
                        <Link href="/GestaoClinica">
                            <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm">
                                <img
                                    alt="Card"
                                    src="/assets/PaginaLogadaClinica/gestao.avif"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-2">Gestão Clínica</h3>
                                    <p className="text-gray-700 mb-4">
                                        Nesta workspace, você encontrará informações disponíveis para   atualização de cadastro e perfil.
                                    </p>
                                    <Link href="/Comercial">
                                    <Button label="clique aqui" icon="pi pi-arrow-right" className="w-full" />
                                    </Link>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>

)
  }
