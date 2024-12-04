import { Router } from 'express';
import cors, { CorsOptions } from 'cors';

import { authRouter } from './auth.router';

/**
 * Configurações para o middleware CORS (Cross-Origin Resource Sharing).
 * Permite acesso de qualquer origem, define métodos HTTP permitidos e cabeçalhos aceitos.
 */
const corsOptions: CorsOptions = {
  origin: '*', // Permite requisições de qualquer origem.
  preflightContinue: false, // Não passa para o próximo middleware em requisições preflight.
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,HTTP', // Métodos HTTP permitidos.
  allowedHeaders: [
    'Origin',
    'X-Requested-With',
    'Content-Type',
    'Accept',
    'X-Access-Token',
    'Authorization',
  ], // Cabeçalhos permitidos.
};

/**
 * Inicializa um roteador do Express para gerenciar rotas da aplicação.
 */
const routes = Router();

// Adiciona o middleware CORS ao roteador
routes.use(cors(corsOptions));

// Define a rota de autenticação utilizando o roteador authRouter
routes.use('/auth', authRouter);

// Exporta o roteador configurado
export { routes };
