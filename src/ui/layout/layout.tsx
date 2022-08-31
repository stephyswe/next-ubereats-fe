// Root layout (app/layout.js)
import { useRouter } from 'next/router';
import React from 'react';

import { useDelivery } from '@/contexts';
import { Footer, Nav } from '@/ui/layout';

// - Applies to all routes
export const RootLayout = ({ children }: { children: React.ReactNode }) => {
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
