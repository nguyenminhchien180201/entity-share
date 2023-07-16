import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BaseModel } from './base.entity';
import { BrandEntity } from './brand.entity';
import { RestaurantEntity } from './restaurant.entity';

@Entity('branch')
export class BranchEntity extends BaseModel {
  @PrimaryGeneratedColumn('identity', {
    type: 'bigint',
  })
  branch_id: string;

  @ManyToOne(() => RestaurantEntity, (restaurant) => restaurant.restaurant_id, {
    nullable: true
  })
  @JoinColumn({
    name: 'restaurant_id',
  })
  restaurant: RestaurantEntity;

  @Column({
    type: 'bigint',
    nullable: true,
  })
  restaurant_id_virtual: string;

  @ManyToOne(() => BrandEntity, (brand) => brand.brand_id, {
    nullable: true
  })
  @JoinColumn({
    name: 'brand_id',
  })
  brand: BrandEntity;

  @Column({
    type: 'bigint',
    nullable: true,
  })
  brand_id_virtual: string;

  @Column({
    type: 'text',
    default: '',
  })
  name: string;

  @Column({
    type: 'text',
    default: '',
  })
  address: string;

  @Column({
    type: 'int',
  })
  status: number;

  @Column({
    type: 'float',
    default: 0,
  })
  average_rating: number;

  @Column({
    type: 'float',
    default: 0,
  })
  food_rating: number;

  @Column({
    type: 'float',
    default: 0,
  })
  price_rating: number;

  @Column({
    type: 'float',
    default: 0,
  })
  spatial_rating: number;

  @Column({
    type: 'float',
    default: 0,
  })
  hygiene_rating: number;

  @Column({
    type: 'float',
    default: 0,
  })
  service_rating: number;

  @Column({
    type: 'int',
    default: 0,
  })
  no_of_review: number;

  @Column({
    type: 'text',
    default: '',
  })
  logo: string;

  @Column({
    type: 'text',
    default: '',
  })
  banner: string;

  @Column({
    type: 'text',
    default: '',
  })
  lat: string;

  @Column({
    type: 'text',
    default: '',
  })
  lng: string;
}
