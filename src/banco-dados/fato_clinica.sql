--Esta tabela armazenará os dados principais das clinicas.

Descrição

-- t_clinica
Campo	                Tipo de Dados	    Descrição
id_clinica	            INT	                Chave primária, auto-incremento
nome	                VARCHAR(255)	    Nome da clínica
telefone	            VARCHAR(20)	        Telefone da clínica
email	                VARCHAR(255)	    Email da clínica
cnpj	                VARCHAR(18)	        CNPJ da clínica
cep	                    VARCHAR(10)	        CEP do endereço da clínica
numero	                VARCHAR(10)	        Número do endereço da clínica
rua	                    VARCHAR(255)	    Rua do endereço da clínica
bairro	                VARCHAR(255)	    Bairro do endereço da clínica
complemento	            VARCHAR(255)	    Complemento do endereço da clínica
cidade	                VARCHAR(255)	    Cidade do endereço da clínica
estado	                VARCHAR(2)	        Estado do endereço da clínica
disponibilidade_horario	VARCHAR(255)	    Disponibilidade de horário
disponibilidade_dia	    VARCHAR(255)	    Disponibilidade de dia
especialidades	        VARCHAR(255)	    Especialidades da clínica
senha	                VARCHAR(255)	    Senha da clínica

-- Tabela endereço
t_endereco
id_endereco	            INT	                Chave primária, auto-incremento
cep	                    VARCHAR(10)	        CEP do endereço
numero	                VARCHAR(10)	        Número do endereço
rua	                    VARCHAR(255)        Rua do endereço
bairro	                VARCHAR(255)	    Bairro do endereço
complemento	            VARCHAR(255)	    Complemento do endereço
cidade	                VARCHAR(255)	    Cidade do endereço
id_estado	            INT	                Chave estrangeira para dim_estado

-- Tabela Estado/Região
id_estado	            INT	                Chave primária, auto-incremento
sigla	                VARCHAR(2)	        Sigla do estado (ex: SP, RJ)
nome	                VARCHAR(255)	    Nome completo do estado

-- Relacionamentos
t_clinica terá uma chave estrangeira id_endereco que referencia t_endereco.
t_endereco terá uma chave estrangeira id_estado que referencia t_estado.

-- scrip para criar as tabelas e os relacionamentos

CREATE TABLE t_clinica (
    id_clinica INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    cnpj VARCHAR(18) NOT NULL,
    id_endereco INT,
    disponibilidade_horario VARCHAR(255),
    disponibilidade_dia VARCHAR(255),
    especialidades VARCHAR(255),
    senha VARCHAR(255) NOT NULL,
    FOREIGN KEY (id_endereco) REFERENCES t_endereco(id_endereco)
);

CREATE TABLE t_endereco (
    id_endereco INT AUTO_INCREMENT PRIMARY KEY,
    cep VARCHAR(10) NOT NULL,
    numero VARCHAR(10) NOT NULL,
    rua VARCHAR(255) NOT NULL,
    bairro VARCHAR(255) NOT NULL,
    complemento VARCHAR(255),
    cidade VARCHAR(255) NOT NULL,
    id_estado INT,
    FOREIGN KEY (id_estado) REFERENCES t_estado(id_estado)
);

CREATE TABLE t_estado (
    id_estado INT AUTO_INCREMENT PRIMARY KEY,
    sigla VARCHAR(2) NOT NULL,
    nome VARCHAR(255) NOT NULL
);




