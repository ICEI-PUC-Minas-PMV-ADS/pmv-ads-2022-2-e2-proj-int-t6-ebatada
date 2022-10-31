# Registro de Testes de Usabilidade

Após realizar os testes de usabilidade, obtém-se um relatório a partir das análises realizadas. O Registro de Testes de Usabilidade é um relatório que contém as evidências dos testes e relatos dos usuários participantes, baseado no Plano de Testes de Usabilidade desenvolvido para os casos de uso desta etapa.

As referências abaixo irão auxiliá-lo na geração do artefato “Registro de Testes de Usabilidade”.

## CT-07

Este teste consiste na tentativa de criar um pedido, o usuário necessita selecionar um determinado cliente ou criar um novo cliente, caso ele não se encontre na base de dados.

![Captura de Tela 2022-10-30 às 18 29 16](https://user-images.githubusercontent.com/98955531/198902486-6e67c045-6606-474c-82bf-25aa92229a0a.png)
![Captura de Tela 2022-10-30 às 18 29 31](https://user-images.githubusercontent.com/98955531/198902488-0ab2bfb1-bc53-45f0-9510-0bcb3702ac76.png)



O usuário digita as informações do cliente e clica em salvar.
![Captura de Tela 2022-10-30 às 18 40 28](https://user-images.githubusercontent.com/98955531/198902796-54a501ba-a6da-47d0-b26a-3e191a5e057c.png)

O front end pega os dados inseridos pelo cliente e monta uma requisição do tipo POST e envia para o caminho /api/novocliente, que está programada para esse tipo de requsição.
![Imagem do WhatsApp de 2022-10-30 à(s) 16 58 31](https://user-images.githubusercontent.com/103695641/198917813-3e4fe0e1-505f-44ef-8713-cce482b7675e.jpg)

O servidor estabelece comunicação com o banco de dados.
![Imagem do WhatsApp de 2022-10-30 à(s) 17 01 06](https://user-images.githubusercontent.com/103695641/198918025-d4aced0a-cc4e-4ade-8d18-6aa7b1bde399.jpg)


Recebe a requisição com o novo cliente.
![ddf](https://user-images.githubusercontent.com/103695641/198918113-ba365df3-a5cc-4ad3-a887-c5cbc00e0b71.jpg)


Processa a mesma e salva no banco de dados.
![hhhhhh](https://user-images.githubusercontent.com/103695641/198918205-501f81ed-c72d-4f45-be83-71eabec5d38c.jpg)

Cliente salva no banco de dados.
![nnnnnn](https://user-images.githubusercontent.com/103695641/198918279-a466fb32-2ad2-46ae-8788-ed7701e947ff.jpg)

Depois do processamento do servidor ser concluído, ele envia uma resposta ao cliente. O cliente processa a resposta e atualiza a página.
A nova cliente já esta salva e já pode realizar um pedido
![wwww](https://user-images.githubusercontent.com/103695641/198918408-16b6c404-fbf8-4496-9f48-8859c28bbb0d.jpg)

