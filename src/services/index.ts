import axios from "axios";
import WebApp from '@twa-dev/sdk';

export const TIMEOUT = 1000 * 60;

export const API = axios.create({
  baseURL: "https://seapearl-u4lugvc76a-uc.a.run.app",
  headers: { Accept: "application/json", "Content-Type": "application/json" },
  withCredentials: true,
  timeout: TIMEOUT,
  timeoutErrorMessage: "The network condition is bad. Please try again.",
});

// 요청 실패 시 전역 에러 처리 (인터셉터 사용)
let isAlertVisible = false; // 전역 변수로 경고 표시 상태를 추적
API.interceptors.response.use(
  (response) => {
    // 성공적인 응답은 그대로 반환
    return response;
  },
  (error) => {
    // 경고가 이미 표시 중이면 새로운 경고를 표시하지 않음
    if (!isAlertVisible) {
      isAlertVisible = true; // 경고를 표시하기 전 상태 변경

      if (error.code === "ECONNABORTED") {
        // 타임아웃 에러일 경우
        WebApp.showAlert("The network condition is bad. Please try again.", () => isAlertVisible = false);
      } else if (error.message === 'Network Error') {
        WebApp.showAlert(error.code);
        WebApp.showAlert("The network error. Please check the network status", () => isAlertVisible = false);
      } else {
        // 기타 네트워크 또는 서버 에러 처리
        WebApp.showAlert(error.message || "Something went wrong. Please try again.", () => isAlertVisible = false);
      }
    }

    // 에러를 그대로 반환 (필요 시 이 부분을 수정할 수 있음)
    return Promise.reject(error);
  }
);