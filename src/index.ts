import express from "express";
import dotenv from "dotenv";
dotenv.config();

import { TodoListAPI } from "./server";

const app = express();
new TodoListAPI(app);