import { useCallback, useEffect, useRef, useState } from "react";
import styles from "./index.module.css"; // CSS 모듈을 import
import { SvgShell, SvgUSDT, SvgPin } from "@/icons";

export enum RouletteItemType {
  USDT = 'usdt',
  SHELL = 'shell'
}

const trash_item_list = [
  { id: 'asd-01',reward: "10.00$", type: RouletteItemType.USDT, icon: <SvgUSDT size={50} /> },
  { id: 'asd-02',reward: "5.00$", type: RouletteItemType.USDT, icon: <SvgUSDT size={50} /> },
  { id: 'asd-03',reward: "1.00$", type: RouletteItemType.USDT, icon: <SvgUSDT size={50} /> },
  { id: 'asd-04',reward: "0.50$", type: RouletteItemType.USDT, icon: <SvgUSDT size={50} /> },
  { id: 'asd-05',reward: "0.10$", type: RouletteItemType.USDT, icon: <SvgUSDT size={50} /> },
  { id: 'asd-06',reward: "0.05$", type: RouletteItemType.USDT, icon: <SvgUSDT size={50} /> },
  { id: 'asd-07',reward: "0.01$", type: RouletteItemType.USDT, icon: <SvgUSDT size={50} /> },
  { id: 'asd-08',reward: "1,000", type: RouletteItemType.SHELL, icon: <SvgShell size={50} /> },
  { id: 'asd-09',reward: "500", type: RouletteItemType.SHELL, icon: <SvgShell size={50} /> },
  { id: 'asd-10',reward: "100", type: RouletteItemType.SHELL, icon: <SvgShell size={50} /> },
  { id: 'asd-11',reward: "50", type: RouletteItemType.SHELL, icon: <SvgShell size={50} /> },
  { id: 'asd-12',reward: "10", type: RouletteItemType.SHELL, icon: <SvgShell size={50} /> },
]

