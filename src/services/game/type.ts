
type PostUserInfoRequest = {
  hash: string;
  auth_date: number;
  user: TUserInfo;
}

type TUserInfo = {
  id: number;
  first_name: string;
  last_name: string;
  username: string;
}

type PostUserInfoResponse = {
  user: UserInfo;
  asset: AssetInfo;
  mining: MiningInfo;
}

type UserInfo = {
  id: string;
  telegramUid: number;
  createdAt: string;
  updatedAt: string;
}

type AssetInfo = {
  id: string;
  shell: number;
  pearl: number;
  usdt: number;
}

type MiningInfo = {
  id: string;
  active: number;
  now_storage: number;
}

export type {
  PostUserInfoResponse,
  PostUserInfoRequest,
  TUserInfo,
  UserInfo,
  AssetInfo,
  MiningInfo
}