# Testes Automatizados com Cypress — SauceDemo

Suíte de testes E2E automatizados com Cypress na aplicação [SauceDemo](https://www.saucedemo.com/).

## Cenários cobertos

### Login
- Login com sucesso
- Usuário bloqueado
- Senha incorreta
- Usuário inexistente
- Campos em branco
- Outros cenários de validação

### Carrinho
- Adicionar item
- Remover item
- Conferir itens no carrinho

### Compra
- Fluxo completo de checkout

## Tecnologias

- Cypress
- JavaScript
- Node.js (LTS)

## Como rodar

### Pré-requisitos
- Node.js LTS instalado

### Instalação

```bash
# Clone o repositório
git clone https://github.com/antonio-samuel/Cypress.git

# Entre na pasta
cd Cypress

# Instale as dependências
npm install

# Caso o Cypress não esteja instalado
npm install cypress --save-dev

# Modo interativo (abre a interface do Cypress)
npx cypress open

# Modo headless (executa todos os testes no terminal)
npx cypress run
