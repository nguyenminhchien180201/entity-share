import { Column, Entity, Index, PrimaryGeneratedColumn } from "typeorm";
import { BaseModel } from "./base.entity";

@Entity("logs_notify")
@Index(["user_id", "type", "log_notify_id"])
export class LogNotifyEntity extends BaseModel {
  @PrimaryGeneratedColumn("identity", {
    type: "bigint",
  })
  log_notify_id: string;

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
  avatar: string;

  @Column({
    type: "text",
    default: "",
    nullable: true,
  })
  image_url: string;

  @Column({
    type: "text",
    default: "",
    nullable: true,
  })
  title: string;

  @Column({
    type: "text",
    default: "",
    nullable: true,
  })
  content: string;

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
  object_type: number;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  notification_type: number;

  @Column({
    type: "text",
    default: "",
    nullable: true,
  })
  json_addition_data: string;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  type: number;

  @Column({
    type: "text",
    default: "",
    nullable: true,
  })
  landing_page_url: string;

  @Column({
    type: "int",
    default: 0,
    nullable: true,
  })
  is_viewed: number;

  @Column({
    type: "text",
    default: "",
    nullable: true,
  })
  firebase_key: string;
}
