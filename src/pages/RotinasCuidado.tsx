'use client'

import React, { useState, useRef } from 'react';

type FormDataChangeHandler = (name: string, value: string) => void;

export default function RotinasCuidado() {
  const formRef = useRef<HTMLFormElement>(null); 
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    frequencia_escovacao: '',
    frequencia_fio_dental: '',
    id_turno_preferencia_atendimento_enxaguante: '',
    limpeza_profissional: '', // opcoes: 3 meses, 6 meses ou uma vez ao ano
  });

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
        return <PreferenciasInfo onChange={handleFormDataChange} />;
      case 3:
        return <FinalStep onChange={handleFormDataChange} formData={formData} />;
      default:
        return <PreferenciasInfo onChange={handleFormDataChange} />;
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    if (currentStep < 3) {
      event.preventDefault();
      nextStep();
    } else {
      // Validação dos campos obrigatórios
      if ( !formData.frequencia_escovacao ||
          !formData.frequencia_fio_dental || !formData.id_turno_preferencia_atendimento_enxaguante ||
          !formData.limpeza_profissional) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
      }

      try {
        const response = await fetch('/api/criarPreferenciaCliente', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });

        if (response.ok) {
          const result = await response.json();
          alert('Preferência cadastrada com sucesso!');
        } else {
          throw new Error('Falha ao enviar preferências.');
        }
      } catch (error) {
        alert('Houve um erro ao enviar seus dados.');
      }
    }
  };

  return (
    <section style={{
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/CadastroCliente/imagem1.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
      <form
        ref={formRef}
        name='form-preferencia-cliente'
        method='post'
        onSubmit={handleSubmit}
        className='bg-gray-200 flex flex-col p-3 lg:p-10 justify-center items-center min-h-[80vh] w-[40%]'
      >
        {renderStep()}

        <div className="flex justify-between gap-3">
          {currentStep > 1 && (
            <button type="button" onClick={prevStep} className="mt-4 bg-blue-200 hover:bg-gray-300 text-gray-50 py-2 px-4 rounded text-lg">
              Anterior
            </button>
          )}
          {currentStep < 3 && (
            <button type="button" onClick={nextStep} className="mt-4 bg-blue-200 hover:bg-primeira text-gray-50 py-2 px-4 rounded text-lg">
              Próximo
            </button>
          )}
          {currentStep === 3 && (
            <button className="mt-4 bg-blue-600 hover:bg-blue-400 text-white py-2 px-4 rounded" type='submit'>
              Enviar
            </button>
          )}
        </div>
      </form>
    </section>
  );
};

interface InputFieldProps {
  label: string;
  name: string;
  onChange: FormDataChangeHandler;
}

const InputField: React.FC<InputFieldProps> = ({ label, name, onChange }) => (
  <div>
    <label htmlFor={name} className="block text-sm leading-6 text-gray-600">{label}</label>
    <input
      type="text"
      name={name}
      id={name}
      className="block w-full rounded-md p-2"
      onChange={(e) => onChange(e.target.name, e.target.value)}
    />
  </div>
);

interface PreferenciasInfoProps {
  onChange: FormDataChangeHandler;
}

const PreferenciasInfo: React.FC<PreferenciasInfoProps> = ({ onChange }) => (
  <div className="w-full">
    <h2 className="text-lg leading-7 text-segunda font-bold uppercase">Preferências de Atendimento</h2>
    <div className="mt-5 flex-col gap-y-6 flex">
      <SelectField label="Dia da Semana" name="dia_semana" options={[
        { value: "", label: "Selecione um dia" },
        { value: "segunda", label: "Segunda" },
        { value: "terca", label: "Terça" },
        { value: "quarta", label: "Quarta" },
        { value: "quinta", label: "Quinta" },
        { value: "sexta", label: "Sexta" },
        { value: "sabado", label: "Sábado" },
      ]} onChange={onChange} />

      <SelectField label="Turno" name="turno" options={[
        { value: "", label: "Selecione" },
        { value: "manha", label: "Manhã" },
        { value: "tarde", label: "Tarde" },
        { value: "noite", label: "Noite" },
      ]} onChange={onChange} />

      <div>
        <label htmlFor="horario_preferencia" className="block text-sm leading-6 text-gray-600">Horário de Preferência</label>
        <div className="flex gap-2">
          <input
            type="number"
            name="horario_preferencia_horas"
            id="horario_preferencia_horas"
            className="block w-16 rounded-md p-2"
            placeholder="HH"
            min="0"
            max="23"
          />
          <span>:</span>
          <input
            type="number"
            name="horario_preferencia_minutos"
            id="horario_preferencia_minutos"
            className="block w-16 rounded-md p-2"
            placeholder="MM"
            min="0"
            max="59"
          />
        </div>
      </div>

      <SelectField label="Frequência de Escovação" name="frequencia_escovacao" options={[
        { value: "", label: "Selecione" },
        { value: "diaria", label: "Diária" },
        { value: "semanal", label: "Semanal" },
        { value: "mensal", label: "Mensal" },
      ]} onChange={onChange} />

      <SelectField label="Frequência de Uso do Fio Dental" name="frequencia_fio_dental" options={[
        { value: "", label: "Selecione" },
        { value: "diaria", label: "Diária" },
        { value: "semanal", label: "Semanal" },
        { value: "mensal", label: "Mensal" },
      ]} onChange={onChange} />

      <SelectField label="Turno de Atendimento para Enxaguante" name="id_turno_preferencia_atendimento_enxaguante" options={[
        { value: "", label: "Selecione" },
        { value: "manha", label: "Manhã" },
        { value: "tarde", label: "Tarde" },
        { value: "noite", label: "Noite" },
      ]} onChange={onChange} />

      <SelectField label="Limpeza Profissional" name="limpeza_profissional" options={[
        { value: "", label: "Selecione" },
        { value: "3meses", label: "A cada 3 meses" },
        { value: "6meses", label: "A cada 6 meses" },
        { value: "anual", label: "Uma vez ao ano" },
      ]} onChange={onChange} />
    </div>
  </div>
);

interface SelectFieldProps {
  label: string;
  name: string;
  options: { value: string; label: string }[];
  onChange: FormDataChangeHandler;
}

const SelectField: React.FC<SelectFieldProps> = ({ label, name, options, onChange }) => (
  <div>
    <label htmlFor={name} className="block text-sm leading-6 text-gray-600">{label}</label>
    <select
      name={name}
      id={name}
      className="block w-full rounded-md p-2"
      onChange={(e) => onChange(e.target.name, e.target.value)}
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>{option.label}</option>
      ))}
    </select>
  </div>
);

interface FinalStepProps {
  onChange: FormDataChangeHandler;
  formData: Record<string, string>;
}

const FinalStep: React.FC<FinalStepProps> = ({ formData }) => (
  <div>
    <h2 className="text-lg leading-7 text-segunda font-bold uppercase">Resumo das Preferências</h2>
    <ul>
      {Object.entries(formData).map(([key, value]) => (
        <li key={key} className="flex justify-between p-2 border-b">
          <span>{key.replace(/_/g, ' ').replace(/^\w/, c => c.toUpperCase())}:</span>
          <span>{value}</span>
        </li>
      ))}
    </ul>
  </div>
);
