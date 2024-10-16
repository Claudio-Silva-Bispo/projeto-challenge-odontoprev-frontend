import React, { useState } from 'react';

// Interface para sugestão de atendimento com status estrito
interface Sugestao {
    id: number;
    data: string;
    hora: string;
    diaSemana: string;
    clinica: string;
    medico: string;
    descricao: string;
    status: 'pendente' | 'aceito' | 'recusado';
}

// Dados simulados de sugestão de atendimento
const sugestoesData: Sugestao[] = [
    {
        id: 1,
        data: '2024-10-16',
        hora: '10:00',
        diaSemana: 'Segunda-feira',
        clinica: 'Clínica Central',
        medico: 'Dr. João Silva',
        descricao: 'Consulta preventiva odontológica',
        status: 'pendente'
    },
    {
        id: 2,
        data: '2024-10-20',
        hora: '14:30',
        diaSemana: 'Sexta-feira',
        clinica: 'Clínica Oeste',
        medico: 'Dra. Maria Souza',
        descricao: 'Avaliação odontológica',
        status: 'pendente'
    },
];

export default function SugestoesAtendimento() {
    const [sugestoes, setSugestoes] = useState<Sugestao[]>(sugestoesData);
    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [selectedSugestao, setSelectedSugestao] = useState<Sugestao | null>(null);
    const [motivoRecusa, setMotivoRecusa] = useState<string>('');

    // Função para abrir o modal com a descrição do atendimento
    const handleMostrarDescricao = (sugestao: Sugestao) => {
        setSelectedSugestao(sugestao);
        setModalOpen(true);
    };

    // Função para fechar o modal
    const handleCloseModal = () => {
        setModalOpen(false);
        setSelectedSugestao(null);
        setMotivoRecusa(''); // Limpa o motivo da recusa ao fechar o modal
    };

    // Função para aceitar a sugestão
    const handleAceitar = (id: number) => {
        const updatedSugestoes = sugestoes.map(sugestao =>
            sugestao.id === id ? { ...sugestao, status: 'aceito' } : sugestao
        );
        
        handleCloseModal();
    };

    // Função para recusar a sugestão e abrir o modal para coletar o motivo
    const handleRecusar = (id: number) => {
        const updatedSugestoes = sugestoes.map(sugestao =>
            sugestao.id === id ? { ...sugestao, status: 'recusado' } : sugestao
        );
     
        console.log(`Motivo da recusa: ${motivoRecusa}`);
        handleCloseModal();
    };

    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Sugestões de Atendimento</h1>
            <div className="grid grid-cols-1 gap-4">
                {sugestoes.map(sugestao => (
                    <div key={sugestao.id} className="border p-4 rounded shadow-lg">
                        <h2 className="text-xl font-bold">{sugestao.clinica}</h2>
                        <p><strong>Data:</strong> {sugestao.data}</p>
                        <p><strong>Hora:</strong> {sugestao.hora}</p>
                        <p><strong>Dia da Semana:</strong> {sugestao.diaSemana}</p>
                        <p><strong>Médico:</strong> {sugestao.medico}</p>
                        <p><strong>Status:</strong> {sugestao.status}</p>
                        <button
                            className="mt-2 px-4 py-2 bg-blue-600 text-white rounded"
                            onClick={() => handleMostrarDescricao(sugestao)}
                        >
                            Ver Descrição
                        </button>
                    </div>
                ))}
            </div>

            {/* Modal de Descrição */}
            {modalOpen && selectedSugestao && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-4 rounded shadow-md max-w-md w-full">
                        <h2 className="text-xl font-bold mb-2">Descrição do Atendimento</h2>
                        <p>{selectedSugestao.descricao}</p>
                        <div className="mt-4">
                            <button
                                className="px-4 py-2 bg-green-600 text-white rounded mr-2"
                                onClick={() => handleAceitar(selectedSugestao.id)}
                            >
                                Aceitar
                            </button>
                            <button
                                className="px-4 py-2 bg-red-600 text-white rounded"
                                onClick={() => handleRecusar(selectedSugestao.id)}
                            >
                                Recusar
                            </button>
                        </div>
                        <button
                            className="mt-4 px-4 py-2 bg-gray-600 text-white rounded"
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
