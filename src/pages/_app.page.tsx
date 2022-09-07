import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { AppWrapper } from 'test-utils';

import '@/styles/globals.scss';
import '@/styles/uber.css';
import '@/styles/uber-fonts.css';
import '@/ui/maps/pickup/map-pickup-elements.css';
import '@/ui/maps/pickup/map-pickup-styles.css';

import { isTest } from '@/constant/env';
import { RootLayout } from '@/layout';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

// add "isLocal" to mock browser environment
if (isTest) {
  require('@/__tests__/mocks/');
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <AppWrapper>
      <RootLayout>
        <Component {...pageProps} />
      </RootLayout>
    </AppWrapper>
  );
}

export default MyApp;
