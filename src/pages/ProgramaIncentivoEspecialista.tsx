import React, { useState } from 'react';

interface Atividade {
    id: number;
    descricao: string;
    status: 'pendente' | 'concluido';
    pontos: number;
}

// Dados das atividades iniciais para simulação
const atividadesIniciais: Atividade[] = [
    { id: 1, descricao: 'Realizar dez consultas em cinco dias, utilizando a aplicação.', status: 'pendente', pontos: 10 },
    { id: 2, descricao: 'Ter nota de feedback superior a quatro.', status: 'pendente', pontos: 10 },
    { id: 3, descricao: 'Ter recusa de serviços abaixo de 20%', status: 'pendente', pontos: 30 },
    { id: 4, descricao: 'Assistir 3 vídeos de apoio sobre a aplicação', status: 'pendente', pontos: 25 }
];

const atividadesSecundarias: Atividade[] = [
    { id: 1, descricao: 'Criar três vídeos sobre procedimentos preventivos simples', status: 'pendente', pontos: 20 },
    { id: 2, descricao: 'Criar dois materiais de textos sobre cuidados diários', status: 'pendente', pontos: 15 }
];

export default function ProgramaIncentivoEspecialista() {
    const [atividades, setAtividades] = useState<Atividade[]>(atividadesIniciais);
    const [totalPontos, setTotalPontos] = useState<number>(0);

    const handleConcluirAtividade = (id: number) => {
        const updatedAtividades = atividades.map(atividade => {
            if (atividade.id === id && atividade.status === 'pendente') {
                setTotalPontos(prevPontos => prevPontos + atividade.pontos);
                return { ...atividade, status: 'concluido' };
            }
            return atividade;
        });
        //setAtividades(updatedAtividades);
    };

    return (
        <div className="p-4">
            <h1 className="text-5xl font-bold mb-4">Programa de Incentivo</h1>
            <p className="mb-4">Pontos acumulados: <strong>{totalPontos}</strong></p>
            
            <table className="min-w-full border-collapse border border-gray-300 mb-10">
                <thead>
                    <tr>
                        <th className="border border-gray-300 p-2">Atividade com análise do sistema</th>
                        <th className="border border-gray-300 p-2">Status</th>
                        <th className="border border-gray-300 p-2">Pontos</th>
                        <th className="border border-gray-300 p-2">Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {atividades.map(atividade => (
                        <tr key={atividade.id}>
                            <td className="border border-gray-300 p-2 text-start">{atividade.descricao}</td>
                            <td className="border border-gray-300 p-2 text-center">
                                {atividade.status === 'pendente' ? 'Pendente' : 'Concluído'}
                            </td>
                            <td className="border border-gray-300 p-2 text-center">{atividade.pontos}</td>
                            <td className="border border-gray-300 p-2">
                                {atividade.status === 'pendente' && (
                                    <button
                                        className="px-4 py-2 bg-blue-600 text-white rounded w-full"
                                        onClick={() => handleConcluirAtividade(atividade.id)}
                                    >
                                        Concluir
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                    <tr>
                        <th className="border border-gray-300 p-2">Atividade manuais</th>
                        <th className="border border-gray-300 p-2">Status</th>
                        <th className="border border-gray-300 p-2">Pontos</th>
                        <th className="border border-gray-300 p-2">Ação</th>
                    </tr>
                </thead>
                <tbody>
                    {atividades.map(atividade => (
                        <tr key={atividade.id}>
                            <td className="border border-gray-300 p-2 text-start">{atividade.descricao}</td>
                            <td className="border border-gray-300 p-2 text-center">
                                {atividade.status === 'pendente' ? 'Pendente' : 'Concluído'}
                            </td>
                            <td className="border border-gray-300 p-2 text-center">{atividade.pontos}</td>
                            <td className="border border-gray-300 p-2">
                                {atividade.status === 'pendente' && (
                                    <button
                                        className="px-4 py-2 bg-[#ecc55b] text-gray-600 rounded w-full"
                                        onClick={() => handleConcluirAtividade(atividade.id)}
                                    >
                                        Enviar materiais
                                    </button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
