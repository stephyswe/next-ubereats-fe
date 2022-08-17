// Root layout (app/layout.js)
import { useRouter } from 'next/router';

import { Footer } from '@/ui/layout/footer';
import { HomeNav } from '@/ui/layout/nav/home';

// - Applies to all routes
export const RootLayout = ({ children }: any) => {
  const router = useRouter();

  function checkRoute() {
    if (router.pathname === '/') return <HomeNav />;
  }

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
