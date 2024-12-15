import { Request, Response } from 'express';

import { authService } from '../services/auth.service';
import { Register } from '../models/register.model';
import { Login } from '../models/login.model';

class AuthController {
  constructor() {}

  async Register(req: Request, res: Response) {
    const {
      email,
      first_name,
      last_name,
      password
    }: Register = req.body;

    try {
      const data = await authService.Register({ email, first_name, last_name, password });
      res.status(201).json(data);
    } catch (err) {
      res.status(400).json({ message: err });
    }
  }

  async Login(req: Request, res: Response) {
    const { email, password }: Login = req.body;

    try {
      const data = await authService.Login({ email, password });
      res.status(200).json(data); 
    } catch (err) {
      res.status(400).json({ message: err });
    }
  }
}

export const authController = new AuthController();