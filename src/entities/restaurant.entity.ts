import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseModel } from './base.entity';

@Entity('restaurant')
export class RestaurantEntity extends BaseModel {
  @PrimaryGeneratedColumn('identity', {
    type: 'bigint',
  })
  restaurant_id: string;

  @Column({
    type: 'text',
    default: '',
  })
  name: string;

  @Column({
    type: 'text',
    default: '',
  })
  phone: string;

  @Column({
    type: 'text',
    default: '',
  })
  logo: string;

  @Column({
    type: 'text',
    default: '',
  })
  cover: string;

  @Column({
    type: 'text',
    default: '',
  })
  address: string;

  @Column({
    type: 'int',
    default: 1,
  })
  status: number;
}
