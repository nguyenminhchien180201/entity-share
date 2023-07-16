import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, ManyToOne } from 'typeorm';
import { BaseModel } from './base.entity';
import { UserEntity } from './user.entity';

@Entity('tracker')
export class TrackerEntity extends BaseModel {
  @PrimaryGeneratedColumn('identity', {
    type: 'bigint',
  })
  tracker_id: string;

  @Column({
    type: 'int',
    default: 0,
    nullable: true,
  })
  user_id: number;

  @Column({
    type: 'int',
    default: 0,
    nullable: true,
  })
  type: number;

  @Column({
    type: 'text',
    nullable: true,
    default: ''
  })
  router: string;

  @Column({
    type: 'int',
    nullable: true,
    default: 0
  })
  method: number;

  @Column({
    type: 'text',
    nullable: true,
    default: ''
  })
  message: string;

  @Column({
    type: 'text',
    nullable: true,
    default: ''
  })
  body: string;

  @Column({
    type: 'int',
    default: 0,
    nullable: true,
  })
  status: number;

  @Column({
    type: 'text',
    default: '',
    nullable: true,
  })
  content: string;
}
