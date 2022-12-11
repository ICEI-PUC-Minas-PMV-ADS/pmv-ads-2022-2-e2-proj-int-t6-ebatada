# Projeto de Interface

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a></span>

Visão geral da interação do usuário pelas telas do sistema e protótipo interativo das telas com as funcionalidades que fazem parte do sistema (wireframes).

 Apresente as principais interfaces da plataforma. Discuta como ela foi elaborada de forma a atender os requisitos funcionais, não funcionais e histórias de usuário abordados nas <a href="2-Especificação do Projeto.md"> Documentação de Especificação</a>.

## User Flow

O diagrama apresentado a aseguir mostra o fluxo de interação do usuário pelas telas do sistema. Cada uma das telas deste fluxo é detalhada na seção de Wireframes que se segue.

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t6-ebatata/blob/b347803b53739b5a444e3cfd14e5c1b7538703e6/docs/img/userflow_ebatata.png">




## Wireframes

As telas do sistema apresentam uma estrutura formado por três grandes blocos descritos a seguir.

- `componente Barra topo`: Barra de navegação do topo onde esta disposto o nome do site e um botão para esconder o menu lateral;
- `componente Barra lateral`: Barra de navegação lateral onde estão dispostos todas as opções que ajudam na ultilização da aplicação;

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t6-ebatata/blob/ee3eec11ded6209bfd676ac4ed43d1477eb6d796/docs/img/wireframe_images/Navbar.png" width="900">
<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t6-ebatata/blob/ee3eec11ded6209bfd676ac4ed43d1477eb6d796/docs/img/wireframe_images/Navbar_2.png" width="900">

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



### Tela - Pedidos

A tela de pedidos é separada em dois menus em cascata. O menu superior é chamado "criar novo pedido" e o inferior de "pedidos criados".

- `componente Criar novo pedido`: Um menu com estilo em cascata onde novos pedidos são criados;
- `componente Pedidos Criados`: Um menu com estilo em cascata onde os ficam os pedidos criados onde os mesmos podem ser editados;
- `componente Botão cascata`: Botão onde ao interagir espande o menu de cima para baixo;
- `componente Filtro`: Botão onde o usuário podera filtrar suas buscas;
- `componente Barra de pesquisa`: Caixa onde o usuário podera incerir texto para buscar uma informação especifica;

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t6-ebatata/blob/a8af391c2a2ed5e3219eea00460baea6c10eec41/docs/img/wireframes/pedidos.png" width="900">

### Tela - Pedidos Criados

A tela de pedidos criados é onde fica todos os pedidos realizados. Nela pode ser feita a consulta de informações gerais como data, tempo, nome do cliente, endereço, número do pedido e nome do funcionario que realizou o atendimento.

- `componente Bloco de informações`: Bloco estático onde fica as informações sobre o pedido do cliente;
- `componente Botão detalhes`: Botão que leva o usuário a uma tela de visualização e edição do pedido especifico;
- `componente Botão finalizar`: Botão finalizar termina com o pedido e o remove da sessão pedidos criados;

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t6-ebatata/blob/a8af391c2a2ed5e3219eea00460baea6c10eec41/docs/img/wireframes/pedidoscriados.png" width="900">

### Tela - Criar novo pedido

A tela de criar novo pedido é onde os pedidos podem ser criados.

- `componente Botão criar novo pedido`: Botão que abre mais um pedido para ser criado;
- `componente Botão continuar`: Botão que da seguimento ao um pedido em espera;

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t6-ebatata/blob/80a80c90dce1c08bc012621ba0f63c9e9aa89b92/docs/img/wireframes/_criarnovopedido.png" width="900">

### Tela - Novo pedido

A tela de novo pedido é feito toda a montagem do pedido. Por ela podemos fazer a adição de produtos, anexar informações de entrega do cliente, anexar observações,
adicionar novos clientes a lista de clientes, tipo de retirada a ser feita, calcular a taxa de entrega, total do pagamento, tipo de pagamento e realizar a impressão de nota fiscal.

- `componente novo produto`: Botão que leva a tela de adição de novos produtos ao pedido;
- `componente novo cliente`: Botão que leva a tela de adição de novos clientes;

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t6-ebatata/blob/80a80c90dce1c08bc012621ba0f63c9e9aa89b92/docs/img/wireframes/novopedido.png" width="900">
<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t6-ebatata/blob/80a80c90dce1c08bc012621ba0f63c9e9aa89b92/docs/img/wireframes/novopedido2.png" width="900">

### Tela - Novo produto

A tela novo produto é uma extenção da tela criar novo pedido. Nela é possivel realizar a adição dos produtos desejados ao pedido que esta sendo criado.

- `componente Barra de pesquisa`: Filtra os produtos de acordo com o filtro selecionado (nome ou código) e o que foi digitado pelo usuário;
- `componente Adicionar com um click`: Caso o produto seja de tamanho único, o mesmo é adicionado ao pedido sem a necessidade de nehuma confirmação;
- `componente Selecionar`: Abre a janela de escolha de tamanho do produto selecionado, caso o mesmo possua mais de um. Caso o produto seja de tamanho único, é aberto a janela de adicionar no pedido;

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t6-ebatata/blob/80a80c90dce1c08bc012621ba0f63c9e9aa89b92/docs/img/wireframes/novoproduto.png" width="900">

