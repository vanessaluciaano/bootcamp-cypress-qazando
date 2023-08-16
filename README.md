# bootcamp-cypress-qazando


O objetivo deste projeto era aprender e aplicar conceitos de automação de testes utilizando a ferramenta Cypress. 

## Dia 1
O projeto consistiu em criar testes automatizados para a plataforma de testes [Automation Practice](https://automationpratice.com.br/) com base nas instruções fornecidas no vídeo tutorial [link do vídeo](https://www.youtube.com/watch?v=AQw6RXmvTzE).

## Dia 2: Testando APIs com Cypress

No segundo dia do bootcamp, exploramos a automação de testes de APIs usando o Cypress. Utilizamos a API disponibilizada em [restful-api.dev](https://restful-api.dev/) para realizar testes automatizados de integração.

## Pré-requisitos

Antes de executar os testes automatizados neste projeto, certifique-se de que os seguintes pré-requisitos foram atendidos:

1. [Node.js](https://nodejs.org/) instalado
2. [Cypress](https://www.cypress.io/) instalado globalmente ou localmente no projeto
3. Dependências do projeto instaladas através do comando: `npm install`

## Como Executar os Testes

Siga as etapas abaixo para executar os testes automatizados:

1. Clone este repositório para o seu ambiente local.
2. Abra o terminal e navegue até o diretório do projeto.
3. Execute o seguinte comando para abrir o Cypress:
```bash
npx cypress open
```

## Estrutura do projeto
- `cypress/`: Contém todos os arquivos relacionados aos testes automatizados.
- `fixtures/`: Arquivos de dados de teste.
- `integration/`: Contém os testes Cypress.
- `plugins/`: Plugins personalizados do Cypress (se aplicável).
- `support/`: Arquivos de suporte e comandos personalizados.
- `node_modules/`: Dependências do projeto.
- `cypress.json`: Arquivo de configuração do Cypress.
- `package.json`: Arquivo de configuração do Node.js.
- `README.md`: Este arquivo.
