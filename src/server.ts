import { Application, json, urlencoded } from 'express';

import { routes } from './routes';

/**
 * PORT é o número da porta na qual a aplicação será executada.
 * Ele utiliza a variável de ambiente PORT, se disponível, ou o valor padrão 3000.
 */
const PORT = Number(process.env.PORT || 3000);

/**
 * A classe TodoListAPI inicializa e configura uma aplicação Express.
 */
export class TodoListAPI {
  app: Application; // Instância da aplicação Express.

  /**
   * Construtor da classe TodoListAPI.
   * @param app - A instância da aplicação Express a ser configurada.
   */
  constructor(app: Application) {
    this.app = app;

    // Configura a aplicação
    this.config();
  }

  /**
   * Configura a aplicação Express com middlewares e rotas.
   * @private
   */
  private config() {
    // Middleware para processar requisições JSON
    this.app.use(json());

    // Middleware para processar requisições com URL codificado
    this.app.use(
      urlencoded({
        extended: true,
      })
    );

    // Middleware para configurar as rotas da aplicação
    this.app.use(routes);

    // Inicia o servidor e escuta na porta especificada
    this.app
      .listen(PORT, 'localhost', () =>
        console.log('[SERVIDOR] Iniciado na porta: ' + PORT)
      )
      .on('error', (err) => console.log('[SERVIDOR] ' + err)); // Loga quaisquer erros
  }
}
