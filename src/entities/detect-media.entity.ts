import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { BaseModel } from './base.entity';

@Entity('detect_media')
export class DetectMediaEntity extends BaseModel {
  @PrimaryGeneratedColumn('identity', {
    type: 'bigint',
  })
  detect_media_id: string;

  @Column({
    type: 'bigint',
    default: 0,
    nullable: true,
  })
  object_id: string;

  @Column({
    type: 'int',
    default: 0,
    nullable: true,
  })
  type: number;

  @Column({
    type: 'text',
    default: '',
    nullable: true,
  })
  medias: string;

  @Column({
    type: 'bigint',
    default: [],
    nullable: true,
    array: true,
  })
  media_ids: string[];

  @Column({
    type: 'int',
    default: 0,
    nullable: true,
  })
  status: number;
}
