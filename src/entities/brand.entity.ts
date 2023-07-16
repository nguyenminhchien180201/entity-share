import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BaseModel } from './base.entity';
import { RestaurantEntity } from './restaurant.entity';

@Entity('brand')
export class BrandEntity extends BaseModel {
  @PrimaryGeneratedColumn('identity', {
    type: 'bigint',
  })
  brand_id: string;

  @ManyToOne(() => RestaurantEntity, (restaurant) => restaurant.restaurant_id)
  @JoinColumn({
    name: 'restaurant_id',
  })
  restaurant: RestaurantEntity;

  @Column({
    type: 'bigint',
    nullable: true,
  })
  restaurant_id_virtual: string;

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
    type: 'int',
    default: 1,
  })
  status: number;
}
