'use client';

import React, { useEffect, useState } from 'react';

type FormDataChangeHandler = (name: string, value: string | number) => void;

export default function FeedbackForm() {
  const [consultas, setConsultas] = useState<any[]>([]);
  const [selectedConsulta, setSelectedConsulta] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    id_medico: '',
    id_clinica: '',
    recomendacao_medico: 0,
    recomendacao_clinica: 0,
    comentarios: '',
  });

  const fetchConsultas = async () => {
    try {
      const response = await fetch('/api/consultas?status=finalizado');
      if (response.ok) {
        const data = await response.json();
        setConsultas(data);
      } else {
        throw new Error('Erro ao carregar consultas.');
      }
    } catch (error) {
      console.error(error);
      alert('Houve um erro ao carregar as consultas.');
    }
  };

  useEffect(() => {
    fetchConsultas();
  }, []);

  const handleFormDataChange: FormDataChangeHandler = (name, value) => {
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const feedbackData = { ...formData, id_consulta: selectedConsulta };
      const response = await fetch('/api/enviarFeedback', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(feedbackData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Feedback enviado:', result);
        alert('Feedback enviado com sucesso!');
      } else {
        throw new Error('Falha ao enviar feedback.');
      }
    } catch (error) {
      console.error('Erro ao enviar feedback:', error);
      alert('Houve um erro ao enviar seu feedback.');
    }
  };

  return (
    <section style={{
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/Feedback/imagem1.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
  }}>
      <div className="bg-gray-200 flex flex-col p-3 lg:p-10 justify-center items-center min-h-[80vh] w-[40%]"
      >
        <h2 className="text-lg leading-7 text-segunda font-bold uppercase">Feedback da Consulta</h2>
        <form onSubmit={handleSubmit} className="mt-5 w-full">
          <div className="mb-4">
            <label htmlFor="consulta" className="block text-sm leading-6 text-gray-600">Selecione a Consulta:</label>
            <select
              name="consulta"
              id="consulta"
              className="block w-full rounded-md p-2"
              onChange={(e) => setSelectedConsulta(e.target.value)}
              required
            >
              <option value="">Selecione uma consulta</option>
              {consultas.map(consulta => (
                <option key={consulta.id_consulta} value={consulta.id_consulta}>
                  {`ID: ${consulta.id_consulta} - ${consulta.data} ${consulta.hora} - ${consulta.especialidade} (${consulta.tipo_consulta})`}
                </option>
              ))}
            </select>
          </div>

          <div className="mb-5">
            <h3 className="text-md leading-7 text-segunda font-bold uppercase">Avaliação do Especialista</h3>
            <label htmlFor="recomendacao_medico" className="block text-sm leading-6 text-gray-600">Recomenda o Especialista (0 a 5)</label>
            <input
              type="number"
              name="recomendacao_medico"
              id="recomendacao_medico"
              min="0"
              max="5"
              className="block w-full rounded-md p-2"
              onChange={(e) => handleFormDataChange(e.target.name, Number(e.target.value))}
            />
          </div>

          <div className="mb-5">
            <h3 className="text-md leading-7 text-segunda font-bold uppercase">Avaliação da Clínica</h3>
            <label htmlFor="recomendacao_clinica" className="block text-sm leading-6 text-gray-600">Recomenda a Clínica (0 a 5)</label>
            <input
              type="number"
              name="recomendacao_clinica"
              id="recomendacao_clinica"
              min="0"
              max="5"
              className="block w-full rounded-md p-2"
              onChange={(e) => handleFormDataChange(e.target.name, Number(e.target.value))}
            />
          </div>

          <div className="mb-5">
            <label htmlFor="comentarios" className="block text-sm leading-6 text-gray-600">Comentários Adicionais</label>
            <textarea
              name="comentarios"
              id="comentarios"
              className="block w-full rounded-md p-2"
              onChange={(e) => handleFormDataChange(e.target.name, e.target.value)}
              rows={4}
              placeholder="Digite seus comentários aqui..."
            />
          </div>

          <button className="bg-blue-600 hover:bg-blue-400 text-white py-2 px-4 rounded" type="submit">
            Enviar Feedback
          </button>
        </form>
      </div>
    </section>
  );
}
