'use client'
import Link from 'next/link';
import { Button } from 'primereact/button';

export default function Home() {

return (
    <div className="grid">
        <div className="col-12">
            <div className="card">
                <h5 className='text-5xl'>Gestão de Clientes e Parceiros</h5>
                <div className='flex justify-center gap-10'>
                    <div className="flex justify-center mt-10">
                        <Link href="/PaginaLogadaCliente">
                            <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm">
                                <img
                                    alt="Card"
                                    src="/assets/Hero/imagem1.jpg"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-2">Cliente</h3>
                                    <p className="text-gray-700 mb-4">
                                        Nesta workspace, você encontrará informações relacionados aos clientes, como cadastro, sugestão de agendamentos e consultas agendadas.
                                    </p>
                                    <Link href="/Automovel">
                                    <Button label="clique aqui" icon="pi pi-arrow-right" className="w-full"></Button></Link>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="flex justify-center mt-10">
                        <Link href="/PaginaLogadaClinica">
                            <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm">
                                <img
                                    alt="Card"
                                    src="/assets/CadastroClinica/imagem1.jpg"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-2">Clínica</h3>
                                    <p className="text-gray-700 mb-4">
                                        Nesta workspace, você encontrará informações específicas para clinicas, como gestão da agenda, serviços pendentes.
                                    </p>
                                    <Link href="/PaginaLogadaClinica">
                                    <Button label="clique aqui" icon="pi pi-arrow-right" className="w-full" />
                                    </Link>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="flex justify-center mt-10">
                        <Link href="/PaginaLogadaEspecialista">
                            <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm">
                                <img
                                    alt="Card"
                                    src="/assets/Login/imagem1.jpg"
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-4">
                                    <h3 className="text-xl font-semibold mb-2">Especialista</h3>
                                    <p className="text-gray-700 mb-4">
                                        Nesta workspace, você encontrará informações disponíveis para os nossos especialistas (médicos), como programa de recompensa, cadastro, serviços realizados.
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
