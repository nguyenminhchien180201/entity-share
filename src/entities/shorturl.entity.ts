import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { BaseModel } from "./base.entity";

@Entity("short_url")
export class ShortUrlEntity extends BaseModel {
  @PrimaryGeneratedColumn("identity", {
    type: "bigint",
  })
  short_url_id: string;

  @Column({
    type: "bigint",
    default: 0,
  })
  media_id: string;

  @Column({
    type: "bigint",
  })
  user_id: string;

  @Column({
    type: "smallint",
    default: 0,
  })
  user_type: number;

  @Column({
    type: "text",
    default: "",
  })
  short_url: string;

  @Column({
    type: "text",
    default: "",
  })
  long_url: string;

  @Column({
    type: "int",
    default: 3,
  })
  type: number; //0 - image, 1 - video, 2 - audio, 3 - file

  @Column({
    type: "text",
    default: "",
  })
  name: string;

  @Column({
    type: "int",
    default: 0,
  })
  format: number; //0 - origin, 1- medium, 2 - thumb

  @Column({
    type: "int",
    default: 0,
  })
  size: number;

  @Column({
    type: "int",
    default: 0,
  })
  width: number;

  @Column({
    type: "int",
    default: 0,
  })
  height: number;

  @Column({
    type: "int",
    default: 0,
  })
  no_of_clicks: number;

  @Column({
    type: "int",
    default: 0,
  })
  is_upload: number; // 0 - trống, 1 - có file
}
