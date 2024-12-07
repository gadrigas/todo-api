import { AppDataSource } from './index';
import { User } from './entity/user.entity';

import { Register } from '../models/register.model';
import { Repository } from 'typeorm';

class UserRepository {
  private userRepositories: Repository<User>;

  constructor() {
    this.userRepositories = AppDataSource.getRepository(User);
  }

  async Create({ email, first_name, last_name, password }: Register) {
    const user = new User();
    user.email = email;
    user.firstName = first_name;
    user.lastName = last_name;
    user.password = password;
    user.tasks = [];

    await this.userRepositories.save(user);
    console.log('[BANCO DE DADOS] Novo usuário registrado.');

    return {
      password: undefined,
      ...user,
    };
  }

  GetByEmail(email: string) {
    return this.userRepositories.findOne({
      where: { email },
    });
  }
}

export const userRepository = new UserRepository();
