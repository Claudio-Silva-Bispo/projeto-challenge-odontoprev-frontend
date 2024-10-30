--Esta tabela armazenará os dados principais do cliente.

Descrição

Tabela Fato
-- t_cliente
Campo	        Tipo de Dados	Descrição
id_cliente	    INT	            Chave primária auto-incremento
nome	        VARCHAR(255)	Nome completo do cliente
telefone	    VARCHAR(20)	    Telefone do cliente
email	        VARCHAR(255)	Email do cliente
cpf	            VARCHAR(14)	    CPF do cliente
genero	        VARCHAR(10)	    Gênero do cliente
data_nascimento	DATE	        Data de nascimento do cliente
cep	            VARCHAR(10)	    CEP do endereço do cliente
numero	        VARCHAR(10)	    Número do endereço do cliente
rua	            VARCHAR(255)	Rua do endereço do cliente
bairro	        VARCHAR(255)	Bairro do endereço do cliente
complemento	    VARCHAR(255)	Complemento do endereço do cliente
cidade	        VARCHAR(255)	Cidade do endereço do cliente
estado	        VARCHAR(2)	    Estado do endereço do cliente
senha	        VARCHAR(255)	Senha do cliente

Dimensões Normalizadas

-- t_genero
Campo	    Tipo de Dados	    Descrição
id_genero	    INT	            Chave primária, auto-incremento
descricao	    VARCHAR(10)	    Descrição do gênero (masculino, feminino)

-- t_endereco
id_endereco	    INT	            Chave primária, auto-incremento
cep	            VARCHAR(10)	    CEP do endereço
numero	        VARCHAR(10)	    Número do endereço
rua	            VARCHAR(255)	Rua do endereço
bairro	        VARCHAR(255)	Bairro do endereço
complemento	    VARCHAR(255)	Complemento do endereço
cidade	        VARCHAR(255)	Cidade do endereço
estado	        VARCHAR(2)	    Estado do endereço

--Relacionamentos

fato_cliente terá uma chave estrangeira id_genero que referencia t_genero.
fato_cliente terá uma chave estrangeira id_endereco que referencia t_endereco.

-- scrip para criar as tabelas e os relacionamentos

CREATE TABLE t_cliente (
    id_cliente INT AUTO_INCREMENT PRIMARY KEY,
    nome VARCHAR(255) NOT NULL,
    telefone VARCHAR(20) NOT NULL,
    email VARCHAR(255) NOT NULL,
    cpf VARCHAR(14) NOT NULL,
    id_genero INT,
    data_nascimento DATE NOT NULL,
    id_endereco INT,
    senha VARCHAR(255) NOT NULL,
    FOREIGN KEY (id_genero) REFERENCES dim_genero(id_genero),
    FOREIGN KEY (id_endereco) REFERENCES dim_endereco(id_endereco)
);

CREATE TABLE t_genero (
    id_genero INT AUTO_INCREMENT PRIMARY KEY,
    descricao VARCHAR(10) NOT NULL
);

CREATE TABLE t_endereco (
    id_endereco INT AUTO_INCREMENT PRIMARY KEY,
    cep VARCHAR(10) NOT NULL,
    numero VARCHAR(10) NOT NULL,
    rua VARCHAR(255) NOT NULL,
    bairro VARCHAR(255) NOT NULL,
    complemento VARCHAR(255),
    cidade VARCHAR(255) NOT NULL,
    estado VARCHAR(2) NOT NULL
);



