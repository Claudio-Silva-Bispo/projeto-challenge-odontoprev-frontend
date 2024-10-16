import React, { useState } from 'react';

// Interface para o agendamento
interface Agendamento {
    id: number;
    dia: string;
    hora: string;
    medico: string;
    cliente: string;
    tipo_consulta: 'presencial' | 'remota';
    descricao: string;
    status: 'concluida' | 'pendente' | 'cancelada';
}

// Dados simulados
const agendamentosData: Agendamento[] = [
    { id: 1, dia: 'Segunda', hora: '09:00', medico: 'Dr. João', cliente: 'Maria', tipo_consulta: 'presencial', descricao: 'Limpeza', status: 'concluida' },
    { id: 2, dia: 'Segunda', hora: '11:00', medico: 'Dr. Ana', cliente: 'Pedro', tipo_consulta: 'remota', descricao: 'Consulta de rotina', status: 'pendente' },
    { id: 3, dia: 'Terça', hora: '10:00', medico: 'Dr. Carlos', cliente: 'Lucas', tipo_consulta: 'presencial', descricao: 'Canal', status: 'cancelada' },
    { id: 4, dia: 'Quarta', hora: '14:00', medico: 'Dra. Carla', cliente: 'Julia', tipo_consulta: 'remota', descricao: 'Avaliação', status: 'concluida' },
    { id: 5, dia: 'Quinta', hora: '16:00', medico: 'Dr. Rafael', cliente: 'Ana', tipo_consulta: 'presencial', descricao: 'Limpeza', status: 'pendente' },
    { id: 6, dia: 'Sexta', hora: '15:00', medico: 'Dr. Bruno', cliente: 'Fernando', tipo_consulta: 'remota', descricao: 'Consulta de retorno', status: 'concluida' },
    { id: 7, dia: 'Sábado', hora: '09:00', medico: 'Dra. Fernanda', cliente: 'Sofia', tipo_consulta: 'presencial', descricao: 'Exame', status: 'cancelada' },
    { id: 8, dia: 'Sábado', hora: '10:30', medico: 'Dra. Helena', cliente: 'Paula', tipo_consulta: 'presencial', descricao: 'Limpeza', status: 'concluida' },
];

