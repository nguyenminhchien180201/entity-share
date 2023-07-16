import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { BaseModel } from './base.entity';
import { RestaurantEntity } from './restaurant.entity';

@Entity('card-tag')
export class BrandEntity extends BaseModel {
    @PrimaryGeneratedColumn('identity', {
        type: 'bigint',
    })
    card_tag_id: string;

    @Column({
        type: 'text',
    })
    name: string;

    @Column({
        type: 'text',
    })
    color_hex_code: string;

    @Column({
        type: 'int',
    })
    type: number;

    @Column({
        type: 'int',
    })
    is_deleted: number;

}
