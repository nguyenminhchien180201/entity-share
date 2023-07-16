import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";
import { BaseModel } from "./base.entity";

@Entity("logs_activity")
@Index([
  "user_id",
  "platform_type",
  "branch_id",
  "timestamp",
  "log_activity_id",
])
@Index(["object_id", "platform_type"])
export class LogActivityEntity extends BaseModel {
  @PrimaryGeneratedColumn("identity", {
    type: "bigint",
  })
  log_activity_id: string;

  @Column({
    type: "bigint",
    nullable: true,
  })
  user_id: string;

  @Column({
    type: "bigint",
    nullable: true,
  })
  restaurant_id: string;

  @Column({
    type: "bigint",
    nullable: true,
  })
  brand_id: string;

  @Column({
    type: "bigint",
    nullable: true,
  })
  branch_id: string;

  @Column({
    type: "text",
    default: "",
    nullable: true,
  })
  full_name: string;

  @Column({
    type: "text",
    default: "",
    nullable: true,
  })
  avatar: string;

  @Column({
    type: "bigint",
    default: 0,
    nullable: true,
  })
  object_id: string;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  log_type: number;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  is_viewed: number;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  action_type: number;

  @Column({
    type: "text",
    default: "",
    nullable: true,
  })
  action_detail: string;

  @Column({
    type: "text",
    default: "",
    nullable: true,
  })
  json_data_before: string;

  @Column({
    type: "text",
    default: "",
    nullable: true,
  })
  json_data_after: string;

  @Column({
    type: "text",
    default: "",
    nullable: true,
  })
  key_search: string;

  @Column({
    type: "text",
    default: "",
    nullable: true,
  })
  detail: string;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  platform_type: number;
}
