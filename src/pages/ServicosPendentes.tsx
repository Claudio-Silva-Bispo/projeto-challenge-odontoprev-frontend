import React, { useState } from 'react';

// Interface para os serviços pendentes
interface Servico {
    id: number;
    cliente: string;
    descricao: string;
    localizacao: string;
    data: string;
    hora: string;
    status: 'pendente' | 'aceito' | 'recusado'; // Tipos literais para o status
    preferencia: Preferencia; // Adiciona a preferência ao serviço
}

// Interface para preferências
interface Preferencia {
    diaSemana: string; // Ex: 'Segunda', 'Terça', etc.
    turno: string; // Ex: 'Manhã', 'Tarde', 'Noite'
    horario: string; // Ex: '10:00', '14:00', etc.
    regiao: string; // Ex: 'Sul de São Paulo', 'Norte de São Paulo'
}

const servicosData: Servico[] = [
    {
        id: 1,
        cliente: 'João',
        descricao: 'Consulta de rotina',
        localizacao: 'Clínica Central',
        data: '2024-10-16',
        hora: '10:00',
        status: 'pendente',
        preferencia: {
            diaSemana: 'Segunda',
            turno: 'Manhã',
            horario: '10:00',
            regiao: 'Sul de São Paulo'
        }
    },
    {
        id: 2,
        cliente: 'Maria',
        descricao: 'Avaliação odontológica',
        localizacao: 'Clínica Oeste',
        data: '2024-10-16',
        hora: '11:30',
        status: 'pendente',
        preferencia: {
            diaSemana: 'Terça',
            turno: 'Tarde',
            horario: '14:00',
            regiao: 'Norte de São Paulo'
        }
    },
    {
        id: 3,
        cliente: 'Lucas',
        descricao: 'Limpeza dental',
        localizacao: 'Clínica Leste',
        data: '2024-10-17',
        hora: '09:00',
        status: 'pendente',
        preferencia: {
            diaSemana: 'Quarta',
            turno: 'Manhã',
            horario: '09:00',
            regiao: 'Centro de São Paulo'
        }
    },
    {
        id: 4,
        cliente: 'Ana',
        descricao: 'Consulta de retorno',
        localizacao: 'Clínica Central',
        data: '2024-10-17',
        hora: '14:00',
        status: 'pendente',
        preferencia: {
            diaSemana: 'Quinta',
            turno: 'Tarde',
            horario: '15:00',
            regiao: 'Leste de São Paulo'
        }
    },
];

export default function ServicosPendentes() {
    const [servicos, setServicos] = useState<Servico[]>(servicosData);
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [selectedPreferencia, setSelectedPreferencia] = useState<Preferencia | null>(null);

    const handleAceitar = (id: number) => {
        const updatedServicos = servicos.map(servico => 
            servico.id === id ? { ...servico, status: 'aceito' as const } : servico
        );
        setServicos(updatedServicos);
    };

    const handleRecusar = (id: number) => {
        const updatedServicos = servicos.map(servico => 
            servico.id === id ? { ...servico, status: 'recusado' as const } : servico
        );
        setServicos(updatedServicos);
    };

    const handleShowPreferencias = (preferencia: Preferencia) => {
        setSelectedPreferencia(preferencia);
        setModalOpen(true);
    };

    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedPreferencia(null);
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Serviços Pendentes</h1>
            <table className="w-full text-left">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="p-2">Cliente</th>
                        <th className="p-2">Descrição</th>
                        <th className="p-2">Localização</th>
                        <th className="p-2">Data</th>
                        <th className="p-2">Hora</th>
                        <th className="p-2">Dia da Semana</th>
                        <th className="p-2">Status</th>
                        <th className="p-2">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    {servicos.map(servico => (
                        <tr key={servico.id} className="bg-gray-50 border-b">
                            <td className="p-2">{servico.cliente}</td>
                            <td className="p-2">{servico.descricao}</td>
                            <td className="p-2">{servico.localizacao}</td>
                            <td className="p-2">{servico.data}</td>
                            <td className="p-2">{servico.hora}</td>
                            <td className="p-2">{servico.preferencia.diaSemana}</td>
                            <td className={`p-2 ${servico.status === 'aceito' ? 'text-green-600' : servico.status === 'recusado' ? 'text-red-600' : ''}`}>
                                {servico.status}
                            </td>
                            <td className="p-2">
                                {servico.status === 'pendente' && (
                                    <>
                                        <button
                                            className="px-2 py-1 text-white bg-green-600 rounded mr-2"
                                            onClick={() => handleAceitar(servico.id)}
                                        >
                                            Aceitar
                                        </button>
                                        <button
                                            className="px-2 py-1 text-white bg-red-600 rounded mr-2"
                                            onClick={() => handleRecusar(servico.id)}
                                        >
                                            Recusar
                                        </button>
                                        <button
                                            className="px-2 py-1 text-white bg-blue-600 rounded"
                                            onClick={() => handleShowPreferencias(servico.preferencia)}
                                        >
                                            Preferências
                                        </button>
                                    </>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal de Preferências */}
            {modalOpen && selectedPreferencia && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-4 rounded shadow-md">
                        <h2 className="text-xl font-bold mb-2">Preferências de Atendimento</h2>
                        <p><strong>Dia da Semana:</strong> {selectedPreferencia.diaSemana}</p>
                        <p><strong>Turno:</strong> {selectedPreferencia.turno}</p>
                        <p><strong>Horário:</strong> {selectedPreferencia.horario}</p>
                        <p><strong>Região:</strong> {selectedPreferencia.regiao}</p>
                        <button
                            className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
                            onClick={handleCloseModal}
                        >
                            Fechar
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
