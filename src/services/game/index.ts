import { API } from "..";
import { PostUserInfoRequest, PostUserInfoResponse } from "./type";
import WebApp from '@twa-dev/sdk';
// import { PostUseHammerRequest, PostUseHammerResponse } from "./types";

const BASE_URL = '/game';

const postUserInfo = async (payload:PostUserInfoRequest): Promise<PostUserInfoResponse> => {
  // WebApp.showAlert(JSON.stringify(payload));
  console.log('asd - ', payload.user.username)
  const res = await API.post<PostUserInfoResponse>(`${BASE_URL}/start`, payload);

  // console.log(res.data);
  // if (res.data?.result === false) {
  //   throw new Error(res.data.error || ErrorType.SERVER_ERROR);
  // }

  return res.data;
};


export { postUserInfo };