export default function Agenda() {
    const [agendamentos, setAgendamentos] = useState<Agendamento[]>(agendamentosData);
    const [showModal, setShowModal] = useState(false);
    const [selectedAgendamento, setSelectedAgendamento] = useState<Agendamento | null>(null);
    const [showCancelModal, setShowCancelModal] = useState(false);
    const [cancelMotivo, setCancelMotivo] = useState<string>('');

    // Estados para armazenar os valores editáveis no modal
    const [editMedico, setEditMedico] = useState<string>('');
    const [editCliente, setEditCliente] = useState<string>('');
    const [editDia, setEditDia] = useState<string>('');
    const [editHora, setEditHora] = useState<string>('');
    const [editDescricao, setEditDescricao] = useState<string>('');

    const renderStatusColor = (status: Agendamento['status']) => {
        switch (status) {
            case 'concluida':
                return 'bg-green-500';
            case 'pendente':
                return 'bg-yellow-500';
            case 'cancelada':
                return 'bg-red-500';
            default:
                return '';
        }
    };

    const handleAlterarConsulta = (agendamento: Agendamento) => {
        setSelectedAgendamento(agendamento);
        setEditMedico(agendamento.medico);
        setEditCliente(agendamento.cliente);
        setEditDia(agendamento.dia);
        setEditHora(agendamento.hora);
        setEditDescricao(agendamento.descricao);
        setShowModal(true);
    };

    const confirmAlteracao = () => {
        if (selectedAgendamento) {
            const updatedAgendamentos = agendamentos.map((agendamento) => {
                if (agendamento.id === selectedAgendamento.id) {
                    return {
                        ...agendamento,
                        medico: editMedico,
                        cliente: editCliente,
                        dia: editDia,
                        hora: editHora,
                        descricao: editDescricao,
                    };
                }
                return agendamento;
            });
            setAgendamentos(updatedAgendamentos);
            setShowModal(false);
            setSelectedAgendamento(null);
        }
    };

    const handleCancelConsulta = (agendamento: Agendamento) => {
        setSelectedAgendamento(agendamento);
        setShowCancelModal(true);
    };

    const confirmCancelamento = () => {
        if (selectedAgendamento && cancelMotivo) {
            const updatedAgendamentos = agendamentos.map((agendamento) => {
                if (agendamento.id === selectedAgendamento.id) {
                    return {
                        ...agendamento,
                        status: 'cancelada',
                        descricao: `${agendamento.descricao} - Cancelado: ${cancelMotivo}`,
                    };
                }
                return agendamento;
            });
            setShowCancelModal(false);
            setSelectedAgendamento(null);
            setCancelMotivo('');
        }
    };

    const diasDaSemana = ['Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];

    return (
        <div>
            <h1 className='mb-5'>Agenda</h1>
            <div className="grid grid-cols-6 gap-4">
                {diasDaSemana.map((dia) => (
                    <div key={dia} className="border p-2">
                        <h2 className="font-bold">{dia}</h2>
                        {agendamentos
                            .filter(agendamento => agendamento.dia === dia)
                            .map((agendamento) => (
                                <div
                                    key={agendamento.id}
                                    className={`p-4 rounded-lg text-white ${renderStatusColor(agendamento.status)} mb-2 cursor-pointer`}
                                >
                                    <p><strong>Hora:</strong> {agendamento.hora}</p>
                                    <p><strong>Médico:</strong> {agendamento.medico}</p>
                                    <p><strong>Cliente:</strong> {agendamento.cliente}</p>
                                    <p><strong>Tipo de Consulta:</strong> {agendamento.tipo_consulta}</p>
                                    <p><strong>Descrição:</strong> {agendamento.descricao}</p>
                                    <div className="flex space-x-2 mt-2">
                                        <button
                                            className="bg-white text-gray-600 p-1 rounded"
                                            onClick={() => handleAlterarConsulta(agendamento)}
                                        >
                                            Alterar
                                        </button>

                                        <button
                                            className="bg-red-500 text-white p-1 rounded"
                                            onClick={() => handleCancelConsulta(agendamento)}
                                        >
                                            Cancelar
                                        </button>
                                    </div>
                                </div>
                            ))}
                    </div>
                ))}
            </div>

            {/* Modal de Alteração */}
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-4 rounded shadow-lg">
                        <h2 className="font-bold">Alterar Consulta</h2>
                        <div className="mt-2">
                            <label>Médico:</label>
                            <input
                                type="text"
                                value={editMedico}
                                onChange={(e) => setEditMedico(e.target.value)}
                                className="border p-1 w-full"
                            />
                        </div>
                        <div className="mt-2">
                            <label>Cliente:</label>
                            <input
                                type="text"
                                value={editCliente}
                                onChange={(e) => setEditCliente(e.target.value)}
                                className="border p-1 w-full"
                            />
                        </div>
                        <div className="mt-2">
                            <label>Dia:</label>
                            <input
                                type="text"
                                value={editDia}
                                onChange={(e) => setEditDia(e.target.value)}
                                placeholder="Ex: Segunda"
                                className="border p-1 w-full"
                            />
                        </div>
                        <div className="mt-2">
                            <label>Horário:</label>
                            <input
                                type="time"
                                value={editHora}
                                onChange={(e) => setEditHora(e.target.value)}
                                className="border p-1 w-full"
                            />
                        </div>
                        <div className="mt-2">
                            <label>Descrição:</label>
                            <input
                                type="text"
                                value={editDescricao}
                                onChange={(e) => setEditDescricao(e.target.value)}
                                className="border p-1 w-full"
                            />
                        </div>
                        <div className="mt-4 flex justify-end">
                            <button
                                className="bg-green-500 text-white p-2 rounded mr-2"
                                onClick={confirmAlteracao}
                            >
                                Salvar
                            </button>
                            <button
                                className="bg-gray-300 text-black p-2 rounded"
                                onClick={() => setShowModal(false)}
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            )}

            {/* Modal de Cancelamento */}
            {showCancelModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
                    <div className="bg-white p-4 rounded shadow-lg">
                        <h2 className="font-bold">Cancelar Consulta</h2>
                        <div className="mt-2">
                            <label>Motivo do Cancelamento:</label>
                            <textarea
                                value={cancelMotivo}
                                onChange={(e) => setCancelMotivo(e.target.value)}
                                className="border p-1 w-full"
                            />
                        </div>
                        <div className="flex justify-end mt-4 space-x-2">
                            <button className="bg-red-500 text-white p-2 rounded" onClick={confirmCancelamento}>
                                Confirmar Cancelamento
                            </button>
                            <button className="bg-gray-500 text-white p-2 rounded" onClick={() => setShowCancelModal(false)}>
                                Voltar
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
