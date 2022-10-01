# Projeto de Interface

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a></span>

Visão geral da interação do usuário pelas telas do sistema e protótipo interativo das telas com as funcionalidades que fazem parte do sistema (wireframes).

 Apresente as principais interfaces da plataforma. Discuta como ela foi elaborada de forma a atender os requisitos funcionais, não funcionais e histórias de usuário abordados nas <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a>.

## User Flow

![Exemplo de UserFlow](img/userflow.jpg)

Fluxo de usuário (User Flow) é uma técnica que permite ao desenvolvedor mapear todo fluxo de telas do site ou app. Essa técnica funciona para alinhar os caminhos e as possíveis ações que o usuário pode fazer junto com os membros de sua equipe.

> **Links Úteis**:
> - [User Flow: O Quê É e Como Fazer?](https://medium.com/7bits/fluxo-de-usu%C3%A1rio-user-flow-o-que-%C3%A9-como-fazer-79d965872534)
> - [User Flow vs Site Maps](http://designr.com.br/sitemap-e-user-flow-quais-as-diferencas-e-quando-usar-cada-um/)
> - [Top 25 User Flow Tools & Templates for Smooth](https://www.mockplus.com/blog/post/user-flow-tools)


## Wireframes

As telas do sistema apresentam uma estrutura formado por três grandes blocos descritos a seguir.

- `componente Barra topo`: Barra de navegação do topo onde esta disposto o nome do site e um botão para esconder o menu lateral;
- `componente Barra lateral`: Barra de navegação lateral onde estão dispostos todas as opções que ajudam na ultilização da aplicação;

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t6-ebatata/blob/main/docs/img/wireframe_images/Nav_bar.png" width="900">
<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t6-ebatata/blob/main/docs/img/wireframe_images/Nav_bar_2.png" width="900">

### Tela - Login

A tela de login é onde o usuário tera acesso a aplicação, atraves de um nome de usuário e senha obtidos atraves de um cadastro feito pelo mesmo ou um admnistrador.
Podem ser vistos os seguintes elementos:

- `Componente login`: Caixa de texto onde o usuário digitará seu email para autenticação;
- `Componente Senha`: Caixa de texto onde o usuário digitará sua senha para autenticação;
- `Componente Esqueci minha senha`: Redireciona o usuário para a tela de recuperação de senha;
- `Componente Entrar`: Botão que confirma a autenticação do usuário e o redireciona para a tela caixa;
- `Componente Cadastre sua empresa`: Redireciona o usuário a tela de cadastro;

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t6-ebatata/blob/main/docs/img/wireframe_images/Login.png" width="900">

### Tela - Cadastrar

A tela de cadastro é uma janela onde o usário ira cadastrar sua empresa com o minimo de informações. O cadastrante precisara de apenas um email (comercial da empresa), uma senha, nome do estabelecimento e cnpj.

- `Componente Nome fantasia`: Caixa de texto onde o usuário digitará o nome de seu estabelecimento;
- `Componente CNPJ`: Caixa de texto onde o usuário digitara o CNPJ; 

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t6-ebatata/blob/main/docs/img/wireframe_images/Login_dois.png" width="900">

### Tela - Recuperação de senha

A tela de recuperação de senha é uma janela onde o usuário podera recuperar seu acesso aconta. Basta inserir o email usado no ato do cadastro e ele recebera um email com as instruções necessarias para resolução do problema.

- `Componente Não precisa, lembrei`: Botão caso o usuário deseje cancelar a tentativa de recuperação de senha;
- `Componente Sim, me mande o email`: Botão caso o usuário deseje efetivar a tentativa de recuperação de senha;

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t6-ebatata/blob/main/docs/img/wireframe_images/Recuperar_senha.png" width="900">

### Tela - Caixa fechado

A tela de caixa fechado é onde o usuário pode inicializar a contabilidade de todo saldo adquirido no dia, podendo anexar uma mensagem de observação.

- `Componente Abrir caixa`: Botão caso o usuário deseje iniciar a contabilidade do saldo adquirido no dia;
- `Componente Saldo inicial`: Caixa de texto onde o usuário podera visualizar o saldo inicial em dinheiro ao abrir o caixa;
- `Componente Observação`: Caixa de texto onde o usuário queira anexar uma mensagem para outro possível usuário;

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t6-ebatata/blob/main/docs/img/wireframe_images/Caixa_fechado.png" width="900">

### Tela - Caixa aberto

A tela de caixa aberto é onde o usuário podera finalizar a contabilidade do saldo adquirido no dia, nela haverá um botão chamado "acessar como admin" onde o usuário
tera acesso a funções extras.

- `Componente saldo inicial`: Caixa de texto onde o usuário podera visualizar o saldo final em dinheiro ao fechar o caixa; 
- `Componente Fechar caixa`: Botão caso o usupario deseje finalizar a contabilidade do saldo no dia;
- `Componente Acessar como admin`: Botão que da acesso a opções de administrador;

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t6-ebatata/blob/main/docs/img/wireframe_images/Caixa_aberto.png" width="900">

### Tela - Login administrador

A tela permissão de administrador permite o acesso a determinadas funções apenas ao administrador com acesso mediante somente com login e senha.

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t6-ebatata/blob/main/docs/img/wireframe_images/Caixa_login_admin.png" width="900">

### Tela - Caixa aberto (Administrador)
- `componente Saldo inicial`: Caixa de texto inalterável que exibi o saldo inicial;
- `componente Observação`: Caixa de texto inalterável que exibi as observaçôes que o usuário realizou ao abrir o caixa;
- `componente Fechar caixa`: Abre a janela de confirmação de fechamento de caixa;
- `componente Adicionar entradas / sáidas`: Abre uma janela onde é possível adicionar entradas ou saídas ao caixa;
- `componente Imprimir relatório`: Gera um documento imprimivel com toda a movimentação do caixa;
- `componente Imprimir resumo`: Imprimi o resumo do caixa que pode ser visualizado em alaranjado na parte direita da tela;
- `componente Excluir lançamento`: Abre uma janela de confirmação para excluir o lançamento(entrada ou saída) que está
selecionado na tabela de movimentações;

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t6-ebatata/blob/main/docs/img/wireframe_images/Caixa_aberto_admin.png" width="900">

### Tela - Adição de entrada/saida (Administrador)

- `componente Valor`: Caixa de texto onde é digitado o valor a ser adionado na entrada ou saída;
- `componente Observação`: Caixa de texto onde é digitado pelo usuário qualquer observação em relação ao lançamento;
- `componente Adicionar entrada`: Adiciona a entrada ao caixa com base nos dados digitados pelo usuário;
- `componente Adicionar entrada`: Adiciona a saída ao caixa com base nos dados digitados pelo usuário;

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t6-ebatata/blob/main/docs/img/wireframe_images/Caixa_aberto_E.S.png" witdh="600">

### Tela - Deseja realmente fechar o caixa? (Administrador)

- `componente Saldo (apenas dinheiro)`: Caixa de texto inalterável que exibi o saldo final em dinheiro no caixa;
- `componente Saldo Final`: Caixa de texto inalterável que exibi o saldo final total no caixa, incluindo todas entradas e saídas;
- `componente Fechar e imprimir`: Confirma o fechamento do caixa e imprimi um resumo do mesmo;
- `componente Fechar caixa`: Confirma o fechamento do caixa;

Saldo (apenas dinheiro): Caixa de texto inalterável que exibi o saldo final em dinheiro no caixa
Saldo Final: Caixa de texto inalterável que exibi o saldo final total no caixa, incluindo todas entradas e saídas.
Fechar e imprimir: Confirma o fechamento do caixa e imprimi um resumo do mesmo.
Fechar caixa: Confirma o fechamento do caixa.

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t6-ebatata/blob/main/docs/img/wireframe_images/Caixa_aberto_F.png" witdh="600">

### Tela - Pedidos

A tela de pedidos é separada em dois menus em cascata. O menu superior é chamado "criar novo pedido" e o inferior de "pedidos criados".

- `componente Criar novo pedido`: Um menu com estilo em cascata onde novos pedidos são criados;
- `componente Pedidos Criados`: Um menu com estilo em cascata onde os ficam os pedidos criados onde os mesmos podem ser editados;
- `componente Botão cascata`: Botão onde ao interagir espande o menu de cima para baixo;
- `componente Filtro`: Botão onde o usuário podera filtrar suas buscas;
- `componente Barra de pesquisa`: Caixa onde o usuário podera incerir texto para buscar uma informação especifica;

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t6-ebatata/blob/main/docs/img/wireframe_images/Sessão_pedidos.png" width="900">

### Tela - Pedidos Criados

A tela de pedidos criados é onde fica todos os pedidos realizados. Nela pode ser feita a consulta de informações gerais como data, tempo, nome do cliente, endereço, número do pedido e nome do funcionario que realizou o atendimento.

- `componente Bloco de informações`: Bloco estático onde fica as informações sobre o pedido do cliente;
- `componente Botão detalhes`: Botão que leva o usuário a uma tela de visualização e edição do pedido especifico;
- `componente Botão finalizar`: Botão finalizar termina com o pedido e o remove da sessão pedidos criados;

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t6-ebatata/blob/main/docs/img/wireframe_images/Pedidos_criados.png" width="900">

### Tela - Criar novo pedido

A tela de criar novo pedido é onde os pedidos podem ser criados.

- `componente Botão criar novo pedido`: Botão que abre mais um pedido para ser criado;
- `componente Botão continuar`: Botão que da seguimento ao um pedido em espera;

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t6-ebatata/blob/main/docs/img/wireframe_images/Criar_novo_pedido.png" width="900">

### Tela - Novo pedido

A tela de novo pedido é feito toda a montagem do pedido. Por ela podemos fazer a adição de produtos, anexar informações de entrega do cliente, anexar observações,
adicionar novos clientes a lista de clientes, tipo de retirada a ser feita, calcular a taxa de entrega, total do pagamento, tipo de pagamento e realizar a impressão de nota fiscal.

- `componente novo produto`: Botão que leva a tela de adição de novos produtos ao pedido;
- `componente novo cliente`: Botão que leva a tela de adição de novos clientes;

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t6-ebatata/blob/main/docs/img/wireframe_images/Novo_pedido.png" width="900">
<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t6-ebatata/blob/main/docs/img/wireframe_images/Novo_pedido_dois.png" width="900">

### Tela - Novo produto

A tela novo produto é uma extenção da tela criar novo pedido. Nela é possivel realizar a adição dos produtos desejados ao pedido que esta sendo criado.

- `componente Barra de pesquisa`: Filtra os produtos de acordo com o filtro selecionado (nome ou código) e o que foi 
digitado pelo usuário;
- `componente Selecionar`: Abre a janela de escolha de tamanho do produto selecionado, caso o mesmo possua mais de um. Caso o 
produto seja de tamanho único, é aberto a janela de adicionar no pedido;
- `componente Adicionar com um click`: Caso o produto seja de tamanho único, o mesmo é adicionado ao pedido sem a 
necessidade de nehuma confirmação;

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t6-ebatata/blob/main/docs/img/wireframe_images/Novo_pedidos_três.png" width="900">

### Tela - Selecione o tamanho

A tela selecione o tamanho é uma extenção da tela novo produto. Nela é possivel realizar a seleção do tamanho de determinados produtos.

- `componente Caixas de tamanho`: Caixas selecionáveis que exibem os tamanhos do produto;
- `componente Selecionar`: Confirma o tamanho que foi selecionado pelo usuário e abre a janela de 
adicionar ao pedido;

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t6-ebatata/blob/main/docs/img/wireframe_images/Selecione_tamanho.png" width="900">

### Tela - Adicionar ao pedido

A tela adicionar ao pedido é uma extenção da tela novo produto. Nela pode ser feito a adição de complementos a certos pedidos.

- `componente`:x
- `componente`:x
- `componente`:x

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t6-ebatata/blob/main/docs/img/wireframe_images/Adicionar%20ao%20pedido.png" width="900">

### Tela - Pagamento

A tela de pagamento é onde mostra o valor total dos pedido, disponibiliza tipos de pagamento e possibilita a efetivação do pagamento.

- `componente`:x
- `componente`:x
- `componente`:x

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t6-ebatata/blob/main/docs/img/wireframe_images/Pagamento.png" width="900">

### Tela - Informações sobre a loja

A tela informações sobre a loja é onde o administrador pode completar seu cadastro com informações adicionais sobre o seu estabelicimento.

- `componente`:x
- `componente`:x
- `componente`:x

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t6-ebatata/blob/main/docs/img/wireframe_images/Informações_loja.png" width="900">

### Tela - Produtos

A tela produtos permite o usuário criar uma série de categorias para cadastrar produtos que serão usados em futuras criações de pedidos, podendo classificar os produtos por tamanho, tipo e preço.

- `componente`:x
- `componente`:x
- `componente`:x

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t6-ebatata/blob/main/docs/img/wireframe_images/Produtos.png" width="900">
<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t6-ebatata/blob/main/docs/img/wireframe_images/Produtos_dois.png" with="600">

### Tela - Editar tamanho

A tela editar tamanho é uma extenção da tela produtos onde o usuário podera editar, dividir e atribuir valor a frações do pedido.

- `componente`:x
- `componente`:x
- `componente`:x

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t6-ebatata/blob/main/docs/img/wireframe_images/Editar_tamanho.png" width="900">

### Tela - Clientes

- `componente`:x
- `componente`:x
- `componente`:x

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t6-ebatata/blob/main/docs/img/wireframe_images/Clientes.png" width="900">

### Tela - Taxas de entrega

A tela taxa de entregas é onde se atribui o valor da taxação a ser incluida aos pedidos podendo ser modificada a qualquer momento.

- `componente`:x
- `componente`:x
- `componente`:x

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t6-ebatata/blob/main/docs/img/wireframe_images/Editar_taxas.png" width="900">

### Tela - Cardapio online

- `componente`:x
- `componente`:x
- `componente`:x

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t6-ebatata/blob/main/docs/img/wireframe_images/Cardápio_online_configuração.png" width="900">


### Tela - Hitórico de caixa

- `componente`:x
- `componente`:x
- `componente`:x

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t6-ebatata/blob/main/docs/img/wireframe_images/Relatório_online.png" width="900">

### Tela - Histórico de pedidos

- `componente`:x
- `componente`:x
- `componente`:x

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t6-ebatata/blob/main/docs/img/wireframe_images/Relatório_pedidos.png" width="900">
<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t6-ebatata/blob/main/docs/img/wireframe_images/Histórico_de_pedidos_pedidos.png" width="900">

### Tela - Produtos mais vendidos

- `componente`:x
- `componente`:x
- `componente`:x

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t6-ebatata/blob/main/docs/img/wireframe_images/Relatório_produtos_mais_vendidos.png" width="900">

### Tela - Logins Administrativos

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t6-ebatata/blob/main/docs/img/wireframe_images/login_config.png" width="900">

### Tela - Impressora

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t6-ebatata/blob/main/docs/img/wireframe_images/impresora_config.png" width="900">





