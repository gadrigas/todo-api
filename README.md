# To-Do List API

Uma API RESTful para gerenciar tarefas pessoais, desenvolvida com Node.js e TypeScript.

## Funcionalidades
- CRUD de Usuários (registro, login, perfil).
- CRUD de Tarefas (criar, listar, atualizar, excluir).
- Autenticação e autorização com JWT.
- Persistência de dados com PostgreSQL usando TypeORM/Prisma.
- Validação de dados com class-validator.

## Tecnologias Utilizadas
- [**Node.js**](https://nodejs.org/): Ambiente de execução para JavaScript no servidor.
- [**TypeScript**](https://www.typescriptlang.org/): Superset do JavaScript com tipagem estática.
- [**Express.js**](https://expressjs.com/): Framework minimalista para construção de APIs.
- [**TypeORM**](https://typeorm.io/) / [**Prisma**](https://www.prisma.io/): Ferramentas para gerenciamento do banco de dados.
- [**PostgreSQL**](https://www.postgresql.org/): Sistema de gerenciamento de banco de dados relacional.
- [**JWT**](https://jwt.io/): Padrão para autenticação baseada em tokens.
- [**Bcrypt**](https://github.com/kelektiv/node.bcrypt.js): Biblioteca para criptografia de senhas.

## Configuração do Projeto
### Pré-requisitos
- Node.js (versão 22+).
- PostgreSQL instalado e configurado.

### Instalação
1. Clone o repositório:
   ```bash
   git clone https://github.com/gadrigas/todo-api.git
   cd todo-api
2. Instale as dependências:
   ```bash
   npm install
   pnpm install
   yarn add
3. Crie o arquivo .env na raiz do projeto com base no [Exemplo](/.env.example):
   ```env
   PORT=3000
   DATABASE_URL=postgresql://username:password@localhost:5432/todo_db
   JWT_SECRET=seu-segredo-jwt
4. Execute as migrações do banco de dados:
   ```bash
   npx prisma migrate dev
   yarn prisma migrate dev
5. Inicie o servidor:
   ```bash
   npm run dev
   yarn run dev