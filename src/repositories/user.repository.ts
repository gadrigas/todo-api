import { AppDataSource } from './index';
import { User } from './entity/user.entity';

import { Register } from '../models/register.model';
import { Repository } from 'typeorm';

class UserRepository {
  private userRepositories: Repository<User>;

  constructor() {
    this.userRepositories = AppDataSource.getRepository(User);
  }

  async Create({ email, firstName, lastName, password }: Register) {
    const user = new User();
    user.email = email;
    user.firstName = firstName;
    user.lastName = lastName;
    user.password = password;
    user.tasks = [];

    await this.userRepositories.save(user);
    console.log('[BANCO DE DADOS] Novo usuário registrado.');

    return {
      password: undefined,
      ...user,
    };
  }
}

export const userRepository = new UserRepository();