const RouletteComponent = () => {
  // const initialItems = [...Array(9).keys()].map((i) => `Item ${i + 1}`); // 9개의 아이템
  const [items, setItems] = useState([...trash_item_list, ...trash_item_list]); // 처음부터 2세트 연결
  const [position, setPosition] = useState(0); // 중앙에서 시작
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [translateSize, setTranslateSize] = useState<number>(0);
  const [winning, setWinning] = useState<string>('');

  const winningRef = useRef<string>('asd-05');
  const targetIndexRef = useRef<number>(10);

  const targetIndex = 10; // 멈추고 싶은 아이템의 인덱스
  const itemWidth = 102; // 각 아이템의 너비
  const visibleItems = trash_item_list.length; // 한 번에 화면에 보이는 아이템 개수
  const setNumber = 10; // 바퀴수
  // const borderPx = 2;
  const screenMaxSize = 510;

  // 동적 중앙 계산
  // const calculateStartPosition = () => {
  //   const centerOffset = (window.innerWidth - itemWidth * visibleItems) / 2;
  //   return window.innerWidth <= 510 ? -(itemWidth * targetIndex) + centerOffset : position;
  // };

  useEffect(() => {
    // if(window.innerWidth <= 510) setPosition(calculateStartPosition()); // 초기 중앙 위치 설정
    window.addEventListener("resize", handleResize); // 리사이즈 이벤트 등록
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize); // 이벤트 클린업
    };
  }, []); // 아이템 배열 변경 시도 중앙 재계산

  // 윈도우 크기가 변할 때 중앙 계산
  const handleResize = useCallback(() => {
    // console.log(window.innerWidth);
    if(window.innerWidth <= screenMaxSize){
      // console.log('qweqwe2 - ', translateSize);
      // setPosition(calculateStartPosition()); // 중앙 위치 재계산
      const translateX = (screenMaxSize - window.innerWidth)/2;
      setTranslateSize(translateX);
    } else if(window.innerWidth > screenMaxSize){
      setTranslateSize(0);
    }
  },[]);

  const handleChangeText = () => {
    console.log('winningRef.current - ', winningRef.current);
    winningRef.current = winningRef.current === 'asd-01' ? 'asd-02' : 'asd-01';
  }

  const handleStartSpin = () => {
    if(isTransitioning) return;

    trash_item_list.map((item, index) => {
      if(item.id === winningRef.current) {
        const calc_index = index-2;
        const current_index = calc_index < 0 ? trash_item_list.length + calc_index : calc_index;
        targetIndexRef.current = current_index;
        console.log('item.id - ', item.id);
        console.log('current_index - ', current_index);
      }
    })

    console.log('targetIndexRef.current - ', targetIndexRef.current);

    setIsTransitioning(true);

    // 총 이동 거리 계산: 10바퀴
    const totalDistance = itemWidth * visibleItems * setNumber;
    const borderCalc = ((setNumber * visibleItems) );
    const randomStop = (targetIndexRef.current * itemWidth) ; // 랜덤 멈춤 위치
    const finalPosition = position - (totalDistance + randomStop);

    console.log("총 이동 거리:", totalDistance, "최종 위치:", finalPosition, "보더 계산:", borderCalc);

    // 새로운 아이템 추가
    setItems((prevItems) =>
      Array.from({ length: setNumber })
        .flatMap(() => trash_item_list) // 각 반복에서 `trash_item_list`를 추가
        .concat(prevItems) // 기존 아이템과 합치기
    );

    // setItems((prevItems) =>
    //   Array.from({ length: setNumber }).reduce(
    //     (acc) => [...acc, ...trash_item_list],
    //     prevItems // 기존 아이템을 시작값으로 설정
    //   )
    // );

    // 위치 업데이트
    console.log('position - ', position);
    console.log('randomStop - ', randomStop);
    setPosition(position ? finalPosition - position : finalPosition);

    setTimeout(() => {
      setIsTransitioning(false);

      // 자연스럽게 중간 위치로 이동
      // const normalizedPosition =
      //   ((finalPosition % (itemWidth * visibleItems)) +
      //     itemWidth * visibleItems) %
      //     (itemWidth * visibleItems) -
      //   (900-borderCalc);
      // console.log("정규화된 위치:", normalizedPosition);
      // setPosition(normalizedPosition);
      // setTimeout(() => {
      //   window.requestAnimationFrame(() => {

      setPosition(-randomStop);
      setTimeout(() => {
        setItems([...trash_item_list, ...trash_item_list]);
      }, 150);
      //   })
      // },300)
    }, 5000); // 5초 동안 회전
  };

  // 무한 스크롤 효과를 위한 끝과 끝 연결
  // useEffect(() => {
  //   // console.log('useEff 1 -----');
  //   if (position <= -itemWidth * (items.length - visibleItems)) {
  //     console.log('useEff 1 -----');
  //     setItems((prevItems) => [...prevItems, ...trash_item_list]); // 새로운 아이템 추가
  //     setPosition((prevPosition) => prevPosition + itemWidth * trash_item_list.length); // 포지션 재조정
  //   }
  //   if (position > 0) {
  //     console.log('useEff 2 -----');
  //     setItems((prevItems) => [...trash_item_list, ...prevItems]); // 새로운 아이템 추가
  //     setPosition((prevPosition) => prevPosition - itemWidth * trash_item_list.length); // 포지션 재조정
  //   }
  // }, [position, items]);

  return (
    <div className={styles.roulette}>
      <div className={styles.roulette_innerbox}>
        {/* Roulette Container */} 
        <div className={styles.roulette_container}>
          <SvgPin className={styles.pin_class} />

          <div
            className={styles.roulette_item_box}
            style={{
              transform: `translate3d(${position-translateSize}px, 0, 0)`,
              transition: isTransitioning ? "transform 5s ease-out" : "none",
            }}
          >
            {/* 아이템을 동적으로 렌더링 */}
            {items.map((item, i) => (
              <div key={i} className={`${styles.roulette_item} ${i % 2 === 0 ? styles.roulette_item_light : styles.roulette_item_dark} ${winning === item.id && styles.sroulette_item_active}`}>

                <div className={`${styles.roulette_item_inner} ${i % 2 === 0 ? styles.roulette_item_inner_light : styles.roulette_item_inner_dark} ${winning === item.id && styles.sroulette_item_inner_active}`}>
                  <div className={styles.roulette_item_icon_box}>
                    { item.icon }
                  </div>

                  <div className={styles.roulette_item_text_box}>
                    <div className={styles.roulette_item_text_reward} data-content={item.reward}>{item.reward}</div>

                    <div className={styles.roulette_item_text_type} data-content={item.type.toUpperCase()}>{item.type.toUpperCase()}</div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        <div className={styles.roulette_button_container}>
          <button className={styles.roulette_button_spin} onClick={handleStartSpin}>Free Spin X 3</button>
          <button onClick={handleChangeText}>999 Shell</button>
        </div>
      </div>
    </div>
  );
};

export default RouletteComponent;