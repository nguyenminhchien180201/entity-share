import {
  Column,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import { BaseModel } from "./base.entity";
import { UserEntity } from "./user.entity";

@Entity("auth")
export class AuthEntity extends BaseModel {
  @PrimaryGeneratedColumn("identity", {
    type: "bigint",
  })
  user_auth_id: string;

  @Column({
    type: "text",
    unique: true,
  })
  access_token: string;

  @OneToOne(() => UserEntity)
  @JoinColumn([
    {
      name: "user_id",
      referencedColumnName: "user_id",
    },
    {
      name: "type",
      referencedColumnName: "type",
    },
  ])
  user: UserEntity;
}
