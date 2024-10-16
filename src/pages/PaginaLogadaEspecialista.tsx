'use client'
import Link from 'next/link';
import { Button } from 'primereact/button';

export default function PaginaLogadaEspecialista() {

return (
    <div className="grid">
        <div className="col-4 w-full">
            <div className="card">
                <h5 className='text-5xl'>Gestão dos Médicos/Especialistas</h5>
                <div className='grid grid-cols-3 gap-10 mt-10'>
                        
                        <div className="flex justify-center mt-10">
                            <Link href="/CadastroEspecialista">
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
                            <Link href="/GestaoEspecialista">
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
                            <Link href="/GestaoFeedback">
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
                            <Link href="/ProgramaIncentivoEspecialista">
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
