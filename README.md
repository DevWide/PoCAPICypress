# Projeto Serverest API e Frontend - Testes Automatizados com Cypress

Este repositório contém testes automatizados para a aplicação [Serverest](https://serverest.dev/), cobrindo tanto o **frontend** quanto a **API**, utilizando a ferramenta Cypress para automação.

## **Estrutura do Projeto**

A estrutura do projeto está organizada da seguinte forma:

## Estrutura do Projeto

```bash
cypress
 ├── e2e
 │    ├── api
 │    │    ├── loginTests.spec.js       # Testes de Login na API
 │    │    ├── productTests.spec.js     # Testes de Produtos na API
 │    │    └── userTests.spec.js        # Testes de Usuários na API
 │    └── frontend
 │         ├── loginValid.spec.js       # Teste de Login com credenciais válidas
 │         ├── loginInvalid.spec.js     # Teste de Login com credenciais inválidas
 │         └── emptyFields.spec.js      # Teste de campos obrigatórios no login
 ├── fixtures
 │    └── credentials.json              # Dados de login para testes
 ├── support
 │    ├── commands.js                   # Comandos customizados do Cypress
 │    └── e2e.js                        # Configuração global do Cypress
 └── cypress.config.js                  # Configurações do Cypress
```
## **Pré-Requisitos**

- **Node.js** (versão 18 ou superior)
- **PNPM** (gerenciador de pacotes)

### **Instalação**

1. Clone o repositório:
   ```bash
   git clone https://github.com/DevWide/PoCAPICypress.git
   cd Projeto_Tec2_Cloud_API
   ```

2. Instale as dependências:
```
pnpm install
```

## Comandos Disponíveis
### Executar os testes no modo interativo
```
pnpm exec cypress open
```

### Executar os testes no modo headless
```
pnpm test:chrome
```

## Pipeline no GitHub Actions
O projeto já inclui um arquivo de workflow localizado em .github/workflows/cypress.yml para rodar os testes automaticamente em headless no GitHub Actions.

* A pipeline é executada automaticamente em:
Push na branch main
Pull Requests direcionadas para main

## Relatórios e Artefatos
Vídeos e capturas de tela dos testes são salvos automaticamente em:
* cypress/videos/
* cypress/screenshots/

Em caso de falhas, esses artefatos podem ser analisados no GitHub Actions para identificar problemas.




