# Arquitetura da Solução

# Programação de Funcionalidades

<span style="color:red">Pré-requisitos: <a href="2-Especificação do Projeto.md"> Especificação do Projeto</a></span>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="4-Metodologia.md"> Metodologia</a>, <a href="3-Projeto de Interface.md"> Projeto de Interface</a>, <a href="5-Arquitetura da Solução.md"> Arquitetura da Solução</a>

Implementação do sistema descritas por meio dos requisitos funcionais e/ou não funcionais. Deve relacionar os requisitos atendidos os artefatos criados (código fonte) além das estruturas de dados utilizadas e as instruções para acesso e verificação da implementação que deve estar funcional no ambiente de hospedagem.


# Prova de Conceito da Arquitetura (POC)

## CT-07

Este teste consiste na tentativa de criar um pedido, o usuário necessita selecionar um determinado cliente ou criar um novo cliente, caso ele não se encontre na base de dados.

O usuário digita as informações do cliente e clica em salvar.
![Captura de Tela 2022-10-30 às 18 40 28](https://user-images.githubusercontent.com/98955531/198902796-54a501ba-a6da-47d0-b26a-3e191a5e057c.png)

O front end pega os dados inseridos pelo cliente e monta uma requisição do tipo POST e envia para o caminho /api/novocliente, que está programada para esse tipo de requsição.
![Imagem do WhatsApp de 2022-10-30 à(s) 16 58 31](https://user-images.githubusercontent.com/103695641/198917813-3e4fe0e1-505f-44ef-8713-cce482b7675e.jpg)

O servidor estabelece comunicação com o banco de dados.

Recebe a requisição com o novo cliente.
![ddf](https://user-images.githubusercontent.com/103695641/198918113-ba365df3-a5cc-4ad3-a887-c5cbc00e0b71.jpg)


Processa a mesma e salva no banco de dados.
![hhhhhh](https://user-images.githubusercontent.com/103695641/198918205-501f81ed-c72d-4f45-be83-71eabec5d38c.jpg)

Cliente salva no banco de dados.
![nnnnnn](https://user-images.githubusercontent.com/103695641/198918279-a466fb32-2ad2-46ae-8788-ed7701e947ff.jpg)

Depois do processamento do servidor ser concluído, ele envia uma resposta ao cliente. O cliente processa a resposta e atualiza a página.
A nova cliente já esta salva e já pode realizar um pedido.

## Diagrama de Classes

O diagrama de classes ilustra graficamente como será a estrutura do software, e como cada uma das classes da sua estrutura estarão interligadas.

![Captura de Tela 2022-10-28 às 14 20 10](https://user-images.githubusercontent.com/98955531/200703968-7c9e5b02-dee1-4d21-9f0e-e875370ea9be.png)



## Modelo ER

O Modelo ER representa através de um diagrama como as entidades se relacionam entre si na aplicação interativa.

![Captura de Tela 2022-10-01 às 18 02 25](https://user-images.githubusercontent.com/98955531/193428246-56dd4437-0e96-4b22-b569-40ad1efa4a29.png)



## Esquema Relacional

O Esquema Relacional corresponde à representação dos dados em tabelas juntamente com as restrições de integridade e chave primária.

![Captura de Tela 2022-10-01 às 17 57 49](https://user-images.githubusercontent.com/98955531/193428090-b6dbb3b2-1b6f-4340-b2da-9545d342314f.png)
