import { Column, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { BaseModel } from "./base.entity";

@Entity("user")
export class UserEntity extends BaseModel {
  @PrimaryColumn({
    type: "bigint",
  })
  user_id: string;

  @PrimaryColumn({
    type: "smallint",
  })
  type: number;

  @Column({
    type: "varchar",
    default: "",
  })
  user_name: string;

  @Column({
    type: "text",
    default: "",
  })
  avatar: string;

  @Column({
    type: "varchar",
    default: "",
  })
  full_name: string;

  @Column({
    type: "timestamp",
    nullable: true,
  })
  birthday: Date;

  @Column({
    type: "varchar",
    default: "",
  })
  email: string;

  @Column({
    type: "smallint",
    default: 0,
  })
  gender: number;

  @Column({
    type: "varchar",
    default: "",
  })
  phone: string;

  @Column({
    type: "text",
    default: "",
    nullable: true,
  })
  address: string;

  @Column({
    type: "smallint",
    default: 1,
  })
  status: number;

  @UpdateDateColumn({
    type: "timestamp",
    nullable: true,
  })
  time_seen_notify: Date;
}
