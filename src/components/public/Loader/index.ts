import styles from './index.module.css'; // CSS 모듈 import

// 로더 컨테이너 생성
const loaderContainer = document.createElement('div');
loaderContainer.setAttribute('id', 'Loader_container');
loaderContainer.className = styles.loader_container;

/**
 * 로더 상태 업데이트 함수
 * @param isVisible 로더를 보여줄지 여부
 */
const Loader = (isVisible: boolean) => {
  if (isVisible) {
    // 로더 추가
    if (!document.body.contains(loaderContainer)) {
      document.body.appendChild(loaderContainer);
    }

    // 로더 내부에 스피너 추가
    loaderContainer.innerHTML = `<div class="${styles.loader}"></div>`;
  } else {
    // 로더 제거
    if (document.body.contains(loaderContainer)) {
      document.body.removeChild(loaderContainer);
    }
  }
};

export default Loader;