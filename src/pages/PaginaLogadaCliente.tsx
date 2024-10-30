'use client'
import Link from 'next/link';
import { Button } from 'primereact/button';

export default function PaginaLogadaCliente() {

return (
    <div className="grid">
        <div className="col-4 w-full">
            <div className="card">
                <h5 className='text-5xl'>Gestão dos Clientes</h5>
                <div className='grid grid-cols-3 gap-10 mt-10'>
                        
                        <div className="flex justify-center mt-10">
                            <Link href="/CadastroCliente">
                                <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm">
                                    <img
                                        alt="Card"
                                        src="/assets/PaginaLogadaCliente/cadastro.avif"
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-xl font-semibold mb-2">Cadastro</h3>
                                        <p className="text-gray-700 mb-4">
                                            Nesta workspace, você encontrará o formulário de cadastro.
                                        </p>
                                        <Link href="/Automovel">
                                        <Button label="clique aqui" icon="pi pi-arrow-right" className="w-full"></Button></Link>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="flex justify-center mt-10">
                            <Link href="/PreferenciaAtendimento">
                                <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm">
                                    <img
                                        alt="Card"
                                        src="/assets/PaginaLogadaCliente/preferencia.avif"
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-xl font-semibold mb-2">Preferencia de atendimento</h3>
                                        <p className="text-gray-700 mb-4">
                                            Nesta workspace, você encontrará informações sobre suas preferencias.
                                        </p>
                                        <Link href="/Sinistro">
                                        <Button label="clique aqui" icon="pi pi-arrow-right" className="w-full" />
                                        </Link>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="flex justify-center mt-10">
                            <Link href="/RotinasCuidado">
                                <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm">
                                    <img
                                        alt="Card"
                                        src="/assets/PaginaLogadaCliente/rotina.avif"
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-xl font-semibold mb-2">Rotina de cuidados</h3>
                                        <p className="text-gray-700 mb-4">
                                            Nesta workspace, você encontrará informações sobre sua rotina.
                                        </p>
                                        <Link href="/Comercial">
                                        <Button label="clique aqui" icon="pi pi-arrow-right" className="w-full" />
                                        </Link>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="flex justify-center mt-10">
                            <Link href="/GestaoCliente">
                                <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm">
                                    <img
                                        alt="Card"
                                        src="/assets/PaginaLogadaCliente/dados-cadastrais.avif"
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-xl font-semibold mb-2">Dados cadastrais</h3>
                                        <p className="text-gray-700 mb-4">
                                            Nesta workspace, você poderá alterar dados cadastrais.
                                        </p>
                                        <Link href="/Comercial">
                                        <Button label="clique aqui" icon="pi pi-arrow-right" className="w-full" />
                                        </Link>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="flex justify-center mt-10">
                            <Link href="/SugestaoAtendimento">
                                <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm">
                                    <img
                                        alt="Card"
                                        src="/assets/PaginaLogadaCliente/sugestao-atendimento.avif"
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-xl font-semibold mb-2">Sugestão de atendimento</h3>
                                        <p className="text-gray-700 mb-4">
                                            Nesta workspace, você encontrará as sugestões de atendimento preventivo.
                                        </p>
                                        <Link href="/Comercial">
                                        <Button label="clique aqui" icon="pi pi-arrow-right" className="w-full" />
                                        </Link>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="flex justify-center mt-10">
                            <Link href="/Agenda">
                                <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm">
                                    <img
                                        alt="Card"
                                        src="/assets/PaginaLogadaCliente/consultas.avif"
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-xl font-semibold mb-2">Consultas agendadas</h3>
                                        <p className="text-gray-700 mb-4">
                                            Nesta workspace, você encontrará as sugestões de atendimento preventivo.
                                        </p>
                                        <Link href="/Comercial">
                                        <Button label="clique aqui" icon="pi pi-arrow-right" className="w-full" />
                                        </Link>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="flex justify-center mt-10">
                            <Link href="/CadastroFeedback">
                                <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm">
                                    <img
                                        alt="Card"
                                        src="/assets/PaginaLogadaCliente/feedback.avif"
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-xl font-semibold mb-2">Feedback</h3>
                                        <p className="text-gray-700 mb-4">
                                            Responda as pesquisas de satisfação e ganhe recompensas.
                                        </p>
                                        <Link href="/Comercial">
                                        <Button label="clique aqui" icon="pi pi-arrow-right" className="w-full" />
                                        </Link>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="flex justify-center mt-10">
                            <Link href="/ProgramaIncentivoCliente">
                                <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm">
                                    <img
                                        alt="Card"
                                        src="/assets/PaginaLogadaCliente/beneficios.avif"
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-xl font-semibold mb-2">Programa de incentivo</h3>
                                        <p className="text-gray-700 mb-4">
                                            Você encontrará as informações sobre o programa de beneficios da OdontoPrev.
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
