'use client'

import React, { useState, useRef } from 'react';

type FormDataChangeHandler = (name: string, value: string) => void;

export default function PreferenciaAtendimento() {
  const formRef = useRef<HTMLFormElement>(null); 
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    cep_endereco_preferencia: '',
    numero_endereco_preferencia: '',
    rua_endereco_preferencia: '',
    bairro_endereco_preferencia: '',
    complemento_endereco_preferencia: '',
    cidade_endereco_preferencia: '',
    estado_endereco_preferencia: '',
    dia_semana: '',
    turno: '', // manhã, tarde ou noite
    horario_preferencia: '',
  });

  const handleFormDataChange: FormDataChangeHandler = (name, value) => {
    setFormData(prevState => ({ ...prevState, [name]: value }));
  };

  const nextStep = () => {
    console.log(formData);
    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(currentStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <EnderecoInfo onChange={handleFormDataChange} />;
      case 2:
        return <PreferenciasInfo onChange={handleFormDataChange} />;
      case 3:
        return <FinalStep onChange={handleFormDataChange} />;
      default:
        return <EnderecoInfo onChange={handleFormDataChange} />;
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    if (currentStep < 3) {
      event.preventDefault();
      nextStep();
      console.log('Dados preenchidos', formData);
    } else {
      console.log('Enviando o formulário...', formData);

      // Validação dos campos obrigatórios
      if (!formData.cep_endereco_preferencia || !formData.rua_endereco_preferencia || !formData.bairro_endereco_preferencia || !formData.cidade_endereco_preferencia || !formData.estado_endereco_preferencia) {
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
          console.log('Resposta do servidor:', result);
          alert('Preferência cadastrada com sucesso!');
        } else {
          throw new Error('Falha ao enviar preferências.');
        }
      } catch (error) {
        console.error('Erro ao enviar dados:', error, formData);
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

interface EnderecoInfoProps {
  onChange: FormDataChangeHandler;
}

const EnderecoInfo: React.FC<EnderecoInfoProps> = ({ onChange }) => (
  <div className="w-full">
    <h2 className="text-lg leading-7 text-segunda font-bold uppercase">Informações do Endereço de Preferência</h2>
    <div className="mt-5 flex-col gap-y-6 flex">
      <div>
        <label htmlFor="cep_endereco_preferencia" className="block text-sm leading-6 text-gray-600">CEP</label>
        <input
          type="text"
          name="cep_endereco_preferencia"
          id="cep_endereco_preferencia"
          className="block w-full rounded-md p-2"
          onChange={(e) => onChange(e.target.name, e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="rua_endereco_preferencia" className="block text-sm leading-6 text-gray-600">Rua</label>
        <input
          type="text"
          name="rua_endereco_preferencia"
          id="rua_endereco_preferencia"
          className="block w-full rounded-md p-2"
          onChange={(e) => onChange(e.target.name, e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="numero_endereco_preferencia" className="block text-sm leading-6 text-gray-600">Número</label>
        <input
          type="text"
          name="numero_endereco_preferencia"
          id="numero_endereco_preferencia"
          className="block w-full rounded-md p-2"
          onChange={(e) => onChange(e.target.name, e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="bairro_endereco_preferencia" className="block text-sm leading-6 text-gray-600">Bairro</label>
        <input
          type="text"
          name="bairro_endereco_preferencia"
          id="bairro_endereco_preferencia"
          className="block w-full rounded-md p-2"
          onChange={(e) => onChange(e.target.name, e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="cidade_endereco_preferencia" className="block text-sm leading-6 text-gray-600">Cidade</label>
        <input
          type="text"
          name="cidade_endereco_preferencia"
          id="cidade_endereco_preferencia"
          className="block w-full rounded-md p-2"
          onChange={(e) => onChange(e.target.name, e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="estado_endereco_preferencia" className="block text-sm leading-6 text-gray-600">Estado</label>
        <input
          type="text"
          name="estado_endereco_preferencia"
          id="estado_endereco_preferencia"
          className="block w-full rounded-md p-2"
          onChange={(e) => onChange(e.target.name, e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="complemento_endereco_preferencia" className="block text-sm leading-6 text-gray-600">Complemento</label>
        <input
          type="text"
          name="complemento_endereco_preferencia"
          id="complemento_endereco_preferencia"
          className="block w-full rounded-md p-2"
          onChange={(e) => onChange(e.target.name, e.target.value)}
        />
      </div>
    </div>
  </div>
);

interface PreferenciasInfoProps {
  onChange: FormDataChangeHandler;
}

const PreferenciasInfo: React.FC<PreferenciasInfoProps> = ({ onChange }) => (
  <div className="w-full">
    <h2 className="text-lg leading-7 text-segunda font-bold uppercase">Preferências de Atendimento</h2>
    <div className="mt-5 flex-col gap-y-6 flex">
      <div>
        <label htmlFor="dia_semana" className="block text-sm leading-6 text-gray-600">Dia da Semana</label>
        <select
          name="dia_semana"
          id="dia_semana"
          className="block w-full rounded-md p-2"
          onChange={(e) => onChange(e.target.name, e.target.value)}
        >
          <option value="">Selecione um dia</option>
          <option value="segunda">Segunda</option>
          <option value="terca">Terça</option>
          <option value="quarta">Quarta</option>
          <option value="quinta">Quinta</option>
          <option value="sexta">Sexta</option>
          <option value="sabado">Sábado</option>
        </select>
      </div>
      <div>
        <label htmlFor="turno" className="block text-sm leading-6 text-gray-600">Turno</label>
        <select
          name="turno"
          id="turno"
          className="block w-full rounded-md p-2"
          onChange={(e) => onChange(e.target.name, e.target.value)}
        >
          <option value="">Selecione</option>
          <option value="manha">Manhã</option>
          <option value="tarde">Tarde</option>
          <option value="noite">Noite</option>
        </select>
      </div>
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
    </div>
  </div>
);

const FinalStep: React.FC<{ onChange: FormDataChangeHandler }> = ({ onChange }) => (
  <div>
    <h2 className="text-lg leading-7 text-segunda font-bold uppercase">Confirmação</h2>
    <p className="mt-5">Verifique se todas as informações estão corretas.</p>
  </div>
);
