'use client'

import React, { useState, useRef } from 'react';

type FormDataChangeHandler = (name: string, value: string) => void;


export default function CadastroCliente() {

  const formRef = useRef<HTMLFormElement>(null); 
  const [currentStep, setCurrentStep] = useState(1);

  const [formData, setFormData] = useState({
    nome: '',
    telefone: '',
    email: '',
    cpf: '',
    genero: '',
    data_nascimento: '',
    cep: '',
    numero: '',
    rua: '',
    bairro:'',
    complemento: '',
    cidade:'',
    estado:'',
    senha:''
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
        return <PersonalInfo onChange={handleFormDataChange} />;
      case 2:
        return <ResidenceInfo onChange={handleFormDataChange} />;
      case 3:
        return <AdditionalInfo onChange={handleFormDataChange} />;
      case 4:
        return <FinalStep onChange={handleFormDataChange} />;
      default:
        return <PersonalInfo onChange={handleFormDataChange} />;
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    if (currentStep < 4) {
      event.preventDefault();
      nextStep();
      console.log('Dados preenchidos', formData);
    } else {
      console.log('Enviando o formulário...', formData);

      // Validação dos campos obrigatórios
      if (!formData.nome || !formData.telefone || !formData.email || !formData.cpf || !formData.senha) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
      }

      try {
        const response = await fetch('/api/criarCliente', {
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
      backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('/assets/CadastroCliente/imagem1.jpg')",
      backgroundSize: 'cover',
      backgroundPosition: 'center',
  }}>
      <form
        ref={formRef}
        name='form-cadastro-cliente'
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
          {currentStep < 4 && (
            <button type="button" onClick={nextStep} className="mt-4 bg-blue-200 hover:bg-primeira text-gray-50 py-2 px-4 rounded text-lg">
              Próximo
            </button>
          )}
          {currentStep === 4 && (
            <button className="mt-4 bg-blue-600 hover:bg-blue-400 text-white py-2 px-4 rounded" type='submit'>
              Enviar
            </button>
          )}
        </div>
      </form>
    </section>
  );
};

interface PersonalInfoProps {
  onChange: FormDataChangeHandler;
}

const PersonalInfo: React.FC<PersonalInfoProps> = ({ onChange }) => (
  <div className="mb-5 w-full">
    <h2 className="text-lg leading-7 text-segunda font-bold uppercase">Informações Pessoais</h2>
    <div className="mt-5 flex gap-x-1 gap-y-6 flex-col">
      <div>
        <label htmlFor="nome" className="block text-sm leading-6 text-gray-600">Nome Completo</label>
        <input
          type="text"
          name="nome"
          id="nome"
          className="block w-full rounded-md p-2"
          onChange={(e) => onChange(e.target.name, e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="telefone" className="block text-sm leading-6 text-gray-600">Telefone</label>
        <input
          type="text"
          name="telefone"
          id="telefone"
          className="block w-full rounded-md p-2"
          onChange={(e) => onChange(e.target.name, e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm leading-6 text-gray-600">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          className="block w-full rounded-md p-2"
          onChange={(e) => onChange(e.target.name, e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="cpf" className="block text-sm leading-6 text-gray-600">CPF</label>
        <input
          type="text"
          name="cpf"
          id="cpf"
          className="block w-full rounded-md p-2"
          onChange={(e) => onChange(e.target.name, e.target.value)}
        />
      </div>
      <div>
          <label htmlFor="genero" className="block text-sm leading-6 text-gray-600">Gênero</label>
          <select
            name="genero"
            id="genero"
            className="block w-full rounded-md p-2"
            onChange={(e) => onChange(e.target.name, e.target.value)}
          >
            <option value="">Selecione o gênero</option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
          </select>
      </div>

    </div>
  </div>
);

interface ResidenceInfoProps {
  onChange: FormDataChangeHandler;
}

const ResidenceInfo: React.FC<ResidenceInfoProps> = ({ onChange }) => (
  <div className="w-full">
    <h2 className="text-lg leading-7 text-segunda font-bold uppercase">Informações do Endereço de Residência</h2>
    <div className="mt-5 flex-col gap-y-6 flex">
      <div>
        <label htmlFor="cep" className="block text-sm leading-6 text-gray-600">CEP</label>
        <input
          type="text"
          name="cep"
          id="cep"
          className="block w-full rounded-md p-2"
          onChange={(e) => onChange(e.target.name, e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="rua" className="block text-sm leading-6 text-gray-600">Rua</label>
        <input
          type="text"
          name="rua"
          id="rua"
          className="block w-full rounded-md p-2"
          onChange={(e) => onChange(e.target.name, e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="numero" className="block text-sm leading-6 text-gray-600">Número</label>
        <input
          type="text"
          name="numero"
          id="numero"
          className="block w-full rounded-md p-2"
          onChange={(e) => onChange(e.target.name, e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="bairro" className="block text-sm leading-6 text-gray-600">Bairro</label>
        <input
          type="text"
          name="bairro"
          id="bairro"
          className="block w-full rounded-md p-2"
          onChange={(e) => onChange(e.target.name, e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="cidade" className="block text-sm leading-6 text-gray-600">Cidade</label>
        <input
          type="text"
          name="cidade"
          id="cidade"
          className="block w-full rounded-md p-2"
          onChange={(e) => onChange(e.target.name, e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="estado" className="block text-sm leading-6 text-gray-600">Estado</label>
        <input
          type="text"
          name="estado"
          id="estado"
          className="block w-full rounded-md p-2"
          onChange={(e) => onChange(e.target.name, e.target.value)}
        />
      </div>
      <div>
        <label htmlFor="complemento" className="block text-sm leading-6 text-gray-600">Complemento</label>
        <input
          type="text"
          name="complemento"
          id="complemento"
          className="block w-full rounded-md p-2"
          onChange={(e) => onChange(e.target.name, e.target.value)}
        />
      </div>
    </div>
  </div>
);


const AdditionalInfo: React.FC<ResidenceInfoProps> = ({ onChange }) => (
  <div>
    <h2 className="text-lg leading-7 text-segunda font-bold uppercase">Senha de Acesso</h2>
    <div className="mt-5">
      <div>
        <label htmlFor="senha" className="block text-sm leading-6 text-gray-600">Senha</label>
        <input
          type="password"
          name="senha"
          id="senha"
          className={`block w-full rounded-md p-2`}
          onChange={(e) => onChange(e.target.name, e.target.value)}
        />
      </div>
    </div>
  </div>
);

const FinalStep: React.FC<ResidenceInfoProps> = () => (
  <div className="text-center">
    <h2 className="text-lg leading-7 text-segunda font-bold uppercase">Revisão e Confirmação</h2>
    <p className="mt-5">Confirme os dados antes de enviar o cadastro.</p>
  </div>
);
