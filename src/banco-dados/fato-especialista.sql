-- Esta tabela armazenará os dados principais do especialista.

Descrição

-- t_especialista
Campo	            Tipo de Dados	    Descrição
id_especialista	    INT	                Chave primária, auto-incremento
nome_medico	        VARCHAR(255)	    Nome do médico
crm	                VARCHAR(20)	        CRM do médico
id_especialidade	INT	                Chave estrangeira para dim_especialidade
id_clinica	        INT	                Chave estrangeira para dim_clinica
data_criacao	    DATE	            Data de criação do registro

-- t_especialidade
id_especialidade	INT	Chave primária, auto-incremento
nome	VARCHAR(255)	Nome da especialidade

-- t_clinica_normalizada
-- Esta tabela armazenará as clínicas normalizadas.
id_clinica	        INT	                Chave primária, auto-incremento
nome	            VARCHAR(255)	    Nome da clínica

-- Relacionamentos
t_especialista terá uma chave estrangeira id_especialidade que referencia t_especialidade.
t_especialista terá uma chave estrangeira id_clinica que referencia t_clinica.

-- scrip para criar as tabelas e os relacionamentos

CREATE TABLE t_especialista (
    id_especialista INT AUTO_INCREMENT PRIMARY KEY,
    nome_medico VARCHAR(255) NOT NULL,
    crm VARCHAR(20) NOT NULL,
    id_especialidade INT,
    id_clinica INT,
    data_criacao DATE NOT NULL,
    FOREIGN KEY (id_especialidade) REFERENCES t_especialidade(id_especialidade),
    FOREIGN KEY (id_clinica) REFERENCES t_clinica_normalizada(id_clinica)
);

CREATE TABLE t_especialidade (
    id_especialidade INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL
);

CREATE TABLE t_clinica (
    id_clinica INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL
);


