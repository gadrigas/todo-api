import { Router } from 'express';
import { body } from 'express-validator';

import { authController } from '../controllers/auth.controller';
import { Validate } from '../middlewares/validation.middleware';

/**
 * Cria um roteador para gerenciar as rotas relacionadas à autenticação.
 */
const authRouter = Router();

/**
 * Rota para registro de novos usuários.
 * Envia a requisição para o método Register do controlador AuthController.
 */
authRouter.post(
  '/register',
  Validate([
    body('email')
      .isEmail()
      .withMessage('[SERVIDOR] Formato de email inválido.'),
    body('first_name')
      .isString()
      .isLength({ min: 3 })
      .withMessage('[SERVIDOR] Nome inválido.'),
    body('last_name')
      .isString()
      .isLength({ min: 3 })
      .withMessage('[SERVIDOR] Nome inválido.'),
    body('password')
      .isStrongPassword()
      .withMessage('[SERVIDOR] Senha muito fraca.'),
  ]),
  authController.Register
);

/**
 * Rota para login de usuários.
 * Envia a requisição para o método Login do controlador AuthController.
 */
authRouter.post('/login', authController.Login);

// Exporta o roteador de autenticação
export { authRouter };