### Tela - Selecione o tamanho

A tela selecione o tamanho é uma extenção da tela novo produto. Nela é possivel realizar a seleção do tamanho de determinados produtos.

- `componente Caixas de tamanho`: Caixas selecionáveis que exibem os tamanhos do produto;
- `componente Selecionar`: Confirma o tamanho que foi selecionado pelo usuário e abre a janela de 
adicionar ao pedido;

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t6-ebatata/blob/987a407664e42558e2fec81bde6913ea82c2f343/docs/img/wireframes/selecionetamanho.png" width="900">

### Tela - Adicionar ao pedido

A tela adicionar ao pedido é uma extenção da tela novo produto. Nela pode ser feito a adição de complementos a certos pedidos.

- `componente Botões Radio (seleção única)`: Exibi os tamanhos do produto e permite a troca do mesmo;
- `componente Personalizar Meio a Meio`: Abre uma janela para que o usuário escolha os sabores que irão compor o meio a meio;
- `componente Observação personalizada`: Abre uma caixa de texto em que o usuário pode digitar uma observção personalizada 
para ser adicionada ao produto;

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t6-ebatata/blob/80a80c90dce1c08bc012621ba0f63c9e9aa89b92/docs/img/wireframes/adicionaraopedido.png" width="900">

### Tela - Pagamento

A tela de pagamento é onde mostra o valor total dos pedido, disponibiliza tipos de pagamento e possibilita a efetivação do pagamento.

- `componente Formas de pagamentos`: Abre uma janela de acordo com a forma de pagamento selecionada, onde o usuário digita a quantia que será ou foi paga pelo cliente;
- `componente Taxas e descontos`: Abre uma janela que mediante a permissão de um administrador  permite a adição de taxas ou descontos ao pagamento;

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t6-ebatata/blob/80a80c90dce1c08bc012621ba0f63c9e9aa89b92/docs/img/wireframes/pagamento.png" width="900">

### Tela - Informações sobre a loja

A tela informações sobre a loja é onde o administrador pode completar seu cadastro com informações adicionais sobre o seu estabelicimento.

- `componente foto`: Botão para realizar upload de foto de perfil do estabelecimento;

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t6-ebatata/blob/80a80c90dce1c08bc012621ba0f63c9e9aa89b92/docs/img/wireframes/informacoessobrealoja.png" width="900">

### Tela - Produtos

A tela produtos permite o usuário criar uma série de categorias para cadastrar produtos que serão usados em futuras criações de pedidos, podendo classificar os produtos por tamanho, tipo e preço.

- `componente Categorias de produtos`: Menus em estilo cascata que separam os produtos por tipo e permite a visualização, criação e exclusão dos mesmos;
- `componente Adicionar categoria`: Menu em estilo cascata que permite a criação de uma nova categoria/tipo de produtos;
- `componente Botão de editar`: Abre uma janela onde é possível editar os tamanhos;

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t6-ebatata/blob/80a80c90dce1c08bc012621ba0f63c9e9aa89b92/docs/img/wireframes/produtos.png" width="900">
<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t6-ebatata/blob/987a407664e42558e2fec81bde6913ea82c2f343/docs/img/wireframes/produto2.png" with="600">

### Tela - Editar tamanho

A tela editar tamanho é uma extenção da tela produtos onde o usuário podera editar, dividir e atribuir valor a frações do pedido.

- `componente Descrição do tamanho`: Caixa de texto onde o usuário digita o nome/descrição do tamanho a ser editado;
- `componente Meio a meio`: Aba onde é possível alterar as configurações de ‘meio a meio’ com vários sabores. Ao marcar a checkbox, produtos com aquele tamanho ficam disponíveis na tela “Adicionar ao pedido” para personalização de meio a meio;
- `componente Cobrar pelo meio a meio`: Configura uma taxa de serviço que é adicionada ao valor do pedido caso o ‘meio a meio’ com produtos daquele determinado tamanho feito;

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t6-ebatata/blob/80a80c90dce1c08bc012621ba0f63c9e9aa89b92/docs/img/wireframes/editartamanho.png" width="900">

### Tela - Taxas de entrega

A tela taxas de entregas é onde se atribui o valor da taxação a ser incluida aos pedidos podendo ser modificada a qualquer momento.

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t6-ebatata/blob/80a80c90dce1c08bc012621ba0f63c9e9aa89b92/docs/img/wireframes/taxadeentrega.png" width="900">

### Tela - Histórico de pedidos

A teela histórico de pedidos lista em forma de tabela todos os pedidos que foram feitos no sistema, sendo possível filtrá-los por período ou até mesmo visualizar os detalhes de cada cada um.

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t6-ebatata/blob/80a80c90dce1c08bc012621ba0f63c9e9aa89b92/docs/img/wireframes/historicodepedidos.png" width="900">

### Tela - Impressora

A tela de impressora é onde os pedidos são impressos. É possivel anexar varias impressoras modificar tipos de impressão, tamanho da folha dentre outras funcionalidades.

<img src="https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2022-2-e2-proj-int-t6-ebatata/blob/80a80c90dce1c08bc012621ba0f63c9e9aa89b92/docs/img/wireframes/impressoras.png" width="900">





