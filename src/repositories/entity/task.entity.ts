import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from 'typeorm';

import { User } from "./user.entity";

@Entity()
export class Task {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  status: 'PENDING' | 'IN-PROGRESS' | 'COMPLETED';

  @Column()
  expire_at: Date;

  @ManyToOne(() => User, (user) => user.tasks, { onDelete: 'CASCADE' })
  user: User;
}
