// Root layout (app/layout.js)
import { useRouter } from 'next/router';

import { useDelivery } from '@/contexts';
import { Footer } from '@/ui/layout/footer';
import { CityNav } from '@/ui/layout/nav/city';
import { HomeNav } from '@/ui/layout/nav/home';

// - Applies to all routes
export const RootLayout = ({ children }: any) => {
  const { setComplete } = useDelivery();
  const { pathname } = useRouter();

  function checkRoute() {
    if (pathname === '/') return <HomeNav />;
    if (pathname === '/client/store/[label]') return <CityNav noHoverBorder />;
    if (pathname === '/auth/login') return children;
    else return <CityNav />;
  }

  setTimeout(() => {
    setComplete(true);
  }, 1000);

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
