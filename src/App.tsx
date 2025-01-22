import { useEffect } from 'react'
import { BrowserRouter } from 'react-router'
import { ContainerProvider } from './providers';
import { useModalStore } from './store';
// import WebApp from '@twa-dev/sdk';

const App = () => {
  // let [count, setCount] = useState(2);
  const { setLoadingModal } = useModalStore();

  useEffect(() => {
    setLoadingModal(true);
  },[])
  
  // count = 1;

  useEffect(() => { 

    // setCount(3);
    // console.log('count 2 - ', count);
    // WebApp이 준비되었는지 확인
    // WebApp.ready();
    // document.getElementsByTagName("html")[0].classList.remove("light-mode");
    // document.getElementsByTagName("html")[0].classList.add("light-mode");
    // 유저 정보 가져오기
    // const userData = WebApp.initDataUnsafe;
    // console.log(userData);
    // WebApp.onEvent('');
    // const userData_e = WebApp.initData.length;
    // console.log(JSON.stringify(userData));
    // WebApp.showAlert(JSON.stringify(userData.)||'X');
    // WebApp.openLink('https://t.me/wallet');
    // testtt();
  }, []);

  // useEffect(() => {
  //   console.log('count 4 - ', count);
  // },[count])
  // console.log('count 3 - ', count);

  return (
    <BrowserRouter>
      <ContainerProvider />
    </BrowserRouter>
  )
}

export default App