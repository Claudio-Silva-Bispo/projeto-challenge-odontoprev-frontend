'use client'
import Link from 'next/link';
import { Button } from 'primereact/button';

export default function Hero() {

return (
    <div className="grid">
        <div className="col-4 w-full">
            <div className="card">
                <h5 className='text-5xl'>Cadastro</h5>
                <div className='grid grid-cols-3 gap-10 mt-10 justify-center'>
                        
                        <div className="flex justify-center mt-10">
                            <Link href="/CadastroCliente">
                                <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm">
                                    <img
                                        alt="Card"
                                        src="/assets/PaginaLogadaCliente/cadastro.avif"
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-xl font-semibold mb-2">Cliente</h3>
                                        <p className="text-gray-700 mb-4">
                                        Faça seu cadastro se você deseja se tornar um cliente.
                                        </p>
                                        <Link href="/CadastroCliente">
                                        <Button label="clique aqui" icon="pi pi-arrow-right" className="w-full"></Button></Link>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="flex justify-center mt-10">
                            <Link href="/CadastroClinica">
                                <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm">
                                    <img
                                        alt="Card"
                                        src="/assets/PaginaLogadaCliente/preferencia.avif"
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-xl font-semibold mb-2">Clínica</h3>
                                        <p className="text-gray-700 mb-4">
                                        Faça seu cadastro se você deseja se tornar um clínica parceira.
                                        </p>
                                        <Link href="/CadastroClinica">
                                        <Button label="clique aqui" icon="pi pi-arrow-right" className="w-full" />
                                        </Link>
                                    </div>
                                </div>
                            </Link>
                        </div>

                        <div className="flex justify-center mt-10">
                            <Link href="/CadastroEspecialista">
                                <div className="bg-white shadow-lg rounded-lg overflow-hidden max-w-sm">
                                    <img
                                        alt="Card"
                                        src="/assets/PaginaLogadaCliente/rotina.avif"
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="p-4">
                                        <h3 className="text-xl font-semibold mb-2">Especialista</h3>
                                        <p className="text-gray-700 mb-4">
                                        Faça seu cadastro se você deseja se tornar um Especialista/Médico.
                                        </p>
                                        <Link href="/CadastroEspecialista">
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
