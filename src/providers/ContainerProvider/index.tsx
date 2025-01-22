import { Footer, Header } from '@/components';
import WebApp from '@twa-dev/sdk';
import RouteContainer from '../RouteContainer';
import { LoadingModal } from '@/modals';

const ContainerProvider = () => {
  // WebApp.initDataUnsafe.user &&
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Header */}
      <Header />

      {/* Pages */}
      <RouteContainer />

      {/* Footer */}
      <Footer />

      {/* Loading Cover */}
      <LoadingModal />

      {/* Loading Spinner */}
      {/* <Loader /> */}
    </div>
  )
}

export default ContainerProvider;