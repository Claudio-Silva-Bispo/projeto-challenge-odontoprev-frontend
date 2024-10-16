import '../styles/documentation.module.css'
import { TabView, TabPanel } from 'primereact/tabview';
import React from 'react';
import Team from '@/components/Team';

const Documentacao = () => {
    return (
        <div className="card">

            <h1 className='flex justify-center items-center'>Sobre o Projeto</h1>

            <TabView>
            <TabPanel header="Resumo" className='flex flex-col gap-3 text-xl'>
                    <p className="m-0">
                    Este projeto visa o gerenciamento de clientes, clínicas, consultas, feedbacks e outros recursos relacionados a um sistema odontológico. A API foi desenvolvida em ASP.NET Core, com Oracle para o armazenamento de dados.</p>

                    <p>Nosso objetivo é gerenciar a agenda das clínicas de forma eficiente, incentivando os clientes a realizarem consultas preventivas, o que ajuda a reduzir os custos elevados com sinistros nas seguradoras odontológicas.
                    </p>

                   
                </TabPanel>

                <TabPanel header="Problema" className='flex flex-col gap-3 text-xl'>
                    <h2>Problemas que o projeto pretende resolver</h2>
                    <p className="m-0">
                        1. Ineficiência no gerenciamento de consultas e tratamentos preventivos: muitas clínicas têm dificuldades em organizar e automatizar os agendamentos. Além de perder a oportunidade de atender 100% da carteira de clientes da seguradora. Quando os clientes entram em contato, já é para utilizar o seguro/convênio em momentos de emergências, gerando alto custo/gasto.
                    </p>

                    <p>
                        2. Falta de dados e permissões para acessar as agendas dos médicos.
                    </p>

                    <p>
                        3. Falta de centralização dos dados do paciente: o projeto centraliza todas as informações relevantes sobre a saúde bucal do paciente, incluindo histórico familiar, condições físicas, custo das consultas, notas atribuidas as clinicas, especilistas e clientes.
                    </p>

                    <p>
                        4. Dificuldade na comunicação entre a clínica, paciente e seguradora: a plataforma permite notificações automatizadas e mantém um fluxo de comunicação eficiente entre todas as partes envolvidas.
                    </p>

                </TabPanel>

                <TabPanel header="Objetivo Geral" className='flex flex-col gap-3 text-xl'>
                    <p className="m-0">
                    Desenvolver um modelo de inteligência artificial que analise informações do banco de dados, alimentadas por formulários de cadastro, consultas agendadas periodicamente e feedbacks recebidos (seja do cliente, da consulta ou do consultório). O principal objetivo é fornecer recomendações personalizadas de serviços preventivos odontológicos por meio de uma agenda inteligente e automatizada, visando reduzir a sinistralidade e melhorar a saúde bucal dos clientes.
                    </p>

                </TabPanel>

                <TabPanel header="Objetivos Específicos" className='flex flex-col gap-3 text-xl'>
                    <p className="m-0">
                    Ao cadastrar um novo cliente, será enviado um formulário detalhado por e-mail ou disponibilizado no aplicativo. Este formulário fará perguntas sobre a rotina do cliente e os cuidados realizados nos últimos meses ou anos. Com base nas respostas, o sistema sugerirá serviços preventivos e identificará consultórios próximos, oferecendo opções que combinem baixo custo e alta qualidade, conforme avaliações de pesquisas de ambos os lados, especialmente das clínicas. O foco é garantir que os atendimentos sejam acessíveis, mas com qualidade garantida.</p>

                    <p className="m-0">Além disso, o sistema agendará automaticamente a consulta na clínica escolhida, priorizando aquelas mais próximas ao cliente, conforme sua localização. Esse processo não requer intervenção do cliente para realizar a pesquisa; ele apenas precisará aceitar a sugestão. Com antecedência, mensagens serão enviadas via WhatsApp e e-mail, além de notificações no aplicativo, lembrando o cliente sobre a consulta e orientando sobre os preparativos necessários.</p>

                    <p className="m-0">Aproveitando os dados coletados, o modelo também avaliará os próximos passos do atendimento, identificando consultas adicionais que o cliente possa precisar e enviando sugestões relevantes. A ideia é criar uma experiência única para o cliente, prevendo cada passo e necessidade, evitando que ele precise abrir atendimentos emergenciais sem a devida prevenção.
                    </p>
                </TabPanel>

                <TabPanel header="Solução" className='flex flex-col gap-3 text-xl'>
                    <p className="m-0">
                        Nossa solução envolve o desenvolvimento de uma aplicação móvel gerenciada em Java e uma aplicação web em ASP.NET/C#. O objetivo é sugerir consultas para novos e antigos clientes utilizando inteligência artificial (IA). As sugestões serão baseadas na localidade preferida do cliente, nas avaliações de feedback das clínicas/especialistas e nos custos mais baixos. Essa abordagem permitirá que os clientes realizem consultas de rotina de forma contínua, promovendo um ciclo de alta qualidade. Ao mesmo tempo, as clínicas e especialistas manterão um fluxo constante de clientes.
                    </p>
                    <p>
                        Para superar a falta de dados e permissões para acessar as agendas dos médicos, implementaremos um programa de relacionamento que engajará tanto os clientes quanto os especialistas. Esse programa incentivará a criação de conteúdos e o fornecimento de informações complementares, como feedbacks, que alimentarão e treinarão o modelo de IA. Como parte dessa estratégia, os participantes serão bonificados, entregando valor mútuo e garantindo o sucesso da solução.
                    </p>
                </TabPanel>

                <TabPanel header="Fluxograma">
                    <p className="m-0">
                        Inserir aqui a foto do fluxograma do projeto.

                    </p>
                </TabPanel>

                <TabPanel header="Endpoints">
                    <p className="m-0">
                        Para visualizar a documentação com end-points

                        <a href="http://localhost:3000/swagger"> Clique aqui</a>
                    </p>
                </TabPanel>

                <TabPanel header="Time">
                   <Team/>
                </TabPanel>

            </TabView>
        </div>
    );
};

export default Documentacao;
