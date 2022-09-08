import { useRouter } from 'next/router';

import { useDelivery } from '@/contexts';
import { Footer, Nav } from '@/layout';
import { ModalList } from '@/ui/modals';

// - Applies to all routes
export const RootLayout = ({ children }: { children: any }) => {
  const { setComplete } = useDelivery();
  const { pathname } = useRouter();
  function checkRoute() {
    // handle home, city, region routes
    if (pathname === '/') return <Nav heroInput />;
    if (pathname === '/client/city/[label]') return <Nav heroInput />;
    if (pathname === '/client/store/[label]') return <Nav noBorder />;
    else return <Nav />;
  }

  setTimeout(() => {
    setComplete(true);
  }, 1000);

  // handle content
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
