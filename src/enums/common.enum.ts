export class RedisKey {
  USER_CONNECTION: string;
  AUTH: string;
  CHECK_AUTH_REDIS_GROUP: string;
  NO_OF_NOT_SEEN: string;
  NOTIFICATION_KEY: string;
  CONVERSATION: string;

  constructor(env: string) {
    this.USER_CONNECTION = env + '_user_connection'; // Danh sách user đang online
    this.AUTH = env + '_auth'; // Lưu token, user_id và type
    this.CHECK_AUTH_REDIS_GROUP = env + '_check_auth_redis_group'; // Trạng thái sync dữ liệu từ Auth từ DB lên Redis, tránh gọi sync dữ liệu từ db lên Redis nhiều lần làm duplicate
    this.NO_OF_NOT_SEEN = env + '_no_of_not_seen'; // Số lượng tin nhắn chưa đọc của user
    this.NOTIFICATION_KEY = env + '_key_notify';
    this.CONVERSATION = env + '_conversation';
  }
}

export enum CONNECT_DB_NAME {
  ALOLINE = 'aloline',
  TECHRES = 'techres',
  SHARED = 'shared',
}

export enum TYPE_PLATFORM {
  ALOLINE = 0,
  SUPPLIER = 1,
  TMS = 2,
  ADMIN = 3,
  SALER = 4,
}
