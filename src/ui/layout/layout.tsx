// Root layout (app/layout.js)
import { useRouter } from 'next/router';

import { useDelivery } from '@/contexts';
import { Footer } from '@/ui/layout/footer';
import { Nav } from '@/ui/layout/nav';

// - Applies to all routes
export const RootLayout = ({ children }: any) => {
  const { setComplete } = useDelivery();
  const { pathname } = useRouter();
  function checkRoute() {
    if (pathname === '/') return <Nav />;
    if (pathname === '/client/store/[label]') return <Nav noHoverBorder />;
    if (pathname === '/client/dining/delivery') return <Nav fixed />;
    else return <Nav />;
  }

  setTimeout(() => {
    setComplete(true);
  }, 1000);

  if (pathname === '/auth/login') return children;

  return (
    <div className='h-full'>
      <div id='wrapper' className='relative flex min-w-full flex-col'>
        {checkRoute()}
        {children}
        <Footer />
        {/*<Cookies /> */}
      </div>
    </div>
  );
};
