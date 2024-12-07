import express from "express";
import dotenv from "dotenv";
import 'reflect-metadata';

dotenv.config();

import { AppDataSource } from "./repositories";
import { TodoListAPI } from "./server";

const app = express();
new TodoListAPI(app);

AppDataSource.initialize()
  .then(() => console.log('[BANCO DE DADOS] Iniciado com sucesso.'))
  .catch((err) => console.log('[BANCO DE DADOS] ' + err));