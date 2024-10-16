'use client'

import React, { useState, useRef, useEffect } from 'react';

type FormDataChangeHandler = (name: string, value: string) => void;

export default function CadastroMedico() {
  const formRef = useRef<HTMLFormElement>(null);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    nome_medico: '',
    especialidade: '',
    crm: '', // Novo campo para CRM
    id_clinica: '',
    data_criacao: new Date().toISOString().split('T')[0]
  });

  const [clinicas, setClinicas] = useState([]); // Estado para armazenar as clínicas
  const [especialidades, setEspecialidades] = useState([]); // Estado para armazenar as especialidades

  // Função para buscar as clínicas do banco de dados
  useEffect(() => {
    const fetchClinicas = async () => {
      try {
        const response = await fetch('/api/clinicas'); // Endpoint para buscar as clínicas
        if (!response.ok) throw new Error('Erro ao buscar clínicas');
        const data = await response.json();
        setClinicas(data); // Atualiza o estado com os dados das clínicas
      } catch (error) {
        console.error('Erro ao buscar clínicas:', error);
      }
    };

    const fetchEspecialidades = async () => {
      try {
        const response = await fetch('/api/especialidades'); // Endpoint para buscar as especialidades
        if (!response.ok) throw new Error('Erro ao buscar especialidades');
        const data = await response.json();
        setEspecialidades(data); // Atualiza o estado com os dados das especialidades
      } catch (error) {
        console.error('Erro ao buscar especialidades:', error);
      }
    };

    fetchClinicas();
    fetchEspecialidades();
  }, []);

  const handleFormDataChange: FormDataChangeHandler = (name, value) => {
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const nextStep = () => {
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <MedicoInfo onChange={handleFormDataChange} clinicas={clinicas} especialidades={especialidades} />;
      case 2:
        return <FinalStep formData={formData} />;
      default:
        return <MedicoInfo onChange={handleFormDataChange} clinicas={clinicas} especialidades={especialidades} />;
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    if (currentStep < 2) {
      event.preventDefault();
      nextStep();
    } else {
      console.log('Enviando o formulário...', formData);

      // Validação dos campos obrigatórios
      if (!formData.nome_medico || !formData.especialidade || !formData.crm || !formData.id_clinica) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
      }

      try {
        const response = await fetch('/api/cadastrarMedico', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const result = await response.json();
          console.log('Resposta do servidor:', result);
          alert('Cadastro enviado com sucesso!');
        } else {
          throw new Error('Falha ao enviar cadastro.');
        }
      } catch (error) {
        console.error('Erro ao enviar dados:', error, formData);
        alert('Houve um erro ao enviar seus dados.');
      }
    }
  };

  return (
    <section style={{
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/CadastroEspecialista/imagem1.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className='bg-gray-200 flex flex-col p-3 lg:p-10 justify-center items-center min-h-[80vh] w-[40%]'
      >
        {renderStep()}

        <div className="flex justify-between gap-3">
          {currentStep > 1 && (
            <button type="button" onClick={prevStep} className="mt-4 bg-blue-200 text-gray-50 py-2 px-4 rounded">
              Anterior
            </button>
          )}
          {currentStep < 2 && (
            <button type="button" onClick={nextStep} className="mt-4 bg-blue-200 text-gray-50 py-2 px-4 rounded">
              Próximo
            </button>
          )}
          {currentStep === 2 && (
            <button className="mt-4 bg-blue-600 text-white py-2 px-4 rounded" type='submit'>
              Enviar
            </button>
          )}
        </div>
      </form>
    </section>
  );
};

interface MedicoInfoProps {
  onChange: FormDataChangeHandler;
  clinicas: Array<{ id: string; nome: string }>; // Define o tipo para clinicas
  especialidades: Array<{ id: string; nome: string }>; // Define o tipo para especialidades
}

const MedicoInfo: React.FC<MedicoInfoProps> = ({ onChange, clinicas, especialidades }) => (
  <div className="mb-5 w-full">
    <h2 className="text-lg font-bold">Informações do Médico</h2>
    <div className="mt-5 flex flex-col gap-y-4">
      <div>
        <label htmlFor="nome_medico" className="block text-sm">Nome do Médico</label>
        <input
          type="text"
          name="nome_medico"
          id="nome_medico"
          className="block w-full rounded-md p-2"
          onChange={(e) => onChange(e.target.name, e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="crm" className="block text-sm">CRM</label>
        <input
          type="text"
          name="crm"
          id="crm"
          className="block w-full rounded-md p-2"
          onChange={(e) => onChange(e.target.name, e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="especialidade" className="block text-sm">Especialidade</label>
        <select
          name="especialidade"
          id="especialidade"
          className="block w-full rounded-md p-2"
          onChange={(e) => onChange(e.target.name, e.target.value)}
        >
          <option value="">Selecione uma especialidade</option>
          {especialidades.map((especialidade) => (
            <option key={especialidade.id} value={especialidade.nome}>
              {especialidade.nome}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="id_clinica" className="block text-sm">Selecione a Clínica</label>
        <select
          name="id_clinica"
          id="id_clinica"
          className="block w-full rounded-md p-2"
          onChange={(e) => onChange(e.target.name, e.target.value)}
        >
          <option value="">Selecione uma clínica</option>
          {clinicas.map((clinica) => (
            <option key={clinica.id} value={clinica.id}>
              {clinica.nome}
            </option>
          ))}
        </select>
      </div>
    </div>
  </div>
);

interface FinalStepProps {
  formData: any; 
}

const FinalStep: React.FC<FinalStepProps> = ({ formData }) => (
  <div className="text-center w-full">
    <h2 className="text-lg leading-7 text-segunda font-bold uppercase">Revisão e Confirmação</h2>
    <p className="mt-5">Confirme os dados antes de enviar o cadastro.</p>
    <p><strong>Nome do Médico:</strong> {formData.nome_medico}</p>
    <p><strong>CRM:</strong> {formData.crm}</p>
    <p><strong>Especialidade:</strong> {formData.especialidade}</p>
    <p><strong>Clínica:</strong> {formData.id_clinica}</p>
  </div>
);
