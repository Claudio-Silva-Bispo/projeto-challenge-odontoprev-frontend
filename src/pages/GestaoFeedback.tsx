/* eslint-disable @next/next/no-img-element */
'use client';

import { DataTable } from 'primereact/datatable';
import { Toast } from 'primereact/toast';
import { Column } from 'primereact/column';
import React, { useRef, useState, useEffect } from 'react';

interface Feedback {
    id: number;
    data: string;
    nota: number;
    comentario: string;
}

const GestaoFeedback = () => {
    const toast = useRef<Toast>(null);

    // Simulação de feedbacks recebidos
    const feedbacksSimulados: Feedback[] = [
        { id: 1, data: '2024-01-15', nota: 5, comentario: 'Excelente atendimento!' },
        { id: 2, data: '2024-01-18', nota: 4, comentario: 'Ótimo serviço, mas poderia melhorar a espera.' },
        { id: 3, data: '2024-02-10', nota: 3, comentario: 'Médio, esperava mais informações.' },
        { id: 4, data: '2024-02-25', nota: 5, comentario: 'Perfeito, tudo muito rápido e eficiente.' },
        { id: 5, data: '2024-03-05', nota: 2, comentario: 'Atrasos no atendimento, deixou a desejar.' },
        { id: 6, data: '2024-03-20', nota: 4, comentario: 'Bom, mas poderia ter mais opções de horários.' },
        { id: 7, data: '2024-04-02', nota: 5, comentario: 'Adorei o atendimento, voltarei com certeza!' },
        { id: 8, data: '2024-04-18', nota: 1, comentario: 'Não fui bem atendido, vou procurar outra clínica.' },
        { id: 9, data: '2024-05-05', nota: 3, comentario: 'Serviço razoável, mas o ambiente é bom.' },
        { id: 10, data: '2024-05-15', nota: 4, comentario: 'Gostei, mas o estacionamento estava cheio.' },
    ];

    const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);

    // Carregar feedbacks simulados no início
    useEffect(() => {
        setFeedbacks(feedbacksSimulados);
    }, []);

    return (
        <div className="grid min-h-svh">
            <div className="col-12">
                <h1>Gestão dos Feedbacks Recebidos</h1>
                <div className="card">
                    <Toast ref={toast} />
                    <DataTable
                        value={feedbacks}
                        paginator
                        rows={10}
                        className="datatable-responsive"
                        emptyMessage="Nenhum feedback encontrado."
                    >
                        <Column field="data" header="Data" />
                        <Column field="nota" header="Nota" />
                        <Column field="comentario" header="Comentários" />
                    </DataTable>
                </div>
            </div>
        </div>
    );
};

export default GestaoFeedback;
