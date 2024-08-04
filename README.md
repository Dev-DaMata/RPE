#  ![RPE](https://www.rpe.tech/wp-content/themes/rpe/app/images/logo.svg)

Projeto denvolvido em [Node.js](https://nodejs.org/en/) com framework [Cypress](https://www.cypress.io/)

| **![grab-landing-page](https://github.com/Dev-DaMata/RPE/blob/master/cypress/mocks/images/Login.gif)** | **![grab-landing-page](https://github.com/Dev-DaMata/RPE/blob/master/cypress/mocks/images/Client.gif)** | **![grab-landing-page](https://github.com/Dev-DaMata/RPE/blob/master/cypress/mocks/images/Transaction.gif)** |
|-------------|----------------|-------------|    

## 📘 Pré-requisitos

- <a href="https://nodejs.org/en/">Node.Js</a> - v. 16.15.0
- <a href="https://www.npmjs.com/">NPM</a> - v. 8.5.5
- <a href="https://www.cypress.io/">Cypress</a> - v. ^13.13.2
- <a href="https://www.npmjs.com/package/gerador-validador-cpf">gerador-validador-cpf</a> - v. ^5.0.2
- <a href="https://fakerjs.dev/">fakerjs</a> - v. ^8.4.1

## :rocket: Como instalar a aplicação localmente

1. Para clonar repositório: 📑

    ```
    git clone https://github.com/Dev-DaMata/RPE.git
    ```

2. Entrando na pasta: 🚪

     ```
     cd RPE
     ```

3. Para instalar as dependências necessárias/todas as dependências : ⬇️

    ```js
    //instalar todas as dependências:
    npm install
    //instalar somente as dependências necessárias:
    npm install --production
    ```

4. Para iniciar o projeto No Cypress: 🤖

    ```
    npx cypress open
    ```

5. Para iniciar o projeto pelo terminal ⚙️
   ```
    npx cypress run
   ```
6. Preview 👀
   
   a. Execução teste login  
   ![grab-landing-page](https://github.com/Dev-DaMata/RPE/blob/master/cypress/mocks/images/Login.gif)

   b. Execução teste cliente
   ![grab-landing-page](https://github.com/Dev-DaMata/RPE/blob/master/cypress/mocks/images/Client.gif)

   c. Execução teste transação
    ![grab-landing-page](https://github.com/Dev-DaMata/RPE/blob/master/cypress/mocks/images/Transaction.gif)

7. Plano de teste 📜

| **Section** | **Subsection** | **Details** |
|-------------|----------------|-------------|
| **1. Login** | 1.1 | Validação de login |
|              | 1.2 | Recuperar conta |
|              | 1.3 | Salva conta |
| **2. Cliente** | 2.1 | Incluir cliente |
|              | 2.1.1 | Validação de nome |
|              | 2.1.2 | Validação de CPF |
|              | 2.1.3 | Ativo? |
|              | 2.1.4 | Saldo disponível |
|              | 2.1.5 | Botão de Limpar |
|              | 2.1.6 | Botão de Salvar |
|              | 2.1.7 | Botão de Cancelar |
|              | 2.2 | Listar clientes |
|              | 2.2.1 | Filtro de nome |
|              | 2.2.2 | Filtro de data de validade |
|              | 2.2.3 | Botão de pesquisar |
|              | 2.2.4 | Botão de limpar base |
|              | 2.2.5 | Botão de ver detalhamento do cliente |
|              | 2.2.6 | Botão de excluir um único cliente |
|              | 2.2.7 | Botão de ver clientes bloqueados |
|              | 2.2.8 | Botão de ver clientes ativos |
| **3. Transações** | 3.1 | Incluir Transação |
|              | 3.1.1 | Selecionar Cliente |
|              | 3.1.2 | Valor da transação |
|              | 3.1.3 | Botão de salvar transação |
|              | 3.1.4 | Botão de Cancelar transação |
|              | 3.2 | Listar Transação |
|              | 3.2.1 | Filtrar cliente |
|              | 3.2.2 | Botão de pesquisar |
|              | 3.2.3 | Botão de ver detalhamento da transação |

8. Cenários e especificações de casos de teste 🦾

| **Cenário** | **Caso de teste** | **BDD** | **Status** |
|-------------|----------------|-------------|-------------|
| **001 - Login** | CT001.001 | Dado que eu esteja na tela de login Quando preencher o usuário incorreto Então o sistema deve exibir a mensagem "Credenciais inválidas" | Passou ✔️ |
| **002 - Login** | CT001.002 | Dado que eu esteja na tela de login Quando esquecer a senha e clicar na opção 'Forgot password?' Então eu devo recuperar a senha | Falhou ❌ |
| **003 - Login** | CT001.003 | Dado que eu esteja na tela de login Quando preencher os campos de login com o meu usuário e senha e selecione a opção 'Lembra' Então o meu usuário e senha devem ficar salvos | Falhou ❌ |
| **004 - Incluir clientes** | CT002.001 | Dado que eu esteja na tela de incluir um cliente Quando for criado um Cliente sem nome Então deve aparecer a seguinte mensagem de erro embaixo do campo do nome 'Campo Obrigatório' | Passou ✔️ |
| **005 - Incluir clientes** | CT002.002 | Dado que eu esteja na tela de incluir um cliente Quando for adicionado um cpf Então ele deverá ser validado | Falhou ❌ |
| **006 - Incluir clientes** | CT002.003 | Dado que eu esteja na tela de incluir um cliente Quando for criado um cliente sem cpf Então deve aparecer a seguinte mensagem embaixo do campo do CPF 'Campo Obrigatório' | Passou ✔️ |
| **007 - Incluir clientes** | CT002.004 | Dado que eu esteja na tela de incluir um cliente Quando for criar o usuário Então deve ter a opção de criar o cliente com a opção 'ativo?' do tipo ativo ou inativo | Passou ✔️ |
| **008 - Incluir clientes** | CT002.005 | Dado que eu esteja na tela de incluir um cliente Quando for adicionar o saldo Então não poderá ser negativo ou zerado | Falhou ❌ |
| **009 - Incluir clientes** | CT002.006 | Dado que eu esteja na tela de incluir um cliente Quando o botão de 'Limpar' for selecionado Então todos os campos devem ser zerados | Falhou ❌ |
| **010 - Incluir clientes** | CT002.007 | Dado que eu esteja na tela de incluir um cliente Quando o botão de 'Salvar' for selecionado Então ele devera salvar as informações do cliente | Passou ✔️ |
| **011 - Incluir clientes** | CT002.008 | Dado que eu esteja na tela de incluir um cliente Quando o botão de 'Cancelar' for selecionado Então a operação de incluir um cliente deve ser abortada | Passou ✔️ |
| **012 - Listar clientes** | CT003.001 | Dado que eu esteja na tela de listagem de clientes Quando o filtro de nome for selecionado Então deverá ser filtrado todos os clientes com esse nome ou por aproximação | Passou ✔️ |
| **013 - Listar clientes** | CT003.002 | Dado que eu esteja na tela de listagem de clientes Quando o filtro da data da validade for selecionado Então deverá ser filtrado todos os clientes com a data de vencimento do cartão | Falhou ❌ |
| **014 - Listar clientes** | CT003.003 | Dado que eu esteja na tela de listagem de clientes Quando o botão de 'Pesquisar' for selecionado Então deverá pesquisar os clientes pelos parâmetros passados pelo filtro | Passou ✔️ |
| **015 - Listar clientes** | CT003.004 | Dado que eu esteja na tela de listagem de clientes Quando o botão de 'Limpar base ' for selecionado Então deverá apagar todos os clientes registrados na base | Passou ✔️ |
| **016 - Listar clientes** | CT003.005 | Dado que eu esteja na tela de listagem de clientes Quando o botão com o ícone de uma lupa 'ver detalhamento do cliente' for selecionado Então a página do cliente aparecera | Passou ✔️ |
| **017 - Listar clientes** | CT003.006 | Dado que eu esteja na tela de listagem de clientes Quando o botão com o ícone de uma lixeira 'excluir' for selecionado Então deverá excluir aquele cliente da base | Falhou ❌ |
| **018 - Listar clientes** | CT003.007 | Dado que eu esteja na tela de listagem de clientes Quando o botão de 'Cliente Bloqueado' for selecionado Então deverá ser listado apenas os clientes com o status de bloqueado | Falhou ❌ |
| **019 - Listar clientes** | CT003.008 | Dado que eu esteja na tela de listagem de clientes Quando o botão de 'Cliente Ativo' for selecionado Então deverá ser listado apenas os clientes com o status de ativo | Falhou ❌ |
| **020 - Incluir Transação** | CT004.001 | Dado que eu esteja na tela de incluir transação Quando selecionado um cliente o mesmo deverá ser valido Então a transação é criada | Passou ✔️ |
| **021 - Incluir transação** | CT004.002 | Dado que eu esteja na tela de incluir transação quando selecionado um valor de transação ele deverá ser maior que 0 | Passou ✔️ (faltou mensagem de erro) |
| **022 - Incluir transação** | CT004.003 | Dado que eu esteja na tela de incluir transação Quando selecionado um valor de transação ele deverá ser maior do que o saldo do cliente Então a transação poderá ser aprovada | Falhou ❌ |
| **023 - Incluir transação** | CT004.004 | Dado que eu esteja na tela de incluir transação Quando o botão de 'Salvar' for selecionado Então a transição deverá ser salva na base | Passou ✔️ |
| **024 - Incluir transação** | CT004.005 | Dado que eu esteja na tela de incluir transação Quando o botão de 'Cancelar' for selecionado Então a transação deverá ser abortada | Passou ✔️ |
| **025 - Incluir transação** | CT004.006 | Dado que eu esteja na tela de incluir uma transação Quando uma transação for realizada ele devera subtrair o saldo do cliente Então dessa forma o pagamento será efetuado | Passou ✔️ |
| **026 - Incluir transação** | CT005.004 | Dado que eu esteja na tela de incluir transação Quando uma transação for criada com um cliente inativado então o sistema não deve permitir a criação | Falhou ❌ |
| **027 - Listar transação** | CT005.001 | Dado que eu esteja na tela de listagem das transações Quando o filtro de cliente for selecionado de forma correta Então deverá ser filtrada o cliente com o nome usado no filtro | Falhou ❌ |
| **028 - Listar transação** | CT005.002 | Dado que eu esteja na tela de listagem de transações Quando o botão de 'Pesquisar' for selecionado Então deverá ser filtrado partir dos parâmetros usados nos filtros | Falhou ❌ |
| **029 - Listar transação** | CT005.003 | Dado que eu esteja na tela de listagem de transações Quando o botão com o ícone de uma lupa 'ver detalhamento da transação' for selecionado Então deverá ir para a página da transação | Passou ✔️ |

9. Bugs 🪲

| **Página** | **Descrição** | **Problema** |
|------------|----------------|--------------|
| **Login** | Ao apertar no botão de forgot password 'recuperar senha' | Ele não realiza nenhuma ação |
| **Login** | Ao selecionar a opção de lembrar a conta e logar no sistema | Ao deslogar a conta não fica salva |
| **Incluir Cliente** | Ao adicionar um CPF | Ele não faz a validação para ver se ele é válido |
| **Incluir Cliente** | Ao clicar no botão de limpar | Todos os campos do cliente devem ser apagados, mas estão sendo salvos |
| **Listar Clientes** | Ao filtrar por data diferente dos clientes | Está retornando todos os clientes |
| **Listar Clientes** | Ao clicar no botão para excluir um cliente específico | Ele não está realizando nenhuma ação |
| **Listar Clientes** | Ao clicar no botão para filtrar apenas os clientes do tipo bloqueado | Ele não está realizando nenhuma função |
| **Listar Clientes** | Ao clicar no botão para filtrar apenas os clientes do tipo ativo | Ele não está realizando nenhuma função |
| **Incluir Transação** | Está sendo possível criar uma transação com o valor zerado | |
| **Incluir Transação** | É possível criar uma transação com o valor superior ao saldo do cliente | |
| **Incluir Transação** | Está sendo possível criar uma transação com o cliente do tipo inativo | |
| **Listar Transações** | Não é possível filtrar as transações de um único cliente | |
| **Listar Transações** | O botão de filtrar não está funcionando | |

10 . Sugestões 🪄

| **Página** | **Sugestão** | **Descrição** |
|------------|--------------|---------------|
| **Listar Clientes** | Filtragem por data | Adicionar a filtragem da data por DD/MM/AAAA para deixar a filtragem mais precisa |
| **Listar Clientes** | Filtragem por CPF | Adicionar uma filtragem por CPF |
| **Listar Clientes** | Restrições de CPF | Não permitir alterar o CPF do cliente |
