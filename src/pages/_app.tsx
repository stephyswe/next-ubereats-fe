import { ApolloProvider } from '@apollo/client';
import { NextPage } from 'next';
import { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';

import '@/styles/globals.scss';
import '@/styles/uber.css';
import '@/styles/uber-fonts.css';
import '@/ui/maps/pickup/map-pickup-elements.css';
import '@/ui/maps/pickup/map-pickup-styles.css';

import client from '@/lib/apollo';

import { isTest } from '@/constant/env';
import { DeliveryProvider } from '@/contexts/delivery';
import { OrderProvider } from '@/contexts/order';
import { RootLayout } from '@/ui/layout';

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
    <ApolloProvider client={client}>
      <DeliveryProvider>
        <OrderProvider>
          <RootLayout>
            <Component {...pageProps} />
          </RootLayout>
        </OrderProvider>
      </DeliveryProvider>
    </ApolloProvider>
  );
}

export default MyApp;
