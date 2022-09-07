import { useRouter } from 'next/router';

import { useDelivery } from '@/contexts';
import { Footer, Nav } from '@/layout';
import { ModalList } from '@/ui/modals';

// - Applies to all routes
export const RootLayout = ({ children }: { children: any }) => {
  const { setComplete } = useDelivery();
  const { pathname } = useRouter();
  function checkRoute() {
    if (pathname === '/client/store/[label]') return <Nav noBorder />;
    else if (pathname === '/client/dining/delivery') return <Nav fixed />;
    else return <Nav />;
  }

  setTimeout(() => {
    setComplete(true);
  }, 1000);

  if (pathname === '/auth/login') return children;
  if (pathname === '/details/delivery') return children;

  return (
    <div className='h-full'>
      <div id='wrapper' className='relative flex min-w-full flex-col'>
        {checkRoute()}
        {children}
        <Footer />
        {/*<Cookies /> */}
        <ModalList />
      </div>
    </div>
  );
};
