import { hash, compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

import { userRepository } from '../repositories/user.repository';

import { Register } from '../models/register.model';
import { Login } from '../models/login.model';

class AuthService {
  constructor() {}

  async Register(user: Register) {
    user.password = await hash(user.password, 10);

    const data = await userRepository.Create(user);
    const payload = sign(data, process.env.JWT_SECRET, { expiresIn: '3d' });

    return {
      user: data,
      token: payload,
    };
  }

  async Login({ email, password }: Login) {
    const user = await userRepository.GetByEmail(email);
    if (!user)
      throw new Error(
        JSON.stringify({
          status: 404,
          message: '[SERVIDOR] Usuário não encontrado.',
        })
      );

    const comparePassword = await compare(password, user.password);
    if (!comparePassword) throw new Error(
      JSON.stringify({
        status: 400,
        message: '[SERVIDOR] Senha incorreta.',
      })
    );

    const payload = sign(user, process.env.JWT_SECRET, { expiresIn: '3d' });

    return { token: payload };
  }
}

export const authService = new AuthService();
